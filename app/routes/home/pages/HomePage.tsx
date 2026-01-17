export default function HomePage() {
	return (
		<>
			{/* hero */}
			<div className='relative w-full h-[702px] overflow-hidden md:h-[400px] xl:h-[624px]'>
				<video className='absolute inset-0 w-full h-full object-cover' autoPlay muted loop playsInline preload='auto' poster='/images/home/poster.png'>
					<source src='/video/hero.mp4' type='video/mp4' />
					<source src='/video/hero.webm' type='video/webm' />
				</video>

				{/* Контент поверх видео */}
				<div className='relative mt-[108px] ml-[40px] flex flex-col h-full  md:mt-[0px] md:ml-[0px]  md:items-center  text-white font-montserrat-alternates '>
					<div className='text-[20px]/[24px] font-semibold  w-[245px] h-[48px]  md:mt-[151px]  md:w-max md:text-[28px]  md:h-[38px]  xl:mt-[250px] xl:text-[36px]/[44px] '>
						Каждая идея начинается с линии
					</div>
					<div className='text-[18px]/[22px] mt-[2px] w-[270px] h-[44px] md:mx-[0] md:w-[426px] md:h-[58px] md:text-[24px]/[29px] md:text-center  xl:mt-[6px] xl:text-[30px]/[37px] xl:w-[550px]'>
						Мы доводим её до дизайна, сайта и бренда
					</div>
				</div>
			</div>

			{/* Если коротко о нас */}
			<div className=' min-h-[434px] flex flex-col py-[40px]  pl-[40px] bg-black text-white font-montserrat-alternates md:py-[55px] md:pl-[60px] xl:py-[80px] xl:h-[650px]'>
				<h2 className='text-[18px] font-semibold  mr-[90px] md:w-[269px] md:h-[58px] md:text-[24px]/[29px] xl:text-[32px]/[39px] xl:w-[360px]'>Если коротко о нас, то мы умеем:</h2>
				<div className='flex flex-col gap-y-[8px] mt-[20px] mr-[40px] text-[16px]/[21px] font-light md:text-[20px]/[24px] md:gap-y-[16px] md:w-[537px] xl:gap-y-[19px] xl:mt-[40px] xl:w-[645px] xl:text-[24px]/[29px]'>
					<p>
						<span className='font-medium'>создавать фирменный стиль,</span> который отражает индивидуальность вашего бренда;
					</p>
					<p>
						<span className='font-medium'>разрабатывать логотипы,</span> легко запоминающиеся <br />и узнаваемые;
					</p>
					<p>
						<span className='font-medium'>оформлять дизайн полиграфии:</span> визитки, плакаты, баннеры, афиши;
					</p>
					<p>
						<span className='font-medium'>составлять брендбук</span> для единообразного использования всех элементов стиля.
					</p>
				</div>
			</div>
			{/* Форма обратной связи */}
			<div className='bg-white py-[40px] font-montserrat-alternates px-[40px] md:py-[55px] md:px-[60px] xl:flex xl:py-[80px]'>
				<div className=''>
					<h2 className='  text-[18px] font-semibold md:text-[24px]/[29px]  xl:text-[32px]/[39px]'>Начнём с вашей идеи</h2>
					<div className='mt-[10px]  md:text-[20px]/[24px] md:w-[427px] md:h-[48px]   xl:text-[24px]/[29px] xl:w-[550px] '>Осталось только заполнить форму обратной связи</div>
				</div>
				<div className='flex  flex-col mt-[20px] xl:ml-[115px]'>
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
					<button className='bg-[#1FD0B6] text-white h-[35px] w-[150px] rounded-md  mt-[14.5px] cursor-pointer  md:w-[147px] md:h-[35px] md:text-[16px]/[24px]  xl:h-[50px]  xl:w-[243px] xl:text-[20px]/[25px]'>
						Отправить
					</button>
				</div>
			</div>
		</>
	);
}
