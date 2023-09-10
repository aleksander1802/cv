import Nav from './Nav';
import Header from './Header';
import TopLeftImg from './TopLeftImg';
import { ReactElement } from 'react';

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
