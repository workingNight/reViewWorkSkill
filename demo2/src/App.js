import './App.css';

function Welcome(props) {
  return <h2>hello , {props.name}</h2>
}

function App() {
  return (
    <div>
      <h1>hello , react</h1>


      <Welcome name="bob"></Welcome>
      <Welcome name="jack"></Welcome>
      <Welcome name="pdd"></Welcome>
    </div>
  )
}

export default App;
