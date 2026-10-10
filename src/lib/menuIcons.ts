import { Activity, Bot, Briefcase, Camera, Code, Cpu, Globe, Heart, Layers, Mail, Megaphone, MapPin, MessageCircle, Monitor, Palette, PenTool, Phone, Rocket, Search, Share2, ShieldCheck, ShoppingCart, Smartphone, Star, Target, TrendingUp, Users, Video, Zap } from "lucide-react";
import type { ComponentType } from "react";

export type MenuIcon = ComponentType<{ size?: number; strokeWidth?: number; className?: string }>;

/** Icons selectable for header menu groups (key is saved in settings). */
export const MENU_ICONS: Record<string, MenuIcon> = {
  search: Search, megaphone: Megaphone, code: Code, smartphone: Smartphone, pen: PenTool, mail: Mail, phone: Phone,
  message: MessageCircle, globe: Globe, chart: Activity, bot: Bot, target: Target, cart: ShoppingCart, pin: MapPin,
  users: Users, palette: Palette, video: Video, camera: Camera, layers: Layers, rocket: Rocket, zap: Zap,
  briefcase: Briefcase, cpu: Cpu, share: Share2, trending: TrendingUp, monitor: Monitor, star: Star, shield: ShieldCheck, heart: Heart,
};
