import { Disc3, Gamepad2, Globe, Send } from 'lucide-react'

const footerLinks = ['About', 'Contact', 'Privacy Policy']

function SiteFooter() {
  return (
    <footer className="border-t border-orange-300/20 py-10">
      <div className="flex flex-col items-center justify-between gap-5 text-sm text-orange-200/85 md:flex-row">
        <p className="font-['Rajdhani'] text-lg font-semibold text-white">Battle League</p>

        <nav className="flex items-center gap-5">
          {footerLinks.map((link) => (
            <a key={link} href="#" className="transition hover:text-orange-100">
              {link}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a href="#" className="rounded-full border border-orange-300/35 p-2 transition hover:bg-orange-400/15">
            <Gamepad2 className="h-4 w-4" />
          </a>
          <a href="#" className="rounded-full border border-orange-300/35 p-2 transition hover:bg-orange-400/15">
            <Send className="h-4 w-4" />
          </a>
          <a href="#" className="rounded-full border border-orange-300/35 p-2 transition hover:bg-orange-400/15">
            <Globe className="h-4 w-4" />
          </a>
          <a href="#" className="rounded-full border border-orange-300/35 p-2 transition hover:bg-orange-400/15">
            <Disc3 className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default SiteFooter