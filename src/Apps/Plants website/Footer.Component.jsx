import { useState } from 'react'
import '../styles/footer.css'
function Footer() {
	const [inputValue, setInputValue] = useState('Enter your address mail')
   const handleMail = function (e) {
      setInputValue(e.target. value)
   }
   const handleBlur = function (e) {
      if (!e.target.value.includes("@"))
         alert("Error: no @ has been entered. This is not a valid email address.")
   }
	return (
		<footer className='jh-footer'>
			<div className='jh-footer-elem'>
			For plant enthusiasts 🌿🌱🌵
			</div>
         <div className='jh-footer-elem'>Subscribe to our newsletter :</div>
         <form action="Requesting data from the user">
         <label htmlFor="Email">Email</label>
            <input type="text"
               placeholder="Enter your mail"
               value={inputValue}
               onChange={handleMail}
               onBlur={handleBlur}
            />
         </form>
		</footer>
	)
}

export default Footer