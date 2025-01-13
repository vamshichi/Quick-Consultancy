import ServiceSection from './components/ServiceSection'

const services = [
  {
    title: "Business Strategy",
    subheading: "Strategize for Success.",
    details: "Market analysis, business growth plans, competitive positioning.",
    icon: "BarChart3"
  },
  {
    title: "Financial Planning",
    subheading: "Maximize Your Financial Potential.",
    details: "Budgeting, risk assessment, investment planning.",
    icon: "PiggyBank"
  },
  {
    title: "Marketing & Branding",
    subheading: "Boost Your Brand Awareness.",
    details: "Digital marketing, brand strategy, campaign management.",
    icon: "Megaphone"
  },
  {
    title: "HR Management",
    subheading: "Build a Strong Team.",
    details: "Talent acquisition, training, performance management.",
    icon: "Users"
  },
  {
    title: "Technology Integration",
    subheading: "Leverage Technology for Growth.",
    details: "IT solutions, software implementation, automation.",
    icon: "Laptop"
  }
]

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center">Our Services</h1>
          <div className="space-y-20">
            {services.map((service, index) => (
              <ServiceSection 
                key={service.title}
                title={service.title}
                subheading={service.subheading}
                details={service.details}
                icon={service.icon}
                reverse={index % 2 !== 0}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

