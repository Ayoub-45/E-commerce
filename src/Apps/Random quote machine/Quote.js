import React from "react"
import './style.css'
export class Quote extends React.Component{
   index=1
   constructor(props) {
      super(props)
      this.state = {
         author: " Dalai Lama",
         p: "The purpose of our lives is to be happy.",
         quotes: [ "Life is what happens when you're busy making other plans.","We must believe that we are gifted for something, and that this thing, at whatever cost, must be attained.","Get busy living or get busy dying.","You only live once, but if you do it right, once is enough.","Many of life’s failures are people who did not realize how close they were to success when they gave up.","If you want to live a happy life, tie it to a goal, not to people or things.","Never let the fear of striking out keep you from playing the game.","Money and success don’t change people; they merely amplify what is already there.","our time is limited, so don’t waste it living someone else’s life. Don’t be trapped by dogma – which is living with the results of other people’s thinking.","Not how long, but how well you have lived is the main thing."],
         authors:[,"John Lennon","Marie Curie","Stephen King","Mae West","Thomas A. Edison"," Albert Einstein","Babe Ruth","Will Smith","Steve Jobs"," Seneca"]
      }
      this.handleClick=this.handleClick.bind(this)
   }
   handleClick() {
         this.setState({
            p: this.state.quotes[this.index],
            author:this.state.authors[this.index]
         })

      this.index++;
      if (this.index === this.state.quotes.length) 
      this.index=1

      }
         
   render() {
      const random = function () {  
         const r = Math.floor(Math.random() * 255)
         const g = Math.floor(Math.random() * 255)
         const b = Math.floor(Math.random() * 255)
         return `rgb(${r},${g},${b})`;
      
      }
      const randomColor=random()
      return (
         <div style={{background:randomColor}} className="container">
            <div id="quote-box"style={{background:'white'}}>
               <p id="text"style={{color:`${randomColor}`}} >{this.state.p}</p>
               <p id="author" style={{color:`${randomColor}`}}>-{ this.state.author}</p>
         </div>
           <button onClick={this.handleClick} > new quote</button></div>
        
      )
   }
}