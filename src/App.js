import React,{useState} from 'react';

function App(){
  
  let [num,setNum]=useState(0);

  const inc=()=>{
    num++;
    setNum(num);
  }
  
  const dec=()=>{
  num--;
  if(num<=-1){
    alert("you have reached zero");
    setNum(0);
  }
  else{
  setNum(num);
  }
}

  
  return(
<>
<div className="main">
  <h1>{num}</h1>
  <br/><br/>
  <button className="incbutton" onClick={inc}>Increment</button>
  <button className="decbutton" onClick={dec}>Decrement</button>

</div>
</>
  );
}

export default App;