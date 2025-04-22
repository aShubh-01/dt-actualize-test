import React from 'react'

const Rounds = () => {
  return (
    <section className='px-4 flex flex-col max-w-[1300px]' id='process'>
        <h1 className='text-2xl md:text-3xl min-w-[40vw] font-semibold md:mr-[33rem] bg-[#E8EFFEB2] rounded-[.5rem] p-3'>
          Deep thoughts talent discovery process.
        </h1>
        <div className='flex flex-col pt-10 p-4 md:p-10 max-w-screen-xl w-full'>
          {/* Round 1 */}
          <div className='p-4 md:p-6 lg:pb-0 md:self-start flex flex-col md:flex-row w-full'>
            <div className='flex flex-col md:flex-row gap-3 md:gap-5'>
              <span className='bg-[#000B47] text-white h-auto md:h-10 p-2 px-4 rounded-[.5rem] text-center md:text-left md:self-start whitespace-nowrap'>Round 1</span>
              <div className='flex flex-col gap-2 md:gap-3'>
                <h1 className='text-xl md:text-2xl font-semibold'>Conversational Form (Introspection)</h1>
                <span className='text-base md:text-lg'>This round is your space to tell us your story not just <br className="hidden md:block" /> what you do, but who you are.</span>
              </div>
            </div>
            <div className='hidden md:flex items-center justify-end mt-8 ml-4'>
              <img src="/arrow_1.png" alt="Arrow" className="rotate-180 scale-x-[-1]" />
            </div>
          </div>

          {/* Round 2 - Fixed */}
          <div className='p-4 md:p-6 lg:pb-0 md:ml-4 w-full flex flex-col md:flex-row md:justify-end'>
            <div className='max-w-full md:max-w-[60vw] flex flex-col md:flex-row'>
              <div className='hidden md:flex items-center mt-8 mr-4'>
                <img src="/arrow_1.png" alt="Arrow" className="rotate-180" />
              </div>
              <div className='flex flex-col md:flex-row gap-3 md:gap-5'>
                <span className='bg-[#000B47] text-white h-auto md:h-10 p-2 px-4 rounded-[.5rem] text-center md:text-left md:self-start whitespace-nowrap'>Round 2</span>
                <div className='flex flex-col gap-2 md:gap-3'>
                  <h1 className='text-xl md:text-2xl font-semibold'>Role Based Task / Listening Assignment</h1>
                  <span className='text-base md:text-lg'>This round gives us a chance to experience your thinking, <br className="hidden md:block" /> and gives you a taste of our work.</span>
                </div>
              </div>
            </div>
          </div>

          {/* Round 3 */}
          <div className='p-4 md:p-6 lg:pb-0 md:ml-8  md:self-start flex flex-col md:flex-row w-full'>
            <div className='flex flex-col md:flex-row gap-3 md:gap-5'>
              <span className='bg-[#000B47] text-white h-auto md:h-10 p-2 px-4 rounded-[.5rem] text-center md:text-left md:self-start whitespace-nowrap'>Round 3</span>
              <div className='flex flex-col gap-2 md:gap-3'>
                <h1 className='text-xl md:text-2xl font-semibold'>Reflection / Mindset Discovery</h1>
                <span className='text-base md:text-lg'>This round is about how you make sense of feedback, emotions, <br className="hidden md:block" /> and your own growth journey.</span>
              </div>
            </div>
            <div className='hidden md:flex items-center justify-end mt-8 ml-4'>
              <img src="/arrow_1.png" alt="Arrow" className="rotate-180 scale-x-[-1]" />
            </div>
          </div>

          {/* Round 4 - Fixed */}
          <div className='p-4 md:p-6 lg:pb-0 w-full flex flex-col md:flex-row md:justify-end'>
            <div className='max-w-full md:max-w-[60vw] flex flex-col md:flex-row'>
              <div className='flex flex-col md:flex-row gap-3 md:gap-5'>
                <span className='bg-[#000B47] text-white h-auto md:h-10 p-2 px-4 rounded-[.5rem] text-center md:text-left md:self-start whitespace-nowrap'>Round 4</span>
                <div className='flex flex-col gap-2 md:gap-3'>
                  <h1 className='text-xl md:text-2xl font-semibold'>Virtual Tour (Culture Immersion)</h1>
                  <span className='text-base md:text-lg'>We don't expect you to fit in—we want you to feel <br className="hidden md:block" /> at home if this feels right.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
    </section>
  )
}

export default Rounds