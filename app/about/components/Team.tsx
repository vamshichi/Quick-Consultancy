import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const teamMembers = [
  {
    name: "Jane Doe",
    role: "CEO & Founder",
    bio: "With over 20 years of experience in business strategy, Jane leads our team with vision and expertise.",
    image: "/placeholder.svg?height=300&width=300"
  },
  {
    name: "John Smith",
    role: "Chief Financial Officer",
    bio: "John's financial acumen has helped numerous businesses optimize their financial strategies and growth.",
    image: "/placeholder.svg?height=300&width=300"
  },
  {
    name: "Emily Brown",
    role: "Head of Marketing",
    bio: "Emily's innovative marketing strategies have transformed brands and driven remarkable growth for our clients.",
    image: "/placeholder.svg?height=300&width=300"
  }
]

export default function Team() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Meet the Team</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <Card key={member.name}>
              <CardHeader>
                <Image
                  src={member.image}
                  alt={member.name}
                  width={300}
                  height={300}
                  className="rounded-full mx-auto mb-4"
                />
                <CardTitle className="text-center">{member.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-gray-600 mb-4">{member.role}</p>
                <p className="text-center">{member.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

