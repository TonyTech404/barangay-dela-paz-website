import type { Metadata } from "next"
import Image from "next/image"
import { Mail, Phone } from "lucide-react"

export const metadata: Metadata = {
  title: "Barangay Officials & Staff",
  description:
    "Meet the dedicated leaders and staff members who serve Barangay Dela Paz community. Learn about our Barangay Captain, SK Chairman, Kagawads, and administrative staff.",
  openGraph: {
    title: "Barangay Officials & Staff | Barangay Dela Paz",
    description: "Meet the dedicated leaders and staff members who serve Barangay Dela Paz community.",
    images: ["/placeholder.svg?height=630&width=1200"],
  },
}

export default function OfficialsPage() {
  return (
    <>
      {/* Structured Data for Officials Page */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Barangay Officials & Staff",
            description: "Meet the dedicated leaders and staff members who serve Barangay Dela Paz community",
            url: "https://delapaz.gov.ph/officials",
            breadcrumb: {
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: "https://delapaz.gov.ph",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Officials",
                  item: "https://delapaz.gov.ph/officials",
                },
              ],
            },
            mainEntity: {
              "@type": "Person",
              name: "Gino Hernandez Guico",
              jobTitle: "Barangay Captain",
              email: "captain@delapaz.gov.ph",
              telephone: "(123) 456-7890",
              worksFor: {
                "@type": "GovernmentOrganization",
                name: "Barangay Dela Paz",
              },
            },
          }),
        }}
      />

      <div className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-[#333333] font-poppins">Barangay Officials & Staff</h1>
          <p className="text-lg text-[#666666] max-w-3xl mx-auto">
            Meet the dedicated leaders and staff members who serve our community and work towards the development of
            Barangay Dela Paz.
          </p>
        </div>

        {/* Barangay Captain */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-[#333333] font-poppins border-b border-[#C4C4C4] pb-2">
            Barangay Captain
          </h2>
          <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
            <div className="w-full md:w-1/3 lg:w-1/4">
              <div className="relative h-80 w-full rounded-lg overflow-hidden">
                <Image
                  src="/gino.png"
                  alt="Gino Hernandez Guico, Barangay Captain of Barangay Dela Paz"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="w-full md:w-2/3 lg:w-3/4">
              <h3 className="text-2xl font-bold mb-1 text-[#333333]">Gino Hernandez Guico</h3>
              <p className="text-lg text-[#0E58D8] font-medium mb-4">Barangay Captain</p>
              <div className="flex flex-wrap gap-4 mb-4">
                <div className="flex items-center gap-2">
                  <Mail size={18} className="text-[#0E58D8]" aria-hidden="true" />
                  <a href="mailto:captain@delapaz.gov.ph" className="hover:underline">
                    captain@delapaz.gov.ph
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Phone size={18} className="text-[#0E58D8]" aria-hidden="true" />
                  <a href="tel:+1234567890" className="hover:underline">
                    (123) 456-7890
                  </a>
                </div>
              </div>
              <div className="bg-[#E8F0FE] p-6 rounded-lg mb-6">
                <h4 className="text-lg font-semibold mb-2">Message from Captain Guico</h4>
                <p className="text-[#333333] mb-4">
                  Welcome to the official website of Barangay Dela Paz! Our community is built on the values of peace,
                  progress, and unity, as reflected in our motto "Kapayapaan, Kaunlaran, at Pagkakaisa."
                </p>
                <p className="text-[#333333]">
                  As your elected Barangay Captain, I am committed to serving all residents and ensuring that our
                  barangay continues to develop while preserving our rich cultural heritage. Together with the council,
                  we strive to address your concerns and implement programs that benefit everyone in our community.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Barangay Kagawads */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-[#333333] font-poppins border-b border-[#C4C4C4] pb-2">
            Barangay Kagawads
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Pedro Reyes",
                position: "Kagawad - Peace and Order",
                image: "/placeholder.svg?height=300&width=300",
              },
              {
                name: "Elena Magtanggol",
                position: "Kagawad - Health and Sanitation",
                image: "/placeholder.svg?height=300&width=300",
              },
              {
                name: "Roberto Manalastas",
                position: "Kagawad - Infrastructure",
                image: "/placeholder.svg?height=300&width=300",
              },
              {
                name: "Juana Bautista",
                position: "Kagawad - Education",
                image: "/placeholder.svg?height=300&width=300",
              },
              {
                name: "Miguel Villanueva",
                position: "Kagawad - Environment",
                image: "/placeholder.svg?height=300&width=300",
              },
              {
                name: "Rosario Domingo",
                position: "Kagawad - Senior Citizens",
                image: "/placeholder.svg?height=300&width=300",
              },
              {
                name: "Antonio Pascual",
                position: "Kagawad - Budget and Finance",
                image: "/placeholder.svg?height=300&width=300",
              },
            ].map((official, index) => (
              <article key={index} className="bg-white rounded-lg overflow-hidden shadow-sm border border-[#C4C4C4]">
                <div className="relative h-64 w-full">
                  <Image
                    src={official.image || "/placeholder.svg"}
                    alt={`${official.name}, ${official.position} of Barangay Dela Paz`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-bold mb-1 text-[#333333]">{official.name}</h3>
                  <p className="text-[#0E58D8] font-medium">{official.position}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* SK Chairman */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-[#333333] font-poppins border-b border-[#C4C4C4] pb-2">
            SK Chairman
          </h2>
          <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
            <div className="w-full md:w-1/3 lg:w-1/4">
              <div className="relative h-80 w-full rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=300"
                  alt="Maria Santos, SK Chairman of Barangay Dela Paz"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="w-full md:w-2/3 lg:w-3/4">
              <h3 className="text-2xl font-bold mb-1 text-[#333333]">Maria Santos</h3>
              <p className="text-lg text-[#0E58D8] font-medium mb-4">SK Chairman</p>
              <div className="flex flex-wrap gap-4 mb-4">
                <div className="flex items-center gap-2">
                  <Mail size={18} className="text-[#0E58D8]" aria-hidden="true" />
                  <a href="mailto:sk@delapaz.gov.ph" className="hover:underline">
                    sk@delapaz.gov.ph
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Phone size={18} className="text-[#0E58D8]" aria-hidden="true" />
                  <a href="tel:+1234567891" className="hover:underline">
                    (123) 456-7891
                  </a>
                </div>
              </div>
              <p className="text-[#333333] mb-4">
                As the Sangguniang Kabataan Chairman, Maria leads youth development programs and represents the youth
                sector in barangay governance. She organizes sports events, educational workshops, and community service
                activities for young residents.
              </p>
            </div>
          </div>
        </section>

        {/* SK Kagawads */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-[#333333] font-poppins border-b border-[#C4C4C4] pb-2">
            SK Kagawads
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "John Michael Cruz",
                position: "SK Kagawad - Sports and Recreation",
                image: "/placeholder.svg?height=300&width=300",
              },
              {
                name: "Angela Marie Reyes",
                position: "SK Kagawad - Education and Training",
                image: "/placeholder.svg?height=300&width=300",
              },
              {
                name: "Carlos Emmanuel Santos",
                position: "SK Kagawad - Health and Environment",
                image: "/placeholder.svg?height=300&width=300",
              },
              {
                name: "Patricia Joy Mendoza",
                position: "SK Kagawad - Arts and Culture",
                image: "/placeholder.svg?height=300&width=300",
              },
              {
                name: "Mark Anthony Garcia",
                position: "SK Kagawad - Livelihood and Employment",
                image: "/placeholder.svg?height=300&width=300",
              },
              {
                name: "Sophia Mae Torres",
                position: "SK Kagawad - Community Development",
                image: "/placeholder.svg?height=300&width=300",
              },
              {
                name: "Joshua David Flores",
                position: "SK Kagawad - Information and Communications",
                image: "/placeholder.svg?height=300&width=300",
              },
            ].map((official, index) => (
              <article key={index} className="bg-white rounded-lg overflow-hidden shadow-sm border border-[#C4C4C4]">
                <div className="relative h-64 w-full">
                  <Image
                    src={official.image || "/placeholder.svg"}
                    alt={`${official.name}, ${official.position} of Barangay Dela Paz`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-bold mb-1 text-[#333333]">{official.name}</h3>
                  <p className="text-[#0E58D8] font-medium">{official.position}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Barangay Staff */}
        <section>
          <h2 className="text-2xl font-bold mb-8 text-[#333333] font-poppins border-b border-[#C4C4C4] pb-2">
            Barangay Staff
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Lourdes Aquino",
                position: "Barangay Secretary",
                image: "/placeholder.svg?height=300&width=300",
              },
              {
                name: "Ricardo Torres",
                position: "Barangay Treasurer",
                image: "/placeholder.svg?height=300&width=300",
              },
              { name: "Maricel Gonzales", position: "Barangay Clerk", image: "/placeholder.svg?height=300&width=300" },
            ].map((staff, index) => (
              <article
                key={index}
                className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm border border-[#C4C4C4]"
              >
                <div className="relative h-16 w-16 rounded-full overflow-hidden flex-shrink-0">
                  <Image
                    src={staff.image || "/placeholder.svg"}
                    alt={`${staff.name}, ${staff.position} of Barangay Dela Paz`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1 text-[#333333]">{staff.name}</h3>
                  <p className="text-[#0E58D8] font-medium">{staff.position}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </>
  )
}
