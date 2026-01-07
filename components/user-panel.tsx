"use client"

import { motion } from "framer-motion"
import { Edit2, LogOut, Package, Wallet } from "lucide-react"

export function UserPanel() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
      className="bg-secondary rounded-lg border border-border overflow-hidden"
    >
      {/* User Header */}
      <div className="bg-gradient-to-r from-accent/20 to-accent/10 p-6 border-b border-border">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-4">
            <div className="w-20 h-20 rounded-lg bg-accent/30 border-2 border-accent flex items-center justify-center">
              <span className="text-3xl font-bold text-accent">AZ</span>
            </div>
            <div>
              <h2 className="text-xl font-bold text-foreground">Alex Ziyoev</h2>
              <p className="text-sm text-muted-foreground">@alexziyoev</p>
              <p className="text-xs text-accent font-semibold mt-1">Premium Member</p>
            </div>
          </div>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="p-2 hover:bg-secondary rounded transition-colors"
          >
            <Edit2 className="w-5 h-5 text-foreground" />
          </motion.button>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 gap-2 p-4 border-b border-border bg-secondary/50">
        <motion.div whileHover={{ bg: "#1a1a1a" }} className="p-3 bg-secondary/80 rounded text-center">
          <p className="text-2xl font-bold text-accent">42</p>
          <p className="text-xs text-muted-foreground">Sertifikat</p>
        </motion.div>
        <motion.div whileHover={{ bg: "#1a1a1a" }} className="p-3 bg-secondary/80 rounded text-center">
          <p className="text-2xl font-bold text-accent">2,450</p>
          <p className="text-xs text-muted-foreground">Soat</p>
        </motion.div>
      </div>

      {/* Action Buttons */}
      <div className="p-4 space-y-2">
        <motion.button
          whileHover={{ x: 4 }}
          whileTap={{ scale: 0.98 }}
          className="w-full flex items-center gap-3 p-3 rounded bg-secondary/50 hover:bg-secondary hover:border-accent border border-transparent transition-all text-foreground font-medium text-sm"
        >
          <Package className="w-4 h-4 text-accent" />
          Mening Oʻyinlarim
        </motion.button>

        <motion.button
          whileHover={{ x: 4 }}
          whileTap={{ scale: 0.98 }}
          className="w-full flex items-center gap-3 p-3 rounded bg-secondary/50 hover:bg-secondary hover:border-accent border border-transparent transition-all text-foreground font-medium text-sm"
        >
          <Wallet className="w-4 h-4 text-accent" />
          Balans: 45,500 UZS
        </motion.button>

        <motion.button
          whileHover={{ x: 4 }}
          whileTap={{ scale: 0.98 }}
          className="w-full flex items-center gap-3 p-3 rounded bg-secondary/50 hover:bg-secondary hover:border-destructive border border-transparent transition-all text-foreground font-medium text-sm"
        >
          <LogOut className="w-4 h-4 text-destructive" />
          Chiqish
        </motion.button>
      </div>
    </motion.div>
  )
}
