"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const galaCountdownTarget = new Date(2027, 2, 31, 0, 0, 0); // March 31, 2027 (month is 0-based)

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

function getTimeLeft() {
  const now = new Date().getTime();
  const distance = Math.max(galaCountdownTarget.getTime() - now, 0);

  return {
    days: Math.floor(distance / (1000 * 60 * 60 * 24)),
    hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((distance / 1000 / 60) % 60),
    seconds: Math.floor((distance / 1000) % 60),
  };
}

function formatCountdownValue(value: number) {
  return String(value).padStart(2, "0");
}

function CountdownTimer() {
  const [timeLeft, setTimeLeft] = React.useState<ReturnType<typeof getTimeLeft> | null>(null);

  React.useEffect(() => {
    function updateTimeLeft() {
      setTimeLeft(getTimeLeft());
    }

    updateTimeLeft();
    const timer = window.setInterval(updateTimeLeft, 1000);

    return () => window.clearInterval(timer);
  }, []);

  const timeBlocks = [
    { label: "Days", value: timeLeft?.days },
    { label: "Hours", value: timeLeft?.hours },
    { label: "Mins", value: timeLeft?.minutes },
    { label: "Secs", value: timeLeft?.seconds },
  ];

  return (
    <div className="mx-auto mt-8 max-w-4xl text-center">
      <p className="text-sm uppercase tracking-[0.35em] text-amber-200/80 md:text-base">We'll be back for another unforgettable night.</p>
      <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {timeBlocks.map((block) => (
          <div key={block.label} className="rounded-3xl border border-white/10 bg-white/5 px-4 py-5 text-center backdrop-blur-md">
            <p className="text-3xl font-semibold text-amber-300 md:text-4xl">{formatCountdownValue(block.value ?? 0)}</p>
            <p className="mt-2 text-[10px] uppercase tracking-[0.35em] text-neutral-400">{block.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ComingSoonPage() {
  return (
    <div className="min-h-screen bg-[#060606] text-white flex flex-col">

      <main className="mx-auto flex grow items-center justify-center px-6 py-20 md:px-10">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.55 }} className="w-full max-w-3xl text-center">
          <h1 className="text-5xl font-semibold leading-tight text-white md:text-6xl">Coming Soon</h1>

          <CountdownTimer />

          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">

            <div className="text-center">
              <Button asChild variant="outline" className="rounded-2xl bg-amber-300 px-10 py-10 text-lg text-black hover:bg-amber-200 text-base">
                <a href="https://shotbyblnkspce.pixieset.com/bitscigala2026/" target="_blank" rel="noopener noreferrer">View 2026 Photo Album</a>
              </Button>
              <p className="mt-2 text-sm text-neutral-300">Download Code: <span className="font-medium text-amber-200">9355</span></p>
            </div>
          </div>
        </motion.div>
      </main>

      <footer className="mx-auto w-full max-w-7xl px-6 py-6 text-center text-neutral-400 md:px-10">
        <p>© {new Date().getFullYear()} BITSoc & SciCo — See you in 2027.</p>
      </footer>
    </div>
  );
}
