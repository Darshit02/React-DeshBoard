import React from 'react'

const Header = ({catagory,title}) => {
  return (
    <div className='mb-10'>
      <p className="text-gray-400">
        {catagory}
      </p>
      <p className="text-3xl font-extrabold tracking-tight text-slate-900">{title}</p>
    </div>
  )
}

export default Header
