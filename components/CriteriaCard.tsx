import React from 'react'

const CriteriaCard = ({title, desc, oneLiner, classes, img}:{title: string, desc: string, oneLiner: string, classes: string, img:string}) => {
  return (<>
    <div className={classes}>
      <div>
        <img src={img} alt="" />
      </div>
      <div>
        <span className='font-semibold text-xl'>{title}</span>
      </div>
      <div>
        <span className='text-lg'>{desc}</span>
      </div>
      <div className='mt-3 cursor-pointer bg-[#E7EFFFEA] p-3 border rounded-xl'>
        <span className='text-lg'>{oneLiner}</span>
      </div>
    </div>
  </>
  )
}

export default CriteriaCard