"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import { events } from '@/data/events';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } },
};

export function Events() {
  const upcomingEvents = events.filter((event) => event.isUpcoming);
  const pastEvents = events.filter((event) => !event.isUpcoming);

  return (
    <motion.section
      id="events"
      className="w-full py-16 md:py-24"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
    >
      <div className="container max-w-7xl">
        <motion.h2
          className="text-center font-headline text-3xl md:text-4xl font-bold mb-12 text-primary"
          variants={itemVariants}
        >
          Sự kiện của chúng tôi
        </motion.h2>

        <motion.div variants={itemVariants}>
          <h3 className="font-headline text-2xl md:text-3xl font-semibold mb-8">Sắp diễn ra</h3>
          {upcomingEvents.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {upcomingEvents.map((event) => (
                <motion.div key={event.id} variants={itemVariants}>
                  <EventCard event={event} />
                </motion.div>
              ))}
            </div>
          ) : (
            <p className="text-center text-muted-foreground">Hiện chưa có sự kiện nào sắp diễn ra. Quay lại sau nhé!</p>
          )}
        </motion.div>
        
        <motion.div className="mt-16" variants={itemVariants}>
          <h3 className="font-headline text-2xl md:text-3xl font-semibold mb-8">Đã diễn ra</h3>
          {pastEvents.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {pastEvents.map((event) => (
                <motion.div key={event.id} variants={itemVariants}>
                  <EventCard event={event} />
                </motion.div>
              ))}
            </div>
          ) : (
             <p className="text-center text-muted-foreground">Chưa có sự kiện nào trong quá khứ.</p>
          )}
        </motion.div>
      </div>
    </motion.section>
  );
}

function EventCard({ event }: { event: (typeof events)[0] }) {
  return (
    <Card className="flex flex-col h-full overflow-hidden transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl">
      <CardHeader className="p-0 relative">
        <Image
          src={event.imageUrl}
          alt={event.name}
          width={400}
          height={250}
          className="w-full h-48 object-cover"
          data-ai-hint="event poster"
        />
        {event.isUpcoming && <Badge className="absolute top-2 right-2">Sắp diễn ra</Badge>}
      </CardHeader>
      <CardContent className="flex-grow p-6">
        <CardTitle className="font-headline text-xl mb-2">{event.name}</CardTitle>
        <p className="text-sm text-muted-foreground line-clamp-3">{event.description}</p>
      </CardContent>
      <CardFooter className="p-6 pt-0 flex-wrap gap-2">
        <Button asChild variant="outline" className="flex-1 min-w-[120px]">
          <Link href={event.facebookLink} target="_blank">Xem trên Facebook</Link>
        </Button>
        {event.isUpcoming && event.registrationLink && (
          <Button asChild className="flex-1 min-w-[120px]">
             <Link href={event.registrationLink} target="_blank">Đăng ký ngay</Link>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
