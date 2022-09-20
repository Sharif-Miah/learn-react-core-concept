
import './App.css';

function App() {

  const peoples = ['Abir', 'sharif', 'shahed', 'anisa', 'Din-islam', 'Ikra', 'Farhan']


  return (
    <div className="App">
      {/* <Person name="Farhan Sharif" email="farhansharif@gmail.com" />
      <Person name="Anisa Ikra" email="anisa.info@gmail.com" /> */}

      {/* {
        peoples.map(people => <li>{people}</li>)
      } */}

      {
        peoples.map(people => <Person name={people} />)
      }

    </div>
  );
}

function Person(props) {
  return (
    <div className='container'>
      <h1 >My Name is: {props.name} </h1>
    </div>
  )
}





export default App;
