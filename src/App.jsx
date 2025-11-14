import React from 'react'
import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'
import { ArrowRight, PlayCircle, Truck, Radar, BarChart3, Users, Shield, Activity } from 'lucide-react'
import './index.css'

function Stat({ label, value }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="backdrop-blur bg-white/10 border border-white/10 rounded-xl p-4 shadow-lg shadow-purple-500/10"
    >
      <p className="text-xs uppercase tracking-wider text-purple-200/80">{label}</p>
      <p className="text-2xl font-semibold text-white mt-1">{value}</p>
    </motion.div>
  )
}

function Feature({ icon: Icon, title, desc }) {
  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.02 }}
      className="group relative rounded-2xl p-6 border border-white/10 backdrop-blur bg-white/5 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-cyan-500/10 pointer-events-none" />
      <div className="relative z-10 flex items-center gap-3">
        <div className="p-2.5 rounded-lg bg-gradient-to-br from-purple-600/40 to-cyan-600/40 border border-white/10">
          <Icon className="size-5 text-white" />
        </div>
        <div>
          <h3 className="text-white font-semibold">{title}</h3>
          <p className="text-sm text-white/70 mt-1">{desc}</p>
        </div>
      </div>
    </motion.div>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#0b0121] via-[#0a0824] to-[#05020f] text-white">
      {/* Hero */}
      <header className="relative">
        <div className="absolute inset-0">
          {/* Spline 3D hero */}
          <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>
        <div className="relative z-10 pointer-events-none">
          {/* Gradient overlay to enhance readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-[#05020f] pointer-events-none" />
          <div className="max-w-7xl mx-auto px-6 pt-24 pb-12">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs bg-white/10 border border-white/10 backdrop-blur">LogiTrack</span>
              <h1 className="mt-4 text-4xl sm:text-6xl font-extrabold leading-tight tracking-tight">
                Next-generation Logistics
              </h1>
              <p className="mt-4 text-white/80 text-lg">
                Streamline logistics operations with real-time visibility across shipments, drivers, warehouses, and fleet.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a href="/app" className="pointer-events-auto inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-semibold shadow-[0_0_30px_rgba(168,85,247,0.35)] hover:opacity-90 transition">
                  Get Started <ArrowRight className="size-4" />
                </a>
                <a href="/demo" className="pointer-events-auto inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-white/20 bg-white/10 hover:bg-white/20 text-white font-semibold">
                  <PlayCircle className="size-5" /> View Demo
                </a>
              </div>
            </motion.div>

            {/* Animated stats */}
            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
              <Stat label="Active Shipments" value="2,450+" />
              <Stat label="Completed Deliveries" value="12,890" />
              <Stat label="Fleet Vehicles" value="156" />
              <Stat label="Delivery Staff" value="89" />
            </div>
          </div>
        </div>
      </header>

      {/* Features */}
      <section className="relative z-10 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-4">
            <Feature icon={Truck} title="Shipment Tracking" desc="End-to-end visibility with live route updates and checkpoints." />
            <Feature icon={Users} title="Driver Management" desc="Profiles, availability and assignment workflows." />
            <Feature icon={Activity} title="Warehouse Dashboard" desc="Stock, capacity and location insights at a glance." />
            <Feature icon={BarChart3} title="Analytics & Reports" desc="Trends, status breakdowns and utilization." />
            <Feature icon={Radar} title="Live Updates" desc="WebSocket powered vehicle and shipment event stream." />
            <Feature icon={Shield} title="Role-Based Access" desc="Admin, manager, driver and staff views." />
          </div>

          {/* CTA */}
          <div className="mt-16 text-center">
            <h2 className="text-2xl md:text-3xl font-bold">Ready to Transform Your Logistics?</h2>
            <a href="/app" className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-semibold shadow-[0_0_30px_rgba(168,85,247,0.35)] hover:opacity-90 transition">
              Start Free Trial <ArrowRight className="size-4" />
            </a>
          </div>

          {/* Footer */}
          <footer className="mt-20 border-t border-white/10 pt-8 pb-12 text-white/70 text-sm">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <p>© {new Date().getFullYear()} LogiTrack. All rights reserved.</p>
              <div className="flex items-center gap-6">
                <a href="#" className="hover:text-white">Company</a>
                <a href="#" className="hover:text-white">Support</a>
                <a href="#" className="hover:text-white">Privacy</a>
              </div>
            </div>
          </footer>
        </div>
      </section>
    </div>
  )
}
