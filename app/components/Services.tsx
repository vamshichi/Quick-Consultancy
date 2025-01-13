import { BarChart3, PiggyBank, Megaphone, Users, Laptop } from 'lucide-react'

const services = [
  { name: 'Business Strategy', icon: BarChart3 },
  { name: 'Financial Planning', icon: PiggyBank },
  { name: 'Marketing & Branding', icon: Megaphone },
  { name: 'HR Management', icon: Users },
  { name: 'Technology Integration', icon: Laptop },
]

export default function Services() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {services.map((service) => (
            <div key={service.name} className="flex flex-col items-center text-center">
              <service.icon className="w-12 h-12 mb-4 text-blue-600" />
              <h3 className="text-lg font-semibold">{service.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

