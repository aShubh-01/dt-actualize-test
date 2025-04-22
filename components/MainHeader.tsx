import Link from 'next/link'

const MainHeader = () => {

  return (
    <section className='fixed z-10 w-full shadow-md'>
      <nav className="flex flex-col md:flex-row justify-between items-center p-4 md:p-5 sticky top-0 bg-white z-50 gap-4 md:gap-0">
        {/* Left Section */}
        <div className="flex gap-4 items-center">
          <span>
            <Link href="/">
              <img src="/logo.svg" alt="Logo" className="h-8 w-auto" />
            </Link>
          </span>
        </div>

        <div className='hidden gap-8 md:flex'>
          <a href="#explore">
            <span className='text-lg font-semibold cursor-pointer border-b-2 border-transparent hover:text-blue-700 hover:border-blue-700 transition duration-200'>Explore</span>
          </a>
          <a href="#eligible">
            <span className='text-lg font-semibold cursor-pointer border-b-2 border-transparent hover:text-blue-700  hover:border-blue-700 transition duration-200'>Eligibility</span>
          </a>
          <a href="#JD">
            <span className='text-lg font-semibold cursor-pointer border-b-2 border-transparent hover:text-blue-700  hover:border-blue-700 transition duration-200'>Job Description</span>
          </a>
          <a href="#process">
            <span className='text-lg font-semibold cursor-pointer border-b-2 border-transparent hover:text-blue-700  hover:border-blue-700 transition duration-200'>Hiring Process</span>
          </a>
        </div>


        {/* Right Section */}
        <div className="flex gap-4">
          {/* <button className="text-sm border-[#0029FF] border-2 p-2 text-[#0029FF] font-semibold rounded-[.5rem]">
            Select Your Role
          </button> */}
          <Link href={"https://app.deepthought.education/dt-actualise/questions"}>
            <button className="text-sm font-semibold bg-[#0029FF] p-5 pt-3 pb-3 rounded-[.5rem] text-white hover:scale-105 hover:shadow-lg transition-all duration-500">
              Start Now
            </button>
          </Link>
        </div>
      </nav>
    </section>
  )
}

export default MainHeader
