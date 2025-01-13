import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Transforming Challenges Into Opportunities</h1>
        <p className="text-xl md:text-2xl mb-8">Your Trusted Partner in Business Consulting</p>
        <div className="space-x-4">
          <Button asChild variant="secondary" size="lg">
            <Link href="#about">Learn More</Link>
          </Button>
          <Button asChild size="lg">
            <Link href="/contact">Get Started</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

