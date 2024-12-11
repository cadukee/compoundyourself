import React, { useState } from 'react';

export default function CompoundGrowth() {
  const [dayStreak, setDayStreak] = useState(0);
  const [lastCompoundDate, setLastCompoundDate] = useState<string | null>(null);
  const [showAnimation, setShowAnimation] = useState(false);

  const multiplier = (1.01 ** dayStreak).toFixed(3);
  const isCompoundedToday = lastCompoundDate === new Date().toISOString().split('T')[0];

  const handleCompound = () => {
    const today = new Date().toISOString().split('T')[0];
    if (lastCompoundDate !== today) {
      const newStreak = dayStreak + 1;
      setDayStreak(newStreak);
      setLastCompoundDate(today);
      setShowAnimation(true);
      setTimeout(() => setShowAnimation(false), 2000);
    }
  };

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
     <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 w-full max-w-sm border border-white/10 shadow-[0_0_15px_rgba(0,0,0,0.1)] relative before:absolute before:inset-0 before:bg-gradient-to-b before:from-white/10 before:to-transparent before:rounded-3xl before:-z-10">
        <h1 className="text-6xl font-bold text-white text-center mb-4">{multiplier}x</h1>
        <p className="text-2xl text-white/80 text-center mb-8">Day {dayStreak}</p>
        <div className="flex justify-center">
        <button 
         onClick={handleCompound}
         disabled={isCompoundedToday}
         className="w-40 h-40 rounded-full bg-white hover:bg-white/90 text-2xl font-bold text-blue-600 shadow-xl transition-all disabled:opacity-50 flex items-center justify-center"
>
        {isCompoundedToday ? 'Done!' : 'Compound'}
        </button>
        </div>
        {showAnimation && (
          <p className="text-white text-xl text-center mt-6 animate-bounce">
            +1% Gained! ✨
          </p>
        )}
      </div>
    </div>
  );
}