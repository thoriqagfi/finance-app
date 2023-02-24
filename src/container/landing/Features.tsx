import Link from "next/link"
import Image from "next/image"

export default function Features() {
  return (
    <>
    <section id='features-1' className='h-full'>
      {/* Feature 1 */}
      <div className='lg:flex justify-center bg-[#0C225B] md:h-[50vh] md:mt-32 lg:gap-x-20 py-2 md:py-0 mt-6'>
        <div className='relative z-0 bg-[#2AA1E4] lg:h-[503px] lg:w-[503px] rounded-full mt-16'>
          <Image src={'/landing/features-1.png'} width={397} height={488} alt='feature-1' className=' md:-translate-y-12 mx-auto'></Image>
        </div>
        <div className='my-auto space-y-5'>
          <h3 className=' text-white text-2xl md:text-[30px] font-bold leading-normal text-center md:text-left mt-6 md:mt-0'>The easiest way to view <br /> your total balance</h3>
          <p className='text-[#A3A3A3] text-center md:text-left text-sm md:text-lg'>Transfer business money easily through finance app without <br /> any hassle. This app can help you control.Transfer business <br /> money easily through finance </p>
        </div>
      </div>
    </section>
    <section id='features-2' className="h-full">
      {/* Feature 2 */}
      <div className='relative md:h-[60vh] z-10 bg-white lg:flex justify-center lg:gap-x-20 pt-10 md:pt-24'>
        <div className='my-auto space-y-5 text-center md:text-left'>
          <h3 className=' text-black text-2xl md:text-[30px] font-bold leading-normal'>Keep track of your <br /> expenses by the app</h3>
          <p className='text-[#393939] text-sm md:text-lg'>Transfer business money easily through finance app without <br /> any hassle. This app can help you control.Transfer business <br /> money easily through finance </p>
        </div>
        <div className='bg-[#EACB29] w-[503px] h-[503px] rounded-full translate-y-10'>
          <Image src={'/landing/features-2.png'} width={398} height={500} alt='feature-2' className='md:-translate-y-12 mx-auto'></Image>
        </div>
      </div>
    </section>
  </>
  )
}