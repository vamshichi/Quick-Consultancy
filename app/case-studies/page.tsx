import CaseStudy from './components/CaseStudy'

const caseStudies = [
  {
    id: 1,
    title: "Revitalizing a Tech Startup",
    client: "TechNova Solutions",
    problem: "TechNova was struggling with market penetration and user acquisition for their innovative app.",
    solution: "We developed a comprehensive market strategy and optimized their product for better user experience.",
    result: "200% increase in user base within 6 months and successful Series A funding round.",
    image: "/placeholder.svg?height=400&width=600"
  },
  {
    id: 2,
    title: "Financial Turnaround for Retail Chain",
    client: "GreenGrocer Co.",
    problem: "GreenGrocer was facing declining profits and inefficient operations across their 50 stores.",
    solution: "We implemented a new inventory management system and optimized their supply chain.",
    result: "30% reduction in operational costs and 25% increase in profit margins within one year.",
    image: "/placeholder.svg?height=400&width=600"
  },
  {
    id: 3,
    title: "Digital Transformation for Traditional Manufacturer",
    client: "Heritage Crafts Inc.",
    problem: "Heritage Crafts was losing market share due to outdated processes and lack of online presence.",
    solution: "We guided their digital transformation, including e-commerce integration and modern marketing strategies.",
    result: "50% increase in sales within the first year and successful expansion into international markets.",
    image: "/placeholder.svg?height=400&width=600"
  }
]

export default function CaseStudiesPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center">Our Success Stories</h1>
          <div className="space-y-20">
            {caseStudies.map((study, index) => (
              <CaseStudy 
                key={study.id}
                {...study}
                reverse={index % 2 !== 0}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

