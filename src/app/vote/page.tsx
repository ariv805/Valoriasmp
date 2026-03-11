'use client';

import { motion } from 'framer-motion';
import { Vote, ExternalLink, Gift, Coins, Crown, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { PageWrapper } from '@/components/page-wrapper';
import { VOTE_LINK, TOP_VOTERS } from '@/lib/constants';

export default function VotePage() {
  return (
    <PageWrapper>
      <div className="min-h-screen px-4 py-20">
        <div className="max-w-5xl mx-auto">
          <motion.h2 
            className="text-3xl font-bold text-center mb-3 font-minecraft text-blue-400"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            🗳️ Vote for VALORIA SMP
          </motion.h2>
          <p className="text-gray-400 text-center mb-8 text-sm">Dukung server kami dengan vote dan dapatkan hadiah!</p>

          {/* Vote Button */}
          <motion.div 
            className="text-center mb-10"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Card className="glass border-0 max-w-sm mx-auto p-5">
              <div className="w-14 h-14 rounded-full bg-emerald-500/20 flex items-center justify-center mx-auto mb-4">
                <Vote className="w-7 h-7 text-emerald-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2 font-minecraft text-emerald-400">Vote Sekarang!</h3>
              <p className="text-gray-400 mb-4 text-sm">Setiap vote memberikan reward eksklusif</p>
              <Button 
                asChild
                size="default"
                className="bg-emerald-500 hover:bg-emerald-600 text-white px-6"
              >
                <a href={VOTE_LINK} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Vote di Minecraft-MP
                </a>
              </Button>
            </Card>
          </motion.div>

          {/* Top Voters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="text-xl font-bold text-center mb-4 text-white font-minecraft text-amber-400">🏅 Top Voters</h3>
            <Card className="glass border-0 overflow-hidden max-w-lg mx-auto">
              <CardContent className="p-0 divide-y divide-white/10">
                {TOP_VOTERS.map((voter, index) => (
                  <motion.div
                    key={voter.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + index * 0.05 }}
                    className="flex items-center gap-3 p-3 hover:bg-white/5 transition-colors"
                  >
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center font-bold text-xs ${
                      voter.rank === 1 ? 'bg-amber-500 text-black' :
                      voter.rank === 2 ? 'bg-gray-400 text-black' :
                      voter.rank === 3 ? 'bg-orange-600 text-white' :
                      'bg-gray-700 text-gray-300'
                    }`}>
                      {voter.rank}
                    </div>
                    <img 
                      src={voter.skinHead} 
                      alt={voter.name}
                      className="w-8 h-8 rounded-lg object-cover"
                    />
                    <div className="flex-1">
                      <p className="font-semibold text-white text-sm">{voter.name}</p>
                      <p className="text-xs text-gray-400">{voter.votes} votes</p>
                    </div>
                    {voter.rank <= 3 && (
                      <Badge className={`text-xs ${
                        voter.rank === 1 ? 'bg-amber-500 text-black' :
                        voter.rank === 2 ? 'bg-gray-400 text-black' :
                        'bg-orange-600 text-white'
                      }`}>
                        <Star className="w-3 h-3 mr-1" />
                        Top {voter.rank}
                      </Badge>
                    )}
                  </motion.div>
                ))}
              </CardContent>
            </Card>
          </motion.div>

          {/* Vote Rewards */}
          <motion.div 
            className="mt-8 grid sm:grid-cols-3 gap-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <Card className="glass border-0 text-center p-4">
              <Gift className="w-8 h-8 text-emerald-400 mx-auto mb-2" />
              <h4 className="font-semibold text-white text-sm mb-0.5">Vote Reward</h4>
              <p className="text-xs text-gray-400">Dapatkan hadiah setiap vote</p>
            </Card>
            <Card className="glass border-0 text-center p-4">
              <Coins className="w-8 h-8 text-amber-400 mx-auto mb-2" />
              <h4 className="font-semibold text-white text-sm mb-0.5">Bonus Coins</h4>
              <p className="text-xs text-gray-400">Extra coins untuk voter aktif</p>
            </Card>
            <Card className="glass border-0 text-center p-4">
              <Crown className="w-8 h-8 text-purple-400 mx-auto mb-2" />
              <h4 className="font-semibold text-white text-sm mb-0.5">Exclusive Rank</h4>
              <p className="text-xs text-gray-400">Top voter mendapat rank khusus</p>
            </Card>
          </motion.div>
        </div>
      </div>
    </PageWrapper>
  );
}
