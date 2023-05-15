import CVInput from "./components/CVInput";
import CVOutput from "./components/CVOutput";
import Header from "./components/Header";
import Instructions from "./components/Instructions";
import PrintCV from "./components/PrintCV";
import './index.css'
import { useState, useRef } from "react";
import ReactToPrint from "react-to-print";


function App() {

  let componentRef = useRef();

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

  function exportPDF() {
    const content = document.querySelector('.output')

    //html2pdf(content);

    /*
    html2canvas(content, {options: { dpi: 300, letterRendering: true, width: 1080, height: 1920}}).then(canvas => {
      const imgData = canvas.toDataURL('image/png')

      const doc = new jsPDF({
        orientation: 'p',
        unit: 'pt', 
        format: [canvas.width, canvas.height] 
  });

      doc.addImage(imgData, 'PNG', 0, 0, canvas.width, canvas.height);
      doc.save('testCV');
    })*/
  }

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
      <div style={{ display: "none" }}>
        <PrintCV 
        ref={componentRef}
        firstName={firstName} 
        lastName={lastName} 
        email={email} 
        phoneNumber={phoneNumber} 
        companies={companies}
        schools={schools} />
      </div>
      <div className='submit-btn-container'>
        <ReactToPrint 
          pageStyle='.exp { break-after: auto; }'
          trigger={() => <button>Save as PDF</button>}
          content={() => componentRef.current}
        />
      </div>
    </div>
  );
}

export default App;
