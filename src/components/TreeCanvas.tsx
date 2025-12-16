import { TreePine } from "lucide-react";
import type { PlacedOrnament } from "../types/ornaments.js";
import { iconByKind } from "../data/icon.js";

type TreeCanvasProps = {
    onPlace: (x: number, y: number) => void;
    ornaments: PlacedOrnament[];
};

const TreeCanvas = ({ onPlace, ornaments }: TreeCanvasProps) => {
    const handleClick = (e: React.MouseEvent) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        onPlace(x, y);
    };

    return (
        <div className="tree-canvas" onClick={handleClick}>
            <div className="tree">

                {ornaments.map((o) => {
                    const Icon = iconByKind[o.kind];
                    return (
                        <Icon key={o.id} size={24} style={{
                            position: 'absolute',
                            left: o.x,
                            top: o.y,
                            transform: 'translate(-50%, -50%)',
                        }} />
                    )
                })}

                <TreePine fill="#228B22" size={400} color="#228B22" />
            </div>
        </div>
    );
};

export default TreeCanvas;