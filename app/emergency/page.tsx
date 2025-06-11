import { AlertTriangle, Shield, Flame, Heart, Users, Phone, MapPin } from "lucide-react"

export default function EmergencyPage() {
  return (
    <div className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
      {/* Emergency Alert Banner */}
      <div className="bg-red-600 text-white p-4 rounded-lg mb-8 text-center">
        <div className="flex items-center justify-center gap-2 mb-2">
          <AlertTriangle size={24} />
          <h1 className="text-2xl font-bold font-poppins">EMERGENCY CONTACTS</h1>
        </div>
        <p className="text-lg">For life-threatening emergencies, call 911 immediately</p>
      </div>

      {/* Quick Emergency Numbers */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-[#333333] font-poppins text-center">Emergency Hotlines</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {/* Barangay Tanod */}
          <div className="bg-white p-6 rounded-lg shadow-lg border-2 border-[#0E58D8] text-center hover:shadow-xl transition-shadow">
            <div className="w-20 h-20 bg-[#0E58D8] rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield size={40} className="text-white" />
            </div>
            <h3 className="text-lg font-bold mb-2 text-[#333333] font-poppins">Barangay Tanod</h3>
            <p className="text-3xl font-bold text-[#0E58D8] mb-2">(123) 456-7892</p>
            <p className="text-sm text-[#666666] mb-3">24/7 Security & Peace Keeping</p>
            <a
              href="tel:+1234567892"
              className="inline-block bg-[#0E58D8] text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
            >
              Call Now
            </a>
          </div>

          {/* Police (PNP) */}
          <div className="bg-white p-6 rounded-lg shadow-lg border-2 border-blue-800 text-center hover:shadow-xl transition-shadow">
            <div className="w-20 h-20 bg-blue-800 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield size={40} className="text-white" />
            </div>
            <h3 className="text-lg font-bold mb-2 text-[#333333] font-poppins">Police (PNP)</h3>
            <p className="text-3xl font-bold text-blue-800 mb-2">(123) 456-7893</p>
            <p className="text-sm text-[#666666] mb-3">Emergency Police Response</p>
            <a
              href="tel:+1234567893"
              className="inline-block bg-blue-800 text-white px-4 py-2 rounded-md hover:bg-blue-900 transition-colors"
            >
              Call Now
            </a>
          </div>

          {/* Fire Department (BFP) */}
          <div className="bg-white p-6 rounded-lg shadow-lg border-2 border-red-600 text-center hover:shadow-xl transition-shadow">
            <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Flame size={40} className="text-white" />
            </div>
            <h3 className="text-lg font-bold mb-2 text-[#333333] font-poppins">Fire Dept (BFP)</h3>
            <p className="text-3xl font-bold text-red-600 mb-2">(123) 456-7894</p>
            <p className="text-sm text-[#666666] mb-3">Fire Emergency Response</p>
            <a
              href="tel:+1234567894"
              className="inline-block bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors"
            >
              Call Now
            </a>
          </div>

          {/* Health Center */}
          <div className="bg-white p-6 rounded-lg shadow-lg border-2 border-green-600 text-center hover:shadow-xl transition-shadow">
            <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart size={40} className="text-white" />
            </div>
            <h3 className="text-lg font-bold mb-2 text-[#333333] font-poppins">Health Center</h3>
            <p className="text-3xl font-bold text-green-600 mb-2">(123) 456-7895</p>
            <p className="text-sm text-[#666666] mb-3">Medical Emergency</p>
            <a
              href="tel:+1234567895"
              className="inline-block bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors"
            >
              Call Now
            </a>
          </div>
        </div>

        {/* National Emergency Numbers */}
        <div className="bg-red-50 border-2 border-red-200 p-6 rounded-lg">
          <h3 className="text-2xl font-bold mb-4 text-[#333333] font-poppins flex items-center gap-2">
            <Phone className="text-red-600" />
            National Emergency Hotlines
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-white rounded-lg">
              <p className="text-3xl font-bold text-red-600">911</p>
              <p className="text-sm font-medium">National Emergency</p>
            </div>
            <div className="text-center p-4 bg-white rounded-lg">
              <p className="text-3xl font-bold text-blue-800">117</p>
              <p className="text-sm font-medium">Philippine National Police</p>
            </div>
            <div className="text-center p-4 bg-white rounded-lg">
              <p className="text-3xl font-bold text-red-600">116</p>
              <p className="text-sm font-medium">Bureau of Fire Protection</p>
            </div>
            <div className="text-center p-4 bg-white rounded-lg">
              <p className="text-3xl font-bold text-green-600">143</p>
              <p className="text-sm font-medium">Philippine Red Cross</p>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Emergency Services */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6 text-[#333333] font-poppins">Additional Emergency Services</h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-[#C4C4C4]">
            <h3 className="text-lg font-bold mb-4 text-[#333333] font-poppins">Local Emergency Services</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="font-medium">Ambulance Service</span>
                <a href="tel:+1234567896" className="text-[#0E58D8] hover:underline">
                  (123) 456-7896
                </a>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Rescue Team</span>
                <a href="tel:+1234567897" className="text-[#0E58D8] hover:underline">
                  (123) 456-7897
                </a>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">MDRRMO</span>
                <a href="tel:+1234567898" className="text-[#0E58D8] hover:underline">
                  (123) 456-7898
                </a>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">City Hall</span>
                <a href="tel:+1234567899" className="text-[#0E58D8] hover:underline">
                  (123) 456-7899
                </a>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-[#C4C4C4]">
            <h3 className="text-lg font-bold mb-4 text-[#333333] font-poppins">Utility Emergency</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="font-medium">Electric Company</span>
                <a href="tel:+1234567800" className="text-[#0E58D8] hover:underline">
                  (123) 456-7800
                </a>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Water District</span>
                <a href="tel:+1234567801" className="text-[#0E58D8] hover:underline">
                  (123) 456-7801
                </a>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Gas Emergency</span>
                <a href="tel:+1234567802" className="text-[#0E58D8] hover:underline">
                  (123) 456-7802
                </a>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Telecom Service</span>
                <a href="tel:+1234567803" className="text-[#0E58D8] hover:underline">
                  (123) 456-7803
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Evacuation Centers */}
      <section className="mb-16">
        <div className="flex items-center gap-2 mb-8">
          <Users size={32} className="text-[#0E58D8]" />
          <h2 className="text-2xl font-bold text-[#333333] font-poppins">Evacuation Centers</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              name: "Dela Paz Elementary School",
              address: "456 Education Street, Dela Paz",
              capacity: "500 families",
              facilities: ["Classrooms", "Restrooms", "Kitchen", "Water Supply"],
              contact: "(123) 456-7810",
            },
            {
              name: "Barangay Multi-Purpose Hall",
              address: "123 Dela Paz Street, Dela Paz",
              capacity: "200 families",
              facilities: ["Main Hall", "Stage Area", "Restrooms", "Generator"],
              contact: "(123) 456-7811",
            },
            {
              name: "Dela Paz High School Gymnasium",
              address: "789 Sports Avenue, Dela Paz",
              capacity: "300 families",
              facilities: ["Gymnasium", "Bleachers", "Restrooms", "Storage"],
              contact: "(123) 456-7812",
            },
          ].map((center, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-[#C4C4C4]">
              <h3 className="text-lg font-bold mb-2 text-[#333333] font-poppins">{center.name}</h3>
              <div className="space-y-2 text-sm">
                <div className="flex items-start gap-2">
                  <MapPin size={16} className="text-[#0E58D8] mt-0.5 flex-shrink-0" />
                  <span className="text-[#333333]">{center.address}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users size={16} className="text-[#0E58D8]" />
                  <span className="text-[#333333]">Capacity: {center.capacity}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone size={16} className="text-[#0E58D8]" />
                  <a href={`tel:${center.contact.replace(/[^\d]/g, "")}`} className="text-[#0E58D8] hover:underline">
                    {center.contact}
                  </a>
                </div>
                <div>
                  <p className="font-medium text-[#333333] mb-1">Available Facilities:</p>
                  <ul className="list-disc list-inside text-[#666666] ml-2">
                    {center.facilities.map((facility, idx) => (
                      <li key={idx}>{facility}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Disaster Preparedness Tips */}
      <section>
        <h2 className="text-2xl font-bold mb-8 text-[#333333] font-poppins">Disaster Preparedness Tips</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Typhoon */}
          <div className="bg-blue-50 border-2 border-blue-200 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4 text-blue-800 font-poppins">🌪️ Typhoon Preparedness</h3>
            <ul className="space-y-2 text-[#333333] text-sm">
              <li>• Monitor weather updates regularly</li>
              <li>• Secure loose objects around your home</li>
              <li>• Stock up on food, water, and medicines</li>
              <li>• Prepare flashlights and batteries</li>
              <li>• Know your evacuation route</li>
              <li>• Keep important documents in waterproof bags</li>
            </ul>
          </div>

          {/* Earthquake */}
          <div className="bg-yellow-50 border-2 border-yellow-200 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4 text-yellow-800 font-poppins">🏠 Earthquake Safety</h3>
            <ul className="space-y-2 text-[#333333] text-sm">
              <li>• Drop, Cover, and Hold On during shaking</li>
              <li>• Stay away from windows and heavy objects</li>
              <li>• If outdoors, move away from buildings</li>
              <li>• After shaking stops, check for injuries</li>
              <li>• Be prepared for aftershocks</li>
              <li>• Have an emergency kit ready</li>
            </ul>
          </div>

          {/* Flood */}
          <div className="bg-green-50 border-2 border-green-200 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4 text-green-800 font-poppins">🌊 Flood Safety</h3>
            <ul className="space-y-2 text-[#333333] text-sm">
              <li>• Move to higher ground immediately</li>
              <li>• Avoid walking in moving water</li>
              <li>• Don't drive through flooded roads</li>
              <li>• Turn off utilities if instructed</li>
              <li>• Listen to emergency broadcasts</li>
              <li>• Stay away from downed power lines</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Emergency Kit Checklist */}
      <section className="mt-16">
        <h2 className="text-2xl font-bold mb-8 text-[#333333] font-poppins">Emergency Kit Checklist</h2>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-[#C4C4C4]">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-4 text-[#333333] font-poppins">Essential Items</h3>
              <ul className="space-y-2 text-[#333333]">
                <li>✓ Water (1 gallon per person per day for 3 days)</li>
                <li>✓ Non-perishable food (3-day supply)</li>
                <li>✓ Battery-powered or hand crank radio</li>
                <li>✓ Flashlight and extra batteries</li>
                <li>✓ First aid kit</li>
                <li>✓ Whistle for signaling help</li>
                <li>✓ Dust masks and plastic sheeting</li>
                <li>✓ Moist towelettes and garbage bags</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4 text-[#333333] font-poppins">Important Documents</h3>
              <ul className="space-y-2 text-[#333333]">
                <li>✓ Copies of important documents in waterproof container</li>
                <li>✓ Emergency contact information</li>
                <li>✓ Cash and credit cards</li>
                <li>✓ Prescription medications</li>
                <li>✓ Cell phone with chargers</li>
                <li>✓ Family and emergency contact info</li>
                <li>✓ Local maps</li>
                <li>✓ Manual can opener</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
