import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Box from './components/Box';

function App() {
  const [form,setForm]= useState("");
  const [boxen,setBoxen] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let box= {
      color: form
    }
    setBoxen(oldboxen => [...oldboxen,box]);
    setForm("");
  }

  return (
    <div className="App">
      <form className="col-5 mx-auto" onSubmit={(e) => handleSubmit(e)} >
        <div className="form-group">
          <label>Color</label>
          <input className="form-control" type="text" value={form} onChange={(e) => setForm(e.target.value)}/><br/>
        </div>
        <input type="submit" value="Add box" className="btn btn-primary btn-outline-dark"></input>
      </form>
      <div className="row justify-content-around">
        {
        boxen.map((box,idx) => {
          return <Box color={box.color} key={idx}/>
        })
        }
      </div>


    </div>
  );
}

export default App;
