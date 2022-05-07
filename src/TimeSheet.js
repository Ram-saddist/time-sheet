import {useState,useEffect} from 'react'
import {db} from './firebaseConfig'
import {collection, addDoc} from 'firebase/firestore'

function TimeSheet(){
	const [timeSheetValue,setTimeSheetValue]=useState([])
	 useEffect(()=>{
		retrieve()
	},[])
	 function retrieve(){
	 	const dataRef=db.collection('time');
		const snapShot= dataRef.get();
		console.log(snapShot.json())
		console.log(snapShot)
		//setTimeSheetValue(snapShot)
	 }
	return(
		<div>
			<h1>Record</h1>
		</div>
	)
}
export default TimeSheet