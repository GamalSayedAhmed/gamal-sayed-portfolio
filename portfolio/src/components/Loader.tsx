"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const STAGES = ["extract", "transform", "load"];

export default function Loader() {
  const [visible, setVisible] = useState(true);
  const [stageIndex, setStageIndex] = useState(0);

  useEffect(() => {
    const stageTimer = setInterval(() => {
      setStageIndex((prev) => Math.min(prev + 1, STAGES.length - 1));
    }, 260);
    const hideTimer = setTimeout(() => setVisible(false), 950);
    return () => {
      clearInterval(stageTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-void"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <div className="flex flex-col items-center gap-4">
            <div className="flex items-center gap-2">
              {STAGES.map((stage, i) => (
                <div key={stage} className="flex items-center gap-2">
                  <motion.span
                    className="h-2.5 w-2.5 rounded-full"
                    animate={{
                      backgroundColor:
                        i <= stageIndex
                          ? "var(--color-accent-ice)"
                          : "var(--color-elevated)",
                      scale: i === stageIndex ? 1.3 : 1,
                    }}
                    transition={{ duration: 0.3 }}
                  />
                  {i < STAGES.length - 1 && (
                    <span className="h-px w-6 bg-hairline" />
                  )}
                </div>
              ))}
            </div>
            <p className="font-mono text-xs tracking-[0.3em] uppercase text-ink-faint">
              {STAGES[stageIndex]}
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
