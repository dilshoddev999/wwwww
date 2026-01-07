"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Header } from "@/components/header"
import { Sidebar } from "@/components/sidebar"
import { GameLibrary } from "@/components/game-library"
import { NewsFeed } from "@/components/news-feed"
import { PlayerProfile } from "@/components/player-profile"
import { SettingsPanel } from "@/components/settings-panel"
import { UserPanel } from "@/components/user-panel"

export default function Home() {
  const [view, setView] = useState<"home" | "settings">("home")

  return (
    <div className="flex h-screen bg-background">
      <Sidebar />

      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />

        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex-1 overflow-y-auto"
        >
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-6">
            <div className="lg:col-span-2 space-y-6">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground">
                  {view === "home" ? "Xush kelibsiz!" : "Sozlamalar"}
                </h2>
                {view === "home" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="bg-gradient-to-r from-accent/20 to-accent/10 border border-accent/40 rounded-lg p-6"
                  >
                    <p className="text-foreground font-semibold mb-2">Oxirgi Sessiya</p>
                    <p className="text-sm text-muted-foreground">Vanilla Minecraft - 2 soat oldin</p>
                  </motion.div>
                )}
              </div>

              {view === "home" ? (
                <>
                  <GameLibrary />
                </>
              ) : (
                <SettingsPanel />
              )}
            </div>

            <div className="space-y-6">
              <PlayerProfile />
              <UserPanel />
              {view === "home" && <NewsFeed />}
            </div>
          </div>
        </motion.main>
      </div>
    </div>
  )
}
