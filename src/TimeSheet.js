import {useState,useEffect} from 'react'
import {db} from './firebaseConfig'

function TimeSheet(){
	const [timeSheetValue,setTimeSheetValue]=useState([])
	const [totalTime,setTotalTime]=useState(0)
	 useEffect(()=>{
		retrieve()
	},[])
	async function retrieve(){
		const dataRef=db.collection('time').orderBy("date", "asc");
		const snapShot=await dataRef.get();
		setTimeSheetValue(snapShot.docs.map((doc)=>(
			{
				date:doc.data().date.toDate().toDateString(),
				hour:Number(doc.data().hour)
			}
		)))
	}
	function handleTotalTime(){
		var c=0
		 timeSheetValue.map((doc)=>(
			c+=doc.hour
		))
		setTotalTime(c)
	}
	return(
		<div>
			
			<div className="total-time-main">
				<p className="total-time">Total Time: {totalTime} hrs</p>
				<button className="btn-total-time" onClick={handleTotalTime}>Click to get total Time</button>
			</div>
			{
				timeSheetValue.map((doc)=>(
					<div className="main-timesheet" key={doc.id}>
						<p>Time:{doc.date}</p>
						<p><b>Hours:{doc.hour}</b></p>
					</div>
				))
			}
		</div>
	)
}
export default TimeSheet