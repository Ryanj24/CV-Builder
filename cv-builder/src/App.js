import CVInput from "./components/CVInput";
import CVOutput from "./components/CVOutput";
import Header from "./components/Header";
import Instructions from "./components/Instructions";
import './index.css'
import { useState } from "react";
import PDFFile from "./components/PDFFile";
import { PDFDownloadLink} from "@react-pdf/renderer";

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

  const [school, setSchool] = useState({
    id: '',
    name: '',
    studyTitle: '',
    location: '',
    start: '',
    end: '',
    achievements: []
  })

  const [schools, setSchools] = useState([]);

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
        schools={schools}
        setSchools={setSchools}
        school={school}
        setSchool={setSchool}
        />
        <CVOutput 
        firstName={firstName} 
        lastName={lastName} 
        email={email} 
        phoneNumber={phoneNumber} 
        companies={companies}
        schools={schools}
        />
      </div>
      <div className='submit-btn-container'>
      <PDFDownloadLink document={<PDFFile />} fileName='testCV'>
        {({loading}) => (loading ? <button>Generate PDF</button>:<button>Generate PDF</button>)}
      </PDFDownloadLink>
      </div>
    </div>
  );
}

export default App;
