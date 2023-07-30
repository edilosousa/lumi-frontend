import React, { useEffect, useState} from 'react';
import axios from 'axios';
import { Fatura } from '../../interfaces/Fatura';


const HistoricoFaturas: React.FC = () => {
  const [faturas, setFaturas] = useState<Fatura[]>([]);

  useEffect(() => {
    // Fetch das faturas da rota
    axios.get('http://localhost:3000/faturas')
      .then(response => {
        setFaturas(response.data);
      })
      .catch(error => {
        console.error('Erro ao buscar as faturas:', error);
      });
  }, []);

  return (
    <div>
      <h4>Histórico de faturas</h4>
      <hr/>
      <div className="table-responsive">
           <table className="table table-bordered table-hover">
             <thead className='bg-color'>
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
                  <td>{fatura.idfatura}</td>
                  <td>{fatura.uccliente}</td>
                  <td>{fatura.mesfatura}</td>
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
    // <div className='container'>
    //   <div className='row'>
    //     <div className='col-sm-12'>
          
    //     </div>
    //   </div>
    //   <div className='row'>
    //     <div className="table-responsive">
    //       <table className="table table-bordered table-hover">
    //         <thead>
    //           <tr>
    //             <th>ID Fatura</th>
    //             <th>UC Cliente</th>
    //             <th>Mês Fatura</th>
    //             <th>Data Vencimento</th>
    //             {/* Adicione mais colunas aqui para as outras propriedades */}
    //           </tr>
    //         </thead>
    //         <tbody>
    //           {faturas.map(fatura => (
    //             <tr key={fatura.idfatura}>
    //               <td>{fatura.idfatura}</td>
    //               <td>{fatura.uccliente}</td>
    //               <td>{fatura.mesfatura}</td>
    //               <td>{fatura.datavencimentofatura}</td>
    //               {/* Renderize outras colunas aqui */}
    //             </tr>
    //           ))}
    //         </tbody>
    //       </table>
    //     </div>
    //   </div>
    // </div>
  );
};

export default HistoricoFaturas;
