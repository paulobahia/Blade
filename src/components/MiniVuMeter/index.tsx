import { motion } from 'framer-motion';
import useWebSocket from '@/hooks/useWebSocket';

interface MiniVuMeterProps {
  endpointIp: string;
}

export const MiniVuMeter = ({ endpointIp }: MiniVuMeterProps) => {
  const levels = useWebSocket(endpointIp);

  const currentLevel = levels.length > 0 ? levels[levels.length - 1] : -39;

  const getColorForLED = (index: number) => {
    if (index < 8) return 'bg-green-400';
    if (index < 10) return 'bg-amber-500';
    if (index < 12) return 'bg-red-500';
    if (index < 14) return 'bg-amber-500';
    return 'bg-red-500';
  };

  return (
    <div className="flex flex-row gap-x-1">
      <div className="relative flex flex-row items-center justify-around flex-1 rounded-sm bg-muted">
        {[...Array(20)].map((_, i) => {
          const isActive = i < Math.floor(((currentLevel + 39) / 39) * 20);

          return (
            <motion.div
              key={i}
              className={`rounded-md size-2.5 ${getColorForLED(i)}`}
              initial={{ opacity: 0.2, scale: 0.8 }}
              animate={{
                opacity: isActive ? 1 : 0.2,
                scale: isActive ? 0.8 : 0.6,
              }}
              transition={{
                duration: 0.25,
                ease: [0.25, 0.1, 0.25, 1],
              }}
            />
          );
        })}
      </div>
    </div>
  );
};
