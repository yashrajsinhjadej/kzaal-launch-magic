import { Zap, Shield, Cpu, Rocket } from "lucide-react"

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Experience unprecedented speed with our cutting-edge optimization algorithms and infrastructure."
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-grade security protocols ensure your data is protected with military-level encryption."
  },
  {
    icon: Cpu,
    title: "AI-Powered",
    description: "Advanced machine learning capabilities that adapt and evolve with your needs automatically."
  },
  {
    icon: Rocket,
    title: "Scalable Growth",
    description: "Built to scale seamlessly from startup to enterprise without compromising performance."
  }
]

const Features = () => {
  return (
    <section id="features" className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Why Choose <span className="gradient-text">Kzaal</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover the powerful features that make Kzaal the preferred choice for industry leaders.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={feature.title} 
              className="glass-card glass-highlight rounded-lg p-6 hover-float group cursor-pointer"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="mb-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="glass-card glass-highlight rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Ready to Experience the Future?</h3>
            <p className="text-muted-foreground mb-6">
              Join thousands of innovators who are already using Kzaal to transform their workflow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="text-sm text-muted-foreground">
                🚀 No credit card required • ⚡ Instant setup • 🔒 100% secure
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features