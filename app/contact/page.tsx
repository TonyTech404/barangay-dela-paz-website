import { MapPin, Phone, Clock, Mail } from "lucide-react"
import ContactForm from "@/components/contact-form"

export default function ContactPage() {
  return (
    <div className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 text-[#333333] font-poppins">Contact Us</h1>
        <p className="text-lg text-[#666666] max-w-3xl mx-auto">
          Get in touch with Barangay Dela Paz officials for general inquiries, feedback, or non-urgent concerns.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 mb-16">
        {/* Contact Form */}
        <div>
          <h2 className="text-2xl font-bold mb-6 text-[#333333] font-poppins">Send Us a Message</h2>
          <ContactForm />
        </div>

        {/* Contact Information */}
        <div>
          <h2 className="text-2xl font-bold mb-6 text-[#333333] font-poppins">Barangay Hall Information</h2>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-[#C4C4C4] mb-8">
            <div className="space-y-6">
              <div className="flex items-start gap-3">
                <MapPin size={24} className="text-[#0E58D8] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-[#333333] mb-1">Address</h3>
                  <p className="text-[#333333]">
                    123 Dela Paz Street, Barangay Dela Paz
                    <br />
                    City, Province 1234
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone size={24} className="text-[#0E58D8] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-[#333333] mb-1">Phone Numbers</h3>
                  <p className="text-[#333333]">
                    Main Office: (123) 456-7890
                    <br />
                    Fax: (123) 456-7891
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail size={24} className="text-[#0E58D8] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-[#333333] mb-1">Email</h3>
                  <p className="text-[#333333]">
                    General: info@delapaz.gov.ph
                    <br />
                    Services: services@delapaz.gov.ph
                    <br />
                    Captain: captain@delapaz.gov.ph
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock size={24} className="text-[#0E58D8] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-[#333333] mb-1">Office Hours</h3>
                  <p className="text-[#333333]">
                    Monday - Friday: 8:00 AM - 5:00 PM
                    <br />
                    Saturday: 8:00 AM - 12:00 PM
                    <br />
                    Sunday & Holidays: Closed
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className="bg-[#E8F0FE] p-6 rounded-lg mb-8">
            <h3 className="text-lg font-bold mb-4 text-[#333333] font-poppins">Follow Us</h3>
            <div className="space-y-2">
              <p className="text-[#333333]">
                <strong>Facebook:</strong> facebook.com/BarangayDelaPazOfficial
              </p>
              <p className="text-[#333333]">
                <strong>Website:</strong> www.delapaz.gov.ph
              </p>
            </div>
          </div>

          {/* Google Map Placeholder */}
          <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
            <p className="text-gray-600">Google Maps Integration</p>
          </div>
        </div>
      </div>

      {/* Department Contacts */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-8 text-[#333333] font-poppins">Department Contacts</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              department: "Barangay Secretary",
              name: "Lourdes Aquino",
              phone: "(123) 456-7901",
              email: "secretary@delapaz.gov.ph",
              responsibilities: "Records, Certificates, General Admin",
            },
            {
              department: "Barangay Treasurer",
              name: "Ricardo Torres",
              phone: "(123) 456-7902",
              email: "treasurer@delapaz.gov.ph",
              responsibilities: "Financial Services, Payments",
            },
            {
              department: "SK Chairman",
              name: "Maria Santos",
              phone: "(123) 456-7903",
              email: "sk@delapaz.gov.ph",
              responsibilities: "Youth Programs, Sports",
            },
            {
              department: "Health Services",
              name: "Dr. Elena Magtanggol",
              phone: "(123) 456-7904",
              email: "health@delapaz.gov.ph",
              responsibilities: "Medical Services, Health Programs",
            },
            {
              department: "Peace & Order",
              name: "Pedro Reyes",
              phone: "(123) 456-7905",
              email: "peacekeeping@delapaz.gov.ph",
              responsibilities: "Security, Barangay Justice",
            },
            {
              department: "Social Services",
              name: "Rosario Domingo",
              phone: "(123) 456-7906",
              email: "social@delapaz.gov.ph",
              responsibilities: "Senior Citizens, PWD, Indigent",
            },
          ].map((dept, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-[#C4C4C4]">
              <h3 className="text-lg font-bold mb-1 text-[#333333] font-poppins">{dept.department}</h3>
              <p className="text-[#0E58D8] font-medium mb-3">{dept.name}</p>
              <div className="space-y-1 text-sm">
                <p className="text-[#333333]">
                  <strong>Phone:</strong> {dept.phone}
                </p>
                <p className="text-[#333333]">
                  <strong>Email:</strong> {dept.email}
                </p>
                <p className="text-[#666666] mt-2 text-xs">{dept.responsibilities}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section>
        <h2 className="text-2xl font-bold mb-8 text-[#333333] font-poppins">Frequently Asked Questions</h2>

        <div className="space-y-6">
          {[
            {
              question: "What are the requirements for getting a Barangay Clearance?",
              answer:
                "You need a valid ID with address in Barangay Dela Paz, completed application form, and payment of ₱50.00 processing fee.",
            },
            {
              question: "How long does it take to process documents?",
              answer:
                "Most certificates take 15-30 minutes if there are no issues. Business clearances may take 1-3 days due to required inspections.",
            },
            {
              question: "Can I request documents online?",
              answer:
                "Yes, you can email your requirements to services@delapaz.gov.ph. However, you still need to visit the office for payment and pickup.",
            },
            {
              question: "What should I do if I have a complaint about a neighbor?",
              answer:
                "You can file a complaint at the Barangay Hall during office hours. We also offer mediation services through our Lupong Tagapamayapa.",
            },
          ].map((faq, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-[#C4C4C4]">
              <h3 className="text-lg font-semibold mb-2 text-[#333333] font-poppins">{faq.question}</h3>
              <p className="text-[#333333]">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
