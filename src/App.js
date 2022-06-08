import React, { useState } from "react";
//estilos 
import './styles/mixin.scss'
//componentes
import DocuPDF from "./componentes/DocuPDF";
import { Play } from "./componentes/Play";
import { Table } from "./componentes/Table";
import { Form } from "./componentes/Form";
import { Graph } from "./componentes/Graph"; 
//crear pdf
import { PDFViewer } from "@react-pdf/renderer";
import html2canvas from "html2canvas";

function App() {

  const [date, setDate] = useState([]);
  const [saldo, setSaldo] = useState([]);

  const [init, setInit] = useState(false);
  const [edit, setEdit] = useState(true);
  const [viewPDF, setViewPDF] = useState(false);

  const [img, setImg] = useState();
  const imgGraph = document.getElementById('main')

  const pdfCreate = () => {
    html2canvas(imgGraph,{logging:false}).then((canvas)=>{
      const imgurl = canvas.toDataURL();
      setImg(imgurl);
    });
    setViewPDF(true);
  }

  return (
    <>
      {viewPDF ? 
        <div className="pdf-cont">
          <PDFViewer className="pdf">
            <DocuPDF 
              img={img}
              date={date}
              saldo={saldo}
            />
          </PDFViewer>
        </div>:
        <main className={init ? 'counting':'play'} id='main'>
          {!init &&
            <Play setInit={setInit}/>
          }
          {init & edit ?
            <>
              <Table
                date={date}
                saldo={saldo}
              />
              <Form 
                setEdit={setEdit}
                date={date}
                setDate={setDate}
                saldo={saldo}
                setSaldo={setSaldo}
              />
            </>:""
          }
          {init & !edit ?
            <Graph
              date={date}
              saldo={saldo}
            />:""
          }
        </main>
      }
      {init & !edit ?
        <button onClick={pdfCreate}>Ver PDF</button>:''
      }
    </>
  );
}

export default App;
