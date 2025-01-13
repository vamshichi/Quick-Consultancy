'use server'

import { z } from 'zod'

const formSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(10),
  subject: z.string().min(5),
  message: z.string().min(10),
})

export async function submitContactForm(formData: z.infer<typeof formSchema>) {
  const result = formSchema.safeParse(formData)

  if (!result.success) {
    throw new Error('Invalid form data')
  }

  // Here you would typically send an email or save to a database
  // For this example, we'll just log the data and return a success message
  console.log('Form submission:', result.data)

  // Simulate a delay
  await new Promise(resolve => setTimeout(resolve, 1000))

  return { success: true, message: 'Form submitted successfully' }
}

