import { Link } from "react-router";

export default function Footer() {
	return (
		<>
			<footer className='bg-black text-white flex flex-col  py-[30px]  font-montserrat-alternates h-[135px]  md:h-[104px] md:px-[60px] md:flex-row md:py-0'>
				<div className='flex gap-x-[10px] ml-[41px] md:py-[41px] md:gap-x-[20px]'>
					<Link to='/services'>
						<button>Услуги</button>
					</Link>
					<Link to='/about'>
						<button>О нас</button>
					</Link>
					<Link to='/support'>
						<button>Поддержка</button>
					</Link>
				</div>
				<div className='flex ml-[40px] mt-[15px]  md:my-[30px] md:ml-[115px] md:text-[1'>
					<div className=''>
						<div>mail@hilinee.ru</div>
						<div>Пн-Пт 10.00-19.00</div>
					</div>
					<div className='flex gap-x-[11px] mt-[19px]  mb-[5px] ml-[73px] md:mb-0  md:ml-[29.3px] md:mt-[11px]  md:gap-x-[11.52px]'>
						<div>
							<img src='/footer/tg-icon.svg' alt='telegram' />
						</div>
						<div>
							<img src='/footer/max-icon.svg' alt='max' />
						</div>
					</div>
				</div>
			</footer>
		</>
	);
}
