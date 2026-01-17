import { useState } from "react";

export default function SupportPage() {
	const faq = [
		{
			q: "Можно ли обратиться к вам, если идея ещё не до конца сформирована?",
			a: (
				<>
					Да.
					<br />
					Многие проекты приходят к нам именно на этом этапе. Мы помогаем сформулировать идею, расставить приоритеты и понять, с чего лучше начать. Первый разговор — это не бриф, а диалог.
				</>
			),
		},
		{
			q: "С какими проектами вы работаете?",
			a: "Мы работаем с digital-продуктами, сайтами, брендингом и интерфейсами. От небольших проектов до комплексных систем.",
		},
		{
			q: "Что происходит после отправки формы?",
			a: "Мы связываемся с вами, уточняем детали и предлагаем формат дальнейшей работы.",
		},
		{
			q: "Сколько времени занимает работа над проектом?",
			a: "Сроки зависят от задачи. В среднем от 2 недель до нескольких месяцев.",
		},
		{
			q: "Вы сопровождаете проект после запуска?",
			a: "Да, мы остаёмся на связи и можем сопровождать проект после релиза.",
		},
	];
	const [activeIndex, setActiveIndex] = useState(null);
	const toggle = (index) => {
		setActiveIndex(activeIndex === index ? null : index);
	};

	return (
		<div className='font-montserrat-alternates'>
			<div className='bg-white min-h-[306px] py-[40px] font-montserrat-alternates  px-[40px] md:py-[60px] md:px-[60px] xl:py-[80px] xl:px-[80px]'>
				<h2 className=' text-[18px] font-semibold md:text-[24px]/[29px] xl:text-[32px]/[39px]'>Форма обратной связи</h2>
				<div className='flex flex-col gap-y-[14.5px] mt-[20px] md:gap-y-[14px] xl:mt-[60px]'>
					<div className=''>
						<input className='border-1 h-[35px] w-[285px] p-[5px] pl-[13px] md:w-[260px] md:h-[35px] xl:max-w-[360px] xl:h-[50px]  xl:w-[550px] xl:text-[20px]/[25px]' type='text' placeholder='Имя' />
					</div>
					<div className='flex  mt-[14.5px] xl:mt-[16px]'>
						<input
							className='border-1 h-[35px] w-[285px] p-[5px] pl-[13px] md:w-[260px] md:h-[35px] xl:max-w-[360px] xl:h-[50px]  xl:w-[550px]  xl:text-[20px]/[25px]'
							type='tel'
							placeholder='Контактный номер'
						/>
					</div>
				</div>
				<button className='bg-[#1FD0B6] text-white h-[35px] w-[150px] rounded-md  mt-[14.5px] cursor-pointer  md:w-[147px] md:h-[35px] md:text-[16px]/[24px]  xl:h-[50px]  xl:w-[243px] xl:text-[20px]/[25px]'>
					Отправить
				</button>
				<div className=' mt-[30px] xl:mt-[55px] '>
					<div className='border-b-[3px] md:max-w-[314px] xl:max-w-[418px]'></div>
				</div>
			</div>
			<div className='bg-black h-max-[402px] px-[40px] py-[40px] md:px-[60px] md:py-[55px] xl:min-h-[593px] xl:py-[80px] xl:px-[80px]'>
				<div className='text-white '>
					<div className='text-[18px] font-semibold  md:text-[24px]/[29px] xl:text-[32px]/[39px]'>F.A.Q.</div>
					<div className='flex flex-col gap-y-[15px] mt-[20px] text-[16px]/[20px] font-light md:max-w-[537px] md:text-[20px]/[24px] xl:text-[24px]/[29px] xl:max-w-[611px] xl:gap-y-[20px]'>
						{faq.map((item, index) => (
							<div key={index} className=' flex'>
								<div className='flex flex-col'>
									<button
										onClick={() => toggle(index)}
										className={`w-full text-left flex justify-between items-start gap-4 ${activeIndex === index ? "border-l-[4px] border-[#1FD0B6] pl-[10px]" : ""}`}
									>
										<span>
											{index + 1}. {item.q}
										</span>
									</button>

									<div
										className={`overflow-hidden transition-all duration-700 ease-in-out
								${activeIndex === index ? "max-h-[300px] opacity-100 mt-[10px] md:mt-[15px] " : "max-h-0 opacity-0"}
							`}
									>
										<p className=' text-[15px]/[18px] md:text-[20px]/[24px] xl:text-[24px]/[29px] '>{item.a}</p>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
			<div className='bg-white min-h-[276px] py-[30px] px-[40px] md:px-[60px] xl:py-[80px] xl:px-[80px]'>
				<div className=' '>
					<div className='border-b-[3px] md:max-w-[314px] xl:max-w-[418px]'></div>
				</div>
				<div className='mt-[30px]'>
					<div className='text-[18px] md:text-[24px]/[29px] font-semibold  xl:text-[32px]/[39px]'>Контакты</div>
					<div className='flex flex-col gap-y-[20px] mt-[30px] md:gap-y-[24px]  text-[16px]/[20px] md:text-[20px]/[24px]  xl:text-[24px]/[29px]'>
						<div className='border-b-[3px] border-b-[#1527AC] w-[108px] md:w-[136px] md:border-b-[2px] xl:w-[163px] xl:pb-[4px]'>mail@hilinee</div>
						<div className='border-b-[3px] border-b-[#1527AC] w-[151px] md:w-[189px] md:border-b-[2px] xl:w-[227px] xl:pb-[4px]'>Пн-Пт 10.00-19.00</div>
						<div className='border-b-[3px] border-b-[#1527AC] w-[130px] md:w-[162px] md:border-b-[2px] xl:w-[194px] xl:pb-[4px]'>Telegram · Max</div>
					</div>
				</div>
			</div>
		</div>
	);
}
