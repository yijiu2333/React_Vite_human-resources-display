import React from 'react';
import HumanResourceTable from './HumanResourceTable.jsx';

export default function ChartsSection() {
  return (
    <div className="grid grid-cols-2 gap-6">
      <HumanResourceTable 
      title = {'车间本日出勤'}
      input_data = {[['车间1',72,65],['车间2',72,65],['车间3',100,100],['车间4',100,100],['车间5',100,100],['车间6',100,100],['车间7',100,100]]}
      />
      <HumanResourceTable 
      title = {'部门本日出勤'}
      input_data = {[['部门1',72,65],['部门2',72,65],['部门3',100,100],['部门4',100,100],['部门5',100,100],['部门6',100,100],['部门7',100,100]]}
      />
    </div>
  );
}
