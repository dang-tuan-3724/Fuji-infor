"use client";

import { motion } from 'framer-motion';
import { Mail, Facebook, Phone } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const contactInfo = [
	{
		icon: <Mail className="h-8 w-8 text-primary" />,
		label: "Email",
		value: "fujijapanesecorner@gmail.com",
		href: "mailto:fujijapanesecorner@gmail.com",
	},
	{
		icon: <Facebook className="h-8 w-8 text-primary" />,
		label: "Facebook",
		value: "https://www.facebook.com/FujiBKHCM",
		href: "https://www.facebook.com/FujiBKHCM",
	},
	{
		icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor" className="h-8 w-8 text-primary"><path d="M448 209.9a210.1 210.1 0 01-122.8-39.25V349.4A162.6 162.6 0 11185 188.3v89.9A74.6 74.6 0 10237.2 347V0h49.2v128h49.1A210.1 210.1 0 01448 209.9z"/></svg>,
		label: "TikTok",
		value: "@fujiclub.hcmut",
		href: "https://tiktok.com/@fujiclub.hcmut",
	},
	{
		icon: <Phone className="h-8 w-8 text-primary" />,
		label: "Số điện thoại",
		value: "0123 456 789",
		href: "tel:0123456789",
	},
];

const containerVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.2,
			delayChildren: 0.3,
		},
	},
};

const itemVariants = {
	hidden: { y: 20, opacity: 0 },
	visible: {
		y: 0,
		opacity: 1,
		transition: {
			duration: 0.5,
		},
	},
};

export function Contact() {
	return (
		<motion.section
			id="contact"
			className="py-16 md:py-24 bg-secondary rounded-lg px-4"
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true, amount: 0.3 }}
			variants={containerVariants}
		>
			<div className="container flex justify-center mx-auto">
				<motion.div variants={itemVariants} className="w-full">
					<Card>
						<CardHeader className="items-center">
							<CardTitle className="font-headline text-3xl md:text-4xl text-primary">Liên hệ</CardTitle>
						</CardHeader>
						<CardContent>
							<div className="space-y-6">
								{contactInfo.map((item) => (
									<motion.div key={item.label} variants={itemVariants}>
										<a
											href={item.href}
											target="_blank"
											rel="noopener noreferrer"
											className="flex items-center space-x-4 p-4 rounded-lg transition-colors hover:bg-accent"
										>
											{item.icon}
											<div>
												<p className="font-bold">{item.label}</p>
												<p className="text-muted-foreground">{item.value}</p>
											</div>
										</a>
									</motion.div>
								))}
							</div>
						</CardContent>
					</Card>
				</motion.div>
			</div>
		</motion.section>
	);
}
