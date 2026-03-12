'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Crown, Coins, Package, Zap, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { toast } from '@/hooks/use-toast';
import { RANKS, COINS_PACKS, MONEY_PACKS, SKILLS_PACKS, WHATSAPP_NUMBER } from '@/lib/constants';

type StoreItem = {
  id: string;
  name: string;
  amount: string;
  price: string;
  priceNum: number;
  description: string;
  popular?: boolean;
};

type PurchaseItemType = 'rank' | 'coins' | 'money' | 'skills';

export default function StorePage() {
  const [selectedItem, setSelectedItem] = useState<StoreItem | null>(null);
  const [selectedRank, setSelectedRank] = useState<typeof RANKS[0] | null>(null);
  const [purchaseDialogOpen, setPurchaseDialogOpen] = useState(false);
  const [playerName, setPlayerName] = useState('');
  const [platform, setPlatform] = useState('java');
  const [purchaseType, setPurchaseType] = useState<PurchaseItemType>('rank');

  const handlePurchase = () => {
    if (!playerName.trim()) {
      toast({
        title: 'Error',
        description: 'Silakan masukkan nama pemain',
        variant: 'destructive',
      });
      return;
    }

    let message = '';
    const playerNameFormatted = platform === 'bedrock' ? `.${playerName}` : playerName;

    if (purchaseType === 'rank' && selectedRank) {
      message = `Halo, saya ingin membeli rank *${selectedRank.name}*

📦 Detail Pembelian:
- Rank: ${selectedRank.name}
- Harga: ${selectedRank.price}
- Nama Player: ${playerNameFormatted}
- Platform: ${platform.toUpperCase()}

Mohon proses pembayaran saya. Terima kasih!`;
    } else if (selectedItem) {
      message = `Halo, saya ingin membeli *${selectedItem.name}*

📦 Detail Pembelian:
- Item: ${selectedItem.name}
- Jumlah: ${selectedItem.amount}
- Harga: ${selectedItem.price}
- Nama Player: ${playerNameFormatted}
- Platform: ${platform.toUpperCase()}

Mohon proses pembayaran saya. Terima kasih!`;
    }

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    setPurchaseDialogOpen(false);
    setPlayerName('');
    setSelectedItem(null);
    setSelectedRank(null);
  };

  const openRankPurchaseDialog = (rank: typeof RANKS[0]) => {
    setSelectedRank(rank);
    setSelectedItem(null);
    setPurchaseType('rank');
    setPurchaseDialogOpen(true);
  };

  const openItemPurchaseDialog = (item: StoreItem, type: PurchaseItemType) => {
    setSelectedItem(item);
    setSelectedRank(null);
    setPurchaseType(type);
    setPurchaseDialogOpen(true);
  };

  const renderItemCard = (item: StoreItem, type: PurchaseItemType, Icon: React.ComponentType<{ className?: string }>, gradient: string) => (
    <motion.div
      key={item.id}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.05 }}
      className="relative"
    >
      {item.popular && (
        <div className="absolute -top-2 left-1/2 -translate-x-1/2 z-10">
          <Badge className="bg-emerald-500 text-white text-xs">POPULER</Badge>
        </div>
      )}
      <Card className={`glass border-0 text-center hover:scale-[1.02] transition-transform h-full ${item.popular ? 'glow-green' : ''}`}>
        <CardHeader className="py-4">
          <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${gradient} flex items-center justify-center mx-auto mb-3`}>
            <Icon className="w-7 h-7 text-white" />
          </div>
          <CardTitle className="text-base">{item.name}</CardTitle>
          <p className="text-2xl font-bold text-amber-400">{item.amount}</p>
        </CardHeader>
        <CardContent className="pt-0">
          <p className="text-gray-400 text-xs mb-3">{item.description}</p>
          <p className="text-lg font-bold text-emerald-400 mb-3">{item.price}</p>
          <Button 
            onClick={() => openItemPurchaseDialog(item, type)}
            className="w-full bg-emerald-500 hover:bg-emerald-600 text-sm h-9"
          >
            Beli Sekarang
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );

  return (
    <div className="min-h-screen px-4 py-20">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          className="text-3xl font-bold text-center mb-3 font-minecraft text-pink-400"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Server Store
        </motion.h2>
        <p className="text-gray-400 text-center mb-8 text-sm">Tingkatkan pengalaman bermain dengan item eksklusif</p>

        <Tabs defaultValue="ranks" className="w-full">
          <TabsList className="grid w-full max-w-lg mx-auto grid-cols-4 mb-6 glass h-10">
            <TabsTrigger value="ranks" className="data-[state=active]:bg-emerald-500/20 text-xs">
              <Crown className="w-3 h-3 mr-1" />
              Ranks
            </TabsTrigger>
            <TabsTrigger value="coins" className="data-[state=active]:bg-emerald-500/20 text-xs">
              <Coins className="w-3 h-3 mr-1" />
              Points
            </TabsTrigger>
            <TabsTrigger value="money" className="data-[state=active]:bg-emerald-500/20 text-xs">
              <Package className="w-3 h-3 mr-1" />
              Money
            </TabsTrigger>
            <TabsTrigger value="skills" className="data-[state=active]:bg-emerald-500/20 text-xs">
              <Zap className="w-3 h-3 mr-1" />
              Skills
            </TabsTrigger>
          </TabsList>

          {/* Ranks Tab */}
          <TabsContent value="ranks">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
              {RANKS.map((rank, index) => (
                <motion.div
                  key={rank.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="relative"
                >
                  {rank.popular && (
                    <div className="absolute -top-2 left-1/2 -translate-x-1/2 z-10">
                      <Badge className="bg-pink-500 text-white text-xs">BEST VALUE</Badge>
                    </div>
                  )}
                  {rank.top && (
                    <div className="absolute -top-2 left-1/2 -translate-x-1/2 z-10">
                      <Badge className="bg-gradient-to-r from-amber-400 to-orange-500 text-black text-xs">TOP RANK</Badge>
                    </div>
                  )}
                  <Card className={`glass border-0 h-full hover:scale-[1.02] transition-all duration-300 ${rank.top ? 'glow-gold' : rank.popular ? 'glow-purple' : ''}`}>
                    <CardHeader className="text-center pb-1 pt-4">
                      <div className={`text-lg font-bold mb-1 font-minecraft ${rank.color}`}>{rank.name}</div>
                      <div className="text-lg font-bold text-white">{rank.price}</div>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div>
                        <p className="text-xs text-gray-400 mb-1">FITUR:</p>
                        <div className="flex flex-wrap gap-0.5">
                          {rank.features.map((feature) => (
                            <Badge key={feature} variant="secondary" className="text-[10px] bg-white/10 px-1.5 py-0">
                              {feature}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div className="space-y-0.5 text-xs">
                        <p className="text-gray-400">🎁 <span className="text-emerald-400">{rank.bonus.claimblock}</span> claimblock</p>
                        <p className="text-gray-400">🏠 <span className="text-emerald-400">{rank.bonus.sethome}</span> sethome</p>
                        <p className="text-gray-400">💰 <span className="text-emerald-400">{rank.bonus.money}</span></p>
                      </div>
                      <Button 
                        onClick={() => openRankPurchaseDialog(rank)}
                        className={`w-full bg-gradient-to-r ${rank.gradient} hover:opacity-90 text-white text-sm h-8`}
                      >
                        Beli Sekarang
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          {/* Coins Tab */}
          <TabsContent value="points">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {COINS_PACKS.map((item) => renderItemCard(item, 'coins', Points, 'from-amber-400 to-yellow-500'))}
            </div>
          </TabsContent>

          {/* Money Tab */}
          <TabsContent value="money">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {MONEY_PACKS.map((item) => renderItemCard(item, 'money', Package, 'from-green-400 to-emerald-500'))}
            </div>
          </TabsContent>

          {/* Skills Tab */}
          <TabsContent value="skills">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {SKILLS_PACKS.map((item) => renderItemCard(item, 'skills', Zap, 'from-purple-400 to-violet-500'))}
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Purchase Dialog */}
      <Dialog open={purchaseDialogOpen} onOpenChange={setPurchaseDialogOpen}>
        <DialogContent className="glass border-0 max-w-sm">
          <DialogHeader>
            <DialogTitle className="text-lg font-minecraft text-amber-400">
              {purchaseType === 'rank' && selectedRank 
                ? `Beli Rank ${selectedRank.name}` 
                : selectedItem 
                  ? `Beli ${selectedItem.name}` 
                  : 'Beli Item'}
            </DialogTitle>
            <DialogDescription className="text-sm">
              Isi data untuk melanjutkan pembelian via WhatsApp
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-3 py-3">
            <div className="space-y-1.5">
              <Label htmlFor="playerName" className="text-sm">Nama Player (Username)</Label>
              <Input
                id="playerName"
                placeholder="Masukkan username Minecraft"
                value={playerName}
                onChange={(e) => setPlayerName(e.target.value)}
                className="bg-white/5 border-white/10 h-9"
              />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="platform" className="text-sm">Platform</Label>
              <Select value={platform} onValueChange={setPlatform}>
                <SelectTrigger className="bg-white/5 border-white/10 h-9">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="java">Java Edition</SelectItem>
                  <SelectItem value="bedrock">Bedrock Edition</SelectItem>
                </SelectContent>
              </Select>
              {platform === 'bedrock' && (
                <p className="text-xs text-amber-400">⚠️ Otomatis ada titik (.) di depan</p>
              )}
            </div>
            
            {selectedRank && purchaseType === 'rank' && (
              <div className="p-3 rounded-lg bg-white/5 space-y-1">
                <p className="text-xs text-gray-400">Detail:</p>
                <p className="font-semibold text-white text-sm">Rank: <span className={selectedRank.color}>{selectedRank.name}</span></p>
                <p className="text-emerald-400 font-bold text-sm">{selectedRank.price}</p>
              </div>
            )}
            
            {selectedItem && purchaseType !== 'rank' && (
              <div className="p-3 rounded-lg bg-white/5 space-y-1">
                <p className="text-xs text-gray-400">Detail:</p>
                <p className="font-semibold text-white text-sm">{selectedItem.name}</p>
                <p className="text-amber-400 text-sm">{selectedItem.amount}</p>
                <p className="text-emerald-400 font-bold text-sm">{selectedItem.price}</p>
              </div>
            )}
          </div>
          <div className="flex gap-2">
            <Button variant="outline" onClick={() => setPurchaseDialogOpen(false)} className="flex-1 h-9">
              Batal
            </Button>
            <Button onClick={handlePurchase} className="flex-1 bg-emerald-500 hover:bg-emerald-600 h-9">
              <MessageCircle className="w-4 h-4 mr-1" />
              WhatsApp
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
