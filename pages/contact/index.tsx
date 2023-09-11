import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BsEnvelope, BsPhone } from 'react-icons/bs';
import Circles from '@/components/Circles';
import { fadeIn } from '@/variants';

const Contact = () => {
	const [copiedEmail, setCopiedEmail] = useState(false);
	const [copiedPhone, setCopiedPhone] = useState(false);

	const copyEmailToClipboard = (text: string) => {
		navigator.clipboard.writeText(text).then(() => {
			setCopiedEmail(true);
			setTimeout(() => {
				setCopiedEmail(false);
			}, 2000);
		});
	};

	const copyPhoneToClipboard = (text: string) => {
		navigator.clipboard.writeText(text).then(() => {
			setCopiedPhone(true);
			setTimeout(() => {
				setCopiedPhone(false);
			}, 2000);
		});
	};

	const copyText = (
		<motion.div
			variants={fadeIn('right', 0.1)}
			initial="hidden"
			animate="show"
			exit="hidden"
			className="absolute top-3/4 left-0 w-full h-full flex items-center justify-center"
		>
			<div className="text-accent p-2">Скопировано!</div>
		</motion.div>
	);

	return (
		<div className="min-h-screen bg-primary/30 flex items-center justify-center">
			<div className="w-full max-w-4xl px-4 sm:px-6 lg:px-8 relative">
				<motion.div
					variants={fadeIn('up', 0.2)}
					initial="hidden"
					animate="show"
					exit="hidden"
					className="text-center mb-12"
				>
					<h2 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-center text-white">
						Контакты
						<span className="text-accent">.</span>
					</h2>
				</motion.div>
				<div className="flex flex-col gap-6 text-lg sm:text-xl md:text-2xl items-center">
					<motion.div
						variants={fadeIn('up', 0.3)}
						initial="hidden"
						animate="show"
						exit="hidden"
						className="flex items-center gap-2 relative cursor-pointer"
						onClick={() =>
							copyEmailToClipboard('aleksander-18-02@yandex.ru')
						}
						title="Click to copy"
					>
						<BsEnvelope className="text-accent text-2xl sm:text-3xl" />
						<p className="text-white">
							aleksander-18-02@
							<span className="text-accent font-bold">
								yandex
							</span>
							.ru
						</p>
						{copiedEmail && copyText}
					</motion.div>
					<motion.div
						variants={fadeIn('up', 0.4)}
						initial="hidden"
						animate="show"
						exit="hidden"
						className="flex items-center gap-2 relative cursor-pointer"
						onClick={() => copyPhoneToClipboard('+7-949-707-20-53')}
						title="Click to copy"
					>
						<BsPhone className="text-accent text-2xl sm:text-3xl" />
						<p className="text-white">
							+7-
							<span className="text-accent font-bold">949</span>
							-707-20-53
						</p>
						{copiedPhone && copyText}
					</motion.div>
				</div>
			</div>
			<Circles />
		</div>
	);
};

export default Contact;
