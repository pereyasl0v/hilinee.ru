import { useState } from "react";

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

	const prev = () => {
		setIndex((prev) => (prev === 0 ? works.length - 1 : prev - 1));
	};

	const next = () => {
		setIndex((prev) => (prev === works.length - 1 ? 0 : prev + 1));
	};
	return (
		<div className='font-montserrat-alternates'>
			<div className='py-[30px] bg-white'>
				<div className='px-[40px]'>
					<div className='text-[18px] font-semibold'>О нас</div>
					<div className='font-medium text-[16px] mt-[20px]'>Hilinee — студия, которая творит.</div>
					<div className='text-[16px] mt-[15px]'>Мы проводим проекты от идеи до готового результата, объединяя дизайн, структуру и технологии в единую систему.</div>
					<div className='border-b-[3px] border-black mt-[30px]'></div>
				</div>
			</div>
			<div className='py-[40px] bg-black max-[262px] text-white'>
				<div className='px-[40px]'>
					<div className='text-[18px] font-semibold'>Наш подход</div>
					<div className='text-[16px] mt-[20px]'>
						Мы работаем последовательно и прозрачно, держим клиента в курсе каждого этапа и остаёмся на связи после запуска, помогая проекту развиваться дальше.
					</div>
				</div>
			</div>
			<div className='py-[30px] bg-white max-h-[505px]'>
				<div className='px-[40px] overflow-hidden'>
					<div className='border-b-[3px] border-black' />
					<div className='text-[18px] font-semibold mt-[30px]'>Наши работы</div>
					<div className='text-[16px] mt-[20px]'>Каждый проект — это история, где идея и визуальный образ объединены в единый язык бренда.</div>

					{/* КАРУСЕЛЬ */}
					<div className='mt-[20px]'>
						<div className='flex gap-x-[20px] transition-transform duration-850 ease-in-out' style={{ transform: `translateX(-${index * 300}px)` }}>
							{works.map((work, i) => (
								<div key={i} className='min-w-[280px] min-h-[201px] border-[5px] border-[#1527AC] flex justify-center items-center'>
									<img src={work.image} alt={work.title} />
								</div>
							))}
						</div>
					</div>
					{/* подпись */}
					<div className='text-[14px] mt-[5px]'>{works[index].title}</div>

					{/* кнопки */}
					<div className='flex mt-[5px] gap-x-[10px]'>
						<button onClick={prev}>
							<img src='/about/left-arrow.svg' alt='Назад' />
						</button>
						<button onClick={next}>
							<img src='/about/right-arrow.svg' alt='Вперёд' />
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
