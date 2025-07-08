"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';

export function Hero() {
  return (
    <section id="home" className="relative h-[60vh] md:h-[calc(100vh-112px)] w-auto flex items-end justify-start text-white rounded-lg overflow-hidden mx-4">
      <Image
        src="https://placehold.co/1920x1080.png"
        alt="Fuji Club members"
        layout="fill"
        objectFit="cover"
        priority
        className="brightness-75"
        data-ai-hint="club members group photo"
      />
      <div className="relative z-10 p-8 md:p-12">
        <motion.h1
          className="font-headline text-4xl md:text-6xl lg:text-7xl font-bold"
          style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.7)' }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Nơi giao lưu học hỏi
        </motion.h1>
        <motion.h2
          className="font-headline text-4xl md:text-6xl lg:text-7xl font-bold"
          style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.7)' }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          về văn hóa Nhật Bản
        </motion.h2>
      </div>
    </section>
  );
}
