import Image from 'next/image'
import AchievementCard from '@/components/card/AchievementCard'
import { achievementsCard } from '@/constant/landing'

export default function Achievements({
  id = 'achievements',
}) {
  return (
    <section id={id} className='h-50vh mx-auto mt-10 md:mt-28' data-testid="achievements-section">
      <h3 className='text-[30px] text-center font-bold text-2xl px-2 md:px-0'>Trusted by nearly 5000+ paying customers</h3>
      <Image src={'/landing/customer.png'} width={976} height={42} alt='customer' className='mx-auto py-12 px-5 md:px-0'></Image>
      <h2 className='text-center text-2xl md:text-[40px] font-bold md:py-10'>3,582 customers are using FinanceKu</h2>
      <div className='md:flex md:justify-center xl:gap-x-10 cursor-pointer md:mx-36'>
        {
          achievementsCard.map(({
            key,
            image, title, background, description}) => (
            <AchievementCard
              key={key}
              image={image}
              title={title}
              background={background}
              description={description}
              parentClassName="mx-auto px-4 py-5"
            />
          ))
        }
      </div>
    </section>
  )
}