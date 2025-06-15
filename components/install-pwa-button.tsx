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
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Check if already installed
    if (window.matchMedia("(display-mode: standalone)").matches) {
      setIsInstalled(true)
      return
    }

    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault()
      setDeferredPrompt(e as BeforeInstallPromptEvent)
      setIsVisible(true)
    }

    const handlePWAInstallEvent = (e: Event) => {
      const customEvent = e as CustomEvent<BeforeInstallPromptEvent>
      setDeferredPrompt(customEvent.detail)
      setIsVisible(true)
    }

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt)
    window.addEventListener(PWA_INSTALL_EVENT, handlePWAInstallEvent)

    return () => {
      window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt)
      window.removeEventListener(PWA_INSTALL_EVENT, handlePWAInstallEvent)
    }
  }, [])

  const handleInstall = async () => {
    if (!deferredPrompt) return

    deferredPrompt.prompt()
    const { outcome } = await deferredPrompt.userChoice

    if (outcome === "accepted") {
      setIsInstalled(true)
      // Clear any stored PWA preferences
      localStorage.removeItem("pwa-install-decision")
      localStorage.removeItem("page-views")
    }

    setDeferredPrompt(null)
    setIsVisible(false)
  }

  if (isInstalled || !isVisible) {
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