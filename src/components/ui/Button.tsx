"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { motion } from "motion/react";
import { spring } from "@/lib/motion";
import { cn } from "@/lib/cn";

const MotionLink = motion.create(Link);

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost";
  inverse?: boolean;
  className?: string;
  onClick?: () => void;
};

export default function Button({
  href,
  children,
  variant = "primary",
  inverse = false,
  className,
  onClick,
}: ButtonProps) {
  return (
    <MotionLink
      href={href}
      onClick={onClick}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.97, y: 0 }}
      transition={spring.press}
      className={cn(
        "inline-flex min-h-12 items-center justify-center whitespace-nowrap rounded-[28px] px-6 py-3 text-body font-medium tracking-[-0.015em] transition-[color,background-color,transform] duration-300",
        variant === "primary"
          ? inverse
            ? "border border-white/70 bg-white text-portrait-ink hover:bg-white/90"
            : "rainbow-outline text-portrait-ink hover:bg-[linear-gradient(#f9fbff,#f9fbff)_padding-box,var(--gradient-rainbow)_border-box]"
          : inverse
            ? "border-0 bg-transparent text-white hover:text-white/70"
            : "border-0 bg-transparent text-portrait-ink hover:text-nautical-teal",
        className,
      )}
    >
      {children}
    </MotionLink>
  );
}
