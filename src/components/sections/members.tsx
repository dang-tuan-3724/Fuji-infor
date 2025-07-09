"use client";

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { members } from '@/data/members';
import type { Member } from '@/data/members';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const departments: Member['department'][] = [
  'Ban Tổ Chức Sự Kiện',
  'Ban Truyền Thông',
  'Ban Đối Ngoại',
  'Ban Chuyên Môn',
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
  exit: { y: -20, opacity: 0 }
};

export function Members() {
  const [selectedDept, setSelectedDept] = useState<Member['department'] | 'Tất cả'>('Tất cả');

  const filteredMembers = selectedDept === 'Tất cả'
    ? members
    : members.filter((member) => member.department === selectedDept);

  return (
    <motion.section
      id="members"
      className="py-16 md:py-24 bg-secondary rounded-lg px-4"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
    >
      <div className="container max-w-7xl items-center px-4">
        <motion.h2
          className="text-center font-headline text-3xl md:text-4xl font-bold mb-4 text-primary"
          variants={itemVariants}
        >
          Thành viên Fuji Club
        </motion.h2>
        
        <motion.div 
          className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12"
          variants={itemVariants}
        >
          <Button
            variant={selectedDept === 'Tất cả' ? 'default' : 'outline'}
            onClick={() => setSelectedDept('Tất cả')}
            className="rounded-full"
          >
            Tất cả
          </Button>
          {departments.map((dept) => (
            <Button
              key={dept}
              variant={selectedDept === dept ? 'default' : 'outline'}
              onClick={() => setSelectedDept(dept)}
              className="rounded-full"
            >
              {dept}
            </Button>
          ))}
        </motion.div>

        <motion.div
          layout
          className="grid px-8 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6 justify-center"
        >
          <AnimatePresence>
            {filteredMembers.map((member) => (
              <motion.div
                key={member.id}
                layout
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{ duration: 0.3 }}
              >
                <Card className="text-center overflow-hidden transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl flex flex-col h-[320px]">
                  <CardHeader className="p-0">
                    <Image
                      src={member.imageUrl}
                      alt={member.name}
                      width={200}
                      height={200}
                      className="w-full h-[160px] aspect-square object-cover"
                      data-ai-hint="portrait person"
                    />
                  </CardHeader>
                  <CardContent className="p-4 flex-1 flex flex-col justify-center min-h-[80px]">
                    <p className="font-bold text-base break-words whitespace-normal">{member.name}</p>
                    <p className="text-sm text-muted-foreground">{member.generation}</p>
                    {member.isLeader && (
                      <p className="text-sm text-primary font-semibold">Trưởng ban</p>
                    )}
                    {member.isPresident && (
                      <p className="text-sm text-primary font-semibold">Chủ nhiệm</p>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </motion.section>
  );
}
