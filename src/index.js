import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import MediaCard from './MediaCard';
import Room from './Room';



ReactDOM.render(
  
    <div>
      <App name="Waqar" />
      <MediaCard title="Our Services" body="We provide Web Development Services " imageURL="https://picsum.photos/200/300"/>
      <Room />
    </div>
    
  
    
 ,
 
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
