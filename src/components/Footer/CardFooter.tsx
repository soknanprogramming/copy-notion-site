import React from 'react'

interface Prop {
    className?: string;
    title: string;
    children: React.ReactNode;
}


const CardFooter: React.FC<Prop> = ({ className = "", title, children }) => {
  return (
    <div className={`p-2 ${className}`}>
        <h1 className='font-medium'>{title}</h1>
        <div className='[&>*>*]:text-gray-500 [&>*>*]:text-sm [&>*>*]:py-1'>
            {children}
        </div>
    </div>
  )
}

export default CardFooter