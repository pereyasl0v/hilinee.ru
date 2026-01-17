import { useState } from "react";
import { Link, useLocation } from "react-router";

export default function Header() {
	const [isOpen, setIsOpen] = useState(false);

	const location = useLocation();
	const isSupportPage = location.pathname === "/";

	return (
		<header className='relative w-full z-50 font-montserrat-alternates'>
			{/* Верхняя панель хедера */}
			<div className={`flex justify-between h-[120px] md:h-[70px] xl:h-[90px] pl-[40px] md:px-[60px] xl:px-[80px] ${!isSupportPage ? "bg-black" : "bg-white"}`}>
				{/* логотип */}
				<Link to='/'>
					<div
						className={`hover:cursor-pointer text-[32px]/[39px] font-semibold mt-[50px]  md:text-[28px]/[34px]  md:mt-[18px] md:h-[34px] xl:text-[36px]/[44px] xl:mt-[23px]  ${isSupportPage ? "text-black" : "text-white"}`}
					>
						Hilinee
					</div>
				</Link>
				<div className='flex'>
					{" "}
					<div
						className={` text-[18px] gap-x-[20px]  font-semibold  hidden md:flex self-center mr-[68.5px] xl:mr-[57px] xl:gap-x-[25px] xl:text-[24px]/[27px] ${!isSupportPage ? "text-white" : "text-black"} `}
					>
						<Link to='/services'>
							<div>Услуги</div>{" "}
						</Link>
						<Link to='/about'>
							<div>О нас</div>{" "}
						</Link>
						<Link to='/support'>
							<div>Поддержка</div>{" "}
						</Link>
					</div>
					<a className='mt-[26px] xl:mt-[32px] hidden md:block ' href='https://t.me/+OifFzkj_HzhlNzZi ' target='_blank' rel='noopener noreferrer'>
						<img className='w-[36px]' src={!isSupportPage ? "/images/header/tg-icon-white.svg" : "/images/header/tg-icon.svg"} alt='Menu' />
					</a>
					<a className='mt-[26px] xl:mt-[32px] ml-[26px]  ' href='https://max.ru/join/Ukn59BTiLJ4WGMj0ZW860m5IrQ0GXaLr8DgyOK2IXDs ' target='_blank' rel='noopener noreferrer'>
						<img className='w-[32px]' src={!isSupportPage ? "/images/header/max-icon-white.svg" : "/images/header/max-icon.svg"} alt='max' />
					</a>
				</div>
				{/* кнопка бургер */}
				<div className='hover:cursor-pointer mt-[64px] mr-[44px] md:hidden ' onClick={() => setIsOpen(!isOpen)}>
					<img src={!isSupportPage ? "/images/header/button-burger-white.svg" : "/images/header/button-burger.svg"} alt='Menu' />
				</div>
			</div>

			{/* Меню на весь экран под хедером */}
			{isOpen && (
				<div className='absolute top-[120px] left-0 w-full h-[calc(100vh-120px)] bg-white z-40 flex flex-col justify-center items-center'>
					<ul className='flex flex-col gap-6 text-2xl font-semibold text-gray-900'>
						<Link to='/services'>
							<li className='hover:text-[#1FD0B6] cursor-pointer' onClick={() => setIsOpen(false)}>
								Услуги
							</li>
						</Link>
						<Link to='/about'>
							<li className='hover:text-[#1FD0B6] cursor-pointer' onClick={() => setIsOpen(false)}>
								О нас
							</li>
						</Link>
						<Link to='/support'>
							<li className='hover:text-[#1FD0B6] cursor-pointer' onClick={() => setIsOpen(false)}>
								Поддержка
							</li>
						</Link>
					</ul>
				</div>
			)}
		</header>
	);
}
