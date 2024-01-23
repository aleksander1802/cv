import { BsArrowRight } from 'react-icons/bs';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import Image from 'next/image';

const workSlides = {
	slides: [
		{
			images: [
				{
					title: 'Отдых в Карелии',
					path: '/cv/karelia_cv.jpg',
					description:
						'Лендинговая страничка усадьбы в Карелии. Отдых на природе. Стек: Next.js и Tailwind.',
					link: 'https://aleksander1802.github.io/karelia/',
				},
				{
					title: 'Fishmania',
					path: '/cv/fishmania_cv.jpg',
					description:
						'Лендинговая страничка. Презентация греческой рыбной продукции. Импорт/экспорт продукции. Приложение поддерживает 3 языка. Стек: Next.js и Tailwind.',
					link: 'https://fishmania.vercel.app/',
				},
				{
					title: 'Angular Messenger',
					path: '/cv/angular_cv2.jpg',
					description:
						'Пет-проект, мессенджер с возможностью общения в группе так и индивидуально. Создавай, удаляй группы. Доступна смена темы. База данных на Node.js. Стек: Angular',
					link: 'https://aleksander1802.github.io/angular-messenger/',
				},
				{
					title: 'Angular Youtube',
					path: '/cv/angular_cv1.jpg',
					description:
						'Пет-проект, используется Youtube API. Возможность поиска видео, добавление в избранное и создание кастомных карточек. Стек: Angular',
					link: 'https://aleksander1802.github.io/angular2023Q4/youtube',
				},
			],
		},
		{
			images: [
				{
					title: 'Пет проект',
					path: '/cv/thumb1.jpg',
					description:
						'Небольшой пет-проект, аналог всем известного портала Habr',
					link: 'https://meek-panda-9e5407.netlify.app/',
				},
				{
					title: 'Next app router',
					path: '/cv/router.jpg',
					description:
						'Проект посвящённый рейтингам. Содержит трёхуровневое меню. Используется Next.js 13 и обновлённый App router вместо Pages router',
					link: 'https://next-app-router-roan.vercel.app/',
				},
				{
					title: 'Online zoo',
					path: '/cv/thumb3.jpg',
					description:
						'Проект про важность поддержки братьев наших меньших.',
					link: 'https://aleksander1802.github.io/online-zoo/pages/main/',
				},
				{
					title: 'Song bird',
					path: '/cv/thumb4.jpg',
					description:
						'Викторина в которой нужно угадать птицу по её пению.',
					link: 'https://aleksander1802.github.io/songbird/',
				},
			],
		},

		{
			images: [
				{
					title: 'Battleship',
					path: '/cv/thumb5.jpg',
					description:
						'Игра в морской бой. Web-socket. Ветка develop содержит readme по запуску.',
					link: 'https://github.com/aleksander1802/battleship/pull/1',
				},
				{
					title: 'Graphql',
					path: '/cv/thumb6.jpg',
					description:
						'Таска по переводу REST на рельсы GrahpQL, решение n+1, ограничение сложности запросов.',
					link: 'https://github.com/aleksander1802/rsschool-nodejs-task-graphql/pull/1',
				},
				{
					title: 'Home Library Service',
					path: '/cv/thumb7.jpg',
					description:
						'Каждый PR содержит часть таска. Необходимо было создать домашнюю музыкальную библиотеку.',
					link: 'https://github.com/aleksander1802/nodejs2023Q2-service/pulls',
				},
				{
					title: 'CRUD API',
					path: '/cv/thumb8.jpg',
					description:
						'Реализация простого CRUD API, используя базу данных в памяти.',
					link: 'https://github.com/aleksander1802/crud_api/pull/1',
				},
			],
		},
	],
};

const WorkSlider = () => {
	return (
		<Swiper
			spaceBetween={10}
			pagination={{
				clickable: true,
			}}
			modules={[Pagination]}
			className="max-sm:h-[270px] md:h-[480px] lg:h-[580px] xl:h-[500px]"
		>
			{workSlides.slides.map((item, index) => {
				return (
					<SwiperSlide key={index}>
						<div className="grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer">
							{item.images.map((image, index) => {
								return (
									<div
										className="relative rounded-lg overflow-hidden flex items-center justify-center group"
										key={index}
									>
										<a
											href={image.link}
											target="_blank"
											className="flex items-center justify-center relative overflow-hidden group"
										>
											<Image
												src={image.path}
												width={500}
												height={300}
												alt="slide"
												priority
											/>
											<div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700"></div>
											<div className="absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:max-md:-translate-y-5 group-hover:xl:-translate-y-10 transition-all duration-300 text-[13px] max-sm:text-[12px] tracking-[0.2em]">
												<div className="flex flex-col items-center gap-x-2 text-center">
													<div className="delay-100">
														{image.title}
													</div>
													<div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">
														{image.description}
													</div>
													<div className="text-xl translate-y-[500%] group-hover:translate-y-0 transition-all	duration-300 delay-200 max-sm:hidden ">
														<BsArrowRight />
													</div>
												</div>
											</div>
										</a>
									</div>
								);
							})}
						</div>
					</SwiperSlide>
				);
			})}
		</Swiper>
	);
};

export default WorkSlider;
