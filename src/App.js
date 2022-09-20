
import './App.css';

function App() {
  return (
    <div className="App">
      <Person name="Farhan Sharif" email="farhansharif@gmail.com" />
      <Person name="Anisa Ikra" email="anisa.info@gmail.com" />
    </div>
  );
}

function Person(props) {

  return (
    <div>
      <h1>My Name is {props.name} </h1>
      <p>Email: {props.email}</p>
    </div>
  )
}

export default App;
