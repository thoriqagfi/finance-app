import Tilt from "react-parallax-tilt"
import Image from "next/image"
import { CardProps } from "@/constant/landing";
export default function AchievementCard({
  // key,
  image,
  title,
  background,
  description,
  parentClassName,
}: CardProps) {
  return (
    <div className={parentClassName}>
      <Tilt>
        <div className='shadow-xl py-3 px-8 rounded-lg bg-white'>
          <div className='flex pt-3'>
            <div className={`bg-[${background}] bg-opacity-20 rounded-full my-auto p-2`}>
              <Image src={`/landing`+ image} width={22.5} height={22.5} alt='code'></Image>
            </div>
            <h4 className='text-lg font-bold mx-3 my-auto'>{title}</h4>
          </div>
          <p className='my-4 text-md'>
            {description}
          </p>
        </div>
      </Tilt>
    </div>
  )
}