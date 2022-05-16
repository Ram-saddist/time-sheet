import {useState} from 'react'
import {db} from './firebaseConfig'
import firebase from 'firebase/compat/app';

function Hours(){
	const [newHour,setHour]=useState(0);
	//data sending to function
	async function handleClick(){
		let newDate=(firebase.firestore.Timestamp.now())
		const res=await db.collection("time").add({
			date:newDate,
			hour:newHour
		})
		console.log(res.id)
		setHour(0)
	}
	return(
		<div className="main-hour">
		<p className="placeholder">Enter Hours</p>
		<input
			className="input-hour"
			type="text" 
			placeholder="How many hours" 
			value={newHour}
			onChange={(e)=>setHour(e.target.value)}/><br/><br/>
		<button className="btn-hour" onClick={handleClick}>Submit</button>
		</div>
	)
}
export default Hours