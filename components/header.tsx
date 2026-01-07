"use client"

import { motion } from "framer-motion"
import { Bell, Settings, User } from "lucide-react"

export function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="border-b border-border bg-secondary/50 backdrop-blur-md"
    >
      <div className="flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3">
          <div className="text-2xl font-bold text-accent">UZ</div>
          <div>
            <h1 className="text-xl font-bold text-foreground">UzLauncher</h1>
            <p className="text-xs text-muted-foreground">Minecraft Launcher Dashboard</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="relative p-2 rounded hover:bg-secondary transition-colors"
          >
            <Bell className="w-5 h-5 text-foreground" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-accent rounded-full"></span>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="p-2 rounded hover:bg-secondary transition-colors"
          >
            <Settings className="w-5 h-5 text-foreground" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="p-2 rounded hover:bg-secondary transition-colors"
          >
            <User className="w-5 h-5 text-foreground" />
          </motion.button>
        </div>
      </div>
    </motion.header>
  )
}
