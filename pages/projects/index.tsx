import ServiceSlider from '@/components/ServiceSlider';
import Bulb from '@/components/Bulb';
import Circles from '@/components/Circles';
import { motion } from 'framer-motion';
import { fadeIn } from '@/variants';

const Projects = () => {
	return (
		<div className="h-full bg-primary/30 flex items-center">
			<Circles />
			<div className="container mx-auto">
				<div className="flex flex-col xl:flex-row gap-x-8 max-sm:gap-2">
					<div className="text-center flex xl:w-[30vw] flex-col lg:text-center xl:text-left mb-4 max-sm:mb-1 xl:mb-0 z-20">
						<motion.h2
							variants={fadeIn('up', 0.2)}
							initial="hidden"
							animate="show"
							exit="hidden"
							className="h2 xl:mt-8 max-sm:my-2 max-sm:text-3xl"
						>
							Мои <span className="text-accent">командные</span>{' '}
							проекты<span className="text-accent">.</span>
						</motion.h2>
						<motion.p
							variants={fadeIn('up', 0.4)}
							initial="hidden"
							animate="show"
							exit="hidden"
							className="mb-4 max-w-[400px] mx-auto max-sm:mb-4 max-sm:text-[18px]"
						>
							Умение работать в команде является наивысшим
							приоритетом так как предоставляет возможность
							обмениваться знаниями и опытом.
						</motion.p>
					</div>
					<motion.div
						variants={fadeIn('down', 0.6)}
						initial="hidden"
						animate="show"
						exit="hidden"
						className="w-full xl:max-w-[65%] flex items-center"
					>
						<ServiceSlider />
					</motion.div>
				</div>
			</div>
			<Bulb />
		</div>
	);
};

export default Projects;
