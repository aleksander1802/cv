import { FaHtml5, FaCss3, FaJs, FaReact, FaFigma } from 'react-icons/fa';
import {
	SiNextdotjs,
	SiRedux,
	SiTypescript,
	SiAdobephotoshop,
	SiGraphql,
	SiPrisma,
	SiFastify,
	SiPostgresql,
	SiDocker,
} from 'react-icons/si';
import React, { useState } from 'react';
import Circles from '@/components/Circles';
import { motion } from 'framer-motion';
import { fadeIn } from '@/variants';
import { InfoItem } from '@/models/types';

const aboutData: { title: string; info: InfoItem[] }[] = [
	{
		title: 'навыки',
		info: [
			{
				title: 'Front-end',
				icons: [
					<FaHtml5
						values="dws"
						key="html5"
					/>,
					<FaCss3 key="css3" />,
					<FaJs key="js" />,
					<SiTypescript key="typescript" />,
					<FaReact key="react" />,
					<SiRedux key="redux" />,
				],
			},
			{
				title: 'Back-end',
				icons: [
					<SiNextdotjs key="nextjs" />,
					<SiFastify key="fastify" />,
					<SiPrisma key="prisma" />,
					<SiGraphql key="grahpql" />,
					<SiPostgresql key="postgresql" />,
					<SiDocker key="docker" />,
				],
			},
			{
				title: 'UI/UX Design',
				icons: [
					<FaFigma key="figma" />,
					<SiAdobephotoshop key="photoshop" />,
				],
			},
		],
	},
	{
		title: 'образование',
		info: [
			{
				title: 'Право - МГУ (Мариуполь) - Бакалавр',
				stage: '2012 - 2016',
			},
			{
				title: 'Право - МГУ (Мариуполь) - Магистр',
				stage: '2018',
			},
			{
				title: 'JAVASCRIPT/FRONT-END - The Rolling Scopes School',
				stage: '2023',
			},
			{
				title: 'REACT - The Rolling Scopes School',
				stage: '2023',
			},
			{
				title: 'NODEJS - The Rolling Scopes School',
				stage: '2023',
			},
		],
	},
];

const About = () => {
	const initial = 0;
	const [index, setIndex] = useState(initial);

	const data = aboutData.map((item, itemIndex) => {
		return (
			<div
				key={itemIndex}
				className={`cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:absolute after:-bottom-1 after:left-0  ${
					index === itemIndex
						? 'text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300'
						: 'after:bg-white'
				}`}
				onClick={() => setIndex(itemIndex)}
			>
				{item.title}
			</div>
		);
	});

	const info = aboutData[index].info.map((item, itemIndex) => {
		return (
			<div
				key={itemIndex}
				className="flex-1 text-sm flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60"
			>
				<div className="font-light mb-2 md:mb-0">{item.title}</div>
				<div className="hidden md:flex">-</div>
				<div>{item.stage && item.stage}</div>
				<div className="flex gap-x-4">
					{item.icons &&
						item.icons.map((icon, idx) => {
							return (
								<div
									key={idx}
									className="text-2xl text-white"
								>
									{icon}
								</div>
							);
						})}
				</div>
			</div>
		);
	});

	return (
		<div className="h-full bg-primary/30 py-32 text-center xl:text-left">
			<Circles />

			<div className="container px-0 mx-auto h-full flex flex-col items-start xl:flex-row gap-x-6">
				<div className="flex-1 flex flex-col justify-start">
					<motion.h2
						variants={fadeIn('right', 0.2)}
						initial="hidden"
						animate="show"
						exit="hidden"
						className="h2"
					>
						Моя <span className="text-accent">мотивация</span>
						
						<span className="text-accent">.</span>
					</motion.h2>

					<motion.p
						variants={fadeIn('right', 0.4)}
						initial="hidden"
						animate="show"
						exit="hidden"
						className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0"
					>
						Стремление к созданию креативных и функциональных
						веб-сайтов и приложений с красивым, адаптивным,
						интуитивно понятным и восхитительным пользовательским
						интерфейсом всегда мотивировало меня.
					</motion.p>
				</div>

				<motion.div
					variants={fadeIn('left', 0.4)}
					initial="hidden"
					animate="show"
					exit="hidden"
					className="flex flex-col w-full xl:max-w-[48%] h-[480px]"
				>
					<div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
						{data}
					</div>
					<div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
						{info}
					</div>
				</motion.div>
			</div>
		</div>
	);
};

export default About;
