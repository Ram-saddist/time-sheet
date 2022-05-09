import {useState,useEffect} from 'react'
import {db} from './firebaseConfig'
import {collection, getDocs} from 'firebase/firestore'

function TimeSheet(){
	const [timeSheetValue,setTimeSheetValue]=useState([])
	 useEffect(()=>{
		retrieve()
	},[])
	async function retrieve(){
		 	/*const dataRef=db.collection('time');
			const snapShot=await dataRef.get();
			setTimeSheetValue(snapShot)
			console.log("timesheet",timeSheetValue)*/
			const snapShot=await getDocs(collection(db,'time'));
			setTimeSheetValue(snapShot.docs.map((doc)=>(
				{...doc.data(),id:doc.id}
			)))
		 }
	return(
		<div>
			{console.log("timesheet value",timeSheetValue)}
			<h1>Record</h1>
			{
				timeSheetValue.map((doc)=>(
					<div className="main" key={doc.id}>
						<p>Hours:{doc.hour}</p>
						<p>Time:{doc.date}</p>
					</div>	
				))
			}
		</div>
	)
}
export default TimeSheet