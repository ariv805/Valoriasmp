'use client';

import { motion } from 'framer-motion';
import { Users, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { PageWrapper } from '@/components/page-wrapper';
import { STAFF_MEMBERS, DISCORD_LINK } from '@/lib/constants';

export default function StaffPage() {
  const staffGroups = [
    { title: 'Owner', color: 'text-red-400', emoji: '👑', members: STAFF_MEMBERS.filter(s => s.role === 'Owner') },
    { title: 'Admin', color: 'text-orange-400', emoji: '🛡️', members: STAFF_MEMBERS.filter(s => s.role === 'Admin') },
    { title: 'Helper', color: 'text-green-400', emoji: '💚', members: STAFF_MEMBERS.filter(s => s.role === 'Helper') },
    { title: 'Creator', color: 'text-purple-400', emoji: '🎨', members: STAFF_MEMBERS.filter(s => s.role === 'Creator') },
  ];

  return (
    <PageWrapper>
      <div className="min-h-screen px-4 py-20">
        <div className="max-w-5xl mx-auto">
          <motion.h2 
            className="text-3xl font-bold text-center mb-3 font-minecraft text-purple-400"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            👥 Staff Team
          </motion.h2>
          <p className="text-gray-400 text-center mb-8 text-sm">Tim yang mengelola dan menjaga server VALORIA SMP</p>

          <div className="space-y-8">
            {staffGroups.map((group, groupIndex) => (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: groupIndex * 0.1 }}
              >
                <h3 className={`text-lg font-bold mb-4 font-minecraft ${group.color}`}>
                  {group.emoji} {group.title}
                </h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {group.members.map((member, index) => (
                    <motion.div
                      key={member.name}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: groupIndex * 0.1 + index * 0.05 }}
                      whileHover={{ scale: 1.02 }}
                    >
                      <Card className="glass border-0 overflow-hidden group">
                        <CardContent className="p-3">
                          <div className="flex items-center gap-3">
                            <div className="relative">
                              <img 
                                src={member.skinHead} 
                                alt={member.name}
                                className="w-12 h-12 rounded-lg transition-transform group-hover:scale-110 object-cover"
                              />
                              <div className="absolute -bottom-0.5 -right-0.5 w-4 h-4 rounded-full bg-emerald-500 border-2 border-gray-800" />
                            </div>
                            <div>
                              <h4 className="text-sm font-bold text-white">{member.name}</h4>
                              <Badge className={`bg-white/10 ${member.roleColor} text-xs`}>
                                {member.role}
                              </Badge>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Join Staff */}
          <motion.div 
            className="mt-10 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <Card className="glass border-0 max-w-sm mx-auto p-5">
              <Users className="w-10 h-10 text-emerald-400 mx-auto mb-3" />
              <h3 className="text-lg font-bold text-white mb-2 font-minecraft text-blue-400">Ingin Bergabung?</h3>
              <p className="text-gray-400 mb-4 text-sm">Kami selalu mencari staff baru</p>
              <Button 
                asChild
                className="bg-emerald-500 hover:bg-emerald-600"
              >
                <a href={DISCORD_LINK} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Apply di Discord
                </a>
              </Button>
            </Card>
          </motion.div>
        </div>
      </div>
    </PageWrapper>
  );
}
