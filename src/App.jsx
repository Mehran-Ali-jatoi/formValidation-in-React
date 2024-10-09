import { useEffect, useState } from 'react'
import './App.css'


function App() {
  const [firstName,setFirstName] =useState('')
  const [LastName,setLastName] =useState('')
  const [password,setPassword] =useState('')
  const [Email,setEmail] =useState('')
  const [p,setp] = useState('')
  
  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
    
  };
  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };
  const handlepasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  
const submit =()=>{
  if (firstName.length<2) {
    setp("Please Enter YOur First Name  Greater than 2 Characters")
    return
  }else if(LastName.length<3){
    setp("Please Enter YOur Last Name lass Greater than 3 Characters")
    return

  }else if(password.length<5){
    setp("Please Enter Your Password strong and lass than 5 Character's")
    return
  }
  else if(Email.length<5){
    setp("Please Enter Your Currecet Email")
    return
  }
}
  return (
    <>
    <div className='main'>
      <div className="form">
    <form>
        <h1>Form Validation</h1>
        <p>{p}</p>
      <input type="text" placeholder='Enter your First Name' required  value={firstName} onChange={handleFirstNameChange}   />
      <input type="text" placeholder='Enter Your Last Name ' required value={LastName} onChange={handleLastNameChange}/>
      <input type="password" placeholder='Enter Your Password' required value={password}  onChange={handlepasswordChange}/>
 {      <input type="email" placeholder='Enter Your Email' value={Email}  required onChange={handleEmailChange}/>} 
      <button onClick={submit}>Submit</button>
    </form>
    </div>
    </div>
    
    </>
  )
}

export default App
