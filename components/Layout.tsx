import { Sora } from '@next/font/google';
import Nav from './Nav';
import Header from './Header';
import TopLeftImg from './TopLeftImg';
import { ReactElement } from 'react';

const sora = Sora({
	subsets: ['latin'],
	variable: '--font-sora',
	weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
});

const Layout = ({ children }: { children: ReactElement }) => {
	return (
		<div
			className={`page bg-site text-white bg-cover bg-no-repeat font-sora relative`}
		>
			<TopLeftImg />
			<Nav />
			<Header />
			{children}
		</div>
	);
};

export default Layout;
