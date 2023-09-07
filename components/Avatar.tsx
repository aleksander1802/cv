import Image from 'next/image';

const Avatar = () => {
	const width = 678;
	const height = 737;

	return (
		<div className="hidden xl:flex xl:max-w-none">
			<Image
				src={'/avatar.png'}
				width={width || 678}
				height={height || 737}
				style={{ width: 'auto', height: height }}
				alt="avatar"
				className="translate-z-0 w-full h-full"
			/>
		</div>
	);
};

export default Avatar;
