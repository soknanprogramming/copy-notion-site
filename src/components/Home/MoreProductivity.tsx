import React, { useState, useEffect, useMemo } from 'react'
import { FaArrowRight } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import asset_calculator from '../../assets/images/asset-calculator.avif'

interface Props {
  className?: string;
}

interface Product_item {
  title: string;
  price: number;
}

const product_items: Array<Product_item> = [
  {
    title: "AI Search",
    price: 35
  },
  {
    title: "AI Chatbot",
    price: 20
  },
  {
    title: "AI Meeting Notes",
    price: 18
  },
  {
    title: "AI writing Assistant",
    price: 20
  },
  {
    title: "AI Email App",
    price: 30
  },
  {
    title: "AI Research",
    price: 40
  },
  {
    title: "Calendar Scheduling",
    price: 15
  },
  {
    title: "Team Wiki",
    price: 10
  },
  {
    title: "Project Management Tool",
    price: 24
  },
  {
    title: "Basic CRM",
    price: 20
  },
  {
    title: "Site Builder",
    price: 20
  },
  {
    title: "Forms",
    price: 15
  }
]

const MoreProductivity: React.FC<Props> = ({ className = "" }) => {
  const initialCheck = new Array(product_items.length).fill(false)
  initialCheck[1] = true
  initialCheck[7] = true
  initialCheck[8] = true

  const [whatCheck, setWhatCheck] = useState<boolean[]>(initialCheck)
  const [userUse, setUserUse] = useState<number>(10);

  const totalPrice = useMemo(() => {
    return product_items.reduce((sum, item, index) => {
      return whatCheck[index] ? sum + item.price : sum
    }, 0)
  }, [whatCheck])

  const calculatePricePerMonth = useMemo(() => {
    return totalPrice * userUse
  }, [userUse, totalPrice])

  useEffect(() => {

  }, [])

  return (
    <div className={`${className}`}>
      <div className='flex'>
        <div className='flex flex-1 flex-col gap-3'>
          <div className='tracking-tight font-bold'>
            <h1 className='text-6xl'>More productivity</h1>
            <h1 className='text-6xl'>Fewer tools</h1>
          </div>
          <p className='text-lg'>Bring all your tools and teams under one roof. Calculate savings below</p>
          <div className='text-blue-500 group w-fit'><Link to="/" className='text-lg flex items-center group-hover:underline underline-offset-2 hover:text-blue-300'><p>See pricing plans </p><FaArrowRight className='ml-1'/></Link></div>
        </div>
        <div className='flex-1 relative'>
          <img className='absolute bottom-1' src={asset_calculator} alt="calculator" />
        </div>
      </div>
      <div className='border border-gray-200 p-10 mt-8 rounded-xl'>
        <div className='grid grid-cols-3 gap-y-4 p-2'>
          {
            product_items.map((item, index) => (
              <div className='text-sm flex items-center gap-2'>
                <input type="checkbox"
                  checked={whatCheck[index]}
                  onChange={() => setWhatCheck(prev => {
                    const updated = [...prev]
                    updated[index] = !updated[index]
                    return updated
                  })}
                  id={`checkbox-${index}`}
                />
                <label htmlFor={`checkbox-${index}`} className='font-bold'>{item.title}</label>
                {
                  whatCheck[index] && (<p className='text-xs text-gray-500'>${item.price}/user</p>)
                }
              </div>
            ))
          }
        </div>
        <div className='flex bg-gray-100 p-5 rounded-2xl mt-6 *:gap-3'>
          <div className='flex flex-col flex-1'>
            <h1 className='text-lg font-medium'>Team size</h1>
            <input
              className='text-5xl font-bold border bg-white border-gray-200 rounded-lg hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 pl-3 pr-2 ml-3 w-7/12'
              type="number"
              value={userUse}
              onChange={e => setUserUse(Number(e.target.value) < 1 ? 1 : Number(e.target.value))}
              name=""
              id=""
            />
          </div>
          <div className='flex flex-col flex-1'>
            <h1 className='text-lg font-medium'>Monthly savings</h1>
            <p className='text-5xl font-bold ml-3'>${ calculatePricePerMonth }</p>
          </div>
          <div className='flex flex-col flex-1'>
            <h1 className='text-lg font-medium'>Annual savings</h1>
            <p className='text-5xl font-bold ml-3'>${ calculatePricePerMonth * 12 }</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MoreProductivity