import Image from 'next/image';

const Document = () => {
	return (
		<div
			className="absolute -left-5 -bottom-5 mix-blend-color-dodge  z-10 
    w-[200px] xl:w-[260px]"
		>
			<Image
				src={'/document.png'}
				width={260}
				height={200}
				className="w-full h-full"
				alt="document"
			/>{' '}
		</div>
	);
};

export default Document;
