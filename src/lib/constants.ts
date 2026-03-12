// Server Configuration
export const SERVER_IP = 'play.valoriasmp.my.id';
export const BEDROCK_PORT = '19237';
export const WHATSAPP_NUMBER = '6285719379665';
export const DISCORD_LINK = 'https://discord.gg/vjtMbb2R5';
export const WHATSAPP_GROUP = 'https://chat.whatsapp.com/GSsNLA6zHISEbcIiYej9l7?mode=gi_t';
export const VOTE_LINK = 'https://minecraft-mp.com/server/354242/vote/';

// Images
export const SERVER_LOGO = 'https://image2url.com/r2/default/images/1773117137406-9d62e3e7-6d56-4190-b725-f0ca7a59c0e6.jpg';
export const BACKGROUND_IMAGE = 'https://image2url.com/r2/default/images/1773116356279-97b0e734-239c-455c-a448-95e2b7411271.png';

// Navigation
export const NAV_ITEMS = [
  { id: 'home', label: 'Home', href: '/' },
  { id: 'server-info', label: 'Server Info', href: '/server-info' },
  { id: 'store', label: 'Store', href: '/store' },
  { id: 'achievements', label: 'Achievements', href: '/achievements' },
  { id: 'vote', label: 'Vote', href: '/vote' },
  { id: 'staff', label: 'Staff', href: '/staff' },
  { id: 'social', label: 'Social Media', href: '/social' },
];

// Ranks Data
export const RANKS = [
  {
    name: 'STREET',
    price: 'Rp 15.000',
    priceNum: 15000,
    originalPrice: 'Rp 15.000',
    originalPriceNum: 15000,
    discount: 10,
    color: 'text-gray-400',
    gradient: 'from-gray-500 to-gray-600',
    features: ['/feed', '/heal', '/anvil', '/workbench', '/repair', '/enderchest'],
    bonus: { claimblock: '15.000', sethome: '6x', money: '$150.000' },
  },
  {
    name: 'VALIANT',
    price: 'Rp 35.000',
    priceNum: 35000,
    originalPrice: 'Rp 35.000',
    originalPriceNum: 35000,
    discount: 10,
    color: 'text-blue-400',
    gradient: 'from-blue-500 to-blue-600',
    features: ['/feed', '/heal', '/anvil', '/workbench', '/repair', '/enderchest', '/fly'],
    bonus: { claimblock: '35.000', sethome: '9x', money: '$350.000' },
  },
  {
    name: 'ASTRA',
    price: 'Rp 65.000',
    priceNum: 65000,
    originalPrice: 'Rp 65.000',
    originalPriceNum: 65000,
    discount: 10,
    color: 'text-purple-400',
    gradient: 'from-purple-500 to-purple-600',
    features: ['/feed', '/heal', '/anvil', '/workbench', '/repair', '/enderchest', '/fly', '/tp'],
    bonus: { claimblock: '70.000', sethome: '12x', money: '$600.000' },
  },
  {
    name: 'CRYSTALL',
    price: 'Rp 120.000',
    priceNum: 120000,
    originalPrice: 'Rp 120.000',
    originalPriceNum: 120000,
    discount: 10,
    color: 'text-pink-400',
    gradient: 'from-pink-500 to-pink-600',
    features: ['/feed', '/heal', '/anvil', '/workbench', '/repair', '/enderchest', '/fly', '/tp', '/timeset', '/weather'],
    bonus: { claimblock: '100.000', sethome: '15x', money: '$1.000.000' },
    popular: true,
  },
  {
    name: 'ETHEREAL',
    price: 'Rp 150.000',
    priceNum: 150000,
    originalPrice: 'Rp 150.000',
    originalPriceNum: 150000,
    discount: 10,
    color: 'text-amber-400',
    gradient: 'from-amber-400 to-orange-500',
    features: ['/feed', '/heal', '/anvil', '/workbench', '/repair', '/enderchest', '/fly', '/tp', '/timeset', '/weather', '/god'],
    bonus: { claimblock: '150.000', sethome: '18x', money: '$1.500.000' },
    top: true,
  },
];

// ==========================================
// POINTS - Harga: Rp 5.000 / 1.500 Points
// ==========================================
export const POINTS_PRICE_PER_AMOUNT = 5000; // Rp 5.000
export const POINTS_PER_PURCHASE = 1500; // 1.500 Points per Rp 5.000

// ==========================================
// MONEY - Harga: Rp 1.000 / 50.000 Money
// Format: k (ribu), m (juta), b (miliar), t (triliun)
// ==========================================
export const MONEY_PRICE_PER_AMOUNT = 1000; // Rp 1.000
export const MONEY_PER_PURCHASE = 50000; // 50.000 Money per Rp 1.000

// ==========================================
// SKILLS - Daftar skill yang tersedia
// Harga: 1 Level = Rp 2.000
// ==========================================
export const AVAILABLE_SKILLS = [
  'Farming',
  'Foraging',
  'Mining',
  'Fishing',
  'Excavation',
  'Archery',
  'Defense',
  'Fighting',
  'Agility',
  'Enchanting',
  'Alchemy',
];

export const SKILL_PRICE_PER_LEVEL = 2000; // Rp 2.000 per level

// Staff Members - Using regular image URLs
export const STAFF_MEMBERS = [
  { 
    name: 'FatihMC', 
    role: 'Owner', 
    roleColor: 'text-red-400', 
    skinHead: 'https://image2url.com/r2/default/images/1773302158975-90eedc95-8851-457b-9fff-ab62b1a92b8d.jpg' 
  },
  { 
    name: 'ZennMC', 
    role: 'Admin', 
    roleColor: 'text-orange-400', 
    skinHead: 'https://image2url.com/r2/default/images/1773300294354-e0b23ef2-f60f-4a91-9566-1b53af50e0eb.png'
  },
  { 
    name: 'Belum ada', 
    role: 'Admin', 
    roleColor: 'text-orange-400', 
    skinHead: 'https://image2url.com/r2/default/images/1773299837560-4fcddb44-1d50-42a8-95d3-ee7038a4c044.jpg' 
  },
  { 
    name: 'Belum ada', 
    role: 'Helper', 
    roleColor: 'text-green-400', 
    skinHead: 'https://image2url.com/r2/default/images/1773299837560-4fcddb44-1d50-42a8-95d3-ee7038a4c044.jpg' 
  },
  { 
    name: 'Belum ada', 
    role: 'Helper', 
    roleColor: 'text-green-400', 
    skinHead: 'https://image2url.com/r2/default/images/1773299837560-4fcddb44-1d50-42a8-95d3-ee7038a4c044.jpg' 
  },
  { 
    name: 'Belum ada', 
    role: 'Creator', 
    roleColor: 'text-purple-400', 
    skinHead: 'https://image2url.com/r2/default/images/1773299837560-4fcddb44-1d50-42a8-95d3-ee7038a4c044.jpg' 
  },
];

// Achievements - Using regular image URLs
export const ACHIEVEMENTS = [
  { 
    name: 'BiyannCraft', 
    event: 'Build Competition #1', 
    place: '1st Place',
    icon: '🏗️',
    skinHead: 'https://image2url.com/r2/default/images/1773299837560-4fcddb44-1d50-42a8-95d3-ee7038a4c044.jpg',
    description: 'Membangun Masjid yang megah dengan detail yang luar biasa'
  },
];

// Top Voters - Using regular image URLs
export const TOP_VOTERS = [
  { rank: 1, name: 'SkyLineosk', votes: 2, skinHead: 'https://image2url.com/r2/default/images/1773299837560-4fcddb44-1d50-42a8-95d3-ee7038a4c044.jpg' },
  { rank: 2, name: '.Vicky_wahyu', votes: 2, skinHead: 'https://image2url.com/r2/default/images/1773299837560-4fcddb44-1d50-42a8-95d3-ee7038a4c044.jpg' },
  { rank: 3, name: 'FathNooraa', votes: 1, skinHead: 'https://image2url.com/r2/default/images/1773299837560-4fcddb44-1d50-42a8-95d3-ee7038a4c044.jpg' },
  { rank: 4, name: '.ZennMC50', votes: 1, skinHead: 'https://image2url.com/r2/default/images/1773299837560-4fcddb44-1d50-42a8-95d3-ee7038a4c044.jpg' },
  { rank: 5, name: '.Herobrine35210', votes: 1, skinHead: 'https://image2url.com/r2/default/images/1773299837560-4fcddb44-1d50-42a8-95d3-ee7038a4c044.jpg' },
];

// Server Features
export const SERVER_FEATURES = [
  { icon: 'Shield', title: 'Anti-Cheat', description: 'Sistem anti-cheat terbaik untuk pengalaman bermain yang adil' },
  { icon: 'Zap', title: 'Low Latency', description: 'Server dengan ping rendah untuk gameplay yang smooth' },
  { icon: 'Sword', title: 'PvP Arena', description: 'Arena PvP khusus untuk bertarung dengan pemain lain' },
  { icon: 'Crown', title: 'Rank System', description: 'Sistem rank yang menarik dengan berbagai fitur eksklusif' },
  { icon: 'Gift', title: 'Daily Rewards', description: 'Hadiah harian untuk pemain aktif' },
  { icon: 'Gamepad2', title: 'Cross-Play', description: 'Support Java & Bedrock Edition' },
];

// Server Rules
export const SERVER_RULES = [
  'Dilarang menggunakan cheat, hack, atau mod ilegal lainnya',
  'Dilarang melakukan griefing atau merusak bangunan pemain lain',
  'Hormati semua pemain, dilarang toxic atau bullying',
  'Dilarang spam, flood, atau advertise server lain',
  'Dilarang exploit bug atau glitch dalam game',
  'Gunakan bahasa yang sopan dalam chat',
  'Dilarang menjual item/account dengan uang asli di luar sistem resmi',
  'Laporkan pelanggaran ke staff dengan bukti yang jelas',
];

// Social Links
export const SOCIAL_LINKS = [
  { 
    name: 'Discord', 
    url: DISCORD_LINK, 
    color: 'bg-indigo-500',
    description: 'Bergabung dengan komunitas kami',
    members: '500+ Members'
  },
  { 
    name: 'WhatsApp Group', 
    url: WHATSAPP_GROUP, 
    color: 'bg-green-500',
    description: 'Chat langsung dengan pemain lain',
    members: '200+ Members'
  },
  { 
    name: 'TikTok', 
    url: 'https://tiktok.com/@valoriasmp', 
    color: 'bg-black',
    description: 'Follow untuk konten seru',
    members: '10K+ Followers'
  },
  { 
    name: 'YouTube', 
    url: 'https://youtube.com/@valoriasmp', 
    color: 'bg-red-500',
    description: 'Subscribe untuk video terbaru',
    members: '5K+ Subscribers'
  },
];
