export function CareScale({ scaleValue, careType }) {
   const quantityLabel = {
      1: 'little',
      2: 'moderate',
      3: 'much'
   }
   const range = [1, 2, 3]
   const scaleType=(careType==='light')?'☀️' : '💧'
   return (
      <div onClick={() => {
         alert(`This plant requires ${quantityLabel[scaleValue]
            } ${careType === 'water' ? 'watering' : 'light'}`);
      }}>
         {
            range.map(rangeElement => rangeElement >= scaleValue ? <span key={`${rangeElement.toString()}`}>{scaleType}</span>:null)
         }
      </div>
   )
      }