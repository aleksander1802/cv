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
	SiSass,
	SiBem,
	SiGit,
	SiVite,
	SiWebpack,
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
						title="HTML"
					/>,
					<FaCss3
						key="css3"
						title="CSS"
					/>,
					<SiSass
						key="sass"
						title="SASS"
					/>,
					<SiBem
						key="bem"
						title="БЭМ"
					/>,
					<SiGit
						key="git"
						title="Git"
					/>,
					<FaJs
						key="js"
						title="JavaScript"
					/>,
					<SiTypescript
						key="typescript"
						title="TypeScript"
					/>,
					<FaReact
						key="react"
						title="React"
					/>,
					<SiRedux
						key="redux"
						title="Redux, RTK"
					/>,
					<SiVite
						key="vite"
						title="Vite"
					/>,
					<SiWebpack
						key="webpack"
						title="Webpack"
					/>,
				],
			},
			{
				title: 'Back-end',
				icons: [
					<SiNextdotjs
						key="nextjs"
						title="Next.js"
					/>,
					<SiFastify
						key="fastify"
						title="Fastify"
					/>,
					<SiPrisma
						key="prisma"
						title="Prisma"
					/>,
					<SiPostgresql
						key="postgresql"
						title="PostgreSQL"
					/>,
					<SiGraphql
						key="grahpql"
						title="GraphQL"
					/>,
					<SiDocker
						key="docker"
						title="Docker"
					/>,
				],
			},
			{
				title: 'UI/UX Design',
				icons: [
					<FaFigma
						key="figma"
						title="Figma"
					/>,
					<SiAdobephotoshop
						key="photoshop"
						title="Adobe Photoshop"
					/>,
				],
			},
		],
	},
	{
		title: 'образование',
		info: [
			{
				title: 'Право - МГУ - Мариуполь - Бакалавр',
				stage: '2012 - 2016',
			},
			{
				title: 'Право - МГУ - Мариуполь - Магистр',
				stage: '2018',
			},
			{
				title: 'JavaScript/Front-End - The Rolling Scopes School',
				stage: '2022 - 2023',
			},
			{
				title: 'React - The Rolling Scopes School',
				stage: '2023',
			},
			{
				title: 'NodeJS - The Rolling Scopes School',
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
				className={`cursor-pointer capitalize xl:text-lg relative hover:text-accent hover:after:bg-accent after:w-8 after:h-[2px] after:absolute after:-bottom-1 after:left-0  ${
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
				className="flex-1 text-sm flex flex-col md:flex-row max-w-max gap-x-2 max-sm:items-center text-white/60"
			>
				<div className="font-light mb-1 md:mb-0 max-sm:text-[16px] min-w-[110px]">
					{item.title}
				</div>
				<div className="hidden md:flex">-</div>
				<div>{item.stage && item.stage}</div>
				<div className="flex gap-4 flex-wrap max-xl:justify-center">
					{item.icons &&
						item.icons.map((icon, idx) => {
							return (
								<div
									key={idx}
									className="text-2xl text-white hover:text-accent "
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
		<div className="max-sm:flex max-sm:items-center h-full bg-primary/30 py-40 max-sm:py-24 text-center xl:text-left">
			<Circles />

			<div className="container px-0 mx-auto max-sm:h-full flex flex-col justify-between max-sm:items-start xl:flex-row gap-x-6 max-sm:justify-center ">
				<div className="flex-1 flex flex-col justify-start max-sm:justify-center items-left max-sm:items-center text-center xl:text-left mb-4 max-sm:mb-0 z-20 max-sm:min-h-max">
					<motion.h2
						variants={fadeIn('right', 0.2)}
						initial="hidden"
						animate="show"
						exit="hidden"
						className="h2 mb-0"
					>
						Моя <span className="text-accent">мотивация.</span>
					</motion.h2>

					<motion.p
						variants={fadeIn('right', 0.4)}
						initial="hidden"
						animate="show"
						exit="hidden"
						className="xl:max-w-[500px] mx-auto xl:mx-0 mb-6 max-sm:mb-0 xl:mb-12 px-2 xl:px-0"
					>
						Стремление к созданию креативных и функциональных
						веб-сайтов всегда мотивировало меня.
					</motion.p>
				</div>

				<motion.div
					variants={fadeIn('left', 0.4)}
					initial="hidden"
					animate="show"
					exit="hidden"
					className="flex flex-col justify-start max-xl:items-center w-full xl:max-w-[48%] max-sm:min-h-[390px] z-20"
				>
					<div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4 ">
						{data}
					</div>
					<div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 max-xl:items-center items-start">
						{info}
					</div>
				</motion.div>
			</div>
		</div>
	);
};

export default About;
