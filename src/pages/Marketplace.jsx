import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import {
  TrendingUp,
  TrendingDown,
  MapPin,
  Calendar,
  Leaf,
  DollarSign,
  ShoppingCart,
  Eye,
  Filter,
  Search,
  Star,
  X
} from 'lucide-react';

const Marketplace = () => {
  const [selectedCredit, setSelectedCredit] = useState(null);
  const [filterType, setFilterType] = useState('all');
  const [sortBy, setSortBy] = useState('price');

  const carbonCredits = [
  {
    id: 1,
    project: "Mangrove Carbon Credits - Sundarbans",
    location: "West Bengal, India",
    type: "reforestation",
    price: 1400,
    co2Amount: 12000,
    available: 6000,
    verification: "VCS",
    vintage: "2024",
    seller: "Sundarbans Eco Trust",
    rating: 4.9,
    image: "https://www.shutterstock.com/image-photo/pichavaram-mangrove-forests-second-largest-600nw-2187072287.jpg",
    trend: "up",
    trendPercent: 11,
    description: "Certified mangrove carbon credits from Sundarbans, supporting coastal protection, biodiversity, and carbon sequestration."
  },
  {
    id: 2,
    project: "Seagrass Restoration Credits - Gulf of Mannar",
    location: "Tamil Nadu, India",
    type: "restoration",
    price: 1800,
    co2Amount: 8000,
    available: 4000,
    verification: "Gold Standard",
    vintage: "2024",
    seller: "BlueSeas Foundation",
    rating: 4.8,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx8KPZHps_ESfAolwRQMzCX0oYG3NqYH0ujA&s",
    trend: "up",
    trendPercent: 9,
    description: "Community-led seagrass restoration generating blue carbon credits while improving marine biodiversity and fisheries."
  },
  {
    id: 3,
    project: "Salt Marsh Protection Units - Chilika Lake",
    location: "Odisha, India",
    type: "conservation",
    price: 1000,
    co2Amount: 5000,
    available: 2500,
    verification: "CDM",
    vintage: "2023",
    seller: "Odisha Coastal Alliance",
    rating: 4.7,
    image: "https://natureindiatoursblog.wordpress.com/wp-content/uploads/2019/11/mangrooves.jpg?w=688",
    trend: "down",
    trendPercent: 4,
    description: "Salt marsh ecosystem conservation credits from Chilika Lake, enhancing carbon storage and coastal flood resilience."
  },
  {
    id: 4,
    project: "Mangrove Reforestation Pre-Sale - Pichavaram",
    location: "Tamil Nadu, India",
    type: "reforestation",
    price: 1200,
    co2Amount: 15000,
    available: 7500,
    verification: "Pending VCS",
    vintage: "2025",
    seller: "Tamil Nadu Blue Carbon Initiative",
    rating: 4.6,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBinQuyxJIUmk-O_UAE8h_D9zTau3ViCNvIw&s",
    trend: "up",
    trendPercent: 13,
    description: "Forward credits from upcoming mangrove reforestation in Pichavaram. Early buyers benefit from discounted rates."
  },
  {
    id: 1,
    project: "Mangrove Carbon Credits - Sundarbans",
    location: "West Bengal, India",
    type: "reforestation",
    price: 1400,
    co2Amount: 12000,
    available: 6000,
    verification: "VCS",
    vintage: "2024",
    seller: "Sundarbans Eco Trust",
    rating: 4.9,
    image: "https://www.shutterstock.com/image-photo/pichavaram-mangrove-forests-second-largest-600nw-2187072287.jpg",
    trend: "up",
    trendPercent: 11,
    description: "Certified mangrove carbon credits from Sundarbans, supporting coastal protection, biodiversity, and carbon sequestration."
  },
  {
    id: 2,
    project: "Seagrass Restoration Credits - Gulf of Mannar",
    location: "Tamil Nadu, India",
    type: "restoration",
    price: 1800,
    co2Amount: 8000,
    available: 4000,
    verification: "Gold Standard",
    vintage: "2024",
    seller: "BlueSeas Foundation",
    rating: 4.8,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx8KPZHps_ESfAolwRQMzCX0oYG3NqYH0ujA&s",
    trend: "up",
    trendPercent: 9,
    description: "Community-led seagrass restoration generating blue carbon credits while improving marine biodiversity and fisheries."
  }
];



  const marketStats = [
    { label: "Total Volume", value: "2.4M", unit: "tons CO₂", trend: "up", change: "+15%" },
    { label: "Avg Price", value: "Rs.43", unit: "per ton", trend: "up", change: "+8%" },
    { label: "Active Listings", value: "1,247", unit: "credits", trend: "up", change: "+12%" },
    { label: "Trading Volume", value: "Rs.108M", unit: "today", trend: "down", change: "-3%" }
  ];

  const projectTypes = [
  { id: 'all', label: 'All Projects', count: carbonCredits.length },
  { id: 'reforestation', label: 'Reforestation', count: 2 },
  { id: 'restoration', label: 'Restoration', count: 1 },
  { id: 'conservation', label: 'Conservation', count: 1 }
];


  const filteredCredits = filterType === 'all'
    ? carbonCredits
    : carbonCredits.filter(credit => credit.type === filterType);

  const sortedCredits = [...filteredCredits].sort((a, b) => {
    switch (sortBy) {
      case 'price':
        return a.price - b.price;
      case 'co2Amount':
        return b.co2Amount - a.co2Amount;
      case 'rating':
        return b.rating - a.rating;
      default:
        return 0;
    }
  });

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
          <h1 className="text-4xl font-bold text-white mb-2">Carbon Credit Marketplace</h1>
          <p className="text-gray-300">Trade verified carbon credits from environmental projects worldwide</p>
        </motion.div>

        {/* Market Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {marketStats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20"
            >
              <div className="flex items-center justify-between mb-2">
                <p className="text-gray-300 text-sm">{stat.label}</p>
                <div className={`flex items-center text-xs ${stat.trend === 'up' ? 'text-green-400' : 'text-red-400'
                  }`}>
                  {stat.trend === 'up' ? (
                    <TrendingUp className="h-3 w-3 mr-1" />
                  ) : (
                    <TrendingDown className="h-3 w-3 mr-1" />
                  )}
                  {stat.change}
                </div>
              </div>
              <div className="flex items-baseline">
                <h3 className="text-2xl font-bold text-white">{stat.value}</h3>
                <span className="text-gray-400 text-sm ml-2">{stat.unit}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Filters and Search */}
        <div className="mb-8">
          <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search projects..."
                className="w-full bg-white/10 border border-white/20 rounded-lg pl-10 pr-4 py-2 text-white placeholder-gray-400 focus:border-green-400 focus:outline-none"
              />
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-2">
              <div className="flex items-center bg-white/10 border border-white/20 rounded-lg p-1">
                <Filter className="h-4 w-4 text-gray-400 ml-2 mr-1" />
                <select
                  value={filterType}
                  onChange={(e) => setFilterType(e.target.value)}
                  className="bg-transparent border-none text-white text-sm focus:outline-none pr-2"
                >
                  {projectTypes.map(type => (
                    <option key={type.id} value={type.id} className="bg-gray-800">
                      {type.label} ({type.count})
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex items-center bg-white/10 border border-white/20 rounded-lg p-1">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-transparent border-none text-white text-sm focus:outline-none px-2"
                >
                  <option value="price" className="bg-gray-800">Sort by Price</option>
                  <option value="co2Amount" className="bg-gray-800">Sort by CO₂ Amount</option>
                  <option value="rating" className="bg-gray-800">Sort by Rating</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Credits Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {sortedCredits.map((credit, index) => (
            <motion.div
              key={credit.id}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-white/10 backdrop-blur-md rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300 overflow-hidden cursor-pointer"
              onClick={() => setSelectedCredit(credit)}
            >
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={credit.image}
                  alt={credit.project}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="bg-green-500/80 text-white text-xs px-2 py-1 rounded-full">
                    {credit.verification}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <div className={`flex items-center text-xs ${credit.trend === 'up' ? 'text-green-400' : 'text-red-400'
                    } bg-black/50 px-2 py-1 rounded-full`}>
                    {credit.trend === 'up' ? (
                      <TrendingUp className="h-3 w-3 mr-1" />
                    ) : (
                      <TrendingDown className="h-3 w-3 mr-1" />
                    )}
                    {credit.trendPercent}%
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-semibold text-white line-clamp-2">{credit.project}</h3>
                  <div className="flex items-center text-yellow-400 text-sm ml-2">
                    <Star className="h-4 w-4 fill-current" />
                    <span className="ml-1">{credit.rating}</span>
                  </div>
                </div>

                <div className="flex items-center text-gray-300 mb-3">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span className="text-sm">{credit.location}</span>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <p className="text-gray-400 text-xs">Price per ton</p>
                    <p className="text-xl font-bold text-green-400"> <span>&#8377;</span>  {credit.price}</p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs">Available</p>
                    <p className="text-lg font-semibold text-white">{credit.available} tons</p>
                  </div>
                </div>

                <div className="mb-4">
                  <p className="text-gray-400 text-xs mb-1">Total CO₂ Offset: {credit.co2Amount} tons</p>
                  <p className="text-gray-400 text-xs">Vintage: {credit.vintage} • {credit.seller}</p>
                </div>

                <div className="flex gap-2">
                  <button className="flex-1 bg-gradient-to-r from-green-500 to-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center">
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Buy Now
                  </button>
                  <button className="bg-white/10 border border-white/20 text-white p-2 rounded-lg hover:bg-white/20 transition-all duration-300">
                    <Eye className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Credit Detail Modal */}
      {selectedCredit && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedCredit(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-white/10 backdrop-blur-md rounded-xl border border-white/20 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-2xl font-bold text-white">{selectedCredit.project}</h2>
                <button
                  onClick={() => setSelectedCredit(null)}
                  className="text-gray-400 hover:text-white p-1"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <img
                src={selectedCredit.image}
                alt={selectedCredit.project}
                className="w-full h-48 object-cover rounded-lg mb-6"
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Project Details</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-300">Location:</span>
                      <span className="text-white">{selectedCredit.location}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Verification:</span>
                      <span className="text-green-400">{selectedCredit.verification}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Vintage:</span>
                      <span className="text-white">{selectedCredit.vintage}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Seller:</span>
                      <span className="text-white">{selectedCredit.seller}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Rating:</span>
                      <div className="flex items-center text-yellow-400">
                        <Star className="h-4 w-4 fill-current mr-1" />
                        <span>{selectedCredit.rating}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Trading Info</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-300">Price per ton:</span>
                      <span className="text-2xl font-bold text-green-400"> <span>&#8377;</span>  {selectedCredit.price}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Available:</span>
                      <span className="text-white font-semibold">{selectedCredit.available} tons</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Total CO₂:</span>
                      <span className="text-white font-semibold">{selectedCredit.co2Amount} tons</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Market trend:</span>
                      <div className={`flex items-center ${selectedCredit.trend === 'up' ? 'text-green-400' : 'text-red-400'
                        }`}>
                        {selectedCredit.trend === 'up' ? (
                          <TrendingUp className="h-4 w-4 mr-1" />
                        ) : (
                          <TrendingDown className="h-4 w-4 mr-1" />
                        )}
                        {selectedCredit.trendPercent}%
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-white mb-3">Project Description</h3>
                <p className="text-gray-300">{selectedCredit.description}</p>
              </div>

              <div className="flex gap-4">
                <button className="flex-1 bg-gradient-to-r from-green-500 to-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center">
                  <ShoppingCart className="h-5 w-5 mr-2" />
                  Buy Carbon Credits
                </button>
                <button className="bg-white/10 border border-white/20 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/20 transition-all duration-300">
                  Contact Seller
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default Marketplace;