import React, { ChangeEvent, useState } from 'react';
import axios from 'axios';
import { PDFFile } from '../interfaces/PDFFile';
import Swal from 'sweetalert2';

interface UploadFaturasProps {
  onUploadSuccess: () => void;
}
 
const UploadFaturas: React.FC<UploadFaturasProps> = ({ onUploadSuccess }) => {
    const [selectedFiles, setSelectedFiles] = useState<PDFFile[]>([]);
  
    const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
      if (event.target.files) {
        const filesArray: PDFFile[] = Array.from(event.target.files).map((file) => ({
          file,
          name: file.name,
        }));
        setSelectedFiles(filesArray);
      }
    };

    const listaSemPontos = {
        listStyle: 'none',
        padding: 0,
        margin: 0,
      };
  
    const handleUpload = () => {
      const formData = new FormData();
      selectedFiles.forEach((pdfFile) => {
        formData.append('pdfFiles', pdfFile.file);
      });
  
      axios.post('http://localhost:3000/faturas/upload', formData)
        .then((response) => {
          console.log(response.data);
          if (response.data.message === 'Success') {
            Swal.fire('Success!', 'File uploaded successfully!', 'success');
            onUploadSuccess();
          }
        })
        .catch((error) => {
          console.error(error);
        });
    };

    const isButtonDisabled = selectedFiles.length === 0;
  
    return (
      <div>
        <div className="row">
          <div className="col-sm-6">
            <div className="card custom-card">
                <div className='card-header file-color'></div>
                <div className="card-body">
                    <div className='row'>
                        <div className='col-sm-6'>
                            <input type="file" className="form-control" multiple onChange={handleFileChange} accept=".pdf" />
                        </div>
                      <div className='col-sm-6'>
                            <button type="button" className="btn btn-primary btn-sm" onClick={handleUpload} disabled={isButtonDisabled}>Enviar Faturas</button>
                      </div>
                    </div>
                </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="card custom-card">
              <div className='card-header file-color'></div>
              <div className="card-body h-fatura">
                  <div className='row'>
                      <div className='col-sm-12'>
                          <h6>Faturas Selecionadas:</h6>
                              <ul style={listaSemPontos}>
                                  {selectedFiles.map((pdfFile) => (
                                  <li key={pdfFile.name}>
                                      <i className="bi bi-file-earmark-text"></i>{pdfFile.name}
                                  </li>
                                  ))}
                              </ul>
                      </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};
  
  export default UploadFaturas;
  