import React from 'react'

export default function Title({title,miniTitle}) {
  return (
    <div className=' w-full flex flex-col pt-10 items-center justify-center'>
      <p className='text-black text-4xl font-black'>{title}</p>
      <p className='text-xl font-normal'>{miniTitle}</p>
    </div>
  )
}
