import React, { useEffect, useState} from 'react';
import axios from 'axios';
import { Fatura } from '../../interfaces/Fatura';
import UploadFaturas from '../../components/UploadFaturas';


const HistoricoFaturas: React.FC = () => {
  const [faturas, setFaturas] = useState<Fatura[]>([]);

  useEffect(() => {
    // Fetch das faturas da rota
    axios.get('https://api-backend-lumi.cyclic.app/faturas')
      .then(response => {
        setFaturas(response.data);
      })
      .catch(error => {
        console.error('Erro ao buscar as faturas:', error);
      });
  }, []);

  // Callback function to be passed to UploadFaturas
  const handleUploadSuccess = () => {
    // Fetch updated data after successful upload
    axios
      .get('https://api-backend-lumi.cyclic.app/faturas')
      .then((response) => {
        setFaturas(response.data);
      })
      .catch((error) => {
        console.error('Erro ao buscar as faturas:', error);
      });
  };

  return (
    <div>
      <h4>Histórico de faturas</h4>
      <hr/>
      <div className='row'>
        <div className='col-sm-12'>
          <UploadFaturas onUploadSuccess={handleUploadSuccess}/>
        </div>
      </div>
        <div className="table-responsive mt-5">
          <table className="table table-hover table-w">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>UC Cliente</th>
                  <th>Mês Fatura</th>
                  <th>Data Vencimento</th>
                  <th>Preço Energia Elétrica</th>
                  <th>QTD KWH En. Elétrica</th>
                  <th>Valor En. Elétrica</th>
                  <th>Preço Energia HFP</th>
                  <th>QTD KWH En. HFP</th>
                  <th>Valor En. HFP</th>
                  <th>Preço En. Compe.</th>
                  <th>QTD KWH En. Compe.</th>
                  <th>Valor En. Compe.</th>
                  <th>Valor En. Publica</th>
                  <th>Total Fatura</th>
              </tr>
            </thead>
            <tbody>
              {faturas.map(fatura => (
                <tr key={fatura.idfatura}>
                  <td className='ucColor'>{fatura.idfatura}</td>
                  <td className='ucColor'>{fatura.uccliente}</td>
                  <td className='ucColor'>{fatura.mesfatura}</td>
                  <td>{fatura.datavencimentofatura}</td>
                  <td>{fatura.precoenergiaeletricafaturaFormatado}</td>
                  <td>{fatura.qtdkwhenergiaeletricafatura}</td>
                  <td>{fatura.valorenergiaeletricafaturaFormatado}</td>
                  <td>{fatura.precoenergiainjetadafaturaFormatado}</td>
                  <td>{fatura.qtdkwhenergiainjetadafatura}</td>
                  <td>{fatura.valorenergiainjetadafaturaFormatado}</td>
                  <td>{fatura.precoenergiacompensadafaturaFormatado}</td>
                  <td>{fatura.qtdkwhenergiacompensadafatura}</td>
                  <td>{fatura.valorenergiacompensadafaturaFormatado}</td>
                  <td>{fatura.valoriluminacaopublicafaturaFormatado}</td>
                  <td>{fatura.valortotalfaturaFormatado}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
    </div>
  );
};

export default HistoricoFaturas;
