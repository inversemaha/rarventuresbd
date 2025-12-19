import { motion } from "framer-motion";
import { CheckCircle2, Shield, Clock, Users } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Quality Assurance",
    description: "Every project undergoes rigorous quality checks ensuring premium standards.",
  },
  {
    icon: Clock,
    title: "Timely Delivery",
    description: "We pride ourselves on delivering projects on schedule, every time.",
  },
  {
    icon: Users,
    title: "Customer First",
    description: "Dedicated support team available throughout your property journey.",
  },
];

const highlights = [
  "RAJUK Approved Projects",
  "Premium Quality Materials",
  "Prime Location Properties",
  "Flexible Payment Plans",
  "After Sales Support",
  "Legal Documentation Support",
];

export const About = () => {
  return (
    <section id="about" className="py-24 bg-secondary/30 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
              About Us
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-semibold text-foreground mb-6">
              Building Dreams,
              <br />
              <span className="text-gradient">Creating Legacies</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              With over 25 years of excellence in real estate development, we have established 
              ourselves as a trusted name in Bangladesh's property sector. Our commitment to 
              quality, transparency, and customer satisfaction sets us apart.
            </p>

            {/* Highlights Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center gap-2"
                >
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground/80 text-sm">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Content - Feature Cards */}
          <div className="space-y-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="group p-6 bg-card rounded-2xl border border-border/50 hover:border-primary/30 transition-all duration-300 shadow-card hover:shadow-gold"
              >
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-serif font-semibold text-foreground mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
