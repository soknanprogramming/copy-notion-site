import React from 'react'

interface Prop {
    className?: string;
    title: string;
    children: React.ReactNode;
    foot?: React.ReactNode;
}


const CardFooter: React.FC<Prop> = ({ className = "", title, children, foot }) => {
  return (
    <div className={`p-2 h-min-48 py-4 relative ${className}`}>
        <h1 className='font-medium'>{title}</h1>
        <div className='[&>*>*]:text-gray-500 [&>*>*]:text-sm [&>*>*]:py-1'>
            {children}
        </div>
        <div className='absolute bottom-4'>
          {foot}
        </div>
    </div>
  )
}

export default CardFooter