"use client"

import { useState, useEffect } from "react"
import { Download } from "lucide-react"

interface BeforeInstallPromptEvent extends Event {
  readonly platforms: string[]
  readonly userChoice: Promise<{
    outcome: "accepted" | "dismissed"
    platform: string
  }>
  prompt(): Promise<void>
}

const PWA_INSTALL_EVENT = "pwa-install-available"

export default function InstallPWAButton() {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null)
  const [isInstalled, setIsInstalled] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [isIOS, setIsIOS] = useState(false)

  useEffect(() => {
    // Check if mobile device
    const checkMobile = () => {
      const ua = navigator.userAgent || navigator.vendor || (window as any).opera
      const isMobileDevice = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(ua.toLowerCase())
      const isIOSDevice = /iphone|ipad|ipod/i.test(ua.toLowerCase())
      
      setIsMobile(isMobileDevice)
      setIsIOS(isIOSDevice)
      
      console.log("Device detection:", { isMobileDevice, isIOSDevice })
    }

    // Check if already installed
    const checkInstalled = () => {
      const isStandalone = window.matchMedia("(display-mode: standalone)").matches || 
                          (window.navigator as any).standalone || 
                          document.referrer.includes("android-app://")
      
      console.log("PWA Status:", { 
        isStandalone,
        displayMode: window.matchMedia("(display-mode: standalone)").matches,
        isIOS: (window.navigator as any).standalone,
        isAndroid: document.referrer.includes("android-app://")
      })
      
      return isStandalone
    }

    checkMobile()
    
    if (checkInstalled()) {
      setIsInstalled(true)
      return
    }

    const handleBeforeInstallPrompt = (e: Event) => {
      console.log("PWA install prompt captured")
      e.preventDefault()
      setDeferredPrompt(e as BeforeInstallPromptEvent)
    }

    const handlePWAInstallEvent = (e: Event) => {
      console.log("PWA install event received")
      const customEvent = e as CustomEvent<BeforeInstallPromptEvent>
      setDeferredPrompt(customEvent.detail)
    }

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt)
    window.addEventListener(PWA_INSTALL_EVENT, handlePWAInstallEvent)

    // Log initial state
    console.log("Initial PWA button state:", { isInstalled, hasDeferredPrompt: !!deferredPrompt })

    return () => {
      window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt)
      window.removeEventListener(PWA_INSTALL_EVENT, handlePWAInstallEvent)
    }
  }, [])

  const handleInstall = async () => {
    console.log("Install button clicked", { hasDeferredPrompt: !!deferredPrompt, isMobile, isIOS })
    
    if (isIOS) {
      // Show iOS-specific instructions
      alert("To install this app on iOS:\n\n1. Tap the Share button in Safari\n2. Scroll down and tap 'Add to Home Screen'\n3. Tap 'Add' to confirm")
      return
    }
    
    if (!deferredPrompt) {
      if (isMobile) {
        // Show Android-specific instructions if no prompt is available
        alert("To install this app:\n\n1. Open in Chrome browser if you haven't already\n2. Tap the menu button (⋮)\n3. Tap 'Install app' or 'Add to Home screen'")
      }
      console.log("No deferred prompt available")
      return
    }

    try {
      await deferredPrompt.prompt()
      const { outcome } = await deferredPrompt.userChoice
      console.log("Installation outcome:", outcome)

      if (outcome === "accepted") {
        setIsInstalled(true)
        localStorage.removeItem("pwa-install-decision")
        localStorage.removeItem("page-views")
      }

      setDeferredPrompt(null)
    } catch (error) {
      console.error("Error during PWA installation:", error)
    }
  }

  // For debugging - log when component renders
  console.log("PWA button rendering:", { isInstalled, hasDeferredPrompt: !!deferredPrompt, isMobile, isIOS })

  if (isInstalled) {
    console.log("PWA is already installed")
    return null
  }

  return (
    <button
      onClick={handleInstall}
      className="flex items-center gap-2 bg-[#0E58D8] hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors font-medium shadow-sm md:w-auto w-full"
    >
      <Download size={16} />
      <span className="whitespace-nowrap">Install App</span>
    </button>
  )
} 