import Link from 'next/link'

export default function Header() {
  return (
    <header className="flex items-center justify-center w-full p-2">
      <nav className="flex gap-6 justify-center text-sm">
        <Link href="/" className="hover:underline">Index</Link>
        <Link href="/about" className="hover:underline">About</Link>
        <Link href="/blog" className="hover:underline">Blog</Link>
        <Link href="/work" className="hover:underline">Work</Link>
        <Link href="/now" className="hover:underline">Now</Link>
      </nav>
    </header>
  )
}