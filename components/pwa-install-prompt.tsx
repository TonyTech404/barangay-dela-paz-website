"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { X, Wifi, WifiOff, Download } from "lucide-react"

interface BeforeInstallPromptEvent extends Event {
  readonly platforms: string[]
  readonly userChoice: Promise<{
    outcome: "accepted" | "dismissed"
    platform: string
  }>
  prompt(): Promise<void>
}

export default function PWAInstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null)
  const [showPrompt, setShowPrompt] = useState(false)
  const [isInstalled, setIsInstalled] = useState(false)

  useEffect(() => {
    // Check if already installed
    if (window.matchMedia("(display-mode: standalone)").matches) {
      setIsInstalled(true)
      return
    }

    // Check if user has made a decision before
    const userDecision = localStorage.getItem("pwa-install-decision")
    if (userDecision) {
      const { decision, timestamp } = JSON.parse(userDecision)
      const now = Date.now()

      // If user clicked "Don't Ask Again", respect that indefinitely
      if (decision === "never") {
        return
      }

      // If user clicked "Not Now", don't show for 7 days
      if (decision === "later" && now - timestamp < 7 * 24 * 60 * 60 * 1000) {
        return
      }
    }

    // Check if user has been on the site long enough
    const visitStartTime = sessionStorage.getItem("visit-start-time")
    if (!visitStartTime) {
      sessionStorage.setItem("visit-start-time", Date.now().toString())
      return // Don't show on first page load
    }

    // Only show after user has been on site for at least 60 seconds
    const timeOnSite = Date.now() - parseInt(visitStartTime)
    if (timeOnSite < 60000) {
      return
    }

    // Listen for the beforeinstallprompt event
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault()
      setDeferredPrompt(e as BeforeInstallPromptEvent)
      
      // Show prompt after a delay
      setTimeout(() => {
        setShowPrompt(true)
      }, 1000)
    }

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt)

    return () => {
      window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt)
    }
  }, [])

  const handleInstall = async () => {
    if (!deferredPrompt) return

    deferredPrompt.prompt()
    const { outcome } = await deferredPrompt.userChoice

    if (outcome === "accepted") {
      setIsInstalled(true)
    }

    setDeferredPrompt(null)
    setShowPrompt(false)
  }

  const handleDismiss = () => {
    setShowPrompt(false)
    localStorage.setItem(
      "pwa-install-decision",
      JSON.stringify({
        decision: "never",
        timestamp: Date.now()
      })
    )
  }

  const handleNotNow = () => {
    setShowPrompt(false)
    localStorage.setItem(
      "pwa-install-decision",
      JSON.stringify({
        decision: "later",
        timestamp: Date.now()
      })
    )
  }

  if (!showPrompt || isInstalled) {
    return null
  }

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
        {/* Modal */}
        <div className="bg-white rounded-lg shadow-xl max-w-md w-full mx-4 overflow-hidden">
          {/* Header */}
          <div className="bg-[#0E58D8] text-white p-4 relative">
            <button
              onClick={handleDismiss}
              className="absolute top-2 right-2 p-1 hover:bg-white/20 rounded-full transition-colors"
              aria-label="Close"
            >
              <X size={20} />
            </button>
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 bg-white/20 rounded-full flex items-center justify-center p-2">
                <Image src="/barangay-logo.png" alt="Barangay Dela Paz Logo" fill className="object-contain p-1" />
              </div>
              <div>
                <h3 className="text-lg font-bold font-poppins">Install Barangay Dela Paz</h3>
                <p className="text-sm opacity-90">Get faster access to our services</p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            <div className="mb-6">
              <h4 className="text-lg font-semibold mb-3 text-[#333333] font-poppins">
                Access Important Information Anytime
              </h4>
              <p className="text-[#666666] mb-4">
                Install our app to access emergency contacts and barangay services even when you're offline or have poor
                internet connection.
              </p>
            </div>

            {/* Benefits */}
            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-[#E8F0FE] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <WifiOff size={16} className="text-[#0E58D8]" />
                </div>
                <div>
                  <h5 className="font-semibold text-[#333333]">Works Offline</h5>
                  <p className="text-sm text-[#666666]">
                    Emergency contacts and important info available without internet
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-[#E8F0FE] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Download size={16} className="text-[#0E58D8]" />
                </div>
                <div>
                  <h5 className="font-semibold text-[#333333]">Quick Access</h5>
                  <p className="text-sm text-[#666666]">One tap from your home screen - no need to open browser</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-[#E8F0FE] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Wifi size={16} className="text-[#0E58D8]" />
                </div>
                <div>
                  <h5 className="font-semibold text-[#333333]">Stay Updated</h5>
                  <p className="text-sm text-[#666666]">
                    Get notifications for emergencies and important announcements
                  </p>
                </div>
              </div>
            </div>

            {/* Size Info */}
            <div className="bg-[#F8F9FA] p-3 rounded-lg mb-6">
              <p className="text-sm text-[#666666] text-center">
                <span className="font-medium">Small download:</span> Only 2-3MB • Works on all devices • No app store
                needed
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col gap-3">
              <button
                onClick={handleInstall}
                className="w-full bg-[#0E58D8] hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-md transition-colors flex items-center justify-center gap-2"
              >
                <Download size={18} />
                Install App
              </button>

              <div className="flex gap-2">
                <button
                  onClick={handleNotNow}
                  className="flex-1 bg-gray-100 hover:bg-gray-200 text-[#666666] font-medium py-2 px-4 rounded-md transition-colors"
                >
                  Not Now
                </button>
                <button
                  onClick={handleDismiss}
                  className="flex-1 text-[#666666] hover:text-[#333333] font-medium py-2 px-4 rounded-md transition-colors"
                >
                  Don't Ask Again
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
