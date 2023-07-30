import React, { useRef, useState } from 'react';


const FileUploader: React.FC = () => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file && file.type === 'application/pdf') {
      setSelectedFile(file);
    } else {
      setSelectedFile(null);
    }
  };

  const handleUploadClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <div className='row mt-5'>
        <div className="col-sm-6">
            <div className="card">
                <div className="card-header bg-info">
                    <p className="text-header">Anexar fatura</p>
                </div>
                <div className="card-body">
                    <p className='card-text'>
                        Selecione uma fatura
                        para que possa extrair seus dados.
                    </p>
                
                </div>
                <div className="card-footer d-flex justify-content-between">
                    <input
                        type="file"
                        accept=".pdf"
                        ref={fileInputRef}
                        style={{ display: 'none' }}
                        onChange={handleFileChange}
                    />
                    <button className="btn btn-primary btn-sm" onClick={handleUploadClick}>
                        Selecionar Fatura
                    </button>
                    {selectedFile && ( 
                        <h6 className='mt-1'>
                            <i className="bi bi-file-pdf" style={{ marginRight: '5px' }}></i> 
                            Arquivo selecionado: {selectedFile.name} 
                        </h6>
                    )}
                </div>
            </div>
           
        </div>
        <div className="col-sm-6">
            <div className="card">
                <div className="card-header bg-info">
                    <p className="text-header">Dados da fatura</p>
                </div>
                <div className="card-body" id="dados-fatura">
                
                </div>
                <div className="card-footer">
                <button className="btn btn-primary btn-sm btn-success" onClick={handleUploadClick}>
                    Lançar fatura
                </button>
                </div>
            </div>
        </div>
    </div>
  );
};

export default FileUploader;
