import React, { useEffect, useRef } from 'react'
import { Chart } from 'chart.js/auto'

export default function HumanResourceChart({ 
  labelData = ['车间1', '车间2', '车间3','车间4', '车间5', '车间6','车间7', '车间8', '车间9','车间10', '车间11', '车间12','车间13', '车间14', '车间15','车间16', '车间17', '车间18','车间19', '车间20', '车间21','车间22', '车间23', '车间24','车间25', '车间26', '车间27','车间28', '车间29', '车间30','车间31', '车间32', '车间33','车间34', '车间35', '车间36','车间37', '车间38'],
  humanData = [200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200] 
}) {
  const chartRef = useRef(null)

  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext('2d')
      
      // Destroy existing chart if it exists
      if (chartRef.current.chart) {
        chartRef.current.chart.destroy();
      }
      
      const chart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: labelData,
          datasets: [
            {
              label: '在职人数',
              data: humanData,
              backgroundColor: 'rgba(201, 202, 202, 0.7)',
              borderColor: 'rgb(95, 93, 93, 0)',
              borderWidth: 2,
              borderRadius: 4,
              categoryPercentage: 0.6,
              barPercentage: 0.7,
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            y: {
              min: 0,
              //min: 8000,
              suggestedMax: Math.max(...humanData, 0) + 20, // 修复math拼写错误并确保正确处理空数组
              grid: {
                display: false
              }
            },
            x: {
              grid: {
                display: false
              }
            }
          },
        },
        plugins: [{
          afterDraw: function(chart) {
            const ctx = chart.ctx;
            const meta = chart.getDatasetMeta(0);
            
            // 只显示humandata数据
            for (let i = 0; i < humanData.length; i++) {
              const x = meta.data[i].x;
              const y = meta.data[i].y;
              const ratio = humanData[i];
              
              ctx.font = 'bold 12px Arial';
              ctx.fillStyle = 'rgb(0, 0, 0)';
              ctx.fillText(`${ratio}`, x - 10, y - 5);
            }
          }
        }]
      });
      
      // Store chart instance on ref for cleanup
      chartRef.current.chart = chart;

      return () => {
        if (chartRef.current?.chart) {
          chartRef.current.chart.destroy();
          chartRef.current.chart = null;
        }
      };
    }
  }, [labelData, humanData])

  return (
    <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-gray-800 flex items-center">
          <i className="fa fa-bar-chart text-secondary mr-2"></i>
          各车间及部门在职人数
        </h2>
      </div>
      <div className="h-80">
        <canvas ref={chartRef}></canvas>
      </div>
    </div>
  )
}
