import Image from "next/image"
import Link from "next/link"
import { Calendar, Tag } from "lucide-react"

interface NewsCardProps {
  title: string
  date: string
  category: string
  excerpt: string
  imageUrl: string
}

export default function NewsCard({ title, date, category, excerpt, imageUrl }: NewsCardProps) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-[#C4C4C4]">
      <div className="relative h-48 w-full">
        <Image src={imageUrl || "/placeholder.svg"} alt={title} fill className="object-cover" />
      </div>
      <div className="p-6">
        <div className="flex gap-4 mb-3">
          <div className="flex items-center gap-1 text-sm text-[#666666]">
            <Calendar size={16} />
            <span>{date}</span>
          </div>
          <div className="flex items-center gap-1 text-sm">
            <Tag size={16} className="text-[#0E58D8]" />
            <span className="bg-[#E8F0FE] text-[#0E58D8] px-2 py-0.5 rounded-full">{category}</span>
          </div>
        </div>
        <h3 className="text-xl font-bold mb-2 text-[#333333] font-poppins">{title}</h3>
        <p className="text-[#333333] mb-4">{excerpt}</p>
        <Link
          href={`/news/${title.toLowerCase().replace(/\s+/g, "-")}`}
          className="text-[#0E58D8] font-medium hover:underline"
        >
          Read more
        </Link>
      </div>
    </div>
  )
}
