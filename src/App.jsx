import React ,{useEffect}from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { btnTop, scrollTop } from './pagges/events';
import { RRoute } from './Route';



export default function App() {
  btnTop()
  return (
    <div className="main-container">
      <BrowserRouter>
        <Routes>
          {
            RRoute.map((Item, index) => <Route key={index} exact path={`/${Item.path}`} Component={Item.elem} />)
          }
        </Routes>
      </BrowserRouter>
      <button onClick={scrollTop} className='scrollTop'>Scroll Top</button>
    </div>
  )
}
