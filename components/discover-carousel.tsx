"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, MapPin, Clock, Camera, History, X } from "lucide-react"

interface Place {
  id: number
  name: string
  image: string
  shortDescription: string
  fullDescription: string
  history: string
  howToGetThere: string
  whatToSee: string[]
  openingHours: string
  entryFee: string
  bestTimeToVisit: string
  coordinates?: string
}

const places: Place[] = [
  {
    id: 1,
    name: "Heritage Plaza",
    image: "/placeholder.svg?height=400&width=600",
    shortDescription: "Historic town center with colonial architecture",
    fullDescription:
      "The Heritage Plaza serves as the heart of Barangay Dela Paz, featuring beautiful colonial-era architecture and serving as a gathering place for community events and celebrations.",
    history:
      "Built in 1898 during the Spanish colonial period, the Heritage Plaza was originally designed as the town's main marketplace. It has witnessed numerous historical events including the Philippine Revolution and has been carefully preserved to maintain its original charm.",
    howToGetThere:
      "Located at the center of Barangay Dela Paz, accessible via Dela Paz Street. Jeepneys and tricycles regularly pass by the area. Walking distance from the Barangay Hall.",
    whatToSee: [
      "Colonial-era fountain and monuments",
      "Traditional Filipino architecture",
      "Local vendor stalls",
      "Community bulletin boards",
      "Seasonal flower gardens",
    ],
    openingHours: "Open 24/7",
    entryFee: "Free",
    bestTimeToVisit: "Early morning (6-8 AM) or late afternoon (4-6 PM)",
    coordinates: "14.5995° N, 120.9842° E",
  },
  {
    id: 2,
    name: "Dela Paz Community Park",
    image: "/placeholder.svg?height=400&width=600",
    shortDescription: "Family-friendly park with playground and exercise areas",
    fullDescription:
      "A modern community park that serves as the primary recreational area for families in Barangay Dela Paz. The park features well-maintained facilities for both children and adults.",
    history:
      "Established in 2010 as part of the barangay's community development program. The park was built on what used to be an empty lot and has since become a central gathering place for residents.",
    howToGetThere:
      "Take the main road along Dela Paz Street and turn right at the Community Center. The park is a 5-minute walk from the Barangay Hall. Tricycles can drop you off directly at the entrance.",
    whatToSee: [
      "Modern playground equipment",
      "Outdoor exercise stations",
      "Basketball half-court",
      "Picnic areas with tables",
      "Walking/jogging path",
      "Small amphitheater for events",
    ],
    openingHours: "5:00 AM - 9:00 PM daily",
    entryFee: "Free",
    bestTimeToVisit: "Early morning for exercise, late afternoon for family activities",
    coordinates: "14.6001° N, 120.9838° E",
  },
  {
    id: 3,
    name: "Old Dela Paz Church",
    image: "/placeholder.svg?height=400&width=600",
    shortDescription: "Historic church dating back to the 1800s",
    fullDescription:
      "A beautiful stone church that has served the spiritual needs of the community for over a century. The church showcases traditional Filipino-Spanish religious architecture.",
    history:
      "Construction began in 1845 and was completed in 1852. The church survived World War II and several earthquakes, making it one of the oldest standing structures in the area. It was declared a local heritage site in 1995.",
    howToGetThere:
      "Located on Church Street, about 10 minutes walk from the Heritage Plaza. Accessible by tricycle or jeepney. Look for the tall bell tower which is visible from most parts of the barangay.",
    whatToSee: [
      "Original stone facade and bell tower",
      "Antique wooden pews and altar",
      "Stained glass windows",
      "Religious artifacts and statues",
      "Historic cemetery grounds",
      "Traditional Filipino santos collection",
    ],
    openingHours: "6:00 AM - 6:00 PM (Mass schedules vary)",
    entryFee: "Free (donations welcome)",
    bestTimeToVisit: "Early morning or during sunset for best lighting",
    coordinates: "14.5988° N, 120.9851° E",
  },
  {
    id: 4,
    name: "Riverside Walking Trail",
    image: "/placeholder.svg?height=400&width=600",
    shortDescription: "Scenic trail along the Dela Paz River",
    fullDescription:
      "A peaceful walking trail that follows the natural curve of the Dela Paz River, offering residents a place to exercise while enjoying nature within the urban setting.",
    history:
      "The trail was developed in 2018 as part of the river rehabilitation project. What was once a neglected waterway has been transformed into a community asset that promotes both environmental awareness and healthy living.",
    howToGetThere:
      "Enter through the gate near the Community Health Center on River Road. The trail can also be accessed from three other entry points along the river. Parking is available at the main entrance.",
    whatToSee: [
      "Native trees and plants",
      "River wildlife and birds",
      "Exercise stations along the path",
      "Bamboo rest areas",
      "Community garden plots",
      "Small bridges and viewing decks",
    ],
    openingHours: "5:00 AM - 7:00 PM daily",
    entryFee: "Free",
    bestTimeToVisit: "Early morning for bird watching, late afternoon for cooler weather",
    coordinates: "14.6008° N, 120.9829° E",
  },
  {
    id: 5,
    name: "Dela Paz Sports Complex",
    image: "/placeholder.svg?height=400&width=600",
    shortDescription: "Multi-purpose sports facility for the community",
    fullDescription:
      "A comprehensive sports facility that hosts various athletic activities and community events. The complex serves as the venue for inter-barangay competitions and local tournaments.",
    history:
      "Built in 2015 with funding from the local government and community contributions. The complex replaced an old basketball court and has since become a source of pride for the barangay's youth programs.",
    howToGetThere:
      "Located on Sports Avenue, accessible by jeepney or tricycle. About 15 minutes walk from the Barangay Hall. Free parking is available for visitors.",
    whatToSee: [
      "Full-size basketball court",
      "Volleyball court",
      "Covered gymnasium",
      "Outdoor fitness equipment",
      "Spectator bleachers",
      "Trophy display area",
    ],
    openingHours: "6:00 AM - 10:00 PM daily",
    entryFee: "Free for residents (small fee for non-residents)",
    bestTimeToVisit: "Evening hours when local teams practice",
    coordinates: "14.5982° N, 120.9865° E",
  },
  {
    id: 6,
    name: "Artisan's Corner",
    image: "/placeholder.svg?height=400&width=600",
    shortDescription: "Local craft center showcasing traditional Filipino arts",
    fullDescription:
      "A cultural center dedicated to preserving and promoting traditional Filipino crafts and arts. Local artisans demonstrate their skills and sell handmade products to visitors.",
    history:
      "Established in 2020 as part of the cultural preservation initiative. The center was created to provide a venue for local artisans to showcase their work and pass on traditional skills to younger generations.",
    howToGetThere:
      "Located in the old market building on Heritage Street. Take a tricycle to the Heritage Plaza and walk 5 minutes towards the old market area. Look for the colorful banners and displays.",
    whatToSee: [
      "Live craft demonstrations",
      "Traditional weaving displays",
      "Handmade pottery and ceramics",
      "Local paintings and artwork",
      "Souvenir shop with authentic items",
      "Workshop areas for visitors",
    ],
    openingHours: "9:00 AM - 5:00 PM (Closed Mondays)",
    entryFee: "Free entry (workshop fees apply)",
    bestTimeToVisit: "Weekday afternoons when artisans are most active",
    coordinates: "14.5992° N, 120.9847° E",
  },
]

export default function DiscoverCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedPlace, setSelectedPlace] = useState<Place | null>(null)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying || selectedPlace) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % places.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, selectedPlace])

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % places.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + places.length) % places.length)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  const openModal = (place: Place, e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setSelectedPlace(place)
    setIsAutoPlaying(false)
    document.body.style.overflow = "hidden"
  }

  const closeModal = () => {
    setSelectedPlace(null)
    setIsAutoPlaying(true)
    document.body.style.overflow = "unset"
  }

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return

    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > 50
    const isRightSwipe = distance < -50

    if (isLeftSwipe) {
      nextSlide()
    }
    if (isRightSwipe) {
      prevSlide()
    }
  }

  // Calculate the transform for the sliding effect
  const getTransform = () => {
    if (typeof window === "undefined") return "translateX(0%)"

    const isMobile = window.innerWidth < 640
    const isTablet = window.innerWidth < 1024

    let cardsToShow = 3 // desktop default
    if (isMobile) cardsToShow = 1
    else if (isTablet) cardsToShow = 2

    const cardWidth = 100 / cardsToShow
    return `translateX(-${currentIndex * cardWidth}%)`
  }

  return (
    <div className="relative">
      {/* Carousel Container */}
      <div
        className="relative overflow-hidden rounded-lg"
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Sliding Container */}
        <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: getTransform() }}>
          {places.map((place, index) => (
            <div key={place.id} className="w-full sm:w-1/2 lg:w-1/3 flex-shrink-0 px-2">
              <div className="relative h-80 sm:h-96 rounded-lg overflow-hidden group">
                <Image
                  src={place.image || "/placeholder.svg"}
                  alt={place.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <h3 className="text-lg sm:text-xl font-bold mb-2 font-poppins line-clamp-1">{place.name}</h3>
                  <p className="text-sm sm:text-base mb-3 opacity-90 line-clamp-2">{place.shortDescription}</p>
                  <button
                    onClick={(e) => openModal(place, e)}
                    className="bg-[#0E58D8] hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors font-medium text-sm w-full sm:w-auto z-10 relative"
                  >
                    Learn More
                  </button>
                </div>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-[#0E58D8]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-[#333333] p-2 rounded-full shadow-lg transition-all duration-200 z-10"
          aria-label="Previous slide"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-[#333333] p-2 rounded-full shadow-lg transition-all duration-200 z-10"
          aria-label="Next slide"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Slide Indicators - Smaller and more elegant */}
      <div className="flex justify-center mt-6 space-x-2">
        {places.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 rounded-full transition-all duration-200 ${
              index === currentIndex ? "bg-[#0E58D8] w-6" : "bg-gray-300 hover:bg-gray-400 w-2"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Navigation Dots for Mobile - Alternative style */}
      <div className="flex justify-center mt-4 space-x-1 sm:hidden">
        {places.map((_, index) => (
          <div
            key={index}
            className={`h-1 rounded-full transition-all duration-200 ${
              index === currentIndex ? "bg-[#0E58D8] w-8" : "bg-gray-300 w-2"
            }`}
          />
        ))}
      </div>

      {/* Modal - Enhanced with better mobile experience */}
      {selectedPlace && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-2 sm:p-4 z-50">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[95vh] sm:max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="relative h-48 sm:h-64 md:h-80">
              <Image
                src={selectedPlace.image || "/placeholder.svg"}
                alt={selectedPlace.name}
                fill
                className="object-cover rounded-t-lg"
              />
              <button
                onClick={closeModal}
                className="absolute top-2 right-2 sm:top-4 sm:right-4 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                aria-label="Close modal"
              >
                <X size={20} className="sm:w-6 sm:h-6" />
              </button>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 sm:p-6">
                <h2 className="text-2xl sm:text-3xl font-bold text-white font-poppins">{selectedPlace.name}</h2>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-4 sm:p-6">
              {/* Quick Info Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-6">
                <div className="bg-[#E8F0FE] p-3 sm:p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-1">
                    <Clock size={16} className="text-[#0E58D8]" />
                    <span className="text-xs sm:text-sm font-medium text-[#666666]">Opening Hours</span>
                  </div>
                  <p className="font-semibold text-[#333333] text-sm sm:text-base">{selectedPlace.openingHours}</p>
                </div>
                <div className="bg-[#E8F0FE] p-3 sm:p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-1">
                    <MapPin size={16} className="text-[#0E58D8]" />
                    <span className="text-xs sm:text-sm font-medium text-[#666666]">Entry Fee</span>
                  </div>
                  <p className="font-semibold text-[#333333] text-sm sm:text-base">{selectedPlace.entryFee}</p>
                </div>
                <div className="bg-[#E8F0FE] p-3 sm:p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-1">
                    <Camera size={16} className="text-[#0E58D8]" />
                    <span className="text-xs sm:text-sm font-medium text-[#666666]">Best Time to Visit</span>
                  </div>
                  <p className="font-semibold text-[#333333] text-sm sm:text-base">{selectedPlace.bestTimeToVisit}</p>
                </div>
              </div>

              {/* Description */}
              <div className="mb-6">
                <h3 className="text-lg sm:text-xl font-bold mb-3 text-[#333333] font-poppins">About This Place</h3>
                <p className="text-[#333333] leading-relaxed text-sm sm:text-base">{selectedPlace.fullDescription}</p>
              </div>

              {/* History */}
              <div className="mb-6">
                <h3 className="text-lg sm:text-xl font-bold mb-3 text-[#333333] font-poppins flex items-center gap-2">
                  <History size={16} className="sm:w-5 sm:h-5 text-[#0E58D8]" />
                  History & Background
                </h3>
                <p className="text-[#333333] leading-relaxed text-sm sm:text-base">{selectedPlace.history}</p>
              </div>

              {/* How to Get There */}
              <div className="mb-6">
                <h3 className="text-lg sm:text-xl font-bold mb-3 text-[#333333] font-poppins flex items-center gap-2">
                  <MapPin size={16} className="sm:w-5 sm:h-5 text-[#0E58D8]" />
                  How to Get There
                </h3>
                <p className="text-[#333333] leading-relaxed text-sm sm:text-base">{selectedPlace.howToGetThere}</p>
                {selectedPlace.coordinates && (
                  <div className="mt-3 p-3 bg-gray-50 rounded-lg">
                    <p className="text-xs sm:text-sm text-[#666666]">
                      <strong>GPS Coordinates:</strong> {selectedPlace.coordinates}
                    </p>
                  </div>
                )}
              </div>

              {/* What to See */}
              <div className="mb-6">
                <h3 className="text-lg sm:text-xl font-bold mb-3 text-[#333333] font-poppins flex items-center gap-2">
                  <Camera size={16} className="sm:w-5 sm:h-5 text-[#0E58D8]" />
                  What to See & Do
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selectedPlace.whatToSee.map((item, index) => (
                    <div key={index} className="flex items-start gap-2 text-[#333333] text-sm sm:text-base">
                      <span className="text-[#0E58D8] mt-1 flex-shrink-0">•</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-[#C4C4C4]">
                <button
                  onClick={closeModal}
                  className="bg-[#0E58D8] hover:bg-blue-700 text-white px-6 py-3 rounded-md transition-colors font-medium text-sm sm:text-base"
                >
                  Close
                </button>
                {selectedPlace.coordinates && (
                  <a
                    href={`https://www.google.com/maps?q=${selectedPlace.coordinates}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#F4B400] hover:bg-amber-500 text-[#333333] px-6 py-3 rounded-md transition-colors font-medium text-center text-sm sm:text-base"
                  >
                    📍 View on Google Maps
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
