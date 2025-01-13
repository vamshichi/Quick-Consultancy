import ContactForm from './components/ContactForm'
import ContactDetails from './components/ContactDetails'
import Map from './components/Map'

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center">Contact Us</h1>
          <div className="grid md:grid-cols-2 gap-12">
            <ContactForm />
            <div>
              <ContactDetails />
              <Map />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

