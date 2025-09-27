import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import {
  Wallet,
  TrendingUp,
  TrendingDown,
  Download,
  ArrowUpRight,
  ArrowDownRight,
  Leaf,
  Award,
  Calendar,
  MapPin,
  BarChart3,
  PieChart,
  DollarSign
} from 'lucide-react';

const UserBalance = () => {
  const [selectedTimeframe, setSelectedTimeframe] = useState('month');

  const userStats = {
    totalCredits: 15750,
    creditValue: 678500,
    monthlyGain: 1250,
    co2Offset: 15750,
    rank: 'Gold Contributor',
    activeProjects: 8
  };

  const creditHistory = [
    {
      id: 1,
      type: 'earned',
      amount: 1524,
      project: 'Mangrove Reforestation - Sundarbans',
      date: '2024-12-20',
      value: 68580,
      co2: 1524
    },
    {
      id: 2,
      type: 'earned',
      amount: 1100,
      project: 'Sundari Mangrove Conservation - Sundarbans',
      date: '2024-12-18',
      value: 49500,
      co2: 1100
    },
    {
      id: 3,
      type: 'earned',
      amount: 800,
      project: 'Seagrass Restoration - Gulf of Mannar',
      date: '2024-12-14',
      value: 36000,
      co2: 800
    },
    {
      id: 4,
      type: 'earned',
      amount: 500,
      project: 'Salt Marsh Protection - Chilika Lake',
      date: '2024-12-10',
      value: 22500,
      co2: 500
    },
    {
      id: 5,
      type: 'traded',
      amount: -300,
      project: 'Marketplace Blue Carbon Sale',
      date: '2024-12-08',
      value: -13500,
      co2: -300
    }
  ];


  const portfolioBreakdown = [
    { type: 'Reforestation', amount: 6250, percentage: 40, color: 'from-green-400 to-green-600' },
    { type: 'Renewable Energy', amount: 4725, percentage: 30, color: 'from-blue-400 to-blue-600' },
    { type: 'Ocean Cleanup', amount: 2363, percentage: 15, color: 'from-teal-400 to-teal-600' },
    { type: 'Waste Management', amount: 1575, percentage: 10, color: 'from-purple-400 to-purple-600' },
    { type: 'Other', amount: 788, percentage: 5, color: 'from-gray-400 to-gray-600' }
  ];

  const achievements = [
    { title: 'Carbon Hero', description: 'Offset 10,000+ tons CO₂', icon: Award, unlocked: true },
    { title: 'Early Adopter', description: 'First 100 platform users', icon: TrendingUp, unlocked: true },
    { title: 'Green Investor', description: 'Invested in 5+ projects', icon: DollarSign, unlocked: true },
    { title: 'Planet Protector', description: 'Offset 25,000+ tons CO₂', icon: Leaf, unlocked: false }
  ];

  const monthlyData = [
    { month: 'Jul', earned: 850, traded: 200 },
    { month: 'Aug', earned: 1200, traded: 150 },
    { month: 'Sep', earned: 950, traded: 300 },
    { month: 'Oct', earned: 1450, traded: 250 },
    { month: 'Nov', earned: 1100, traded: 400 },
    { month: 'Dec', earned: 1250, traded: 180 }
  ];

  const stats = [
    {
      title: "Total Carbon Credits",
      value: userStats.totalCredits.toLocaleString(),
      icon: Leaf,
      color: "from-green-400 to-green-600",
      change: `+${userStats.monthlyGain}`,
      changeType: "increase"
    },
    {
      title: "Portfolio Value",
      value: `Rs.${(userStats.creditValue / 1000).toFixed(1)}K`,
      icon: DollarSign,
      color: "from-blue-400 to-blue-600",
      change: "+12.5%",
      changeType: "increase"
    },
    {
      title: "CO₂ Offset",
      value: `${userStats.co2Offset.toLocaleString()} tons`,
      icon: TrendingUp,
      color: "from-purple-400 to-purple-600",
      change: "+8.2%",
      changeType: "increase"
    },
    {
      title: "Active Projects",
      value: userStats.activeProjects.toString(),
      icon: BarChart3,
      color: "from-yellow-400 to-yellow-600",
      change: "+2",
      changeType: "increase"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center space-x-3 mb-2">
                <Wallet className="h-8 w-8 text-green-400" />
                <h1 className="text-4xl font-bold text-white">My Carbon Balance</h1>
              </div>
              <p className="text-gray-300">Track your carbon credit portfolio and environmental impact</p>
            </div>
            <div className="flex items-center space-x-2">
              <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-white px-4 py-2 rounded-lg font-semibold flex items-center">
                <Award className="h-4 w-4 mr-2" />
                {userStats.rank}
              </span>
              <button className="bg-white/10 border border-white/20 text-white px-4 py-2 rounded-lg hover:bg-white/20 transition-all duration-300 flex items-center">
                <Download className="h-4 w-4 mr-2" />
                Export
              </button>
            </div>
          </div>
        </motion.div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`bg-gradient-to-r ${stat.color} w-12 h-12 rounded-lg flex items-center justify-center`}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex items-center text-sm">
                    {stat.changeType === 'increase' ? (
                      <TrendingUp className="h-4 w-4 text-green-400 mr-1" />
                    ) : (
                      <TrendingDown className="h-4 w-4 text-red-400 mr-1" />
                    )}
                    <span className={stat.changeType === 'increase' ? 'text-green-400' : 'text-red-400'}>
                      {stat.change}
                    </span>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-1">{stat.value}</h3>
                <p className="text-gray-300 text-sm">{stat.title}</p>
              </motion.div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {/* Portfolio Breakdown */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 h-fit"
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-white">Portfolio Breakdown</h2>
                <PieChart className="h-5 w-5 text-gray-400" />
              </div>

              <div className="space-y-4">
                {portfolioBreakdown.map((item, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${item.color}`} />
                      <span className="text-gray-300 text-sm">{item.type}</span>
                    </div>
                    <div className="text-right">
                      <p className="text-white font-semibold">{item.amount.toLocaleString()}</p>
                      <p className="text-gray-400 text-xs">{item.percentage}%</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-white/20">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Total Credits</span>
                  <span className="text-xl font-bold text-white">{userStats.totalCredits.toLocaleString()}</span>
                </div>
              </div>
            </motion.div>

            {/* Achievements */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 mt-6"
            >
              <h2 className="text-xl font-bold text-white mb-4">Achievements</h2>
              <div className="space-y-3">
                {achievements.map((achievement, index) => {
                  const Icon = achievement.icon;
                  return (
                    <div
                      key={index}
                      className={`flex items-center space-x-3 p-3 rounded-lg ${achievement.unlocked ? 'bg-green-500/20' : 'bg-gray-500/20'
                        }`}
                    >
                      <Icon className={`h-5 w-5 ${achievement.unlocked ? 'text-green-400' : 'text-gray-400'}`} />
                      <div>
                        <p className={`font-medium ${achievement.unlocked ? 'text-white' : 'text-gray-400'}`}>
                          {achievement.title}
                        </p>
                        <p className="text-xs text-gray-400">{achievement.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </div>

          {/* Transaction History */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20"
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-white">Recent Transactions</h2>
                <div className="flex space-x-2">
                  {['week', 'month', 'year'].map((timeframe) => (
                    <button
                      key={timeframe}
                      onClick={() => setSelectedTimeframe(timeframe)}
                      className={`px-3 py-1 rounded text-sm font-medium transition-colors ${selectedTimeframe === timeframe
                          ? 'bg-green-500 text-white'
                          : 'bg-white/10 text-gray-300 hover:bg-white/20'
                        }`}
                    >
                      {timeframe.charAt(0).toUpperCase() + timeframe.slice(1)}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                {creditHistory.map((transaction, index) => (
                  <motion.div
                    key={transaction.id}
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-center justify-between p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
                  >
                    <div className="flex items-center space-x-4">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${transaction.type === 'earned' ? 'bg-green-500/20' : 'bg-red-500/20'
                        }`}>
                        {transaction.type === 'earned' ? (
                          <ArrowDownRight className="h-5 w-5 text-green-400" />
                        ) : (
                          <ArrowUpRight className="h-5 w-5 text-red-400" />
                        )}
                      </div>
                      <div>
                        <p className="text-white font-medium">{transaction.project}</p>
                        <div className="flex items-center text-gray-400 text-sm">
                          <Calendar className="h-3 w-3 mr-1" />
                          {transaction.date}
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className={`font-semibold ${transaction.type === 'earned' ? 'text-green-400' : 'text-red-400'
                        }`}>
                        {transaction.amount > 0 ? '+' : ''}{transaction.amount.toLocaleString()} credits
                      </p>
                      <p className="text-gray-400 text-sm">
                        <span>&#8377;</span>  {Math.abs(transaction.value).toLocaleString()}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Monthly Overview Chart */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20"
        >
          <h2 className="text-xl font-bold text-white mb-6">Monthly Activity</h2>
          <div className="h-64 flex items-end justify-between space-x-2">
            {monthlyData.map((data, index) => {
              const maxValue = Math.max(...monthlyData.map(d => d.earned + d.traded));
              const earnedHeight = (data.earned / maxValue) * 100;
              const tradedHeight = (data.traded / maxValue) * 100;

              return (
                <div key={index} className="flex-1 flex flex-col items-center">
                  <div className="w-full flex flex-col items-center space-y-1 mb-2">
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: `${earnedHeight}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      className="w-full bg-gradient-to-t from-green-500 to-green-400 rounded-t"
                    />
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: `${tradedHeight}%` }}
                      transition={{ duration: 1, delay: index * 0.1 + 0.2 }}
                      className="w-full bg-gradient-to-t from-blue-500 to-blue-400 rounded-t"
                    />
                  </div>
                  <span className="text-xs text-gray-400">{data.month}</span>
                </div>
              );
            })}
          </div>
          <div className="flex justify-center space-x-6 mt-4">
            <div className="flex items-center">
              <div className="w-3 h-3 bg-green-400 rounded-full mr-2" />
              <span className="text-sm text-gray-300">Earned Credits</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-blue-400 rounded-full mr-2" />
              <span className="text-sm text-gray-300">Traded Credits</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default UserBalance;