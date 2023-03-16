import TestimonialCard from "@/components/card/TestimonialCard"
import { testimonialsCard } from "@/constant/landing"

export default function Testimonials() {
  return (
    <section className='bg-white md:h-[80vh] relative z-20 py-10 md:pt-32' data-testid="testimonials-section">
            <h2 className='text-center font-bold text-2xl md:text-[40px]'>Trusted by <span className='text-[#2A5EE4]'>30+</span> world class <br />companies & design teams</h2>
            <div className='md:flex justify-center mt-20 gap-x-6 mx-10 md:mx-0'>
              {
                testimonialsCard.map(({key,image,name,position}) => (
                  <TestimonialCard
                    key={key}
                    image={image}
                    title={name}
                    description={position}
                  />
                ))
              }
            </div>
          </section>
  )
}