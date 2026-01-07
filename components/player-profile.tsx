"use client"

import { motion } from "framer-motion"
import { Award, Trophy, Zap } from "lucide-react"

export function PlayerProfile() {
  const stats = [
    { label: "Oʻyin Vaqti", value: "3,700 soat", icon: Trophy },
    { label: "Muammolar Hal", value: "156", icon: Award },
    { label: "Bosqichlar", value: "24", icon: Zap },
  ]

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-gradient-to-r from-secondary to-secondary/50 rounded-lg border border-accent/30 p-6"
      >
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-lg bg-accent/20 border-2 border-accent flex items-center justify-center">
              <span className="text-2xl font-bold text-accent">AZ</span>
            </div>
            <div>
              <h3 className="text-xl font-bold text-foreground">Alex Ziyoev</h3>
              <p className="text-sm text-muted-foreground">level 45 • Premium Member</p>
            </div>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-4 py-2 bg-accent text-accent-foreground rounded font-semibold text-sm hover:bg-accent/90 transition-colors"
          >
            Profil
          </motion.button>
        </div>

        <div className="grid grid-cols-3 gap-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="flex items-center justify-center w-10 h-10 rounded bg-accent/20 mx-auto mb-2">
                  <Icon className="w-5 h-5 text-accent" />
                </div>
                <p className="text-2xl font-bold text-accent">{stat.value}</p>
                <p className="text-xs text-muted-foreground">{stat.label}</p>
              </motion.div>
            )
          })}
        </div>
      </motion.div>
    </div>
  )
}
