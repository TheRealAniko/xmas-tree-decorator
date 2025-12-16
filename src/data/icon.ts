import { Star, CandyCane, Gift, Bell, Dessert, Lightbulb } from "lucide-react";

import type { OrnmantKind } from "../types/ornaments.js";

export const iconByKind: Record<OrnmantKind, any> = {
    star: Star,
    candyCane: CandyCane,
    bauble: Dessert,
    bell: Bell,
    gift: Gift,
    light: Lightbulb,
};