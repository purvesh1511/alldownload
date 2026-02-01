import Image from "next/image";
import { Button } from "@/components/ui/button"
import Link from "next/link";

export default function Header() {
    return (
        <header className="w-full border-b">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        
        {/* Logo */}
        <Link href="/" className="text-xl font-bold">
          MyApp
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-sm font-medium hover:text-primary">
            Youtube
          </Link>
          <Link href="/facebook" className="text-sm font-medium hover:text-primary">
            Facebook
          </Link>
          <Link href="/vimeo" className="text-sm font-medium hover:text-primary">
            Vimeo
          </Link>
          <Link href="/linkedin" className="text-sm font-medium hover:text-primary">
            Linkedin
          </Link>
          <Link href="/about" className="text-sm font-medium hover:text-primary">
            About
          </Link>
          <Link href="/contact" className="text-sm font-medium hover:text-primary">
            Contact
          </Link>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <Button variant="ghost">Login</Button>
          <Button>Sign Up</Button>
        </div>

      </div>
    </header>
    )
}