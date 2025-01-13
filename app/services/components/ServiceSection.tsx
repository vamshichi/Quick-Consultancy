import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart3, PiggyBank, Megaphone, Users, Laptop } from 'lucide-react'

interface ServiceSectionProps {
  title: string
  subheading: string
  details: string
  icon: string
  reverse?: boolean
}

const iconMap = {
  BarChart3,
  PiggyBank,
  Megaphone,
  Users,
  Laptop
}

export default function ServiceSection({ title, subheading, details, icon, reverse = false }: ServiceSectionProps) {
  const Icon = iconMap[icon as keyof typeof iconMap]

  return (
    <Card className={`overflow-hidden ${reverse ? 'md:flex-row-reverse' : ''} md:flex`}>
      <div className="md:w-1/2 bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-8 flex items-center justify-center">
        <Icon className="w-24 h-24" />
      </div>
      <CardContent className="md:w-1/2 p-8">
        <CardHeader className="p-0 mb-4">
          <CardTitle className="text-2xl font-bold mb-2">{title}</CardTitle>
          <p className="text-xl text-blue-600">{subheading}</p>
        </CardHeader>
        <p className="text-gray-600">{details}</p>
      </CardContent>
    </Card>
  )
}

