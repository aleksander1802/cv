import {
	FaHtml5,
	FaCss3,
	FaJs,
	FaReact,
	FaWordpress,
	FaFigma,
} from 'react-icons/fa';

import {
	SiNextdotjs,
	SiFramer,
	SiAdobexd,
	SiAdobephotoshop,
} from 'react-icons/si';

import React, { useState } from 'react';
import Circles from '@/components/Circles';
import { motion } from 'framer-motion';
import { fadeIn } from '@/variants';
import { InfoItem } from '@/models/types';
// import CountUp from 'react-countup';

const aboutData: { title: string; info: InfoItem[] }[] = [
	{
		title: 'skills',
		info: [
			{
				title: 'Web Development',
				icons: [
					<FaHtml5 key="html5" />,
					<FaCss3 key="css3" />,
					<FaJs key="js" />,
					<FaReact key="react" />,
					<SiNextdotjs key="nextjs" />,
					<SiFramer key="framer" />,
					<FaWordpress key="wordpress" />,
				],
			},
			{
				title: 'UI/UX Design',
				icons: [
					<FaFigma key="figma" />,
					<SiAdobexd key="adobexd" />,
					<SiAdobephotoshop key="photoshop" />,
				],
			},
		],
	},
	{
		title: 'awards',
		info: [
			{
				title: 'Webby Awards - Honoree',
				stage: '2011 - 2012',
			},
			{
				title: 'Adobe Design Achievement Awards - Finalist',
				stage: '2009 - 2010',
			},
		],
	},
	{
		title: 'experience',
		info: [
			{
				title: 'UX/UI Designer - XYZ Company',
				stage: '2012 - 2023',
			},
			{
				title: 'Web Developer - ABC Agency',
				stage: '2010 - 2012',
			},
			{
				title: 'Intern - DEF Corporation',
				stage: '2008 - 2010',
			},
		],
	},
	{
		title: 'credentials',
		info: [
			{
				title: 'Web Development - ABC University, LA, CA',
				stage: '2011',
			},
			{
				title: 'Computer Science Diploma - AV Technical Institute',
				stage: '2009',
			},
			{
				title: 'Certified Graphic Designer - ABC Institute, Los Angeles, CA',
				stage: '2006',
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
						Captivating <span className="text-accent">stories</span>{' '}
						birth magnificent designs.
					</motion.h2>

					<motion.p
						variants={fadeIn('right', 0.4)}
						initial="hidden"
						animate="show"
						exit="hidden"
						className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0"
					>
						Lorem ipsum dolor, sit amet consectetur adipisicing
						elit. Ipsa, officiis consectetur ut consequuntur quaerat
						veniam nisi suscipit animi nobis maxime odio dicta
						dolores eaque commodi ea aspernatur, et praesentium
						iusto.
					</motion.p>

					{/* <motion.div
						variants={fadeIn('right', 0.6)}
						initial="hidden"
						animate="show"
						exit="hidden"
						className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8"
					>
						<div className="flex flex-1 xl:gap-x-6">
							<div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
								<div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
									<CountUp
										start={0}
										end={1}
									/>{' '}
									+
								</div>
								<div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
									Years of experience
								</div>
							</div>
						</div>
					</motion.div> */}
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
