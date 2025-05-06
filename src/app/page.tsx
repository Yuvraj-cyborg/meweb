import { Github, Twitter, NotebookText } from "lucide-react"
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <h1>Yuvraj Biswal</h1>
      <br/>
      <p>
        I&apos;m a Computer Science student and web developer with hands-on experience in full-stack development,
        cloud infrastructure, and emerging tech like generative AI and Web3. I enjoy solving complex problems and building
        scalable, user-focused applications.
      </p>
      <br/>
      <p>
        This website is to showcase my work, thoughts and share my reasearch.
      </p>

      <div className="flex gap-4 my-6">
        <a href="https://github.com/Yuvraj-cyborg" className="inline-flex items-center px-4 py-1 border rounded hover:bg-gray-50 text-sm gap-2">
          <Github size={16}/>
          Code
        </a>
        <a href="/resume.pdf" className="inline-flex items-center px-4 py-1 border rounded hover:bg-gray-50 text-sm gap-2">
          <NotebookText size={16} />
          Resume
        </a>
        <a href="https://x.com/YuvrajBiswal3" className="inline-flex items-center px-4 py-1 border rounded hover:bg-gray-50 text-sm gap-2">
          <Twitter size={16} />
          Twitter
        </a>
      </div>

      <h2 className="mt-12 mb-6">Featured Posts</h2>
      <div className="space-y-4">
        <article className="space-y-2">
          <h3 className="text-lg font-medium hover:text-gray-600">
            <Link href="/blog/hello-world">
              Memory Safety in Rust: Ownership, Borrowing & References Explained
            </Link>
          </h3>
          <time className="text-sm text-gray-500">May 07, 2025</time>
          <p className="text-gray-700">Learn how Rust prevents memory errors at compile time through its unique ownership system</p>
        </article>
      </div>
    </>
  )
}