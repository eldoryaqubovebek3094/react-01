import React, { useState } from 'react';
import './App.css';
import redmi9t from './redmi9t-r.png';
import StripeContainer from './StripeContainer';

function App() {
  const [showItem, setShowItem] = useState(false);

  return (
    <div className='App'>
      <>
        <h1 className='shopName'>Stripe To'lov</h1>
        {showItem ? (
          <StripeContainer />
        ) : (
          <>
            <div className='infoTovar'>
              <h3 className='tovarName'>Redmi 9T 64 GB</h3>
              <h3 className='tovarPrice'> Narxi 180$</h3>
              <img src={redmi9t} className='phoneImg' alt='telefon' />
              <button className='tovarButton' onClick={() => setShowItem(true)}>
  <div class="default-btn">
    <svg class="css-i6dzq1" stroke-linejoin="round" stroke-linecap="round" fill="none" stroke-width="2" stroke="#FFF" height="20" width="20" viewBox="0 0 24 24"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle r="3" cy="12" cx="12"></circle></svg>
    <span> Tez ko'rish </span>
  </div>
  <div class="hover-btn">
    <svg class="css-i6dzq1" stroke-linejoin="round" stroke-linecap="round" fill="none" stroke-width="2" stroke="#ffd300" height="20" width="20" viewBox="0 0 24 24"><circle r="1" cy="21" cx="9"></circle><circle r="1" cy="21" cx="20"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
    <span>Savatga qo'shish</span>
  </div>
</button>
              
            </div>
            
          </>
        )}
      </>
    </div>
  );
}

export default App;
