import './styles/main.css'
import { Cart } from './components/I/Cart.Component'
import { Description } from './components/Description.Component'
import { Header } from './components/Header.Component'
import { ShoppingList } from './components/I/ShoppingList.Component'
import Footer from './components/I/Footer.Component'

export const Banner = function () {
   return (
      <div>
         <Header />
         <Description/>
         <Cart />
         <ShoppingList/>
         <Footer/>
      </div>
   )
}