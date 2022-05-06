import {useState,useEffect} from 'react'
import {db} from './firebaseConfig'
import {collection, addDoc} from 'firebase/firestore'

function Hours(){
	const [newHour,setHour]=useState(0);
	const [newDate,setDate]=useState("");
	var [hoursCollectionRef]=db.collection('time')//collection(db,"time")
	//date and day function
	useEffect(()=>{
		var monthNames = ["January", "February", "March", "April", "May", "June",
 			 "July", "August", "September", "October", "November", "December"
			];
		var d = new Date();
		var month=monthNames[d.getMonth()];
		var completeDate=month+" "+d.getDate();
		setDate(completeDate)
	})
	const createHour=async()=>{
		await addDoc(hoursCollectionRef,{hour:newHour,date:newDate})
	}
	//data sending to function
	function handleClick(){		
		console.log("time",newHour,newDate)
		setHour(0)
	}
	return(
		<div>
		<input 
			type="text" 
			placeholder="How many hours" 
			value={newHour}
			onChange={(e)=>setHour(e.target.value)}/>
		<button onClick={handleClick}>Submit</button>
		</div>
	)
}
export default Hours