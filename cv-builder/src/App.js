import CVInput from "./components/CVInput";
import CVOutput from "./components/CVOutput";
import Header from "./components/Header";
import Instructions from "./components/Instructions";
import './index.css'
import { useState } from "react";
import uniqid from 'uniqid'

function App() {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const [company, setCompany] = useState({
    id: '',
    name: '',
    position: '',
    location: '',
    start: '',
    end: '',
    tasks: []
  })
  const [companies, setCompanies] = useState([]);

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
        companies={companies}
        setCompanies={setCompanies}
        company={company}
        setCompany={setCompany}
        />
        <CVOutput 
        firstName={firstName} 
        lastName={lastName} 
        email={email} 
        phoneNumber={phoneNumber} 
        companies={companies}
        />
      </div>
    </div>
  );
}

export default App;
