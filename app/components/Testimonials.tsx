import Image from 'next/image'

const testimonials = [
  {
    quote: "Quick Consultancy transformed our business strategy, leading to a 30% increase in revenue.",
    author: "Jane Doe",
    company: "Tech Innovators Inc",
    logo: "/placeholder.svg"
  },
  {
    quote: "Their financial planning services helped us optimize our resources and expand our operations",
    author: "John Smith",
    company: "Global Enterprises Ltd.",
    logo: "/placeholder.svg"
  }
]

export default function Testimonials() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-lg mb-4">"{testimonial.quote}"</p>
              <div className="flex items-center">
                <Image 
                  src={testimonial.logo} 
                  alt={`${testimonial.company} logo`} 
                  width={50} 
                  height={50} 
                  className="mr-4"
                />
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-gray-600">{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

