import Link from "next/link"
import { FileText, AlertCircle, Phone, Users } from "lucide-react"

interface QuickLinkCardProps {
  title: string
  icon: string
  href: string
}

export default function QuickLinkCard({ title, icon, href }: QuickLinkCardProps) {
  const IconComponent =
    {
      FileText,
      AlertCircle,
      Phone,
      Users,
    }[icon] || FileText

  return (
    <Link
      href={href}
      className="bg-white p-6 rounded-lg shadow-sm border border-[#C4C4C4] hover:shadow-md transition-shadow group"
    >
      <div className="flex flex-col items-center text-center">
        <div className="w-12 h-12 bg-[#E8F0FE] rounded-full flex items-center justify-center mb-3 group-hover:bg-[#0E58D8] transition-colors">
          <IconComponent size={24} className="text-[#0E58D8] group-hover:text-white transition-colors" />
        </div>
        <h3 className="font-semibold text-[#333333] group-hover:text-[#0E58D8] transition-colors">{title}</h3>
      </div>
    </Link>
  )
}
