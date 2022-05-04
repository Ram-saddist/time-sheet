import {useState,useEffect} from 'react'

function Hours(){
	const [hour,setHour]=useState("");
	function handleClick(){
		console.log("time",hour)
		setHour('')
	}
	return(
		<div>
		<input 
			type="text" 
			placeholder="How many hours" 
			value={hour}
			onChange={(e)=>setHour(e.target.value)}/>
		<button onClick={handleClick}>Submit</button>
		</div>
	)
}
export default Hours