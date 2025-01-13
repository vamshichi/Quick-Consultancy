import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface BlogPost {
  id: number
  title: string
  category: string
  summary: string
  image: string
  date: string
}

interface BlogPostCardProps {
  post: BlogPost
}

export default function BlogPostCard({ post }: BlogPostCardProps) {
  return (
    <Card className="flex flex-col h-full">
      <CardHeader className="p-0">
        <Image
          src={post.image}
          alt={post.title}
          width={300}
          height={200}
          className="w-full h-48 object-cover rounded-t-lg"
        />
      </CardHeader>
      <CardContent className="flex-grow p-6">
        <div className="text-sm text-blue-600 mb-2">{post.category}</div>
        <CardTitle className="text-xl mb-2">{post.title}</CardTitle>
        <p className="text-gray-600 mb-4">{post.summary}</p>
        <time className="text-sm text-gray-500">{new Date(post.date).toLocaleDateString()}</time>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Button asChild>
          <Link href={`/blog/${post.id}`}>Read More</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

