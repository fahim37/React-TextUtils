import './App.css';
import React , {useState} from 'react';
import Navbar from './componrnt/Navbar';
import TextArea from './componrnt/TextArea';
import Alert from './componrnt/Alert';
function App() {
  const [mode, setMode] = useState('light')
  const toggleMode = ()=>{
    if (mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = '#172830';
      document.body.style.color = 'white';
    }else{
      setMode('light')
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
    }
  }
  const [alert, setAlert] = useState(null)
  const displayAlert = (message, type)=>{
    setAlert({
      message: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }
  return (
    <>
    <Navbar title='Textutils' mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <TextArea heading = "Enter your text below" mode={mode} displayAlert={displayAlert}/>
    </>
  );
}

export default App;
