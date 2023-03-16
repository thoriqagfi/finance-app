import Image from "next/image"

export default function Download() {
  return (
    <section id='download-app' className='h-full md:h-[30vh] md:flex justify-evenly items-center' data-testid="download-section">
      <div>
        <h2 className='text-[30px] font-bold text-center md:text-left'>Download our mobile app</h2>
        <p className='text-sm text-center md:text-left md:text-[16px] leading-relaxed text-[#232323]'>Transfer business money easily through finance app without any hassle. <br /> This app can help you control.Transfer business money easily through <br /> finance</p>
      </div>
      <div className='md:flex items-center md:gap-x-10 mx-20 md:mx-0'>
        <div className='bg-[#121212] px-6 py-3 flex rounded-lg gap-x-4 cursor-pointer'>
          <Image src={'/landing/apple.png'} width={50} height={50} alt='apple'></Image>
          <div className='text-white space-y-1'>
            <p>Download on the</p>
            <p className='font-bold'>App Store</p>
          </div>
        </div>
        <div className='bg-[#121212] px-6 py-3 flex rounded-lg gap-x-4 cursor-pointer my-3 md:mt-0'>
          <Image src={'/landing/google-play.png'} width={50} height={50} alt='google-play'></Image>
          <div className='text-white space-y-1'>
            <p>Download on the</p>
            <p className='font-bold'>Google Play</p>
          </div>
        </div>
      </div>
    </section>
  )
}