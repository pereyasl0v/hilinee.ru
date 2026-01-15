import { useState } from "react";
import { Link, useLocation } from "react-router";

export default function Header() {
	const [isOpen, setIsOpen] = useState(false);

	const location = useLocation();
	const isSupportPage = location.pathname === "/";

	return (
		<header className='relative w-full z-50 font-montserrat-alternates'>
			{/* Верхняя панель хедера */}
			<div className={`flex justify-between h-[120px] shadow-md md:h-[70px] md:justify-normal ${!isSupportPage ? "bg-black" : "bg-white"}`}>
				{/* логотип */}
				<Link to='/'>
					<div className='hover:cursor-pointer mt-[60px] ml-[40px] md:ml-[60px] md:mt-[18px]'>
						<img src={!isSupportPage ? "/header/logo-white.svg" : "/header/logo.svg"} alt='Logo' />
					</div>
				</Link>
				<div className={`mt-[24px] text-[18px] gap-x-[20px]  font-semibold ml-[175px] hidden md:flex ${!isSupportPage ? "text-white" : "text-black"} `}>
					<div>Услуги</div>
					<div>О нас</div>
					<div>Поддержка</div>
				</div>
				<div className='mt-[26px] ml-[68.5px] hidden md:block'>
					<img src='/header/tg-icon.svg' alt='' />
				</div>

				{/* кнопка бургер */}
				<div className='hover:cursor-pointer mt-[64px] mr-[44px] md:hidden ' onClick={() => setIsOpen(!isOpen)}>
					<img src={!isSupportPage ? "/header/button-burger-white.svg" : "/header/button-burger.svg"} alt='Menu' />
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
