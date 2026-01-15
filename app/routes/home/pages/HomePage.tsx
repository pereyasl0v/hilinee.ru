export default function HomePage() {
	return (
		<>
			{/* hero */}
			<div className='relative w-full h-[702px] overflow-hidden md:h-[400px]'>
				<video className='absolute inset-0 w-full h-full object-cover' autoPlay muted loop playsInline preload='auto' poster='/home/video/poster.png'>
					<source src='/home/video/hero.mp4' type='video/mp4' />
					<source src='/home/video/hero.webm' type='video/webm' />
				</video>

				{/* Контент поверх видео */}
				<div className='relative mt-[108px] ml-[40px] flex flex-col h-full  md:mt-[0px] md:ml-[0px]    text-white font-montserrat-alternates '>
					<h1 className='text-xl font-semibold  w-[245px] h-[48px]  md:mt-[151px] md:w-full md:text-[28px] md:mx-[116px] md:h-[38px]'>Каждая идея начинается с линии</h1>
					<p className='text-[18px] w-[270px] h-[44px] md:mx-[171px] md:w-[426px] md:h-[58px] md:text-[24px]/[29px] md:text-center md: '>Мы доводим её до дизайна, сайта и бренда</p>
				</div>
			</div>

			{/* Если коротко о нас */}
			<div className=' min-h-[434px] flex flex-col justify-center bg-black text-white font-montserrat-alternates md:py-[55px] '>
				<h2 className='text-[18px] font-semibold  ml-[40px] mr-[90px] md:w-[269px] md:h-[58px] md:text-[24px]/[29px]'>Если коротко о нас, то мы умеем:</h2>
				<div className='flex flex-col gap-y-[8px] mt-[20px] ml-[40px] mr-[40px] text-[16px]/[21px] font-light md:text-[20px]/[24px] md:gap-y-[16px] md:w-[537px]'>
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
			<div className='bg-white py-[40px] font-montserrat-alternates px-[40px] md:py-[55px] md:px-[60px]'>
				<h2 className='  text-[18px] font-semibold md:text-[24px]/[29px]'>Начнём с вашей идеи</h2>
				<div className='mt-[10px]  md:text-[20px]/[24px] md:w-[427px] md:h-[48px]'>Осталось только заполнить форму обратной связи</div>
				<div className=''>
					<div className='flex   mt-[20px]'>
						<input className='border-1 h-[35px] w-[285px] p-[5px] pl-[13px] md:w-[260px] md:h-[35px]' type='text' placeholder='Имя' />
					</div>
					<div className='flex  mt-[14.5px]'>
						<input className='border-1 h-[35px] w-[285px] p-[5px] pl-[13px] md:w-[260px] md:h-[35px]' type='tel' placeholder='Контактный номер' />
					</div>
				</div>
				<button className='bg-[#1FD0B6] text-white h-[35px] w-[150px] rounded-md  mt-[14.5px] cursor-pointer  md:w-[147px] md:h-[35px] md:text-[16px]/[24px]'>Отправить</button>
			</div>
		</>
	);
}
