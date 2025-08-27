import { useState } from "react"
import { Button } from "@/components/ui/enhanced-button"
import { Input } from "@/components/ui/input"
import { Mail, CheckCircle2, Loader2 } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

const Waitlist = () => {
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
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
    setIsSubmitted(true)
    
    toast({
      title: "Welcome to Kzaal! 🎉",
      description: "You've been added to our exclusive waitlist. We'll be in touch soon!",
    })
  }

  return (
    <section id="waitlist" className="py-24 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="glass-card glass-highlight rounded-3xl p-8 md:p-12 text-center">
          {!isSubmitted ? (
            <>
              {/* Header */}
              <div className="mb-8">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-4">
                  Join the <span className="gradient-text">Waitlist</span>
                </h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Be among the first to experience Kzaal. Get exclusive early access, 
                  special pricing, and priority support.
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="max-w-md mx-auto">
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

              {/* Benefits */}
              <div className="grid md:grid-cols-3 gap-6 mt-12 text-sm">
                <div className="flex items-center justify-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-accent" />
                  <span>Early Access</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-accent" />
                  <span>Exclusive Pricing</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-accent" />
                  <span>Priority Support</span>
                </div>
              </div>

              {/* Social Proof */}
              <div className="mt-8 text-sm text-muted-foreground">
                Join <span className="text-accent font-semibold">10,000+</span> innovators already on the list
              </div>
            </>
          ) : (
            /* Success State */
            <div className="animate-fade-in">
              <div className="w-20 h-20 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-10 h-10 text-accent" />
              </div>
              <h2 className="text-4xl font-bold mb-4">
                Welcome to <span className="gradient-text">Kzaal</span>!
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                You're now on our exclusive waitlist. We'll notify you as soon as 
                early access becomes available.
              </p>
              <div className="glass-card bg-accent/10 border-accent/20 rounded-lg p-6 max-w-md mx-auto">
                <h3 className="font-semibold mb-2">What happens next?</h3>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• You'll receive a confirmation email shortly</li>
                  <li>• Get notified when we launch early access</li>
                  <li>• Receive exclusive updates and behind-the-scenes content</li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default Waitlist