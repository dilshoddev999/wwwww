"use client"

import { motion } from "framer-motion"
import { Home, Gamepad2, Users, Zap, LogOut } from "lucide-react"
import { useState } from "react"

const menuItems = [
  { id: "home", label: "Bosh Sahifa", icon: Home },
  { id: "games", label: "Oʻyinlar", icon: Gamepad2 },
  { id: "community", label: "Jamoa", icon: Users },
  { id: "settings", label: "Sozlamalar", icon: Zap },
]

export function Sidebar() {
  const [active, setActive] = useState("home")

  return (
    <motion.aside
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      className="w-64 border-r border-border bg-secondary/30 backdrop-blur-md hidden md:flex flex-col"
    >
      <div className="p-6 space-y-8 flex-1">
        {menuItems.map((item) => {
          const Icon = item.icon
          return (
            <motion.button
              key={item.id}
              whileHover={{ x: 4 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setActive(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                active === item.id
                  ? "bg-accent text-accent-foreground font-semibold"
                  : "text-foreground hover:bg-secondary/50"
              }`}
            >
              <Icon className="w-5 h-5" />
              <span>{item.label}</span>
            </motion.button>
          )
        })}
      </div>

      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="m-6 flex items-center justify-center gap-2 px-4 py-3 rounded-lg border border-border text-foreground hover:border-accent hover:text-accent transition-colors font-semibold"
      >
        <LogOut className="w-5 h-5" />
        Chiqish
      </motion.button>
    </motion.aside>
  )
}
