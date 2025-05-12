import React from 'react'

const Herodiv = () => {
  return (
    <section className="flex flex-col gap-8 m-3 md:mt-24 mt-32 max-w-[1300px]">
      {/* Heading */}
      <div>
        <h3 className="text-xl font-[550] md:text-3xl mt-5 mb-2 text-center">
          Congratulations! <br />
          You're among the top 5% committed to growth.
        </h3>
      </div>

      {/* Video and Description */}
      <div className="flex flex-col md:flex-row items-center md:gap-16 gap-6 justify-center">
        <div className="w-full md:w-[40vw] flex justify-center">
          <iframe
            width="560"
            height="315"
            className="w-full md:w-[35vw] h-[28vh] md:h-[47vh] rounded-[1rem]"
            src="https://www.youtube.com/embed/WNwkhFi6JFs"
            title="The DT Culture"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <div className="w-full md:w-[40vw] px-2 md:px-0">
          <p className="text-base md:text-xl text-center md:text-left">
            You're not just applying for a role; you're stepping into a culture that celebrates curiosity, rigor, and interdisciplinary problem-solving. We believe in nurturing thought leaders who don’t just read the world but reimagine it—through structured chaos, creative leaps, and research-driven exploration.
          </p>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="flex flex-col md:flex-row gap-4 md:gap-8 justify-between px-0 md:px-12">
        <div className="flex flex-col items-center rounded-[.5rem] p-6 md:p-7 w-full gap-3 md:w-[25vw] bg-[#E7EFFFEA]">
          <span className="text-3xl md:text-4xl font-bold text-[#0029FF]">4123</span>
          <span className="text-base md:text-lg text-[#000000B2] tracking-wider">Total Applicants</span>
        </div>
        <div className="flex flex-col items-center rounded-[.5rem] p-6 md:p-7 w-full gap-3 md:w-[25vw] bg-[#E7EFFFEA]">
          <span className="text-3xl md:text-4xl font-bold text-[#0029FF]">647</span>
          <span className="text-base md:text-lg text-[#000000B2] tracking-wider">Completed All Rounds</span>
        </div>
        <div className="flex flex-col items-center rounded-[.5rem] p-6 md:p-7 w-full gap-3 md:w-[25vw] bg-[#E7EFFFEA]">
          <span className="text-3xl md:text-4xl font-bold text-blue-700">39</span>
          <span className="text-base md:text-lg text-[#000000B2] tracking-wider">Applicants Shortlisted</span>
        </div>
      </div>
    </section>
  )
}

export default Herodiv
