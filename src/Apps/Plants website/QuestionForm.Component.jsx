import { useState } from "react"
export function QuestionForm() {
   const [inputValue, setInputValue] = useState('Ask your Question ?')
   const checkValue = function (value) {
      if (!value.includes('f')) {
         setInputValue(value)
      }
      else {
         console.log("You typed lettre f it won't be displayed in UI !");

      }
   }
   const isInputError=inputValue.includes('f')
   return (
      <div>
         <textarea
            value={inputValue}
            onChange={(e) => checkValue(e.target.value)}
         />
         <button onClick={()=>{alert(inputValue)}}>Alert me â¨đ</button>
         {isInputError && (
            <div>
             đĽ You are not allowed to use the letter âfâ here.  
            </div>
         )}*/
      </div>
   )
}