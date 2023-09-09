import Circles from '@/components/Circles';
import { fadeIn } from '@/variants';
import { motion } from 'framer-motion';
import Document from '@/components/Document';
import SertificateSlider from '@/components/SertificateSlider';

const Sertificates = () => {
	return (
		<div className="h-full bg-primary/30 py-36 flex items-center">
			<Circles />
			<div className="container mx-auto">
				<div className="flex flex-col xl:flex-row gap-x-8 items-center">
					<div className="text-center flex xl:w-[30vw] flex-col lg:text-center xl:text-left mb-4 xl:mb-0">
						<motion.h2
							variants={fadeIn('up', 0.2)}
							initial="hidden"
							animate="show"
							exit="hidden"
							className="h2 xl:mt-8"
						>
							Мои{' '}
							<span className="text-accent">сертификаты.</span>{' '}
						</motion.h2>
						<motion.p
							variants={fadeIn('up', 0.4)}
							initial="hidden"
							animate="show"
							exit="hidden"
							className="mb-4 max-w-[400px] mx-auto"
						>
							Сертификаты получены в ходе обучения на
							платформе The Rolling Scopes School. RS School — это
							бесплатная образовательная программа, проводимая
							сообществом разработчиков The Rolling Scopes с 2013
							года. Так же имеется сертификат моего уровня владения английским.
						</motion.p>
					</div>
					<motion.div
						variants={fadeIn('down', 0.6)}
						initial="hidden"
						animate="show"
						exit="hidden"
						className="w-full xl:max-w-[65%]"
					>
						<SertificateSlider />
					</motion.div>
				</div>
			</div>
			<Document />
		</div>
	);
};

export default Sertificates;
