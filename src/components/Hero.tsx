import { useState } from "react"
import { Button } from "@/components/ui/enhanced-button"
import { Input } from "@/components/ui/input"
import { ArrowRight, Loader2 } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

const Hero = () => {
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!email) {
      toast({
        title: "Email Required",
        description: "Please enter your email address to join the waitlist.",
        variant: "destructive"
      })
      return
    }

    if (!validateEmail(email)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive"
      })
      return
    }

    setIsLoading(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsLoading(false)
    setEmail("")
    
    toast({
      title: "Welcome to Kzaal! 🎉",
      description: "You've been added to our exclusive waitlist. We'll be in touch soon!",
    })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20">
      {/* Content */}
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-2xl mx-auto animate-fade-in">
          {/* Main Headline */}
          <h1 className="text-6xl md:text-8xl font-bold mb-12 leading-tight">
            hey{" "}
            <span className="gradient-text text-glow">
              kzaal
            </span>
          </h1>

          {/* Waitlist Form */}
          <form onSubmit={handleSubmit} className="max-w-md mx-auto mb-8">
            <div className="flex flex-col sm:flex-row gap-4">
              <Input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 h-12 bg-background/50 border-border/50 focus:border-primary"
                disabled={isLoading}
              />
              <Button 
                type="submit" 
                variant="hero" 
                size="lg"
                disabled={isLoading}
                className="h-12 px-8"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Joining...
                  </>
                ) : (
                  "Join Waitlist"
                )}
              </Button>
            </div>
          </form>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="glass" size="xl">
              Learn More
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero