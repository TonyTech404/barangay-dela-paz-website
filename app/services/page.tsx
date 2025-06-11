import Link from "next/link"
import { Download, Clock, FileText, FileCheck, FileBadge, FileWarning } from "lucide-react"

export default function ServicesPage() {
  return (
    <div className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 text-[#333333] font-poppins">Barangay Services</h1>
        <p className="text-lg text-[#666666] max-w-3xl mx-auto">
          Information on how to request documents and access services provided by Barangay Dela Paz.
        </p>
      </div>

      {/* Service Hours */}
      <section className="mb-12 bg-[#E8F0FE] p-6 rounded-lg">
        <div className="flex flex-col md:flex-row items-center gap-4">
          <Clock size={48} className="text-[#0E58D8]" />
          <div>
            <h2 className="text-xl font-bold mb-2 text-[#333333] font-poppins">Service Hours</h2>
            <p className="text-[#333333]">
              <strong>Monday to Friday:</strong> 8:00 AM - 5:00 PM
              <br />
              <strong>Saturday:</strong> 8:00 AM - 12:00 PM
              <br />
              <strong>Sunday & Holidays:</strong> Closed
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-8 text-[#333333] font-poppins border-b border-[#C4C4C4] pb-2">
          Available Services
        </h2>

        <div className="grid gap-8">
          {/* Barangay Clearance */}
          <div className="bg-white p-6 rounded-lg shadow-sm border border-[#C4C4C4]">
            <div className="flex items-start gap-4">
              <FileText size={32} className="text-[#0E58D8] flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold mb-2 text-[#333333] font-poppins">Barangay Clearance</h3>
                <p className="text-[#333333] mb-4">
                  A document certifying that the resident has no derogatory record in the barangay. This is often
                  required for employment, scholarship applications, and other official transactions.
                </p>

                <div className="mb-4">
                  <h4 className="font-semibold mb-2">Requirements:</h4>
                  <ul className="list-disc list-inside space-y-1 text-[#333333]">
                    <li>Valid ID (with address in Barangay Dela Paz)</li>
                    <li>Completed application form</li>
                    <li>Payment of processing fee (₱50.00)</li>
                  </ul>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold mb-2">Processing Time:</h4>
                  <p className="text-[#333333]">15-30 minutes (if no issues)</p>
                </div>

                <div className="flex flex-wrap gap-3">
                  <Link
                    href="/forms/barangay-clearance.pdf"
                    className="inline-flex items-center gap-2 bg-[#0E58D8] hover:bg-blue-700 text-white py-2 px-4 rounded-md transition-colors"
                  >
                    <Download size={16} />
                    Download Form
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Certificate of Residency */}
          <div className="bg-white p-6 rounded-lg shadow-sm border border-[#C4C4C4]">
            <div className="flex items-start gap-4">
              <FileCheck size={32} className="text-[#0E58D8] flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold mb-2 text-[#333333] font-poppins">Certificate of Residency</h3>
                <p className="text-[#333333] mb-4">
                  A document certifying that the individual is a resident of Barangay Dela Paz. This is often required
                  for school enrollment, voter registration, and other official purposes.
                </p>

                <div className="mb-4">
                  <h4 className="font-semibold mb-2">Requirements:</h4>
                  <ul className="list-disc list-inside space-y-1 text-[#333333]">
                    <li>Valid ID (with address in Barangay Dela Paz)</li>
                    <li>Completed application form</li>
                    <li>Payment of processing fee (₱50.00)</li>
                  </ul>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold mb-2">Processing Time:</h4>
                  <p className="text-[#333333]">15-30 minutes (if no issues)</p>
                </div>

                <div className="flex flex-wrap gap-3">
                  <Link
                    href="/forms/certificate-of-residency.pdf"
                    className="inline-flex items-center gap-2 bg-[#0E58D8] hover:bg-blue-700 text-white py-2 px-4 rounded-md transition-colors"
                  >
                    <Download size={16} />
                    Download Form
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Certificate of Indigency */}
          <div className="bg-white p-6 rounded-lg shadow-sm border border-[#C4C4C4]">
            <div className="flex items-start gap-4">
              <FileBadge size={32} className="text-[#0E58D8] flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold mb-2 text-[#333333] font-poppins">Certificate of Indigency</h3>
                <p className="text-[#333333] mb-4">
                  A document certifying that the individual belongs to a low-income household. This is often required
                  for medical assistance, educational assistance, and other social services.
                </p>

                <div className="mb-4">
                  <h4 className="font-semibold mb-2">Requirements:</h4>
                  <ul className="list-disc list-inside space-y-1 text-[#333333]">
                    <li>Valid ID (with address in Barangay Dela Paz)</li>
                    <li>Completed application form</li>
                    <li>Proof of income or unemployment (if applicable)</li>
                    <li>Free of charge</li>
                  </ul>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold mb-2">Processing Time:</h4>
                  <p className="text-[#333333]">1-2 days (requires verification)</p>
                </div>

                <div className="flex flex-wrap gap-3">
                  <Link
                    href="/forms/certificate-of-indigency.pdf"
                    className="inline-flex items-center gap-2 bg-[#0E58D8] hover:bg-blue-700 text-white py-2 px-4 rounded-md transition-colors"
                  >
                    <Download size={16} />
                    Download Form
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Business Permit */}
          <div className="bg-white p-6 rounded-lg shadow-sm border border-[#C4C4C4]">
            <div className="flex items-start gap-4">
              <FileWarning size={32} className="text-[#0E58D8] flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold mb-2 text-[#333333] font-poppins">Barangay Business Clearance</h3>
                <p className="text-[#333333] mb-4">
                  A document required for businesses operating within the barangay. This is a prerequisite for obtaining
                  a business permit from the city or municipality.
                </p>

                <div className="mb-4">
                  <h4 className="font-semibold mb-2">Requirements:</h4>
                  <ul className="list-disc list-inside space-y-1 text-[#333333]">
                    <li>Valid ID of business owner</li>
                    <li>Completed application form</li>
                    <li>Proof of business address (lease contract, etc.)</li>
                    <li>Payment of processing fee (varies based on business type)</li>
                  </ul>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold mb-2">Processing Time:</h4>
                  <p className="text-[#333333]">1-3 days (requires inspection)</p>
                </div>

                <div className="flex flex-wrap gap-3">
                  <Link
                    href="/forms/business-clearance.pdf"
                    className="inline-flex items-center gap-2 bg-[#0E58D8] hover:bg-blue-700 text-white py-2 px-4 rounded-md transition-colors"
                  >
                    <Download size={16} />
                    Download Form
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fee Matrix */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-[#333333] font-poppins">Service Fee Matrix</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-[#0E58D8] text-white">
                <th className="border border-[#C4C4C4] px-4 py-2 text-left">Service</th>
                <th className="border border-[#C4C4C4] px-4 py-2 text-left">Regular Fee</th>
                <th className="border border-[#C4C4C4] px-4 py-2 text-left">Senior Citizen / PWD Fee</th>
                <th className="border border-[#C4C4C4] px-4 py-2 text-left">Processing Time</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white">
                <td className="border border-[#C4C4C4] px-4 py-2">Barangay Clearance</td>
                <td className="border border-[#C4C4C4] px-4 py-2">₱50.00</td>
                <td className="border border-[#C4C4C4] px-4 py-2">₱40.00</td>
                <td className="border border-[#C4C4C4] px-4 py-2">15-30 minutes</td>
              </tr>
              <tr className="bg-[#E8F0FE]">
                <td className="border border-[#C4C4C4] px-4 py-2">Certificate of Residency</td>
                <td className="border border-[#C4C4C4] px-4 py-2">₱50.00</td>
                <td className="border border-[#C4C4C4] px-4 py-2">₱40.00</td>
                <td className="border border-[#C4C4C4] px-4 py-2">15-30 minutes</td>
              </tr>
              <tr className="bg-white">
                <td className="border border-[#C4C4C4] px-4 py-2">Certificate of Indigency</td>
                <td className="border border-[#C4C4C4] px-4 py-2">Free</td>
                <td className="border border-[#C4C4C4] px-4 py-2">Free</td>
                <td className="border border-[#C4C4C4] px-4 py-2">1-2 days</td>
              </tr>
              <tr className="bg-[#E8F0FE]">
                <td className="border border-[#C4C4C4] px-4 py-2">Barangay Business Clearance</td>
                <td className="border border-[#C4C4C4] px-4 py-2">₱100.00 - ₱500.00</td>
                <td className="border border-[#C4C4C4] px-4 py-2">₱80.00 - ₱400.00</td>
                <td className="border border-[#C4C4C4] px-4 py-2">1-3 days</td>
              </tr>
              <tr className="bg-white">
                <td className="border border-[#C4C4C4] px-4 py-2">Barangay ID</td>
                <td className="border border-[#C4C4C4] px-4 py-2">₱100.00</td>
                <td className="border border-[#C4C4C4] px-4 py-2">₱80.00</td>
                <td className="border border-[#C4C4C4] px-4 py-2">1-2 days</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Online Request Process */}
      <section>
        <h2 className="text-2xl font-bold mb-6 text-[#333333] font-poppins">Online Request Process</h2>
        <div className="bg-white p-6 rounded-lg shadow-sm border border-[#C4C4C4]">
          <p className="text-[#333333] mb-4">
            For your convenience, you can now request some documents online by following these steps:
          </p>

          <ol className="list-decimal list-inside space-y-4 text-[#333333]">
            <li className="pl-2">
              <span className="font-semibold">Download and fill out the appropriate form</span>
              <p className="mt-1 ml-6">Download the form from the links provided above and fill it out completely.</p>
            </li>
            <li className="pl-2">
              <span className="font-semibold">Scan or take clear photos of the requirements</span>
              <p className="mt-1 ml-6">Make sure all documents are clear and legible.</p>
            </li>
            <li className="pl-2">
              <span className="font-semibold">Email the documents</span>
              <p className="mt-1 ml-6">
                Send the completed form and requirements to{" "}
                <span className="text-[#0E58D8]">services@delapaz.gov.ph</span> with the subject line "Document Request
                - [Your Name]".
              </p>
            </li>
            <li className="pl-2">
              <span className="font-semibold">Wait for confirmation</span>
              <p className="mt-1 ml-6">
                You will receive an email confirmation with instructions on how to pay the processing fee and when to
                pick up your document.
              </p>
            </li>
            <li className="pl-2">
              <span className="font-semibold">Pick up your document</span>
              <p className="mt-1 ml-6">
                Visit the barangay hall on the scheduled date with your valid ID and payment receipt.
              </p>
            </li>
          </ol>

          <div className="mt-6 p-4 bg-[#E8F0FE] rounded-lg">
            <p className="text-[#333333] italic">
              Note: Not all services are available for online requests. Business permits and certificates requiring
              verification visits must be processed in person.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
