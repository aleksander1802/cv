import Circles from '@/components/Circles';
import { motion } from 'framer-motion';
import { fadeIn } from '@/variants';
import { BsEnvelope, BsPhone } from 'react-icons/bs';

const Contact = () => {
	return (
		<div className="min-h-screen bg-primary/30 flex items-center justify-center">
			<div className="w-full max-w-4xl px-4 sm:px-6 lg:px-8">
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
						className="flex items-center gap-2"
					>
						<BsEnvelope className="text-accent text-2xl sm:text-3xl" />
						<p className="text-white">
							aleksander-18-02@
							<span className="text-accent font-bold">
								yandex
							</span>
							.ru
						</p>
					</motion.div>
					<motion.div
						variants={fadeIn('up', 0.4)}
						initial="hidden"
						animate="show"
						exit="hidden"
						className="flex items-center gap-2"
					>
						<BsPhone className="text-accent text-2xl sm:text-3xl" />
						<p className="text-white">
							+7-
							<span className="text-accent font-bold">949</span>
							-707-20-53
						</p>
					</motion.div>
					{/* Можно и другие контакты добавить */}
				</div>
			</div>
			<Circles />
		</div>
	);
};

export default Contact;
