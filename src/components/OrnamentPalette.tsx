import { ORNAMENTS } from "../data/ ornaments.js";
import { iconByKind } from "../data/icon.js";
import type { OrnmantKind } from "../types/ornaments.js";


type OrnamentPaletteProps = {
    selected: OrnmantKind | null;
    onSelect: (kind: OrnmantKind) => void;
};

// const iconByKind = {
//     star: Star,
//     candyCane: CandyCane,
//     bauble: Dessert,
//     bell: Bell,
//     gift: Gift,
//     light: Lightbulb,
// } as const;

const OrnamentPalette = ({ selected, onSelect }: OrnamentPaletteProps) => {
    return (
        <div className="ornament-palette">
            {ORNAMENTS.map((item) => {
                const Icon = iconByKind[item.kind];

                return (
                    <div key={item.kind} className="ornament-icon" onClick={() => onSelect(item.kind)} style={{
                        border: selected === item.kind ? "2px solid #fff" : "2px solid transparent",
                        borderRadius: "8px",
                        padding: "4px",
                    }}>
                        <Icon size={30} style={item.kind === "light" ? { transform: "rotate(180deg)" } : undefined} />
                    </div>
                );
            })}
        </div>
    )
};

export default OrnamentPalette;