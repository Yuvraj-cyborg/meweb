import { getPostBySlug, getAllPosts } from '@/lib/blog'
import { notFound } from 'next/navigation'
import Comments from '@/components/Comments'

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug)
  
  if (!post) {
    notFound()
  }

  return (
    <article className="prose prose-neutral max-w-none prose-pre:p-0 mb-8">
      <h1>{post.title}</h1>
      <time className="text-sm text-gray-500 block mb-8">{post.date}</time>
      {post.content}
      <Comments />
    </article>
  )
}