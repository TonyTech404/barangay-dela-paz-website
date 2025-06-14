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
    name: "Nuestra Señora de la Paz y Buen Viaje Parish Church",
    image: "/nuestra-delapaz.jpg",
    shortDescription: "A local Catholic landmark dedicated to Our Lady of Peace and Good Voyage",
    fullDescription:
      "A local Catholic landmark dedicated to Our Lady of Peace and Good Voyage, prominently located on A. Mabini St. in Dela Paz. This parish plays an important spiritual role in the barangay, serving nearby residents and hosting regular masses and feasts.",
    history:
      "While less widely documented than other historic churches in the area, this parish has served as an important spiritual center for the community. The church continues to play a vital role in the religious and cultural life of Barangay Dela Paz residents.",
    howToGetThere:
      "It's just a short walk from the Barangay Hall. Nearest landmark is Dela Paz Elementary School, and the church is easily accessible via local jeepneys or tricycles along A. Mabini Street.",
    whatToSee: [
      "Attend daily mass services",
      "Light candles for prayers and intentions",
      "Admire the church's ornate golden altar and religious artwork",
      "Participate in community festivities during feast days",
      "Experience the peaceful atmosphere for reflection",
      "View the beautiful chandeliers and interior decorations",
    ],
    openingHours: "Daily: 6:00 AM - 6:00 PM (Mass schedules vary)",
    entryFee: "Free (donations welcome)",
    bestTimeToVisit: "Early morning for mass, or during feast celebrations",
    coordinates: "14.2167° N, 121.0833° E",
  },
  {
    id: 2,
    name: "Biñan Lakeshore (Biñan Esplanade)",
    image: "/binan-lakeshore.jpg",
    shortDescription: "A 325-meter lakeside promenade along Laguna de Bay with retro-Spanish style design",
    fullDescription:
      "A newly developed 325-meter lakeside promenade along Laguna de Bay, complete with a retro-Spanish style esplanade, vintage lamp posts, ornate railings, and community spaces. This beautiful waterfront development offers stunning lake views and serves as a community gathering place.",
    history:
      "Transformed from a flood-control seawall through a collaboration of LLDA, Biñan LGU, and local architects. It was officially inaugurated in March 2024 to turn a flood-prone area into a livelihood and leisure zone. The design echoes historic Spanish-era elements and is now managed by the barangay.",
    howToGetThere:
      "Located along the lakeshore front in Barangay Dela Paz, adjacent to the barangay hall. Easily accessed by tricycle or jeepney via Pedro Paterno or Judge Angeles streets.",
    whatToSee: [
      "Take a scenic stroll along the 325-meter esplanade",
      "Relax on benches with panoramic lake views",
      "Watch local fishermen at work",
      "Enjoy the vintage-style lamp posts and ornate railings",
      "Visit the pavilion structure for events",
      "Experience beautiful sunrise and sunset views over Laguna de Bay",
    ],
    openingHours: "Open 24/7",
    entryFee: "Free",
    bestTimeToVisit: "Early morning or late afternoon for best lighting and cooler weather",
    coordinates: "14.2167° N, 121.0833° E",
  },
  {
    id: 3,
    name: "Rustic Farm Restobar",
    image: "/rustic-bar.jpg",
    shortDescription: "A cozy lakeside restobar with rustic charm, live music, and scenic Laguna de Bay views",
    fullDescription:
      "A cozy lakeside restobar located within CJL Farm, offering rustic charm with wooden tables, live acoustic music, and a scenic Laguna de Bay vista. This beloved neighborhood hangout provides a perfect setting for casual dining and socializing under beautiful string lights.",
    history:
      "A beloved neighborhood hangout that opened in mid-2024, this resto-bar operates Wednesday through Sunday evenings and has quickly gained popularity for its chilled vibes and casual atmosphere perfect for get-togethers.",
    howToGetThere:
      "Located on P. Paterno St., inside CJL Farm premises—around 5-10 minutes via tricycle from the barangay center. Contact: 0917 804 0521",
    whatToSee: [
      "Savor comfort food like grill platters and croffles",
      "Enjoy live acoustic bands Wednesday to Sunday evenings",
      "Relax by the lake with beautiful sunset views",
      "Socialize around rustic wooden seating areas",
      "Experience the magical string light ambiance",
      "Plan small gatherings or celebrations in the farm setting",
    ],
    openingHours: "Wednesday - Sunday: 5:00 PM - 11:00 PM",
    entryFee: "Free entry (food and drinks for purchase)",
    bestTimeToVisit: "Weekend evenings for live music and sunset views",
    coordinates: "14.2170° N, 121.0830° E",
  },
  {
    id: 4,
    name: "Balai Katerina Resort Villa",
    image: "/balai-katerina.jpg",
    shortDescription: "A private resort venue offering villas, pool, and event spaces for gatherings",
    fullDescription:
      "A private resort venue in Dela Paz offering comfortable villas, swimming pool facilities, and versatile event spaces. This modern resort features contemporary architecture, beautifully landscaped gardens, and represents Dela Paz's growing leisure tourism trend.",
    history:
      "A rising choice for family gatherings, weddings, and corporate outings, Balai Katerina Resort Villa showcases Dela Paz's growing leisure tourism trend and the community's development as a destination for events and staycations.",
    howToGetThere:
      "Located in the Joann & Lyn area of Dela Paz. Best reached by tricycle or private vehicle from main roads. Contact the resort directly for specific directions and reservations.",
    whatToSee: [
      "Swim in the resort's beautiful swimming pool",
      "Rent comfortable villas for events and stays",
      "Enjoy the modern architecture and tropical landscaping",
      "Perfect venue for weddings and celebrations",
      "Relax in the well-maintained gardens and pavilions",
      "Experience peaceful resort atmosphere away from the city",
    ],
    openingHours: "Daily: 8:00 AM - 10:00 PM (by reservation)",
    entryFee: "Day use and accommodation rates vary (contact resort)",
    bestTimeToVisit: "Weekends for events, weekdays for peaceful staycations",
    coordinates: "14.2165° N, 121.0835° E",
  },
  {
    id: 5,
    name: "Biñan City Organic Farm Playground",
    image: "/binan-city-playground.jpg",
    shortDescription: "A community farm and playground promoting agritourism and children's nature interaction",
    fullDescription:
      "A community-organized farm and playground area that combines agricultural education with recreational activities. This unique space features colorful playground equipment under shade structures and is often used for school events and barangay activities.",
    history:
      "Opened by Mayor Dimaguila in 2019 to promote agritourism and children's interaction with nature in Dela Paz. The facility represents the community's commitment to environmental education and sustainable agriculture.",
    howToGetThere:
      "Located near the barangay hall and Dela Paz Elementary School. The farm playground is typically accessible by foot from the barangay center or by tricycle for those coming from farther areas.",
    whatToSee: [
      "Let children play on colorful playground equipment",
      "Enjoy the shaded play areas with green canopies",
      "Attend community events and farm workshops",
      "Learn about organic farming methods and techniques",
      "Participate in hands-on farming activities",
      "Experience educational tours about sustainable agriculture",
    ],
    openingHours: "Daily: 7:00 AM - 5:00 PM",
    entryFee: "Free for community events (small fee for organized tours)",
    bestTimeToVisit: "Morning hours for cooler weather, weekends for community activities",
    coordinates: "14.2168° N, 121.0828° E",
  },
  {
    id: 6,
    name: "Biñan Organic Farm",
    image: "/organic-farm.jpg",
    shortDescription: "A community organic farm with welcome pavilion promoting sustainable agriculture",
    fullDescription:
      "A community organic farm featuring a welcoming entrance pavilion and educational facilities. This farm represents the barangay's commitment to sustainable agriculture and provides fresh, locally-grown organic produce to the community while serving as an educational center.",
    history:
      "Part of the barangay's push toward greener, self-sustained living, this organic farm complements other agricultural initiatives in the area. It serves as both a source of fresh produce and an educational facility for sustainable farming practices.",
    howToGetThere:
      "Within walking distance of Dela Paz Elementary School and the barangay hall. Look for the large 'Welcome to Biñan Organic Farm' sign at the entrance. Ask locals or tricycle drivers for directions.",
    whatToSee: [
      "Visit the welcoming entrance pavilion with green roof",
      "Tour the various organic farm plots and growing areas",
      "Learn about organic farming methods and techniques",
      "Buy fresh produce directly from the farm",
      "Attend educational workshops about sustainable agriculture",
      "Participate in community farming activities and events",
    ],
    openingHours: "Daily: 6:00 AM - 6:00 PM",
    entryFee: "Free tours (produce available for purchase)",
    bestTimeToVisit: "Early morning for freshest produce, weekdays for quieter visits",
    coordinates: "14.2169° N, 121.0827° E",
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
