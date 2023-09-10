import Image from 'next/image';

const TopLeftImg = () => {
	const width = 400;
	const height = 400;

	return (
		<div className="absolute left-0 top-0 mix-blend-color-dodge z-10 w-[200px] xl:w-[400px] opacity-50">
			<Image
				src={'/cv/top-left-img.png'}
				priority={true}
				width={width || 400}
				height={height || 400}
				alt="top-left-image"
				style={{ width: 'auto', height: height || 400 }}
			/>
		</div>
	);
};

export default TopLeftImg;
