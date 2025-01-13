import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface CaseStudyProps {
  title: string
  client: string
  problem: string
  solution: string
  result: string
  image: string
  reverse?: boolean
}

export default function CaseStudy({ title, client, problem, solution, result, image, reverse = false }: CaseStudyProps) {
  return (
    <Card className={`overflow-hidden ${reverse ? 'md:flex-row-reverse' : ''} md:flex`}>
      <div className="md:w-1/2">
        <Image
          src={image}
          alt={`Case study for ${client}`}
          width={600}
          height={400}
          className="w-full h-full object-cover"
        />
      </div>
      <CardContent className="md:w-1/2 p-8">
        <CardHeader className="p-0 mb-4">
          <CardTitle className="text-2xl font-bold mb-2">{title}</CardTitle>
          <p className="text-xl text-blue-600">{client}</p>
        </CardHeader>
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-lg mb-2">Challenge:</h3>
            <p className="text-gray-600">{problem}</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-2">Our Approach:</h3>
            <p className="text-gray-600">{solution}</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-2">Results:</h3>
            <p className="text-gray-600">{result}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

