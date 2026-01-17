import { Link } from "react-router";

export default function Footer() {
	return (
		<>
			<footer className='bg-black text-white flex flex-col  py-[30px] pl-[41px] text-[16px]/[20px] font-montserrat-alternates h-[135px] md:text-[18px]/[22px] md:h-[104px] md:px-[60px] md:flex-row md:justify-between md:py-0 xl:px-[80px] xl:text-[24px]/[29px]  xl:h-[171px]'>
				<div className='flex gap-x-[10px]  md:py-[41px] md:gap-x-[20px] md:gap-x-[30px] xl:py-[71px]'>
					<Link to='/services'>
						<button className='cursor-pointer'>Услуги</button>
					</Link>
					<Link to='/about'>
						<button className=' cursor-pointer md:min-w-[55px]'>О нас</button>
					</Link>
					<Link to='/support'>
						<button className='cursor-pointer'>Поддержка</button>
					</Link>
				</div>
				<div className='flex mt-[15px]  md:my-[30px] md:ml-[115px] xl:mt-[57px]'>
					<div className=''>
						<div>mail@hilinee.ru</div>
						<div>Пн-Пт 10.00-19.00</div>
					</div>
					<div className='flex gap-x-[11px] mt-[19px]  mb-[5px] ml-[73px] md:mb-0  md:ml-[29.3px] md:mt-[11px]  md:gap-x-[11.52px] xl:ml-[130px] xl:gap-x-[20px] '>
						<a href='https://t.me/+OifFzkj_HzhlNzZi ' target='_blank' rel='noopener noreferrer'>
							<img className='xl:w-[44px]' src='/images/footer/tg-icon.svg' alt='telegram' />
						</a>
						<a href='https://max.ru/join/Ukn59BTiLJ4WGMj0ZW860m5IrQ0GXaLr8DgyOK2IXDs ' target='_blank' rel='noopener noreferrer'>
							<img className='xl:w-[39px]' src='/images/footer/max-icon.svg' alt='max' />
						</a>
					</div>
				</div>
			</footer>
		</>
	);
}
