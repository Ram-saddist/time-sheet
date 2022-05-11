import {useState,useEffect} from 'react'
import {db} from './firebaseConfig'

function TimeSheet(){
	const [timeSheetValue,setTimeSheetValue]=useState([])
	 useEffect(()=>{
		retrieve()
	},[])
	async function retrieve(){
		const dataRef=db.collection('time').orderBy("date", "asc");
		const snapShot=await dataRef.get();
		console.log("dataref",snapShot)
		setTimeSheetValue(snapShot.docs.map((doc)=>(
			{date:doc.data().date.toDate().toDateString(),hour:doc.data().hour,id:doc.id}
		)))
	}
	return(
		<div>
			{console.log("timesheet value",timeSheetValue)}
			<h1>Record</h1>
			{
				timeSheetValue.map((doc)=>(
					<div className="main-timesheet" key={doc.id}>
						<p>Time:{doc.date}</p>
						<p>Hours:{doc.hour}</p>
					</div>	
				))
			}
		</div>
	)
}
export default TimeSheet