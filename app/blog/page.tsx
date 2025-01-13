import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import BlogPostCard from './components/BlogPostCard'

const categories = ["All", "Strategy", "Finance", "Marketing", "HR", "Tech"]

const blogPosts = [
  {
    id: 1,
    title: "10 Strategies for Business Growth in 2025",
    category: "Strategy",
    summary: "Discover the top 10 strategies that will drive business growth in the coming year.",
    image: "/placeholder.svg?height=200&width=300",
    date: "2025-01-10"
  },
  {
    id: 2,
    title: "The Future of Financial Planning: AI and Machine Learning",
    category: "Finance",
    summary: "Explore how AI and machine learning are revolutionizing the financial planning industry.",
    image: "/placeholder.svg?height=200&width=300",
    date: "2025-01-15"
  },
  {
    id: 3,
    title: "Digital Marketing Trends to Watch in 2025",
    category: "Marketing",
    summary: "Stay ahead of the curve with these emerging digital marketing trends for 2025.",
    image: "/placeholder.svg?height=200&width=300",
    date: "2025-01-20"
  },
  {
    id: 4,
    title: "Building a High-Performance Team: Best Practices",
    category: "HR",
    summary: "Learn the secrets to building and maintaining a high-performance team in your organization.",
    image: "/placeholder.svg?height=200&width=300",
    date: "2025-01-25"
  },
  {
    id: 5,
    title: "The Impact of 5G on Business Technology",
    category: "Tech",
    summary: "Understand how 5G technology is set to transform business operations and customer experiences.",
    image: "/placeholder.svg?height=200&width=300",
    date: "2025-01-30"
  }
]

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center">Our Blog</h1>
          <Tabs defaultValue="All" className="w-full">
            <TabsList className="grid w-full grid-cols-3 md:grid-cols-6 mb-8">
              {categories.map((category) => (
                <TabsTrigger key={category} value={category}>{category}</TabsTrigger>
              ))}
            </TabsList>
            {categories.map((category) => (
              <TabsContent key={category} value={category}>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {blogPosts
                    .filter(post => category === "All" || post.category === category)
                    .map(post => (
                      <BlogPostCard key={post.id} post={post} />
                    ))
                  }
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>
    </main>
  )
}

