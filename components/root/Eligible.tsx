import React from 'react'
import CriteriaCard from '../CriteriaCard'

const Eligible = () => {
  return (
    <div
      className="min-h-screen w-full flex flex-col md:flex-row justify-center items-center gap-6 bg-[url('/eligible_bg.jpg')] bg-cover bg-center p-4"
      id="eligible"
    >
      <div className="max-w-[1340px] w-full flex flex-col md:flex-row gap-10 px-4">
        {/* Left Section */}
        <div className="flex flex-col gap-6 md:gap-10 w-full md:w-[40%] mt-10 md:mt-20 items-start">
          <div className="w-full md:max-w-[30vw] flex flex-col gap-3">
            <h1 className="text-2xl md:text-4xl font-semibold">What makes you eligible?</h1>
            <span className="text-base md:text-lg">
              DT isn’t just about qualifications. It’s about mindset. If these resonate with you, you’re built for DT.
            </span>
          </div>
          <div className="w-full md:w-auto">
            <CriteriaCard
              img="/new_things.svg"
              title="Try New Things"
              desc="You’re not afraid to try something new, even if it’s risky—because you know that’s how growth happens."
              oneLiner="50% of Gen Z exhibit risk-taking traits."
              classes="bg-white w-full sm:min-w-[280px] sm:max-w-[340px] flex-1 cursor-pointer text-center flex flex-col gap-2 p-6 border-2 rounded-2xl border-gray-400 justify-center items-center md:ml-[12rem]"
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-wrap justify-center gap-6 w-full md:w-[60%]">
          <div className="flex flex-col gap-8 w-full sm:w-auto md:mt-[7rem]">
            <CriteriaCard
              img="/learn.svg"
              title="Learn It. Own It. Do It."
              desc="You don’t wait to be told—you self-initiate, explore, and complete what you begin."
              oneLiner="Only 27% finish what they start."
              classes="w-full sm:min-w-[280px] sm:max-w-[340px] bg-white cursor-pointer text-center flex flex-col gap-3 p-6 border-2 rounded-2xl border-gray-400 items-center justify-center"
            />
            <CriteriaCard
              img="/challenges.svg"
              title="Challenges excite you"
              desc="You feel alive when you overcome challenges and build things that matter."
              oneLiner="60–65% seek achievement."
              classes="w-full sm:min-w-[280px] sm:max-w-[340px] bg-white cursor-pointer text-center flex flex-col gap-3 p-6 border-2 rounded-2xl border-gray-400 items-center justify-center"
            />
          </div>

          <div className="flex flex-col gap-8 w-full sm:w-auto">
            <CriteriaCard
              img="/growth_mindset.svg"
              title="Have a Growth Mindset"
              desc="You don’t doubt yourself—you just get curious. When something’s hard, your first thought is, “How do I figure this out?”"
              oneLiner="40% have a growth mindset; 30% are developing one."
              classes="w-full sm:min-w-[280px] sm:max-w-[340px] bg-white cursor-pointer text-center flex flex-col gap-3 p-6 border-2 rounded-2xl border-gray-400 items-center justify-center"
            />
            <CriteriaCard
              img="/feedback.svg"
              title="Grow from Every Feedback"
              desc="You listen, reflect, and grow from every piece of feedback you receive."
              oneLiner="Only 40% of people apply feedback well."
              classes="w-full sm:min-w-[280px] sm:max-w-[340px] bg-white cursor-pointer text-center flex flex-col gap-3 p-6 border-2 rounded-2xl border-gray-400 items-center justify-center"
            />
          </div>
        </div>

      </div>
    </div>
  )
}

export default Eligible
