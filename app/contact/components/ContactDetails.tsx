import { Mail, Phone, MapPin } from 'lucide-react'

export default function ContactDetails() {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md mb-8">
      <h2 className="text-2xl font-bold mb-6">Contact Details</h2>
      <ul className="space-y-4">
        <li className="flex items-center">
          <Mail className="w-6 h-6 mr-4 text-blue-600" />
          <span>info@quickconsultancy.com</span>
        </li>
        <li className="flex items-center">
          <Phone className="w-6 h-6 mr-4 text-blue-600" />
          <span>+1 234 567 890</span>
        </li>
        <li className="flex items-center">
          <MapPin className="w-6 h-6 mr-4 text-blue-600" />
          <span>Example Street, City, Country</span>
        </li>
      </ul>
    </div>
  )
}

