"use client"

import { motion } from "framer-motion"
import { Clock, TrendingUp } from "lucide-react"

const newsItems = [
  {
    id: 1,
    title: "Minecraft 1.21 Update",
    description: "Yangi Minecraft versiyasi chiqdi. Yangi bloklar, mob'lar va mechanic'lar qoʻshildi.",
    date: "3 kun oldin",
    category: "Update",
    image: "/minecraft-update-news.jpg",
  },
  {
    id: 2,
    title: "Mod Community Showcase",
    description: "Eng yaxshi modlar ishlab chiquvchilari taqdim etiladi. Yangi Fabric mod'lar!",
    date: "1 hafta oldin",
    category: "Community",
    image: "/minecraft-mods-showcase.jpg",
  },
  {
    id: 3,
    title: "Server Maintenance",
    description: "Offline server xavflilik yangilashlariga uchramoqda. Biz tez qaytamiz!",
    date: "2 hafta oldin",
    category: "Maintenance",
    image: "/server-maintenance.jpg",
  },
]

export function NewsFeed() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-foreground">Yangiliklar</h2>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="text-accent hover:text-accent/80 font-semibold text-sm flex items-center gap-1"
        >
          <TrendingUp className="w-4 h-4" /> Barchasi
        </motion.button>
      </div>

      <div className="space-y-4">
        {newsItems.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ x: 8 }}
            className="flex gap-4 p-4 bg-secondary rounded-lg border border-border hover:border-accent transition-all cursor-pointer group"
          >
            <div className="w-32 h-24 rounded overflow-hidden flex-shrink-0">
              <img
                src={item.image || "/placeholder.svg"}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform"
              />
            </div>

            <div className="flex-1 space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-xs px-2 py-1 bg-accent/20 text-accent rounded font-semibold">
                  {item.category}
                </span>
              </div>
              <h3 className="font-semibold text-foreground group-hover:text-accent transition-colors">{item.title}</h3>
              <p className="text-sm text-muted-foreground line-clamp-2">{item.description}</p>
              <div className="flex items-center gap-1 text-xs text-muted-foreground">
                <Clock className="w-3 h-3" />
                {item.date}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
