import { _alignStartEnd } from 'chart.js/helpers'
import React from 'react'

export default function ReportTable({ 
  title = '车间本日出勤',
  input_data = [['装配一',100,100],['装配二',100,100],['装配三',100,100]]
}) {

  const data = []
  
  for (let i = 0; i < input_data.length; i++) {
    data.push({
      workshop: input_data[i][0],
      members: input_data[i][1] || 0,
      actual: input_data[i][2] || 0,
    })
  }

  return (
    <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-gray-800 flex items-center">
          <i className="fa fa-user text-primary mr-2"></i>
          {title}
        </h2>
      </div>
      <div className="overflow-x-auto overflow-y-auto h-[22rem] scrollbar-hide">
        <table className="min-w-full divide-y divide-gray-200 align-middle">
          <thead className="bg-gray-50/60">
            <tr>
            <th scope="col" className="px-6 py-3 text-left text-m font-medium text-gray-500 uppercase tracking-wider">部门</th>
            <th scope="col" className="px-6 py-3 text-base text-m font-medium text-gray-500 uppercase tracking-wider">应到人数</th>
            <th scope="col" className="px-6 py-3 text-base text-m font-medium text-gray-500 uppercase tracking-wider">实到人数</th>
            <th scope="col" className="px-6 py-3 text-left text-m font-medium text-gray-500 uppercase tracking-wider">出勤率</th>
            </tr>
          </thead>
          <tbody className="bg-white/30 divide-y divide-gray-200">
            {data.map((item, index) => (
              <tr key={index} className={`hover:bg-gray-50 transition-colors bg-gray-100`}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-500 text-base">{item.workshop}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">{item.members}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">{item.actual}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-base">
                  <div className="flex items-center space-x-2">
                    <div className="relative w-12 h-4 bg-gray-100 rounded-full overflow-hidden border border-gray-300">
                      <div 
                        className={`absolute top-0 left-0 h-full rounded-full ${(item.actual / item.members) * 100 >= 90 ? 'bg-green-500' : 'bg-yellow-500'} shadow-sm`}
                        style={{ width: `${Math.min(100, (item.actual / item.members) * 100)}%` }}
                      />
                    </div>
                    <span className={`text-xs font-medium ${(item.actual / item.members) * 100 >= 90 ? 'text-green-600' : 'text-yellow-600'}`}>
                      {(item.actual / item.members).toFixed(2) * 100}%
                    </span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}