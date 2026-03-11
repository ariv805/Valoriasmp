'use client';

import { motion } from 'framer-motion';
import { MessageCircle, Share2, Music, Youtube, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { PageWrapper } from '@/components/page-wrapper';
import { SOCIAL_LINKS, WHATSAPP_NUMBER } from '@/lib/constants';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Discord: MessageCircle,
  'WhatsApp Group': Share2,
  TikTok: Music,
  YouTube: Youtube,
};

export default function SocialPage() {
  return (
    <PageWrapper>
      <div className="min-h-screen px-4 py-20">
        <div className="max-w-5xl mx-auto">
          <motion.h2 
            className="text-3xl font-bold text-center mb-3 font-minecraft text-cyan-400"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            📱 Social Media
          </motion.h2>
          <p className="text-gray-400 text-center mb-8 text-sm">Ikuti kami di media sosial untuk update terbaru!</p>

          <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
            {SOCIAL_LINKS.map((social, index) => {
              const Icon = iconMap[social.name];
              return (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="block"
                >
                  <Card className="glass border-0 overflow-hidden group cursor-pointer hover:glow-green transition-all">
                    <div className={`${social.color} h-1.5`} />
                    <CardContent className="p-4">
                      <div className="flex items-center gap-3">
                        <div className={`p-2.5 rounded-xl ${social.color}`}>
                          {Icon && <Icon className="w-5 h-5 text-white" />}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-base font-bold text-white">{social.name}</h3>
                          <p className="text-xs text-gray-400">{social.description}</p>
                        </div>
                        <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-emerald-400 group-hover:translate-x-1 transition-all" />
                      </div>
                      <div className="mt-2 flex items-center gap-2">
                        <Badge variant="secondary" className="bg-white/10 text-xs">
                          {social.members}
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                </motion.a>
              );
            })}
          </div>

          {/* Contact Info */}
          <motion.div 
            className="mt-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <Card className="glass border-0 max-w-sm mx-auto p-5 text-center">
              <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center mx-auto mb-3">
                <MessageCircle className="w-6 h-6 text-emerald-400" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2 font-minecraft text-emerald-400">Butuh Bantuan?</h3>
              <p className="text-gray-400 mb-4 text-sm">Hubungi kami langsung melalui WhatsApp</p>
              <Button 
                asChild
                size="default"
                className="bg-green-500 hover:bg-green-600"
              >
                <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer">
                  <Share2 className="w-4 h-4 mr-2" />
                  Chat WhatsApp
                </a>
              </Button>
            </Card>
          </motion.div>
        </div>
      </div>
    </PageWrapper>
  );
}
