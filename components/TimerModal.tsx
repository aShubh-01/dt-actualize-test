// components/TimelineModal.jsx
"use client"
import { useState, useEffect } from 'react';

type TimelineModalProps = {
  isOpen: boolean;
  onClose: () => void;
};
export default function TimelineModal({ isOpen, onClose }:TimelineModalProps) {
  const [selectedTime, setSelectedTime] = useState("");
  
  const handleSelectTime = () => {
    if (!selectedTime) return;
    
    // Extract minutes from string like "20 minutes"
    const minutes = selectedTime.split(" ")[0];
    
    // Store in localStorage
    localStorage.setItem("time", minutes);
    localStorage.removeItem("startTime"); // Reset the start time
    
    onClose();
    window.location.reload(); // Reload to start the timer
  };
  
  const handleMouseEnter = (event: React.MouseEvent<HTMLSpanElement>) => {
    const parent = event.currentTarget.parentElement;
    const tooltip = parent?.querySelector("div");
  
    if (tooltip) {
      tooltip.style.opacity = "1";
    }
  };
  
  const handleMouseLeave = (event : React.MouseEvent<HTMLSpanElement>) =>{
    const parent = event.currentTarget.parentElement;
    const tooltip = parent?.querySelector("div");
    if(tooltip){
      tooltip.style.opacity = '0';
    }
  }
  
  return (
    <div className={`fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 ${isOpen ? '' : 'hidden'}`}>
      <div className="bg-white rounded-xl w-[30rem] p-4">
        <div className="flex flex-col justify-center items-center">
          <section className="w-full">
            <div className="flex justify-between items-center my-2">
              <span className="flex items-center">
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM13 12H17V14H11V7H13V12Z"></path>
                  </svg>
                </span>
                <span className="text-base font-bold ml-2">Time taken by other applicants</span>
              </span>
              <span className="relative">
                <div className="absolute bg-gray-700 p-4 rounded-[.5rem] w-60 bottom-3 cursor-pointer left-6 text-base opacity-0  text-white transition-all ease-in-out duration-500">
                  This is the time other applicants took to complete Round 1!
                </div>
                <span className="flex justify-center w-4 h-4 bg-gray-600 text-white rounded-full p-3 items-center text-xs cursor-pointer" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                  i
                </span>
              </span>
            </div>
            
            <div className="w-full border border-gray-400 rounded-[0.5rem] p-4 pb-0">
              <div className="flex justify-between border-b border-gray-300 pb-2.5">
                <span className="font-bold">Name</span>
                <span className="font-bold">Time (minutes)</span>
              </div>
              
              <div className="flex justify-between border-b border-gray-300 py-4">
                <div>
                  <span>Priyanshu</span>
                </div>
                <div className="flex items-center gap-4">
                  <span>
                    <div className="w-40 h-1 bg-gray-200">
                      <div className="bg-blue-600 h-1 w-3/4"></div>
                    </div>
                  </span>
                  <span>30</span>
                </div>
              </div>
              
              <div className="flex justify-between border-b border-gray-300 py-4">
                <div>
                  <span>Satvik</span>
                </div>
                <div className="flex items-center gap-4">
                  <span>
                    <div className="w-40 h-1 bg-gray-200">
                      <div className="bg-blue-600 h-1 w-1/2"></div>
                    </div>
                  </span>
                  <span>25</span>
                </div>
              </div>
              
              <div className="flex justify-between py-4">
                <div>
                  <span>Ashutosh</span>
                </div>
                <div className="flex items-center gap-4">
                  <span>
                    <div className="w-40 h-1 bg-gray-200">
                      <div className="bg-blue-600 h-1 w-3/4"></div>
                    </div>
                  </span>
                  <span>30</span>
                </div>
              </div>
            </div>
          </section>
          
          <section className="w-full mt-4">
            <div className="flex justify-between items-center my-4">
              <span className="flex items-center">
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path d="M6 4H4V2H20V4H18V6C18 7.61543 17.1838 8.91468 16.1561 9.97667C15.4532 10.703 14.598 11.372 13.7309 12C14.598 12.628 15.4532 13.297 16.1561 14.0233C17.1838 15.0853 18 16.3846 18 18V20H20V22H4V20H6V18C6 16.3846 6.81616 15.0853 7.8439 14.0233C8.54682 13.297 9.40202 12.628 10.2691 12C9.40202 11.372 8.54682 10.703 7.8439 9.97667C6.81616 8.91468 6 7.61543 6 6V4ZM8 4V6C8 6.68514 8.26026 7.33499 8.77131 8H15.2287C15.7397 7.33499 16 6.68514 16 6V4H8ZM12 13.2219C10.9548 13.9602 10.008 14.663 9.2811 15.4142C9.09008 15.6116 8.92007 15.8064 8.77131 16H15.2287C15.0799 15.8064 14.9099 15.6116 14.7189 15.4142C13.992 14.663 13.0452 13.9602 12 13.2219Z"></path>
                  </svg>
                </span>
                <span className="text-base font-bold ml-2">Select Time For yourself</span>
              </span>
              <span className="relative">
                <div className="timeline__tooltip absolute bg-gray-700 p-4 rounded-[.5em] w-60 bottom-3 cursor-pointer left-6 text-base opacity-0 text-white transition-all ease-in-out duration-500">
                  Set a time and challenge yourself to complete within that time!
                </div>
                <span className="flex justify-center w-4 h-4 bg-gray-600 text-white rounded-full p-3 items-center text-xs cursor-pointer" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                  i
                </span>
              </span>
            </div>
            
            <div>
              <select 
                className="w-full h-12 border border-gray-300 rounded-[0.5rem] cursor-pointer p-2 shadow-md"
                value={selectedTime}
                onChange={(e) => setSelectedTime(e.target.value)}
                required
              >
                <option value="" disabled>Set your pace</option>
                <option value="20 minutes">20 minutes</option>
                <option value="25 minutes">25 minutes</option>
                <option value="30 minutes">30 minutes</option>
                <option value="35 minutes">35 minutes</option>
              </select>
            </div>
          </section>
          
          <section className="w-full mt-6">
            <button 
              className={`bg-blue-600 text-white px-6 py-2 rounded-[.5rem] text-lg font-semibold w-full hover:bg-blue-800 transition-all ease-in duration-500 ${!selectedTime && 'opacity-50 cursor-not-allowed'}`}
              onClick={handleSelectTime}
              disabled={!selectedTime}
            >
              Let's Do This
            </button>
          </section>
        </div>
      </div>
    </div>
  );
}