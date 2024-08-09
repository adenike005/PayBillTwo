import React from 'react';
import '../Styled/Main.css';
import main from '/main.png';
import easy from '/easy.png';
import cus from '/cus.png';
import Bill from '/Bill.png';

const Main = () => {
  return (
    <div className="section-main">
      <div className="main-content">
        <div className="text-content">
          <span>WHY PAYBILLS</span>
          <h2>
            Every Bills Payment you need to make 
            in One App
          </h2>
        </div>
        <div className="main-image">
          <img src={main} alt="Main" />
        </div>
      </div>
      <div className="card-grid">
        <div className="card">
          <img src={easy} alt="Easy" />
        
        </div>
        <div className="card">
          <img src={cus} alt="Customer Support" />
        
        </div>
        <div className="card">
          <img src={Bill} alt="Bill Payment" />
          
        </div>
      </div>
      
    </div>
  );
}

export default Main;
