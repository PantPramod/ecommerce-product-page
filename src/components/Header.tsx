import { useState } from 'react'
import logo from '../images/logo.svg';
import cart from '../images/icon-cart.svg'
import avatar from '../images/image-avatar.png'
import deleteico from '../images/icon-delete.svg'
import menu from '../images/icon-menu.svg'
import close from '../images/icon-close.svg'

export type propType = {
  cartData: {
    title: string,
    img: string,
    quantity: number,
    price: number
  }[],
  setCartData: any
}
const Header = ({ cartData, setCartData }: propType) => {
  const [showCart, setShowCart] = useState(false)
  const [showMenu, setShowMenu] = useState(false)
  return (
    <>
    <header className="flex justify-between items-center mx-6 py-6 border-b-gray-200 border-b-2 relative">


      <ul className='flex items-center gap-x-2 sm:gap-x-6'>
        <li className=''>
          <img
            src={menu}
            className='sm:hidden cursor-pointer'
            alt="menu"
            onClick={() => setShowMenu(prev=>!prev)}
          />
        </li>
        <li><img src={logo} className='' alt="logo" /></li>
        <li className='hidden sm:block'>Collections</li>
        <li className='hidden sm:block'>Men</li>
        <li className='hidden sm:block'>Women</li>
        <li className='hidden sm:block'>About</li>
        <li className='hidden sm:block'>Contact</li>
      </ul>

      <div className='flex items-center gap-x-2 sm:gap-x-6'>
        <img
          onClick={() => setShowCart(prev => !prev)}
          src={cart}
          className='cursor-pointer'
          alt="cart"
        />

        <img
          src={avatar}
          className='w-10 rounded-full hover:border-2 hover:border-[#ff7d1a] cursor-pointer'
          alt="avatar"
        />
      </div>
      {showCart &&
        <div className='z-[999] shadow-xl absolute top-[100%] bg-white w-[100%] sm:w-[300px] min-h-[250px] right-0'>
          <p className='p-3 font-bold'>Cart</p>
          <hr />
          {cartData.length == 0
            &&
            <div className='flex justify-center items-center min-h-[200px]'>Your cart is empty.</div>}
          {cartData.length > 0 &&
            cartData.map((item, index) => <div className='p-3 '>
              <div className='flex gap-x-2 items-center'>
                <img
                  src={item.img}
                  alt="img"
                  className='w-[50px] '
                />
                <div className=''>
                  <p>{item.title}</p>
                  <p>{`$${(item.price).toFixed(2)} X ${item.quantity}  `} <span className='font-bold'>{`$${(item.price * item.quantity).toFixed(2)}`}</span></p>
                </div>

                <img
                  src={deleteico}
                  alt="delete"
                  onClick={() => setCartData([])}
                  className='cursor-pointer'
                />

              </div>
              <button className='mt-10 bg-[#ff7d1a] w-full text-white rounded-md p-3 '>Checkout</button>
            </div>)
          }
        </div>
      }
    </header>
    <div className={`z-[999999] w-full ${showMenu?"-translate-x-[100%]": "translate-x-[0%]"} fixed top-0 left-0 right-0 min-h-screen bg-[#00000077] transition-all ease-in-out duration-300`}>
              <ul className='bg-white w-[80%] min-h-screen px-10 pt-10'>
                <li><img 
                
                src={close} 
                alt="close" 
                className='p-3 cursor-pointer'
                onClick={()=>setShowMenu((prev)=>!prev)}
                /></li>
                <li className='mt-10 p-3'>Collections</li>
                <li className='p-3'>Men</li>
                <li className='p-3'>Women</li>
                <li className='p-3'>About</li>
                <li className='p-3'>Contact</li>
              </ul>
    </div>
    </>
  )
}

export default Header
