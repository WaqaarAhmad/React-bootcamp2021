
import './App.css';
import Users from './Users';



function App({name,age}) {
  return (
    <div className="App">
      <h1>Hello {name}</h1>
      <span>His Age is {age}</span>
      <br />
      
      <Users name="Umer" age={9}  />
        
    </div>
  );
}

export default App;
