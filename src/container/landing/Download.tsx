import Image from "next/image"

export default function Download() {
  return (
    <section id='download-app' className='h-[30vh] flex justify-evenly items-center'>
      <div>
        <h2 className='text-[30px] font-bold'>Download our mobile app</h2>
        <p className='text-[16px] leading-relaxed text-[#232323]'>Transfer business money easily through finance app without any hassle. <br /> This app can help you control.Transfer business money easily through <br /> finance</p>
      </div>
      <div className='flex items-center gap-x-10'>
        <div className='bg-[#121212] px-6 py-3 flex rounded-lg gap-x-4 cursor-pointer'>
          <Image src={'/landing/apple.png'} width={50} height={50} alt='apple'></Image>
          <div className='text-white space-y-1'>
            <p>Download on the</p>
            <p className='font-bold'>App Store</p>
          </div>
        </div>
        <div className='bg-[#121212] px-6 py-3 flex rounded-lg gap-x-4 cursor-pointer'>
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