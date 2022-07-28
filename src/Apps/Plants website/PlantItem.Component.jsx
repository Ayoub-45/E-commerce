import '../styles/plantItem.css'
import { CareScale } from "./I/CareScale.Component";
function handleClick(name) {
	let i=0
	return function () {
      console.log(`you Clicked  ${name}`, i)
      alert(`you want to buy ${name}? Great choice , congratulaions ! `);
		i++;		
	}
}
export function PlantItem({ name, cover, id, light, water }) {
   const click = handleClick(name);
   return (
      <li key={id} className='jh-plant-item' onClick={click}>
      <img className='jh-plant-item-cover' src={cover} alt={`${name} cover`} />
      {name}
      <div>
         <CareScale careType='water' scaleValue={water} />
         <CareScale careType='light' scaleValue={light} />
      </div>
   </li>
   )

}