import React from 'react'

const Experience = () => {
  return (
    <section className="p-4 md:p-10 max-w-[1300px]">
        <h1 className="text-xl md:text-3xl bg-[#E8EFFEB2] rounded-[.5rem] p-3 text-center md:w-[30vw] font-semibold">Top 3 reflections of the week</h1>
      <div className='flex justify-between'>
        <div className="mt-8 flex flex-col md:flex-row gap-6 md:gap-4 justify-between">
          <div className="w-full  text-base md:text-lg flex flex-col gap-6 md:gap-10 p-6 md:p-10 border shadow-xl">
            <p>
            The selection process was engaging and growth-oriented. The initial message sparked curiosity, and though the form seemed lengthy, the questions encouraged deep thinking and introspection. The assignments tested patience and perseverance, making the experience meaningful. Daily journals with feedback motivated improvement and consistency. Virtual tours and orientation sessions were enjoyable and informative. The process’s unique structure, including voice notes and interactive sessions, helped reduce the fear of speaking and promoted self-expression. The initiation stood out, making candidates feel involved from the start. Overall, the process was designed to foster learning, build confidence, and create a positive and enriching experience.
            </p>
            <h3 className="text-right font-semibold">-K A V Karthikeya</h3>
          </div>
          <div className="w-full text-base md:text-xl flex flex-col gap-6 md:gap-10 p-6 md:p-10 border shadow-xl">
            <p>
              The selection process at DeepThought though is time taking yet is career building, giving the candidates a clear picture of what they are truely meant for. 

              My journey started just the same, in confusion and with no serious thoughts. But as I proceeded with the process each step made me curious about the next. After the virtual tour everything was crystal clear. In a week's time I was aware about various frameworks and techniques for example - the Feynmann Technique, ART Framework etc. 

              The process is designed in a way to get the real self out. Even if a candidate is not selected he/she might discover new things and a new self altogether.
            </p>
            <h3 className="text-right font-semibold">-Dalia Singh</h3>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
