import React from 'react'

export default function StatsCards({ sums = 100, monthenter = 100, monthquit = 100, male = 100, female = 100 }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-6">
      <div className="bg-white/90 rounded-xl shadow p-5 flex items-center">
        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
          <i className="fa fa-building text-secondary text-xl"></i>
        </div>
        <div>
          <div className="text-xl text-gray-500">公司总人数</div>
          <div className="text-2xl font-bold text-gray-800 mt-1">{sums}人</div>
        </div>
      </div>
      
      <div className="bg-white/90 rounded-xl shadow p-5 flex items-center">
        <div className="w-12 h-12 rounded-full bg-success/10 flex items-center justify-center mr-4">
          <i className="fa fa-user-plus text-success text-xl"></i>
        </div>
        <div>
          <div className="text-xl text-gray-500">本月入职人数</div>
          <div className="text-2xl font-bold text-gray-800 mt-1">{monthenter}人</div>
        </div>
      </div>
      
      <div className="bg-white/90 rounded-xl shadow p-5 flex items-center">
        <div className="w-12 h-12 rounded-full bg-warning/10 flex items-center justify-center mr-4">
          <i className="fa fa-user-times text-warning text-xl"></i>
        </div>
        <div>
          <div className="text-xl text-gray-500">本月离职人数</div>
          <div className="text-2xl font-bold text-gray-800 mt-1">{monthquit}人</div>
        </div>
      </div>
      
      <div className="bg-white/90 rounded-xl shadow p-5 flex items-center">
        <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mr-4">
          <i className="fa fa-male text-primary text-xl"></i>
        </div>
        <div>
          <div className="text-xl text-gray-500">男性员工人数</div>
          <div className="text-2xl font-bold text-gray-800 mt-1">{male}人</div>
        </div>
      </div>

      <div className="bg-white/90 rounded-xl shadow p-5 flex items-center">
        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
          <i className="fa fa-female text-pink-500 text-xl"></i>
        </div>
        <div>
          <div className="text-xl text-gray-500">女性员工人数</div>
          <div className="text-2xl font-bold text-gray-800 mt-1">{female}人</div>
        </div>
      </div>

    </div>
  )
}