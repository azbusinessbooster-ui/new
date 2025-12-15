import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Globe, PhoneCall, BarChart3, ShieldCheck } from "lucide-react";

export default function BusinessBoosterWebsite() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-slate-100">
      {/* Header */}
      <header className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
        <h1 className="text-2xl font-semibold tracking-wide">Business Booster</h1>
        <nav className="hidden md:flex gap-8 text-sm text-slate-300">
          <a href="#services" className="hover:text-white">Services</a>
          <a href="#process" className="hover:text-white">Process</a>
          <a href="#about" className="hover:text-white">About</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </nav>
      </header>

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Grow Your Business with
            <span className="block text-indigo-400">Smart Automation & Design</span>
          </h2>
          <p className="mt-6 text-slate-300 max-w-xl">
            Business Booster helps companies look professional, attract more clients,
            and increase revenue through professional websites, automated calls, and
            complete marketing & social media management.
          </p>
          <div className="mt-8 flex gap-4">
            <Button className="rounded-2xl px-6 py-5 text-base">Get Started</Button>
            <Button variant="outline" className="rounded-2xl px-6 py-5 text-base">
              Free Consultation
            </Button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-slate-900/60 rounded-3xl shadow-2xl p-10"
        >
          <p className="text-lg text-slate-200">
            Websites. Automation. Marketing.
          </p>
          <p className="mt-4 text-slate-400">
            Everything your business needs to scale — in one professional solution.
          </p>
        </motion.div>
      </section>

      {/* Services */}
      <section id="services" className="max-w-7xl mx-auto px-6 py-24">
        <h3 className="text-3xl font-semibold mb-12">Our Services</h3>
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="rounded-2xl bg-slate-900/70">
            <CardContent className="p-8">
              <Globe className="h-10 w-10 text-indigo-400" />
              <h4 className="mt-6 text-xl font-medium">Website Development</h4>
              <p className="mt-3 text-slate-400">
                Modern, fast, and professional websites designed to build trust and
                convert visitors into clients.
              </p>
            </CardContent>
          </Card>
          <Card className="rounded-2xl bg-slate-900/70">
            <CardContent className="p-8">
              <PhoneCall className="h-10 w-10 text-indigo-400" />
              <h4 className="mt-6 text-xl font-medium">Automated Calls</h4>
              <p className="mt-3 text-slate-400">
                Smart call automation that captures leads, follows up instantly,
                and never misses a customer.
              </p>
            </CardContent>
          </Card>
          <Card className="rounded-2xl bg-slate-900/70">
            <CardContent className="p-8">
              <BarChart3 className="h-10 w-10 text-indigo-400" />
              <h4 className="mt-6 text-xl font-medium">Marketing & Social Media</h4>
              <p className="mt-3 text-slate-400">
                Setup marketing strategy, and ongoing maintenance to grow visibility,
                engagement, and revenue.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="bg-slate-900/50 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-3xl font-semibold mb-12">How It Works</h3>
          <div className="grid md:grid-cols-3 gap-8 items-center">
            {/* Step 1 */}
            <Card className="rounded-2xl bg-slate-900/70">
              <CardContent className="p-8 text-center">
                <p className="text-indigo-400 font-semibold mb-2">Step 1</p>
                <h4 className="text-xl font-medium">Initial Contact</h4>
                <p className="mt-3 text-slate-400 text-sm">
                  Reach out to our team with your goals, questions, or requirements.
                  We’ll respond promptly and schedule a consultation to understand
                  your business needs.
                </p>
              </CardContent>
            </Card>

            {/* Step 2 */}
            <Card className="rounded-2xl bg-slate-900/70">
              <CardContent className="p-8 text-center">
                <p className="text-indigo-400 font-semibold mb-2">Step 2</p>
                <h4 className="text-xl font-medium">Strategy & Setup</h4>
                <p className="mt-3 text-slate-400 text-sm">
                  Our team designs and configures the optimal solution, selecting
                  the right tools, automation, and marketing approach tailored
                  specifically to your objectives.
                </p>
              </CardContent>
            </Card>

            {/* Step 3 */}
            <Card className="rounded-2xl bg-slate-900/70">
              <CardContent className="p-8 text-center">
                <p className="text-indigo-400 font-semibold mb-2">Step 3</p>
                <h4 className="text-xl font-medium">Launch & Integration</h4>
                <p className="mt-3 text-slate-400 text-sm">
                  Once approved by your company, we deploy and integrate everything
                  seamlessly into your business operations, ensuring a smooth and
                  professional launch.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="max-w-7xl mx-auto px-6 py-24">
        <h3 className="text-3xl font-semibold mb-6">Why Business Booster</h3>
        <p className="max-w-3xl text-slate-300">
          We help businesses look professional, operate efficiently, and grow
          faster. By combining clean design, automation, and marketing expertise,
          Business Booster becomes your long-term growth partner.
        </p>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-slate-900/70 py-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-semibold">Ready to Boost Your Business?</h3>
          <p className="mt-4 text-slate-300">
            Contact our team to discuss your goals and discover how we can help
            your business grow with professional systems and strategies.
          </p>

          <div className="mt-10 bg-slate-900/80 rounded-2xl p-8 shadow-lg inline-block">
            <p className="text-lg font-medium text-slate-200">
              Send us an email or message
            </p>
            <p className="mt-4 text-slate-400">
              Email: <span className="text-slate-200">azbusinessbooster@gmail.com</span>
            </p>
            <p className="mt-2 text-slate-400">
              Phone: <span className="text-slate-200">602-245-8245</span>
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} BusinessBooster.com · All Rights Reserved
      </footer>
    </div>
  );
}
