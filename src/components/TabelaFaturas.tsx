import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Fatura {
  idfatura: number;
  mesfatura: string;
}

const TabelaFaturas: React.FC = () => {
  const [faturas, setFaturas] = useState<Fatura[]>([]);

  useEffect(() => {
    async function fetchFaturas() {
      try {
        const response = await axios.get('http://localhost:3000/faturas');
        setFaturas(response.data);
      } catch (error) {
        console.error('Error fetching faturas:', error);
      }
    }

    fetchFaturas();
  }, []);

  return (
    <table className="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Mes Fatura</th>
        </tr>
      </thead>
      <tbody>
        {faturas.map((fatura) => (
          <tr key={fatura.idfatura}>
            <td>{fatura.idfatura}</td>
            <td>{fatura.mesfatura}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TabelaFaturas;
