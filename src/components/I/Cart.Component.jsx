import { ShoppingList } from "./ShoppingList.Component"
import { useState } from "react" 
export const Cart = function () {
  const [isOpen,setIsOpen]=useState(false)
  const [cart,setCart]=useState(0)
  const handleAdd = function () {
    setCart(cart+1)
  }
  const handleOpen = () => setIsOpen(false)
  const handleReinitialize = function(){
    setCart(0);
  }
  const monsteraPrice = 20;
  <button onClick={handleOpen}></button>
    return isOpen? (
      <div className="jh-cart">
        <button onClick={handleAdd}>
          Add 
        </button >
         <div>
          <h1>Monstera:{cart}</h1>
          <h2>Total:{monsteraPrice * cart} $</h2>
          <button onClick={handleOpen}>Close</button>
          <button onClick={handleReinitialize}>reinitialize</button>
        </div>
    </div>) :
      (
        <div>
          <button onClick={()=>setIsOpen(true)}>Open</button>
        </div>
  )}

