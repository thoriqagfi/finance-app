import { useForm } from "react-hook-form"
export default function Subscribe() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  return (
    <section className='bg-[#2A5EE4] md:h-[80vh] flex justify-center' data-testid="subscribe-section">
      <div className='flex flex-col justify-center items-center md:space-y-10 py-10 md:py-0 space-y-6'>
        <h2 className='text-2xl md:text-4xl font-bold text-center text-white'>Get latest case studies</h2>
        <p className='text-[#A3A3A3] text-sm md:text-lg text-center'>Transfer business money easily through finance app without <br /> any hassle. This app can help you control.Transfer business <br /> money easily through finance </p>
        <form
          onSubmit={handleSubmit(data => {
            console.log(data)
          })} className='flex'
        >
          <input
            {...register ("email")}
            type="email"
            placeholder='Enter your email address'
            name="email"
            pattern='^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$'
            title='Email'
            className='mx-auto bg-white shadow-xl rounded-l-xl md:py-3 md:pl-5 pl-2 pr-3 md:pr-12 text-sm md:text-lg relative'
          />
          <div className='bg-white text-center py-3 rounded-r-xl px-6'>
            <button type="submit" className='relative px-4 rounded-lg py-2 bg-[#EACB29] hover:bg-[#eaca29cf] font-medium text-sm'>Subscribe now</button>
          </div>
        </form>
        <div className='flex gap-x-16'>
          <div className='text-center space-y-2'>
            <h3 className='font-bold text-[30px] text-white'>+6</h3>
            <p className='text-white font-semibold'>Years in business</p>
            <p className='text-[#BEBEBE]'>Creating the successful path</p>
          </div>
          <div className='text-center space-y-2'>
            <h3 className='font-bold text-[30px] text-white'>4821</h3>
            <p className='text-white font-semibold'>Case studies delivere</p>
            <p className='text-[#BEBEBE]'>in last 6 years</p>
          </div>
        </div>
      </div>
    </section>
  )
}