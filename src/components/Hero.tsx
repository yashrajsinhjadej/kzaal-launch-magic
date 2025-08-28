import { useState, useEffect } from "react"
import { Button } from "@/components/ui/enhanced-button"
import { Input } from "@/components/ui/input"
import { ArrowRight, Loader2 } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

const Hero = () => {
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0)
  const { toast } = useToast()

  const messages = [
    "i am going for the vacation for 15 days please handle the sales bro",
    "i am going through a breakup can you handle my poc see you after some time"
  ]

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessageIndex((prev) => (prev + 1) % messages.length)
    }, 4000) // Change message every 4 seconds

    return () => clearInterval(interval)
  }, [messages.length])

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
        <div className="max-w-4xl mx-auto animate-fade-in">
          {/* Company Name */}
          <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
            <span className="gradient-text text-glow font-orbitron font-black tracking-wider">
              Kzaal
            </span>
          </h1>

          {/* Animated Message */}
          <div className="mb-12">
            <p className="text-lg md:text-xl text-muted-foreground mb-4">
              <span className="text-foreground">hey kzaal</span>{" "}
              <span 
                key={currentMessageIndex}
                className="animate-fade-in text-accent"
              >
                {messages[currentMessageIndex]}
              </span>
            </p>
          </div>

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