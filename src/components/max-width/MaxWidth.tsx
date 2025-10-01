import React from 'react'

const MaxWidth = ({children}:{children:React.ReactNode}) => {
  return (
    <div className=' max-w-6xl mx-auto md:px-0 px-4 ' >
        {
            children
        }
    </div>
  )
}

export default MaxWidth