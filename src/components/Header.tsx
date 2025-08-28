import { Button } from "@/components/ui/enhanced-button"
import kzaalLogo from "@/assets/kzaal-logo.png"

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-card glass-highlight border-x-0 border-t-0">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img src={kzaalLogo} alt="Kzaal Logo" className="w-8 h-8" />
            <div className="text-2xl font-bold gradient-text">
              Kzaal
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
              About
            </a>
            <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
              Features
            </a>
            <a href="#waitlist" className="text-muted-foreground hover:text-foreground transition-colors">
              Join Waitlist
            </a>
          </nav>

          {/* CTA Button */}
          <Button variant="glass" size="sm" className="hidden md:inline-flex">
            Get Early Access
          </Button>
        </div>
      </div>
    </header>
  )
}

export default Header