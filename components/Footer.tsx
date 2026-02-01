import Link from "next/link";

export default function Footer() {
    return (
      <footer className="border-t bg-background">
        <div className="container mx-auto px-4 py-10">
          
          {/* Top Section */}
          <div className="grid gap-8 md:grid-cols-4">
            
            {/* Brand */}
            <div>
              <h2 className="text-lg font-bold">MyApp</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Building modern web experiences with Next.js & shadcn/ui.
              </p>
            </div>

            {/* Links */}
            <div>
              <h3 className="text-sm font-semibold">Product</h3>
              <ul className="mt-3 space-y-2 text-sm">
                <li><Link href="#">Features</Link></li>
                <li><Link href="#">Pricing</Link></li>
                <li><Link href="#">Docs</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold">Company</h3>
              <ul className="mt-3 space-y-2 text-sm">
                <li><Link href="#">About</Link></li>
                <li><Link href="#">Careers</Link></li>
                <li><Link href="#">Contact</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold">Legal</h3>
              <ul className="mt-3 space-y-2 text-sm">
                <li><Link href="#">Privacy Policy</Link></li>
                <li><Link href="#">Terms of Service</Link></li>
              </ul>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t pt-6 md:flex-row">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} MyApp. All rights reserved.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4">
              <Link href="#" aria-label="Twitter">🐦</Link>
              <Link href="#" aria-label="GitHub">🐙</Link>
              <Link href="#" aria-label="LinkedIn">💼</Link>
            </div>
          </div>

        </div>
      </footer>
    )
}