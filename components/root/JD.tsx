import React from 'react';

const JD = () => {
  return (
    <section className='flex flex-col lg:flex-row justify-between gap-10 md:gap-[27rem] max-w-[1300px]' id='JD'>
      {/* Left content */}
      <div className='flex flex-col gap-8 '>
        {/* Title and subtitle */}
        <div className='flex flex-col gap-1 bg-[#E8EFFEB2] rounded-[.5rem] p-3'>
          <h1 className='text-3xl md:text-3xl font-semibold'>Role: Software Development</h1>
          <span className='text-lg md:text-xl'>(Web and Mobile App development)</span>
        </div>

        {/* Job info */}
        <div className='flex flex-col gap-3 mt-5'>
          <div className='flex items-center gap-3'>
            <span className='font-semibold gap-2 items-center text-xl md:text-2xl flex'>
              <i className="ri-map-pin-2-fill text-black"></i>
              Location:
            </span>
            <span className='text-lg md:text-xl'>Remote (Work from Home)</span>
          </div>
          <div className='flex items-center gap-3'>
            <span className='font-semibold gap-2 items-center text-xl md:text-2xl flex'>
              <i className="ri-time-line"></i>
              Timings:
            </span>
            <span className='text-lg md:text-xl'>11:30am - 09:00pm</span>
          </div>
          <div className='flex items-center gap-1 flex-wrap'>
            <span className='font-semibold gap-2 items-center text-xl md:text-2xl flex'>
              <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.00065 10.4165C8.2271 10.4165 7.48524 10.7238 6.93826 11.2708C6.39128 11.8178 6.08398 12.5596 6.08398 13.3332C6.08398 14.1067 6.39128 14.8486 6.93826 15.3956C7.48524 15.9425 8.2271 16.2498 9.00065 16.2498C9.7742 16.2498 10.5161 15.9425 11.063 15.3956C11.61 14.8486 11.9173 14.1067 11.9173 13.3332C11.9173 12.5596 11.61 11.8178 11.063 11.2708C10.5161 10.7238 9.7742 10.4165 9.00065 10.4165ZM7.75065 13.3332C7.75065 13.0017 7.88235 12.6837 8.11677 12.4493C8.35119 12.2149 8.66913 12.0832 9.00065 12.0832C9.33217 12.0832 9.65011 12.2149 9.88453 12.4493C10.119 12.6837 10.2507 13.0017 10.2507 13.3332C10.2507 13.6647 10.119 13.9826 9.88453 14.2171C9.65011 14.4515 9.33217 14.5832 9.00065 14.5832C8.66913 14.5832 8.35119 14.4515 8.11677 14.2171C7.88235 13.9826 7.75065 13.6647 7.75065 13.3332Z" fill="black" />
                <path d="M13.605 4.26348L10.9558 0.549316L1.215 8.33098L0.675 8.32515V8.33348H0.25V18.3335H17.75V8.33348H16.9483L15.3533 3.66765L13.605 4.26348ZM15.1875 8.33348H6.83083L13.055 6.21182L14.3233 5.80598L15.1875 8.33348ZM11.9583 4.82515L5.53333 7.01515L10.6217 2.95015L11.9583 4.82515ZM1.91667 15.141V11.5243C2.26848 11.4002 2.58804 11.1988 2.85192 10.9351C3.1158 10.6713 3.31731 10.3519 3.44167 10.0001H14.5583C14.6826 10.352 14.884 10.6717 15.1479 10.9356C15.4118 11.1994 15.7314 11.4009 16.0833 11.5251V15.1418C15.7314 15.2661 15.4118 15.4675 15.1479 15.7314C14.884 15.9953 14.6826 16.3149 14.5583 16.6668H3.44333C3.31849 16.3149 3.11664 15.9953 2.85252 15.7313C2.5884 15.4673 2.26867 15.2656 1.91667 15.141Z" fill="black" />
              </svg>
              Compensation Structure
            </span>
            <span className='text-lg md:text-xl'>(Full-time)</span>
          </div>
        </div>

        {/* Compensation Details in Row on All Screens */}
        <div className='flex gap-3 flex-row flex-wrap'>
          <span className='flex flex-col text-base md:text-lg'>
            <span className='font-medium'>First 6 months</span>
            <span>₹10,000/month</span>
          </span>
          <span className='flex flex-col text-base md:text-lg'>
            <span className='font-medium'>From 7th month</span>
            <span>₹20,000/month</span>
          </span>
          <span className='flex flex-col text-base md:text-lg'>
            <span className='font-medium'>19th month Onwards</span>
            <span>₹30,000/month</span>
          </span>
        </div>
      </div>

      {/* JD Image */}
      <div className='flex justify-center items-center'>
        <img src="/JD.png" alt="JD" className='w-full max-w-sm md:max-w-md lg:max-w-md' />
      </div>
    </section>
  );
};

export default JD;
