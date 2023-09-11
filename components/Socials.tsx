import Link from 'next/link';
import {
	RiTelegramLine,
	RiDiscordLine,
	RiSteamLine,
	RiGithubLine,
} from 'react-icons/ri';
import { SiCodewars } from 'react-icons/si';

const Socials = () => {
	const clazz = 'hover:text-accent transition-all duration-300';
	return (
		<div className="flex items-center gap-x-5 text-lg">
			<Link
				href={'https://t.me/shadow26627'}
				target="_blank"
				className={clazz}
			>
				<RiTelegramLine title="Telegram" />
			</Link>
			<Link
				href={'https://github.com/aleksander1802'}
				target="_blank"
				className={clazz}
			>
				<RiGithubLine title="GitHub" />
			</Link>
			<Link
				href={
					'https://www.codewars.com/users/rsschool_9e8ed404e8877bec'
				}
				target="_blank"
				className={clazz}
			>
				<SiCodewars title="Codewars" />
			</Link>
			<Link
				href={'https://discord.com/users/255762280824832000'}
				target="_blank"
				className={clazz}
			>
				<RiDiscordLine title="Discord" />
			</Link>
			<Link
				href={'https://steamcommunity.com/id/shadow26627/'}
				target="_blank"
				className={clazz}
			>
				<RiSteamLine title="Steam" />
			</Link>
		</div>
	);
};

export default Socials;
