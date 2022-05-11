import {BrowserRouter,Routes,Route} from 'react-router-dom'

import './App.css'
import Hours from './Hours'
import NotFound from './NotFound'
import TimeSheet from './TimeSheet'
import Header from './Header'

function App() {
  return (
     <BrowserRouter>
      <Header/>
      <Routes>
        <Route exact path="/" element={<Hours/>}/>
        <Route path="/timesheet" element={<TimeSheet/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
