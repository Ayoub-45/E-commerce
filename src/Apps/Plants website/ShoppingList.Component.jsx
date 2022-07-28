import React from "react"
import { PlantItem } from "./PlantItem.Component"
import { plantList } from "./data"
function handleClick() {
	let i=0
	return function () {
		console.log("you Clicked me ", i)
		i++;
		
	}
}
export function ShoppingList() {
   const categories = plantList.reduce(
		(acc, plant) =>
			acc.includes(plant.category) ? acc : acc.concat(plant.category),
		[]
	)
	return (
		<div>
			<ul>
				{categories.map((cat) => {
					const click=handleClick()
					return(
						<li key={cat} onClick={click}>{cat}</li>
						
					)
				}
				)}
			</ul>
			<ul className='jh-plant-list'>
				{plantList.map(({ id, cover, name, water, light },i) => (
					<PlantItem
						key={i}
						id={id}
						cover={cover}
						name={name}
						water={water}
						light={light}
					/>
				))}
			</ul>
		</div>
	)
}