import WorkSlider from '@/components/WorkSlider';
import Circles from '@/components/Circles';
import { motion } from 'framer-motion';
import { fadeIn } from '@/variants';

const Work = () => {
	return (
		<div className="h-full bg-primary/30 py-24 flex items-center">
			<Circles />
			<div className="container mx-auto">
				<div className="flex flex-col xl:flex-row gap-x-8">
					<div className="text-center flex xl:w-[30vw] flex-col mb-4 xl:mb-0 max-sm:mb-0 z-20">
						<motion.h2
							variants={fadeIn('up', 0.2)}
							initial="hidden"
							animate="show"
							exit="hidden"
							className="h2 xl:mt-12"
						>
							{' '}
							Мои <span className="text-accent">работы.</span>
						</motion.h2>
						<motion.p
							variants={fadeIn('up', 0.4)}
							initial="hidden"
							animate="show"
							exit="hidden"
							className="mb-4 xl:max-w-[400px] max-sm:text-[16px] text-center xl:text-left mx-auto lg:mx-0 "
						>
							Мои работы дали мне ценный опыт и позволили понять,
							как важна практика и творческий подход к решению
							задач. Моя страсть к веб-разработке исходит из
							желания преобразовывать абстрактные идеи в
							интерактивные продукты, которые могут вдохновлять и
							удивлять.
						</motion.p>
					</div>
					<motion.div
						variants={fadeIn('down', 0.6)}
						initial="hidden"
						animate="show"
						exit="hidden"
						className="w-full xl:max-w-[65%]"
					>
						<WorkSlider />
					</motion.div>
				</div>
			</div>
		</div>
	);
};

export default Work;
