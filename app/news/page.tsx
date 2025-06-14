import Image from "next/image"
import Link from "next/link"
import { Calendar, Tag } from "lucide-react"

export default function NewsPage() {
  return (
    <div className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 text-[#333333] font-poppins">News & Announcements</h1>
        <p className="text-lg text-[#666666] max-w-3xl mx-auto">
          Stay updated with the latest news, events, and announcements from Barangay Dela Paz.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        <div className="w-full lg:w-3/4">
          {/* Featured News */}
          <div className="mb-12">
            <div className="relative h-80 w-full rounded-lg overflow-hidden mb-6">
              <Image
                src="https://picsum.photos/800/400?random=1"
                alt="Barangay Dela Paz 78th Foundation Day celebration with community gathering"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex gap-4 mb-3">
              <div className="flex items-center gap-1 text-sm text-[#666666]">
                <Calendar size={16} />
                <span>June 20, 2023</span>
              </div>
              <div className="flex items-center gap-1 text-sm">
                <Tag size={16} className="text-[#0E58D8]" />
                <span className="bg-[#E8F0FE] text-[#0E58D8] px-2 py-0.5 rounded-full">Community</span>
              </div>
            </div>
            <h2 className="text-2xl font-bold mb-3 text-[#333333] font-poppins">
              Barangay Dela Paz Celebrates 78th Foundation Day
            </h2>
            <p className="text-[#333333] mb-4">
              Residents of Barangay Dela Paz gathered last weekend to celebrate the 78th Foundation Day with various
              activities including cultural performances, games, and a community lunch. The event was attended by city
              officials and highlighted the rich history of our barangay.
            </p>
            <Link href="/news/foundation-day" className="text-[#0E58D8] font-medium hover:underline">
              Read more
            </Link>
          </div>

          {/* News List */}
          <div className="grid gap-8">
            {[
              {
                title: "COVID-19 Vaccination Schedule",
                date: "June 15, 2023",
                category: "Health",
                excerpt:
                  "Schedule for the upcoming COVID-19 vaccination drive at the barangay health center. Residents aged 18 and above are encouraged to get their booster shots.",
                image: "https://picsum.photos/400/200?random=2",
              },
              {
                title: "Barangay Clean-up Drive",
                date: "June 10, 2023",
                category: "Environment",
                excerpt:
                  "Join our community clean-up drive this weekend to help keep our streets clean and promote proper waste management among residents.",
                image: "https://picsum.photos/400/200?random=3",
              },
              {
                title: "Youth Leadership Program",
                date: "June 5, 2023",
                category: "Youth",
                excerpt:
                  "New leadership program for youth aged 15-24. Registration now open for workshops on public speaking, project management, and community organizing.",
                image: "https://picsum.photos/400/200?random=4",
              },
              {
                title: "Senior Citizens' Medical Mission",
                date: "May 28, 2023",
                category: "Health",
                excerpt:
                  "Free medical check-ups, consultations, and medicines for senior citizens will be provided at the barangay hall on June 30.",
                image: "https://picsum.photos/400/200?random=5",
              },
              {
                title: "Livelihood Training for Women",
                date: "May 20, 2023",
                category: "Livelihood",
                excerpt:
                  "The barangay is offering free livelihood training for women residents, focusing on handicraft making and food processing.",
                image: "https://picsum.photos/400/200?random=6",
              },
            ].map((news, index) => (
              <div key={index} className="flex flex-col md:flex-row gap-6 pb-6 border-b border-[#C4C4C4]">
                <div className="w-full md:w-1/3">
                  <div className="relative h-48 w-full rounded-lg overflow-hidden">
                    <Image
                      src={news.image || "/placeholder.svg"}
                      alt={news.title}
                      fill
                      className="object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement
                        target.src = `/placeholder.svg?height=200&width=400&text=${encodeURIComponent(news.title)}`
                      }}
                    />
                  </div>
                </div>
                <div className="w-full md:w-2/3">
                  <div className="flex gap-4 mb-2">
                    <div className="flex items-center gap-1 text-sm text-[#666666]">
                      <Calendar size={16} />
                      <span>{news.date}</span>
                    </div>
                    <div className="flex items-center gap-1 text-sm">
                      <Tag size={16} className="text-[#0E58D8]" />
                      <span className="bg-[#E8F0FE] text-[#0E58D8] px-2 py-0.5 rounded-full">{news.category}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-[#333333] font-poppins">{news.title}</h3>
                  <p className="text-[#333333] mb-3">{news.excerpt}</p>
                  <Link
                    href={`/news/${news.title.toLowerCase().replace(/\s+/g, "-")}`}
                    className="text-[#0E58D8] font-medium hover:underline"
                  >
                    Read more
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <div className="w-full lg:w-1/4">
          <div className="bg-[#E8F0FE] p-6 rounded-lg mb-8">
            <h3 className="text-xl font-bold mb-4 text-[#333333] font-poppins">Categories</h3>
            <ul className="space-y-2">
              {["Health", "Environment", "Youth", "Community", "Livelihood", "Education", "Sports"].map(
                (category, index) => (
                  <li key={index}>
                    <Link
                      href={`/news/category/${category.toLowerCase()}`}
                      className="text-[#333333] hover:text-[#0E58D8] flex justify-between"
                    >
                      {category}
                      <span className="bg-white text-[#666666] px-2 rounded-full text-sm">5</span>
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </div>

          <div className="bg-[#E8F0FE] p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4 text-[#333333] font-poppins">Archives</h3>
            <ul className="space-y-2">
              {["June 2023", "May 2023", "April 2023", "March 2023", "February 2023", "January 2023"].map(
                (month, index) => (
                  <li key={index}>
                    <Link
                      href={`/news/archive/${month.toLowerCase().replace(/\s+/g, "-")}`}
                      className="text-[#333333] hover:text-[#0E58D8] flex justify-between"
                    >
                      {month}
                      <span className="bg-white text-[#666666] px-2 rounded-full text-sm">8</span>
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
