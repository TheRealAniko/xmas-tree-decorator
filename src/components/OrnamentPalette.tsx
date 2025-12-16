import { Star, CandyCane, Gift, Bell, Dessert, Lightbulb } from "lucide-react";
import { ORNAMENTS } from "../data/ ornaments.js";

const iconByKind = {
    star: Star,
    candyCane: CandyCane,
    bauble: Dessert,
    bell: Bell,
    gift: Gift,
    light: Lightbulb,
} as const;

const OrnamentPalette = () => {
    return (
        <div className="ornament-palette">
            {ORNAMENTS.map((item) => {
                const Icon = iconByKind[item.kind];

                return (
                    <div key={item.kind} className="ornament-icon">
                        <Icon size={30} style={item.kind === "light" ? { transform: "rotate(180deg)" } : undefined} />
                    </div>
                );
            })}
        </div>
    )
};

export default OrnamentPalette;