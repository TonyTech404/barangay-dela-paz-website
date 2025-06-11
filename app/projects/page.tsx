import Image from "next/image"
import { CheckCircle, Clock } from "lucide-react"

export default function ProjectsPage() {
  return (
    <div className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 text-[#333333] font-poppins">Projects & Accomplishments</h1>
        <p className="text-lg text-[#666666] max-w-3xl mx-auto">
          Explore the ongoing and completed projects that contribute to the development and improvement of Barangay Dela
          Paz.
        </p>
      </div>

      {/* Ongoing Projects */}
      <section className="mb-16">
        <div className="flex items-center gap-2 mb-6">
          <Clock size={24} className="text-[#0E58D8]" />
          <h2 className="text-2xl font-bold text-[#333333] font-poppins">Ongoing Projects</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              title: "Road Improvement Project",
              description:
                "Rehabilitation and improvement of roads in Sitio Maunlad, including concrete paving and drainage system installation.",
              startDate: "April 2023",
              expectedCompletion: "August 2023",
              budget: "₱2,500,000",
              progress: 65,
              image: "/placeholder.svg?height=300&width=500",
            },
            {
              title: "Community Health Center Expansion",
              description:
                "Expansion of the barangay health center to accommodate more patients and provide additional services including a small laboratory and dental clinic.",
              startDate: "May 2023",
              expectedCompletion: "October 2023",
              budget: "₱1,800,000",
              progress: 40,
              image: "/placeholder.svg?height=300&width=500",
            },
            {
              title: "Public Park Renovation",
              description:
                "Renovation of the community park with new playground equipment, exercise stations, and improved landscaping for residents of all ages.",
              startDate: "June 2023",
              expectedCompletion: "September 2023",
              budget: "₱1,200,000",
              progress: 25,
              image: "/placeholder.svg?height=300&width=500",
            },
          ].map((project, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-sm border border-[#C4C4C4]">
              <div className="relative h-64 w-full">
                <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-[#333333] font-poppins">{project.title}</h3>
                <p className="text-[#333333] mb-4">{project.description}</p>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <p className="text-sm text-[#666666]">Start Date</p>
                    <p className="font-medium">{project.startDate}</p>
                  </div>
                  <div>
                    <p className="text-sm text-[#666666]">Expected Completion</p>
                    <p className="font-medium">{project.expectedCompletion}</p>
                  </div>
                  <div>
                    <p className="text-sm text-[#666666]">Budget</p>
                    <p className="font-medium">{project.budget}</p>
                  </div>
                  <div>
                    <p className="text-sm text-[#666666]">Progress</p>
                    <p className="font-medium">{project.progress}%</p>
                  </div>
                </div>

                <div className="w-full bg-[#E8F0FE] rounded-full h-2.5">
                  <div className="bg-[#0E58D8] h-2.5 rounded-full" style={{ width: `${project.progress}%` }}></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Completed Projects */}
      <section className="mb-16">
        <div className="flex items-center gap-2 mb-6">
          <CheckCircle size={24} className="text-[#0E58D8]" />
          <h2 className="text-2xl font-bold text-[#333333] font-poppins">Completed Projects</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Street Lighting Project",
              description:
                "Installation of LED street lights along major roads to improve visibility and safety at night.",
              completionDate: "March 2023",
              budget: "₱800,000",
              image: "/placeholder.svg?height=200&width=300",
            },
            {
              title: "Drainage System Improvement",
              description: "Cleaning and rehabilitation of drainage systems to prevent flooding during rainy season.",
              completionDate: "February 2023",
              budget: "₱1,200,000",
              image: "/placeholder.svg?height=200&width=300",
            },
            {
              title: "Barangay Hall Renovation",
              description:
                "Renovation of the barangay hall to improve service delivery and create a more comfortable environment for residents.",
              completionDate: "December 2022",
              budget: "₱1,500,000",
              image: "/placeholder.svg?height=200&width=300",
            },
            {
              title: "Community Library",
              description:
                "Establishment of a small community library with books, computers, and internet access for students and residents.",
              completionDate: "November 2022",
              budget: "₱600,000",
              image: "/placeholder.svg?height=200&width=300",
            },
            {
              title: "Basketball Court Renovation",
              description:
                "Renovation of the community basketball court with new flooring, backboards, and seating for spectators.",
              completionDate: "October 2022",
              budget: "₱700,000",
              image: "/placeholder.svg?height=200&width=300",
            },
            {
              title: "Tree Planting Program",
              description:
                "Planting of 500 trees around the barangay to improve air quality and provide shade in public areas.",
              completionDate: "September 2022",
              budget: "₱300,000",
              image: "/placeholder.svg?height=200&width=300",
            },
          ].map((project, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-sm border border-[#C4C4C4]">
              <div className="relative h-48 w-full">
                <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
                <div className="absolute top-0 right-0 bg-[#0E58D8] text-white px-3 py-1 text-sm font-medium">
                  Completed
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold mb-2 text-[#333333] font-poppins">{project.title}</h3>
                <p className="text-sm text-[#333333] mb-3">{project.description}</p>

                <div className="flex justify-between text-sm">
                  <div>
                    <p className="text-[#666666]">Completion Date</p>
                    <p className="font-medium">{project.completionDate}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[#666666]">Budget</p>
                    <p className="font-medium">{project.budget}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Livelihood Programs */}
      <section>
        <h2 className="text-2xl font-bold mb-6 text-[#333333] font-poppins">Livelihood Programs</h2>

        <div className="bg-[#E8F0FE] p-6 rounded-lg mb-8">
          <h3 className="text-xl font-bold mb-4 text-[#333333] font-poppins">Ongoing Livelihood Programs</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Skills Training for Women",
                description:
                  "Training program for women on handicraft making, sewing, and food processing to help them start small businesses.",
                participants: "50 women",
                schedule: "Every Saturday, 1:00 PM - 4:00 PM",
                venue: "Barangay Multi-purpose Hall",
              },
              {
                title: "Youth Entrepreneurship Program",
                description:
                  "Training and mentoring program for young entrepreneurs aged 18-30 who want to start their own businesses.",
                participants: "30 youth",
                schedule: "Every Sunday, 9:00 AM - 12:00 PM",
                venue: "Barangay Conference Room",
              },
            ].map((program, index) => (
              <div key={index} className="bg-white p-4 rounded-lg">
                <h4 className="text-lg font-bold mb-2 text-[#333333] font-poppins">{program.title}</h4>
                <p className="text-[#333333] mb-3">{program.description}</p>
                <div className="text-sm">
                  <p>
                    <strong>Participants:</strong> {program.participants}
                  </p>
                  <p>
                    <strong>Schedule:</strong> {program.schedule}
                  </p>
                  <p>
                    <strong>Venue:</strong> {program.venue}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-[#C4C4C4]">
          <h3 className="text-xl font-bold mb-4 text-[#333333] font-poppins">Success Stories</h3>

          <div className="grid gap-6">
            {[
              {
                name: "Maria Santos",
                program: "Skills Training for Women (2022)",
                story:
                  "After completing the handicraft training program, Maria started her own small business selling handmade bags and accessories. She now employs three other women from the barangay and sells her products online and in local markets.",
                image: "/placeholder.svg?height=100&width=100",
              },
              {
                name: "Juan Reyes",
                program: "Youth Entrepreneurship Program (2022)",
                story:
                  "Juan used the knowledge and mentoring he received from the program to start a small food delivery service in the barangay. His business has grown and now serves neighboring barangays as well, providing employment to five young residents.",
                image: "/placeholder.svg?height=100&width=100",
              },
            ].map((story, index) => (
              <div key={index} className="flex gap-4 pb-4 border-b border-[#C4C4C4] last:border-0 last:pb-0">
                <div className="relative h-16 w-16 rounded-full overflow-hidden flex-shrink-0">
                  <Image src={story.image || "/placeholder.svg"} alt={story.name} fill className="object-cover" />
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-1 text-[#333333]">{story.name}</h4>
                  <p className="text-sm text-[#0E58D8] mb-2">{story.program}</p>
                  <p className="text-[#333333]">{story.story}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
