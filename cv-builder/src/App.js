import CVInput from "./components/CVInput";
import CVOutput from "./components/CVOutput";
import Header from "./components/Header";
import Instructions from "./components/Instructions";
import './index.css'
import { useState } from "react";

function App() {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  return (
    <div className="App">
      <Header />
      <Instructions />
      <div className="templates">
        <CVInput 
        firstName={firstName} 
        setFirstName={setFirstName}
        lastName={lastName} 
        setLastName={setLastName}
        email={email} 
        setEmail={setEmail}
        phoneNumber={phoneNumber} 
        setPhoneNumber={setPhoneNumber}
        />
        <CVOutput 
        firstName={firstName} 
        setFirstName={setFirstName}
        lastName={lastName} 
        setLastName={setLastName}
        email={email} 
        setEmail={setEmail}
        phoneNumber={phoneNumber} 
        setPhoneNumber={setPhoneNumber}
        />
      </div>
    </div>
  );
}

export default App;
