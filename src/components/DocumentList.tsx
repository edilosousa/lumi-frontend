import React, { useEffect, useState } from 'react';

const DocumentList: React.FC = () => {
  const [pdfFiles, setPdfFiles] = useState<string[]>([]);

  useEffect(() => {
    
  }, []);

  return (
    <div>
      <h2>Lista de Documentos</h2>
      <ul>
        {pdfFiles.map((pdfFile, index) => (
          <li key={index}>{pdfFile}</li>
        ))}
      </ul>
    </div>
  );
};

export default DocumentList;
