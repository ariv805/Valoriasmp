'use client';

import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { PageWrapper } from '@/components/page-wrapper';
import { ACHIEVEMENTS } from '@/lib/constants';

export default function AchievementsPage() {
  return (
    <PageWrapper>
      <div className="min-h-screen px-4 py-20">
        <div className="max-w-5xl mx-auto">
          <motion.h2 
            className="text-3xl font-bold text-center mb-3 font-minecraft text-amber-400"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            🏆 Achievements
          </motion.h2>
          <p className="text-gray-400 text-center mb-8 text-sm">Selamat kepada para pemenang event!</p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {ACHIEVEMENTS.map((achievement, index) => (
              <motion.div
                key={achievement.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.02 }}
              >
                <Card className="glass border-0 overflow-hidden group">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
                    <img 
                      src={achievement.skinHead} 
                      alt={achievement.name}
                      className="w-full h-32 object-cover object-top opacity-80 group-hover:opacity-100 transition-opacity"
                    />
                    <div className="absolute top-2 left-2 z-20">
                      <Badge className="bg-amber-500 text-black text-xs">
                        <Star className="w-2.5 h-2.5 mr-0.5" />
                        {achievement.place}
                      </Badge>
                    </div>
                    <div className="absolute top-2 right-2 z-20 text-xl">
                      {achievement.icon}
                    </div>
                  </div>
                  <CardContent className="relative -mt-10 z-20 pt-0">
                    <div className="glass rounded-lg p-3">
                      <h3 className="text-sm font-bold text-white mb-0.5">{achievement.name}</h3>
                      <p className="text-xs text-emerald-400 mb-1">{achievement.event}</p>
                      <p className="text-xs text-gray-400">{achievement.description}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Upcoming Events */}
          <motion.div 
            className="mt-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="text-xl font-bold text-center mb-4 text-white font-minecraft text-purple-400">Upcoming Events</h3>
            <div className="grid sm:grid-cols-3 gap-3">
              {['Build Battle', 'PvP Tournament', 'Treasure Hunt'].map((event, index) => (
                <Card key={event} className="glass border-0 text-center p-4 hover:scale-[1.02] transition-transform">
                  <div className="text-3xl mb-2">{['🏗️', '⚔️', '🗺️'][index]}</div>
                  <h4 className="font-semibold text-white text-sm mb-0.5">{event}</h4>
                  <p className="text-xs text-gray-400">Coming Soon</p>
                  <Badge variant="outline" className="mt-2 border-amber-500/50 text-amber-400 text-xs">
                    TBA
                  </Badge>
                </Card>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </PageWrapper>
  );
}
