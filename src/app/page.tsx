"use client"

import { Github, Twitter, NotebookText, Heart, Coffee } from "lucide-react"
import Link from 'next/link'
import { useState } from "react"
import { SiSolana } from "react-icons/si"
import Modal from "@/components/Modal"
import Image from "next/image"

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [copied, setCopied] = useState(false)
  const solanaAddress = "CVzTKtNwLouYs7ua2zMRshSS5LEKYUTE1mcwKqGXJcvP"

  const handleCopy = () => {
    navigator.clipboard.writeText(solanaAddress).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

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

      <div className="flex flex-wrap gap-4 my-6">
        <a href="https://github.com/Yuvraj-cyborg" className="inline-flex items-center px-4 py-1 border rounded hover:bg-gray-50 text-sm gap-2">
          <Github size={16}/>
          Code
        </a>
        <a href="/resume-new.pdf" className="inline-flex items-center px-4 py-1 border rounded hover:bg-gray-50 text-sm gap-2">
          <NotebookText size={16} />
          Resume
        </a>
        <a href="https://www.buymeacoffee.com/yuvrajbiswg" className="inline-flex items-center px-4 py-1 border rounded hover:bg-gray-50 text-sm gap-2">
          <Coffee size={16} />
          Buymecoffee
        </a>
        <a href="https://x.com/YuvrajBiswal3" className="inline-flex items-center px-4 py-1 border rounded hover:bg-gray-50 text-sm gap-2">
          <Twitter size={16} />
          Twitter
        </a>
        <button
          onClick={handleCopy}
          className="inline-flex items-center px-4 py-1 border rounded hover:bg-gray-50 text-sm gap-2"
        >
          <SiSolana size={16}/>
          {copied ? "Copied!" : "Solana"}
        </button>
        <button
          onClick={() => setIsModalOpen(true)}
          className="inline-flex items-center px-4 py-1 border rounded hover:bg-gray-50 text-sm gap-2"
        >
          <Heart size={16} />
          Support Me
        </button>
      </div>

      <h2 className="mt-12 mb-6">Featured Posts</h2>
      <div className="space-y-4">
        <article className="space-y-2 flex flex-row gap-4">
          <h3 className="text-md font-normal hover:text-gray-600">
            <Link href="/blog/hello-world">
              Memory Safety in Rust: Ownership, Borrowing & References
            </Link>
          </h3>

          <time className="text-sm text-gray-500">May 07 2025</time>
        </article>
      </div>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div className="text-center">
          <h3 className="text-lg font-medium mb-4">Support Me</h3>
          <p className="text-sm text-gray-600 mb-4">
            If you like my work, consider supporting me. It helps me to keep creating and maintaining open-source projects.
          </p>
          <div className="flex justify-center">
            <Image
              src="/upi-qr.jpeg"
              alt="UPI QR Code"
              width={200}
              height={200}
            />
          </div>
          <p className="text-xs text-gray-500 mt-2">Scan with any UPI app</p>
        </div>
      </Modal>
    </>
  )
}
