import Link from 'next/link';
import {
	RiYoutubeLine,
	RiTelegramLine,
	RiDiscordLine,
	RiSteamLine,
	RiGithubLine,
} from 'react-icons/ri';

const Socials = () => {
	const clazz = 'hover:text-accent transition-all duration-300';
	return (
		<div className="flex items-center gap-x-5 text-lg">
			<Link
				href={''}
				className={clazz}
			>
				<RiYoutubeLine />
			</Link>
			<Link
				href={''}
				className={clazz}
			>
				<RiTelegramLine />
			</Link>
			<Link
				href={''}
				className={clazz}
			>
				<RiGithubLine />
			</Link>

			<Link
				href={''}
				className={clazz}
			>
				<RiDiscordLine />
			</Link>
			<Link
				href={''}
				className={clazz}
			>
				<RiSteamLine />
			</Link>
		</div>
	);
};

export default Socials;
