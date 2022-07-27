import React from 'react'
export function Recommandation() {
   const month = new Date().getMonth()
   const text = month >= 2 && month <= 4 ? "Time to repot" : "It is not time to repot"
   return (
      <div style={{
         color: 'green'
      }}>
         <h2>
            {text}
         </h2>
      </div>
   )
}