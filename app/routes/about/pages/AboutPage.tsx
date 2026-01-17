import { useRef, useState, useEffect } from "react";

const works = [
	{
		image: "/about/carusel_1.jpg",
		title: "Подпись к работе 1",
	},
	{
		image: "/about/carusel_1.jpg",
		title: "Подпись к работе 2",
	},
	{
		image: "/about/carusel_1.jpg",
		title: "Подпись к работе 3",
	},
];
export default function AboutPage() {
	const [index, setIndex] = useState(0);
	const [itemWidth, setItemWidth] = useState(0);
	const trackRef = useRef<HTMLDivElement>(null);
	const itemRef = useRef<HTMLDivElement | null>(null);

	const [step, setStep] = useState(0);
	useEffect(() => {
		if (!trackRef.current || !itemRef.current) return;

		const itemWidth = itemRef.current.offsetWidth;

		const styles = window.getComputedStyle(trackRef.current);
		const gap = parseInt(styles.columnGap || styles.gap || "0", 10);

		setStep(itemWidth + gap);
	}, []);
	useEffect(() => {
		if (trackRef.current) {
			const firstItem = trackRef.current.children[0] as HTMLElement;
			if (firstItem) {
				setItemWidth(firstItem.offsetWidth);
			}
		}
	}, []);
	const prev = () => {
		setIndex((prev) => (prev === 0 ? works.length - 1 : prev - 1));
	};

	const next = () => {
		setIndex((prev) => (prev === works.length - 1 ? 0 : prev + 1));
	};
	return (
		<div className='font-montserrat-alternates'>
			<div className='py-[30px] bg-white px-[40px] md:px-[60px] md:py-[55px] xl:py-[80px] xl:px-[80px] xl:min-h-[498px]'>
				<div className='text-[18px] font-semibold md:text-[24px]/[29px]  xl:text-[32px]/[39px]'>О нас</div>
				<div className='font-medium text-[16px]/[20px] mt-[20px] md:text-[20px]/[24px] md:w-[375px] md:h-[48px]  xl:text-[24px]/[29px] xl:w-[621px]'>Hilinee — студия, которая творит.</div>
				<div className='[16px]/[20px] mt-[15px] md:text-[20px]/[24px] md:w-[375px] md:h-[96px]  xl:text-[24px]/[29px] xl:w-[610px]'>
					Мы проводим проекты от идеи до готового результата, объединяя дизайн, структуру и технологии в единую систему.
				</div>
				<div className='border-b-[3px] border-black mt-[30px] md:w-[363px] md:w-[592px]'></div>
			</div>
			<div className='py-[40px] px-[40px] bg-black max-[262px] text-white md:px-[60px] md:py-[55px] md:min-h-[387px] xl:py-[80px] xl:px-[80px] xl:min-h-[546px]'>
				<div className='text-[18px] font-semibold  md:text-[24px]/[29px]  xl:text-[32px]/[39px]'>Наш подход</div>
				<div className='text-[16px] mt-[20px] font-normal md:text-[20px]/[24px] md:w-[512px]  xl:text-[24px]/[29px] xl:w-[835px]'>
					Мы работаем последовательно и прозрачно, держим клиента в курсе каждого этапа и остаёмся на связи после запуска, помогая проекту развиваться дальше.
				</div>
			</div>
			<div className='py-[30px] px-[40px] bg-white   md:px-[60px] md:py-[55px] overflow-hidden xl:py-[100px] xl:px-[80px]'>
				<div className=' '>
					{/* overflow ^ */}
					<div className='border-b-[3px] border-black md:w-[314px] xl:w-[418px]' />
					<div className='text-[18px] font-semibold mt-[30px] md:text-[24px]/[29px]  xl:text-[32px]/[39px] xl:mt-[40px]'>Наши работы</div>
					<div className='text-[16px] mt-[20px] md:text-[20px]/[24px] md:w-[481px] xl:text-[24px]/[29px] xl:w-[740px] xl:mt-[20px] '>
						Каждый проект — это история, где идея и визуальный образ объединены в единый язык бренда.
					</div>

					{/* КАРУСЕЛЬ */}
					<div className='mt-[20px] md:mt-[15px] xl:mt-[20px]'>
						<div
							ref={trackRef}
							className='flex gap-x-[20px] md:gap-x-[30px] xl:gap-x-[50px] transition-transform duration-1500 ease-in-out'
							style={{
								transform: `translateX(-${index * step}px)`,
							}}
						>
							{works.map((work, i) => (
								<div
									key={i}
									ref={i === 0 ? itemRef : null}
									className='
					min-w-[280px] min-h-[201px]
					p-[20px]
					border-[5px] border-[#1527AC]
					flex justify-center items-center

					md:min-w-[458px] md:h-[329px]
					xl:min-w-[774px] xl:h-[556px]
					xl:p-[56px]
				'
								>
									<img
										src='/images/about/carousel_1_480.jpg'
										srcSet='
						/images/about/carousel_1_480.jpg 480w,
						/images/about/carousel_1_768.jpg 768w,
						/images/about/carousel_1_1280.jpg 1280w
					'
										sizes='(max-width: 768px) 280px, (max-width: 1280px) 458px, 774px'
										alt={work.title}
										className='w-full h-full object-cover'
									/>
								</div>
							))}
						</div>
					</div>
					{/* подпись */}
					<div className='text-[14px] mt-[5px] md:mt-[10px] xl:mt-[15px] xl:text-[22px]/[27px]'>{works[index].title}</div>

					{/* кнопки */}
					<div className='flex mt-[5px] gap-x-[10px] md:mt-[10px] md:gap-x-[26px] md:mt-[18px]'>
						<button onClick={prev}>
							<img className='w-[30px] md:w-[55px] xl:w-[84px]' src='/images/about/arrow/left.svg' alt='Назад' />
						</button>
						<button onClick={next}>
							<img className='w-[30px] md:w-[55px] xl:w-[84px]' src='/images/about/arrow/right.svg' alt='Вперёд' />
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
