
import './App.css';

function Users({name,age}) {
  return (
    <div className="Users">
      <h1>username: {name}</h1>
      <span>user age: {age}</span>
      
    </div>
  );
}

export default Users;
