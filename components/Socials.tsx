import Link from 'next/link';
import {
	RiYoutubeLine,
	RiTelegramLine,
	RiDiscordLine,
	RiSteamLine,
	RiGithubLine,
} from 'react-icons/ri';
import {} from 'react-icons/';

const Socials = () => {
	const clazz = 'hover:text-accent transition-all duration-300';
	return (
		<div className="flex items-center gap-x-5 text-lg">
			<Link
				href={'https://www.youtube.com/watch?v=dQw4w9WgXcQ'}
				target='_blank'
				className={clazz}
			>
				<RiYoutubeLine />
			</Link>
			<Link
				href={'https://t.me/shadow26627'}
				target='_blank'
				className={clazz}
			>
				<RiTelegramLine />
			</Link>
			<Link
				href={'https://github.com/aleksander1802'}
				target='_blank'
				className={clazz}
			>
				<RiGithubLine />
			</Link>

			<Link
				href={'https://cdndelivr.com/sticker/a5b0c3279ec34d9c.png'}
				target='_blank'
				className={clazz}
			>
				<RiDiscordLine />
			</Link>
			<Link
				href={'https://steamcommunity.com/id/shadow26627/'}
				target='_blank'
				className={clazz}
			>
				<RiSteamLine />
			</Link>
		</div>
	);
};

export default Socials;
