import { TreePine } from "lucide-react";

const TreeCanvas = () => {
    return (
        <div className="tree-canvas">
            <div className="tree">
                <TreePine fill="#228B22" size={400} color="#228B22" />
            </div>
        </div>
    );
};

export default TreeCanvas;