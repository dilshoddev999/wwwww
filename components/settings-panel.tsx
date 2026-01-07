"use client"

import { motion } from "framer-motion"
import { Volume2, Monitor, Gamepad2, Shield, Globe, Download } from "lucide-react"
import { useState } from "react"

export function SettingsPanel() {
  const [settings, setSettings] = useState({
    volume: 75,
    brightness: 85,
    quality: "ultra",
    notifications: true,
    language: "uz",
    autoUpdate: true,
  })

  const settingGroups = [
    {
      title: "Ovoz va Video",
      items: [
        {
          label: "Ovoz Darajasi",
          icon: Volume2,
          type: "slider",
          key: "volume",
          min: 0,
          max: 100,
        },
        {
          label: "Yorug'lik",
          icon: Monitor,
          type: "slider",
          key: "brightness",
          min: 0,
          max: 100,
        },
      ],
    },
    {
      title: "O'yin Sozlamalari",
      items: [
        {
          label: "Grafika Sifati",
          icon: Gamepad2,
          type: "select",
          key: "quality",
          options: ["low", "medium", "high", "ultra"],
        },
        {
          label: "Xavfsizlik",
          icon: Shield,
          type: "toggle",
          key: "notifications",
        },
      ],
    },
    {
      title: "Tizim",
      items: [
        {
          label: "Til",
          icon: Globe,
          type: "select",
          key: "language",
          options: ["uz", "ru", "en"],
        },
        {
          label: "Avtomatik Yangilash",
          icon: Download,
          type: "toggle",
          key: "autoUpdate",
        },
      ],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      className="space-y-6"
    >
      {settingGroups.map((group, groupIndex) => (
        <motion.div
          key={group.title}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="bg-secondary rounded-lg border border-border p-6 space-y-4"
        >
          <h3 className="font-bold text-foreground text-lg">{group.title}</h3>

          <div className="space-y-4">
            {group.items.map((item) => {
              const Icon = item.icon

              return (
                <motion.div
                  key={item.key}
                  whileHover={{ x: 4 }}
                  className="flex items-center justify-between p-3 rounded bg-secondary/50 hover:bg-secondary transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <Icon className="w-5 h-5 text-accent" />
                    <span className="text-foreground font-medium">{item.label}</span>
                  </div>

                  {item.type === "slider" && (
                    <input
                      type="range"
                      min={item.min}
                      max={item.max}
                      value={settings[item.key as keyof typeof settings]}
                      onChange={(e) => setSettings({ ...settings, [item.key]: Number.parseInt(e.target.value) })}
                      className="w-32 h-2 bg-border rounded-lg appearance-none cursor-pointer accent-accent"
                    />
                  )}

                  {item.type === "select" && (
                    <select
                      value={settings[item.key as keyof typeof settings]}
                      onChange={(e) => setSettings({ ...settings, [item.key]: e.target.value })}
                      className="px-3 py-1 bg-secondary border border-border rounded text-foreground text-sm cursor-pointer hover:border-accent transition-colors"
                    >
                      {item.options?.map((opt) => (
                        <option key={opt} value={opt} className="bg-secondary text-foreground">
                          {opt.charAt(0).toUpperCase() + opt.slice(1)}
                        </option>
                      ))}
                    </select>
                  )}

                  {item.type === "toggle" && (
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() =>
                        setSettings({
                          ...settings,
                          [item.key]: !settings[item.key as keyof typeof settings],
                        })
                      }
                      className={`w-12 h-6 rounded-full transition-colors ${
                        settings[item.key as keyof typeof settings] ? "bg-accent" : "bg-muted"
                      }`}
                    >
                      <motion.div
                        animate={{
                          x: settings[item.key as keyof typeof settings] ? 24 : 0,
                        }}
                        className="w-5 h-5 bg-white rounded-full m-0.5"
                      ></motion.div>
                    </motion.button>
                  )}
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      ))}

      <motion.div variants={itemVariants} className="flex gap-3 pt-4">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex-1 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:bg-accent/90 transition-colors"
        >
          Saqlash
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex-1 py-3 border border-border rounded-lg font-semibold hover:border-accent transition-colors"
        >
          Bekor Qilish
        </motion.button>
      </motion.div>
    </motion.div>
  )
}
