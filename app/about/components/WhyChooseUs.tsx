import { CheckCircle } from 'lucide-react'

const reasons = [
  "Experienced professionals",
  "Proven track record",
  "Tailored solutions"
]

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Why Choose Us</h2>
        <ul className="grid md:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <li key={index} className="flex items-center space-x-4">
              <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
              <span className="text-lg">{reason}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

