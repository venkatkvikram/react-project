import './App.css';
// import './components/Greet';
import React, { useState } from "react";
import './components/stylesheet.css'
import Name from './components/Name'
// import Textfield from './components/Textfield';
function App() {
  const [cName,setcName] = useState("heading1");
  const [show,setShow] = useState("hidden");
  const [ph,setph] = useState("Type '/' for commands")
  const [val, setVal] = useState();

  function heading1() 
  {
    setcName ("heading1");
    setph("Heading 1");
    reset();
  }
  function heading2() 
  {
    setcName("heading2");
    setph("Heading2");
    reset();
  }
  function italic()
  {
    setcName("italic");
    setph("Italic");
    reset();
  }
  function regular()
  {
    setcName("regular");
    setph("regulartext");
    reset();
  }

  function hide()
  {
    setShow("hidden");
  }
  
  function change(val)
  {
    if( val.target.value === "/")
    {
      setShow("show");
    }
    else
    {
      hide();
    }
    setVal(val.target.value);
  }

  function reset()
  {
    setVal('');
    hide();
  }


  return (
    <div className="App">
      <Name/>
      <input className={cName} type="text" onChange={change} placeholder={ph} value = {val}/>

      <div className={"options " + show}>
        <div className="option-item" onClick = {heading1}> 
          <div class="icon"> H1</div>
          <div className='option-body'>
            <div className='title'>Heading 1 </div>
            <div class="sbtitle1"> Big section Heading</div>
          </div>
        </div>
        <div className="option-item" onClick = {heading2}>
           <div class="icon"> H2</div>
           <div className='option-body'>
            <div className='title'>Heading 2 </div>
            <div class="sbtitle2"> Medium section Heading</div>
           </div>
          </div>
        <div className="option-item" onClick = {italic}>
          <div class="icon"> Italic</div>
          <div className='option-body '>
            <div className='title'>Italic</div>
            <div class="sbtitle3"> Italic Text</div>
          </div>
        </div>
        <div className="option-item" onClick = {regular}>
          <div class="icon"> Text</div>
          <div className='option-body'>
            <div className='title'>Regular text </div>
            <div class="sbtitle4"> Regular text for paragraph </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
