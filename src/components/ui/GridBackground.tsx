import { cn } from '@/lib/utils';
import React from 'react';

interface GridBackgroundProps {
    className?: string;
}

const GridBackground: React.FC<GridBackgroundProps> = ({ className }) => {
    return (
        <div className={cn("absolute inset-0 overflow-hidden pointer-events-none", className)}>
            <div
                className="absolute w-full h-[200%] -top-[50%] left-0 bg-[linear-gradient(to_right,rgba(255,87,87,0.15)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,87,87,0.15)_1px,transparent_1px)] bg-[size:40px_40px] [transform:perspective(500px)_rotateX(60deg)] origin-bottom"
                style={{
                    maskImage: 'linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 80%)',
                    WebkitMaskImage: 'linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 80%)'
                }}
            />
            {/* Optional: Second layer for more depth/complexity if needed, kept minimal for now */}
        </div>
    );
};

export default GridBackground;
