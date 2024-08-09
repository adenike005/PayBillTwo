import React from 'react'
import '../Styled/Main.css'
import main from '/main.png'
import easy from '/easy.png'
import cus from '/cus.png'
import Bill from '/Bill.png'

const Main = () => {
  return (
  <div className="section-main">
      <div className="main">
        <div className="section-main">
        <span>WHY PAYBILLS</span>
        <h2>Every Bills Payment you need to make 
        in One App</h2>
        </div>
        <div className="section-img">
            <img src={main}/>
        </div>
    </div>
    <div className="section-card">
      <img src={easy} alt="easy" />
      <img src={cus} alt="cus" />
      <img src={Bill} alt="Bill" />
    </div>
  </div>
  )
}

export default Main