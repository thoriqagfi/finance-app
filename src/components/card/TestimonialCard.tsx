import Tilt from "react-parallax-tilt"
import Image from "next/image"
import { CardProps } from "@/constant/landing";
export default function TestimonialCard({
  // key,
  image,
  title,
  description,
  parentClassName,
}: CardProps) {
  return (
    <div className={parentClassName}>
      <Tilt>
        <div className='space-y-2 shadow-xl rounded-lg px-5 text-center py-5 cursor-default'>
          <Image src={`/landing` + image} width={80} height={80} alt='image' className='mx-auto'></Image>
          <p className='py-7 leading-relaxed'>{description}</p>
          <p className='font-bold'>{title}</p>
          <p className=''>{description}</p>
        </div>
      </Tilt>
    </div>
  )
}