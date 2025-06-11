import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Calendar, MapPin, Users } from "lucide-react"
import NewsCard from "@/components/news-card"
import QuickLinkCard from "@/components/quick-link-card"
import DiscoverCarousel from "@/components/discover-carousel"

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[500px] md:h-[600px] w-full">
        <Image
          src="/placeholder.svg?height=600&width=1200"
          alt="Barangay Dela Paz"
          fill
          className="object-cover brightness-[0.65]"
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 font-poppins">Barangay Dela Paz</h1>
          <p className="text-xl md:text-2xl text-white mb-8 font-poppins">Kapayapaan, Kaunlaran, at Pagkakaisa</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/news"
              className="bg-[#0E58D8] hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-md transition-colors"
            >
              See Announcements
            </Link>
            <Link
              href="/services"
              className="bg-[#F4B400] hover:bg-amber-500 text-[#333333] font-medium py-3 px-6 rounded-md transition-colors"
            >
              Request Barangay Clearance
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-[#333333] font-poppins">About Barangay Dela Paz</h2>
            <p className="text-lg mb-4 text-[#333333]">
              Barangay Dela Paz is a vibrant community located in the heart of our city. With a population of
              approximately 15,000 residents, our barangay is known for its rich cultural heritage and strong community
              bonds.
            </p>
            <p className="text-lg mb-6 text-[#333333]">
              Established in 1945, Dela Paz has grown from a small settlement to a thriving neighborhood that balances
              tradition with progress.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <div className="flex items-center gap-2">
                <MapPin className="text-[#0E58D8]" />
                <span>Central District</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="text-[#0E58D8]" />
                <span>15,000+ Residents</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="text-[#0E58D8]" />
                <span>Est. 1945</span>
              </div>
            </div>
          </div>
          <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="Barangay Dela Paz Community"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Culture & Livelihood */}
      <section className="py-16 px-4 md:px-8 bg-[#E8F0FE]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center text-[#333333] font-poppins">Culture & Livelihood</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="h-48 mb-4 relative rounded-md overflow-hidden">
                <Image src="/placeholder.svg?height=200&width=300" alt="Local Products" fill className="object-cover" />
              </div>
              <h3 className="text-xl font-semibold mb-2 font-poppins">Local Products</h3>
              <p className="text-[#333333]">
                Our community is known for handcrafted goods and local delicacies that showcase our cultural heritage.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="h-48 mb-4 relative rounded-md overflow-hidden">
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="Livelihood Programs"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2 font-poppins">Livelihood Programs</h3>
              <p className="text-[#333333]">
                We support our residents through various skills training and entrepreneurship programs.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="h-48 mb-4 relative rounded-md overflow-hidden">
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="Fiesta Celebration"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2 font-poppins">Annual Fiesta</h3>
              <p className="text-[#333333]">
                Our colorful fiesta celebration every May brings together residents and visitors for cultural
                performances and festivities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Discover Dela Paz - New Carousel Section */}
      <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-2 text-[#333333] font-poppins">Discover Dela Paz</h2>
        <p className="text-lg mb-10 text-[#666666]">Explore the beautiful places and hidden gems in our community</p>

        <DiscoverCarousel />
      </section>

      {/* News Preview */}
      <section className="py-16 px-4 md:px-8 bg-[#E8F0FE]">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-3xl font-bold text-[#333333] font-poppins">Latest News</h2>
            <Link href="/news" className="text-[#0E58D8] font-medium flex items-center gap-1 hover:underline">
              View All <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <NewsCard
              title="COVID-19 Vaccination Schedule"
              date="June 15, 2023"
              category="Health"
              excerpt="Schedule for the upcoming COVID-19 vaccination drive at the barangay health center."
              imageUrl="/placeholder.svg?height=200&width=300"
            />
            <NewsCard
              title="Barangay Clean-up Drive"
              date="June 10, 2023"
              category="Environment"
              excerpt="Join our community clean-up drive this weekend to help keep our streets clean."
              imageUrl="/placeholder.svg?height=200&width=300"
            />
            <NewsCard
              title="Youth Leadership Program"
              date="June 5, 2023"
              category="Youth"
              excerpt="New leadership program for youth aged 15-24. Registration now open."
              imageUrl="/placeholder.svg?height=200&width=300"
            />
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center text-[#333333] font-poppins">Quick Links & Services</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <QuickLinkCard title="Barangay Clearance" icon="FileText" href="/services" />
          <QuickLinkCard title="Report Concern" icon="AlertCircle" href="/contact" />
          <QuickLinkCard title="Emergency Contacts" icon="Phone" href="/emergency" />
          <QuickLinkCard title="Meet Officials" icon="Users" href="/officials" />
        </div>
      </section>
    </div>
  )
}
