import React from 'react'

export default function Title({title,miniTitle}) {
  return (
    <div className=' w-full mt-10 md:mt-0 flex flex-col md:pt-10 items-center justify-center'>
      <p className='text-black text-4xl font-black'>{title}</p>
      <p className='text-xl font-normal text-center'>{miniTitle}</p>
    </div>
  )
}
