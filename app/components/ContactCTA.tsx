import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function ContactCTA() {
  return (
    <section className="py-20 bg-blue-600 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
        <p className="text-xl mb-8">Get in touch with us today and let's start your journey to success.</p>
        <Button asChild size="lg" variant="secondary">
          <Link href="/contact">Contact Us</Link>
        </Button>
      </div>
    </section>
  )
}

