import React from 'react';
import StatsCards from './StatsCards';
import HumanResourceChart from './HumanResourceChart';
import TableChart from './TableChart.jsx';

export default function ChartsSection() {
  return (
    <div className="grid grid-cols-1 gap-6">
      <StatsCards
      sums = {100}
      monthenter = {100}
      monthquit = {100}
      male = {100}
      female = {100}
      />

      <HumanResourceChart 
      labelData = {['车间1', '车间2', '车间3','车间4', '车间5', '车间6','车间7', '车间8', '车间9','车间10', '车间11', '车间12','车间13', '车间14', '车间15','车间16', '车间17', '车间18','车间19', '车间20', '车间21','车间22', '车间23', '车间24','车间25', '车间26', '车间27','车间28', '车间29', '车间30','车间31', '车间32', '车间33','车间34', '车间35', '车间36']}
      humanData = {[
        85, 72, 90, 88, 65, 95, 82, 68, 92, 87, 70, 98, 
        83, 75, 88, 80, 72, 85, 78, 82, 90, 85, 78, 100,
        85, 72, 90, 88, 65, 95, 82, 68, 92, 87, 70, 98
      ]} // 模拟更真实的人力资源数据波动
      />
      
      <TableChart 
      />
    </div>
  );
}
