import React from 'react'

const Rounds = () => {
  return (
    <section className='px-4  md:px-6 lg:px-8 max-w-[1300px]' id='process'>
      <div className='flex flex-col md:flex-row md:justify-between gap-4 md:gap-0 mb-6 md:mb-0'>
          <h1 className='text-2xl md:text-3xl font-semibold bg-[#E8EFFEB2] rounded-[.5rem] p-3 text-center'>Deep thoughts talent discovery process.</h1>
      </div>
      <div className='flex flex-col pt-10 items-center'>
        <div className='p-4 md:p-6  lg:pb-0 md:pl-20 lg:pl-36 md:pr-20 lg:pr-36 flex flex-col md:flex-row'>
          <div className='flex flex-col md:flex-row gap-3 md:gap-5'>
            <span className='bg-[#000B47] text-white h-auto md:h-10 p-2 rounded-[.5rem] text-center md:text-left md:self-start'>Round 1</span>
            <span className='flex flex-col gap-2 md:gap-5'>
              <h1 className='text-xl md:text-2xl'>Conversational Form (Introspection)</h1>
              <span className='text-base md:text-xl'>This round is your space to tell us your story not just <br /> what you do, but who you are.</span>
            </span>
          </div>
          <div className='hidden md:block mt-8'>
            <img src="/arrow_1.png" alt="Arrow" className="rotate-180 scale-x-[-1]" />
          </div>
        </div>
        <div className='p-4 md:p-6  lg:pb-0 md:pl-20 lg:pl-36 md:pr-20 lg:pr-36 md:ml-32 lg:ml-64 flex flex-col md:flex-row'>
          <div className='hidden md:block mt-8'>
            <img src="/arrow_1.png" alt="Arrow" className="rotate-180" />
          </div>
          <div className='flex flex-col md:flex-row gap-3 md:gap-5'>
            <span className='bg-[#000B47] md:min-w-[5rem] text-white h-auto md:h-10 p-2 rounded-[.5rem] text-center md:text-left md:self-start'>Round 2</span>
            <span className='flex flex-col gap-2 md:gap-5'>
              <h1 className='text-xl md:text-2xl'>Role Based Task / Listening Assignment</h1>
              <span className='text-base md:text-xl'>This round gives us a chance to experience your thinking, and gives you a taste of our work.</span>
            </span>
          </div>
        </div>
        <div className='p-4 md:p-6  lg:pb-0 md:pl-20 lg:pl-36 md:pr-20 lg:pr-36 flex flex-col md:flex-row'>
          <div className='flex flex-col md:flex-row gap-3 md:gap-5'>
            <span className='bg-[#000B47] text-white h-auto md:h-10 p-2 rounded-[.5rem] text-center md:text-left md:self-start'>Round 3</span>
            <span className='flex flex-col gap-2 md:gap-5'>
              <h1 className='text-xl md:text-2xl'>Reflection / Mindset Discovery</h1>
              <span className='text-base md:text-xl'>This round is about how you make sense of feedback, emotions, <br /> and your own growth journey.</span>
            </span>
          </div>
          <div className='hidden md:block mt-8'>
            <img src="/arrow_1.png" alt="Arrow" className="rotate-180 scale-x-[-1]" />
          </div>
        </div>
        <div className='p-4 md:p-6  lg:pb-0 md:pl-20 lg:pl-36 md:pr-20 lg:pr-36 md:ml-48 lg:ml-96 flex flex-col md:flex-row'>
          <div className='flex flex-col md:flex-row gap-3 md:gap-5'>
            <span className='bg-[#000B47] text-white h-auto md:h-10 p-2 rounded-[.5rem] text-center md:text-left md:self-start'>Round 4</span>
            <span className='flex flex-col gap-2 md:gap-5'>
              <h1 className='text-xl md:text-2xl'>Virtual Tour (Culture Immersion)</h1>
              <span className='text-base md:text-xl'>We don't expect you to fit in—we want you to feel <br /> at home if this feels right.</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Rounds