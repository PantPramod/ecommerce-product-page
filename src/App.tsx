import { useState } from 'react'
import Header from "./components/Header"
import product1 from './images/image-product-1.jpg'
import product2 from './images/image-product-2.jpg'
import product3 from './images/image-product-3.jpg'
import product4 from './images/image-product-4.jpg'
import cart from './images/icon-cart.svg'
import thumbnail1 from './images/image-product-1-thumbnail.jpg'
import thumbnail2 from './images/image-product-2-thumbnail.jpg'
import thumbnail3 from './images/image-product-3-thumbnail.jpg'
import thumbnail4 from './images/image-product-4-thumbnail.jpg'

const App = () => {
  const [image, setImage] = useState(product1)
  const [count, setCount] = useState(1)
  const [showPopUp, setShowPopUp] = useState(false)
  const [id, setId] = useState(0)
  const [cartData, setCartData] = useState<any>([

  ])
  return (
    <div className="">
      <Header cartData={cartData} setCartData={setCartData} />
      <div className="w-[90%] mx-auto flex justify-center flex-col sm:flex-row pb-10 sm:pb-0">
        <div className="relative p-0 sm:p-10 w-[100%] sm:w-[38%] ">
          <img
            src={image}
            alt=""
            className=" rounded-xl ml-auto w-full cursor-pointer hidden sm:block"
            onClick={() => { setShowPopUp(true) }}
          />
          <img
            src={arr[id].img}
            alt=""
            className="  ml-auto w-full cursor-pointer sm:hidden"
          />
          <div
            onClick={() => setId(prev => prev > 0 ? prev - 1 : prev)}
            className='sm:hidden cursor-pointer absolute left-10 top-1/2 bg-white rounded-full w-10 h-10 flex items-center justify-center -translate-y-1/2 -translate-x-1/2'>
            <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg"><path d="M11 1 3 9l8 8" stroke="#1D2026" stroke-width="3" fill="none" fill-rule="evenodd" /></svg>
          </div>

          <div
            onClick={() => setId(prev => prev < arr.length - 1 ? prev + 1 : prev)}
            className='sm:hidden cursor-pointer absolute rotate-180 right-10 top-1/2 bg-white rounded-full w-10 h-10 flex items-center justify-center -translate-y-1/2 translate-x-1/2'>
            <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg"><path d="M11 1 3 9l8 8" stroke="#1D2026" stroke-width="3" fill="none" fill-rule="evenodd" /></svg>
          </div>
          <div className="sm:flex mt-4 gap-x-4 justify-between items-center hidden">
            {arr.map((item, index) => <div className='w-[20%] relative'>
              {item.img === image && <div className={`bg-[#ffffff9a] absolute top-0 left-0 right-0 bottom-0 transition-all ease-in-out duration-300`}></div>}
              <img
                onClick={() => { setId(index); setImage(item.img) }}
                key={item.id}
                src={item.thumbnail}
                alt="thumbnail_1"
                className={`rounded-md w-full cursor-pointer border-[#ff7d1a] `}
              /></div>)}

          </div>
        </div>
        <div className="w-full p-0 sm:w-[38%] sm:p-10 self-center">
          <p className="uppercase text-[#ff7d1a] font-bold">Sneaker Company</p>
          <h1 className="mt-4 text-3xl sm:text-5xl font-bold">Fall Limited Edition Sneakers</h1>

          <p className="mt-8">These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the waeather can offer. </p>


          <p className="mt-6 flex gap-x-6">
            <span className="font-bold text-3xl">${(125 * count).toFixed(2)}</span>
            <span className="text-[#ff7d1a] self-start text-sm bg-[#ff7d1a2a] rounded-md p-1">50%</span>
          </p>
          <p className="text-gray-400">${(250 * count).toFixed(2)}</p>
          <div className="flex flex-col sm:flex-row gap-y-4 gap-x-4 mt-8">
            <div className="flex justify-between items-stretch bg-[#f7f8fd]  py-2 rounded-md w-full sm:w-[40%] ">
              <button
                onClick={() => setCount((prev) => prev > 1 ? prev - 1 : prev)}
                className="text-[#ff7d1a]  pl-4 font-bold" >-</button>

              <p className="font-bold">{count}</p>
              <button
                onClick={() => setCount((prev) => prev + 1)}
                className="text-[#ff7d1a]  pr-4 font-bold">+</button>
            </div>
            <button
              onClick={() => {


                setCartData([{
                  title: "Fall Limited Edition Sneakers",
                  img: image,
                  quantity: count,
                  price: 125
                }])
              }}
              className="w-full sm:w-[60%] flex items-center justify-center bg-[#ff7d1a] text-white px-8 py-3 rounded-md gap-x-2">
              <img src={cart} className="text-white" alt="" />
              <span>Add to cart </span>
            </button>
          </div>
        </div>
      </div>
      {showPopUp &&
        <div className='fixed top-0 left-0 right-0 bottom-0 bg-[#1f1919c5] flex items-center justify-center'>
          <div className='bg-transparent w-[30%] relative'>

            <svg
              onClick={() => setShowPopUp(false)}
              className='ml-auto cursor-pointer mb-2' width="20" height="21" xmlns="http://www.w3.org/2000/svg"><path d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z" fill="#ff7d1a" fill-rule="evenodd" /></svg>

            <img
              src={arr[id].img}
              className='w-full'
              alt="image_product"
            />

            <div className="flex mt-4 gap-x-4 justify-evenly items-center px-4">
              {arr.map((item, index) => <div className='w-[20%] relative'>
                {index === id && <div className={`bg-[#ffffff9a] absolute top-0 left-0 right-0 bottom-0 transition-all ease-in-out duration-300`}></div>}
                <img
                  onClick={() => setId(index)}
                  key={item.id}
                  src={item.thumbnail}
                  alt="thumbnail_1"
                  className={`rounded-md w-full cursor-pointer border-[#ff7d1a] `}
                /></div>)}
            </div>
            <div
              onClick={() => setId(prev => prev > 0 ? prev - 1 : prev)}
              className='cursor-pointer absolute left-0 top-1/2 bg-white rounded-full w-10 h-10 flex items-center justify-center -translate-y-1/2 -translate-x-1/2'>
              <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg"><path d="M11 1 3 9l8 8" stroke="#1D2026" stroke-width="3" fill="none" fill-rule="evenodd" /></svg>
            </div>

            <div
              onClick={() => setId(prev => prev < arr.length - 1 ? prev + 1 : prev)}
              className='cursor-pointer absolute rotate-180 right-0 top-1/2 bg-white rounded-full w-10 h-10 flex items-center justify-center -translate-y-1/2 translate-x-1/2'>
              <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg"><path d="M11 1 3 9l8 8" stroke="#1D2026" stroke-width="3" fill="none" fill-rule="evenodd" /></svg>
            </div>

          </div>
        </div>}
    </div>
  )
}

export default App


let arr = [
  {
    id: 1,
    thumbnail: thumbnail1,
    img: product1
  },
  {
    id: 2,
    thumbnail: thumbnail2,
    img: product2
  },
  {
    id: 3,
    thumbnail: thumbnail3,
    img: product3
  },
  {
    id: 4,
    thumbnail: thumbnail4,
    img: product4
  }
]