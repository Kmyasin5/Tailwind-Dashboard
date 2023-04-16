import React from 'react'
import {FaBolt, FaChevronLeft, FaChevronRight, FaRegCalendar, FaRegChartBar, FaRegSun, FaStickyNote, FaTachometerAlt, FaWrench} from "react-icons/fa"

const Sidebar = () => {
  return (
    <div className='bg-[#7D1E6A] h-screen px-[25px]'>
      <div className='px-[12px] py-[25px] flex items-center justify-center border-b-[2px] border-[#EDEDED]/[0.3]'>
        <h1 className='text-white text-[20px] leading-[24px] font-extrabold cursor-pointer'>Demo Dashboard</h1>
      </div>

      <div className='flex items-center gap-[15px] py-[15px] border-b-[2px] border-[#EDEDED]/[0.3] text-white'>
        <FaTachometerAlt />
        <p className='text-[14px] font-bold leading-[20px] text-white'>Dashboard</p>
      </div>

      <div className='pt-[15px] border-b-[2px] border-[#EDEDED]/[0.3]'>
        <p className='text-[14px] font-extrabold leading-[16px] text-white/[0.4]'>INTERFACE</p>
        <div className='flex items-center justify-between gap-[10px] py-[15px] cursor-pointer'>
          <div className='flex items-center gap-[10px] text-white'>
            <FaRegSun />
            <p className='text-[14px] leading-7 font-normal'>Pages</p>
          </div>
          <FaChevronRight color='white'/>
        </div>

        <div className='flex items-center justify-between gap-[10px] py-[15px] cursor-pointer'>
          <div className='flex items-center gap-[10px] text-white'>
            <FaRegChartBar />
            <p className='text-[14px] leading-7 font-normal'>Charts</p>
          </div>
          <FaChevronRight color='white'/>
        </div>
      </div>


      <div className='pt-[15px] border-b-[2px] border-[#EDEDED]/[0.3] pb-[10px]'>
        <p className='text-[14px] font-extrabold leading-[16px] text-white/[0.4]'>ADDONS</p>
        <div className='flex items-center justify-between gap-[10px] py-[15px] cursor-pointer'>
          <div className='flex items-center gap-[10px] text-white'>
            <FaStickyNote />
            <p className='text-[14px] leading-7 font-normal'>Components</p>
          </div>
          <FaChevronRight color='white'/>
        </div>

        <div className='flex items-center justify-between gap-[10px] py-[15px] cursor-pointer'>
          <div className='flex items-center gap-[10px] text-white'>
            <FaWrench />
            <p className='text-[14px] leading-7 font-normal'>Utilities</p>
          </div>
          <FaChevronRight color='white'/>
        </div>
          <div className='flex items-center gap-[10px] text-white py-[15px]'>
            <FaRegCalendar />
            <p className='text-[14px] leading-7 font-normal'>Tables</p>
          </div>
      </div>

      {/*Card */}

        <div className='flex items-center justify-center pt-[5px]'>
          <div className='h-[33px] w-[33px] bg-[#641a55] rounded-full flex items-center justify-center cursor-pointer'>
            <FaChevronLeft color='white'/>
          </div>
      </div>
      <div className='bg-[#641a55] mt-[15px] flex items-center justify-center flex-col py-[15px] px-[10px] gap-[15px] rounded-[3px]'>
        <FaBolt color='white' />
        <p className='text-[12px] leading-[18px] font-normal text-white/[0.4] text-center'>Waana explore more features, click below
        </p>
        <button className='bg-[#5bd25b] text-white flex items-center justify-center h-[30px] w-full rounded-[3px] text-sm'>Upgrade Pro !</button>
      </div>
      
    </div>
  )
}

export default Sidebar
