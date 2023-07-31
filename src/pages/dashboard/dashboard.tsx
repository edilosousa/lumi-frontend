import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import Chart from 'chart.js/auto';
import { Fatura } from '../../interfaces/Fatura';


const Dashboard: React.FC = () => {
  const [faturas, setFaturas] = useState<Fatura[]>([]);
  const chartRefConsumo = useRef<HTMLCanvasElement | null>(null);
  const chartRefInjetada = useRef<HTMLCanvasElement | null>(null);
  const chartRefCompensada = useRef<HTMLCanvasElement | null>(null);
  const [chartInstanceConsumo, setChartInstanceConsumo] = useState<any>(null); // Alterado para any
  const [chartInstanceInjetada, setChartInstanceInjetada] = useState<any>(null); // Alterado para any
  const [chartInstanceCompensada, setChartInstanceCompensada] = useState<any>(null); // Alterado para any

  useEffect(() => {
    // Função para buscar os dados da API
    async function fetchData() {
      try {
        const response = await axios.get<Fatura[]>('http://localhost:3000/faturas');
        setFaturas(response.data);
      } catch (error) {
        console.error('Erro ao buscar faturas:', error);
      }
    }
    fetchData();
  }, []);

  useEffect(() => {
    // Função para criar o gráfico
    function createChart(ctx: CanvasRenderingContext2D, data: number[], label: string, unit: string) {
      return new Chart(ctx, {
        type: 'bar',
        data: {
          labels: faturas.map((fatura) => fatura.mesfatura),
          datasets: [
            {
              label: label,
              data: data,
              backgroundColor: 'rgba(54, 162, 235, 0.6)',
              borderColor: 'rgba(54, 162, 235, 1)',
              borderWidth: 1,
            },
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
              ticks: {
                callback: (value) => `${value} ${unit}`,
              },
            },
          },
        },
      });
    }

    // Criação do gráfico de consumo de energia elétrica
    if (chartRefConsumo.current && faturas.length > 0) {
      if (chartInstanceConsumo) {
        chartInstanceConsumo.destroy();
      }

      const ctxConsumo = chartRefConsumo.current.getContext('2d');
      if (ctxConsumo) {
        const consumoEnergia = faturas.map((fatura) => fatura.qtdkwhenergiaeletricafatura);
        setChartInstanceConsumo(createChart(ctxConsumo, consumoEnergia, 'Consumo de Energia Elétrica', 'kWh'));
      }
    }

    // Criação do gráfico de energia injetada
    if (chartRefInjetada.current && faturas.length > 0) {
      if (chartInstanceInjetada) {
        chartInstanceInjetada.destroy();
      }

      const ctxInjetada = chartRefInjetada.current.getContext('2d');
      if (ctxInjetada) {
        const energiaInjetada = faturas.map((fatura) => fatura.qtdkwhenergiainjetadafatura);
        setChartInstanceInjetada(createChart(ctxInjetada, energiaInjetada, 'Energia Injetada', 'kWh'));
      }
    }

    // Criação do gráfico de energia compensada
    if (chartRefCompensada.current && faturas.length > 0) {
      if (chartInstanceCompensada) {
        chartInstanceCompensada.destroy();
      }

      const ctxCompensada = chartRefCompensada.current.getContext('2d');
      if (ctxCompensada) {
        const energiaCompensada = faturas.map((fatura) => fatura.qtdkwhenergiacompensadafatura);
        setChartInstanceCompensada(createChart(ctxCompensada, energiaCompensada, 'Energia Compensada', 'kWh'));
      }
    }
  }, [faturas]);

  return (
    <div>
      <h4>Dashboard</h4>
      <hr/>
      <div className="row">
        <div className="col-md-6">
          <div className="card">
            <div className='card-header file-color'>Consumo de Energia Elétrica</div>
            <div className="card-body">
              <canvas ref={chartRefConsumo} id="graficoConsumoEnergia" width="400" height="150"></canvas>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card">
          <div className='card-header file-color'>Consumo de Energia Injetada HFP</div>
            <div className="card-body">
              <canvas ref={chartRefInjetada} id="graficoEnergiaInjetada" width="400" height="150"></canvas>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <div className="card">
          <div className='card-header file-color'>Consumo de Energia Compensada s/ ICMS</div>
            <div className="card-body">
              <canvas ref={chartRefCompensada} id="graficoEnergiaCompensada" width="400" height="100%"></canvas>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
