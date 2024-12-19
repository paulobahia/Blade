import { motion } from 'framer-motion';
import useWebSocket from '@/hooks/useWebSocket';

interface VuMeterInterfaceProps {
  endpointIp: string
}

export const VuMeter = ({ endpointIp }: VuMeterInterfaceProps) => {
  const levels = useWebSocket(endpointIp);
  const currentLevel = levels.length > 0 ? levels[levels.length - 1] : -39;

  const getColorForLED = (index: number) => {
    if (index < 7) return 'bg-red-600';
    if (index < 18) return 'bg-amber-500';
    if (index < 20) return 'bg-red-600';
    if (index < 30) return 'bg-amber-500';
    return 'bg-green-400';
  };

  return (
    <div className='flex flex-row gap-x-1'>
      <span className='hidden font-mono text-xs font-thin text-white 3xl:flex'>-39</span>
      <div className="relative flex flex-row items-center justify-around flex-1 p-1 rotate-180 rounded-sm bg-muted">
        {[...Array(39)].map((_, i) => {
          const isActive = i >= Math.abs(currentLevel);

          return (
            <div>
              <motion.div
                key={Math.random()}
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
            </div>
          );
        })}
      </div>
      <span className='hidden font-mono text-xs font-thin text-white 3xl:flex'>0</span>
    </div>
  );
};
