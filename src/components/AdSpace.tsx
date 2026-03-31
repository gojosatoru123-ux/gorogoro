import React, { memo } from 'react';
import { cn } from '../lib/utils';

interface AdSpaceProps {
  className?: string;
  label?: string;
}

const AdSpace = memo(({ className, label = "Advertisement" }: AdSpaceProps) => {
  return (
    <div className={cn(
      "relative overflow-hidden brutal-border bg-slate-50 flex flex-col items-center justify-center p-4 min-h-[100px] border-2 border-dashed border-slate-200",
      className
    )}>
      <div className="absolute top-2 right-2 z-10">
        <span className="px-2 py-0.5 bg-slate-100 text-slate-300 text-[8px] font-black uppercase italic tracking-widest rounded-sm">
          {label}
        </span>
      </div>
      
      <div className="w-full h-full flex items-center justify-center">
        <div className="w-12 h-12 border-2 border-slate-100 rounded-full flex items-center justify-center">
          <div className="w-2 h-2 bg-slate-100 rounded-full" />
        </div>
      </div>
    </div>
  );
});

export default AdSpace;
