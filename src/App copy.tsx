import Header from "./components/Header"
import product1 from './images/image-product-1.jpg'
const App = () => {
  return (
    <div className="">
      <Header />
      <div className="flex">
        <img
          src={product1}
          alt=""
          className="" />
      </div>
    </div>
  )
}

export default App
