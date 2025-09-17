import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import { 
  Shield, 
  CheckCircle, 
  XCircle, 
  Clock,
  MapPin,
  Calendar,
  FileText,
  Image,
  BarChart3,
  AlertTriangle,
  User,
  Leaf,
  Filter
} from 'lucide-react';

const AuthorityPanel = () => {
  const [selectedTab, setSelectedTab] = useState('pending');
  const [selectedSubmission, setSelectedSubmission] = useState(null);

  const pendingSubmissions = [
    {
      id: 1,
      projectName: "Coastal Mangrove Restoration",
      submitter: "Green Coast Initiative",
      location: "Philippines",
      type: "reforestation",
      submissionDate: "2024-12-20",
      expectedCO2: "12,500",
      area: "450",
      status: "pending",
      priority: "high",
      files: ["satellite_images.jpg", "plantation_data.csv", "impact_report.pdf"],
      description: "Large-scale mangrove restoration project aimed at protecting coastal communities and marine biodiversity while sequestering significant amounts of carbon."
    },
    {
      id: 2,
      projectName: "Community Solar Grid",
      submitter: "Rural Energy Solutions",
      location: "Kenya",
      type: "solar",
      submissionDate: "2024-12-19",
      expectedCO2: "8,750",
      area: "200",
      status: "pending",
      priority: "medium",
      files: ["installation_photos.jpg", "energy_output.csv", "community_report.pdf"],
      description: "Solar panel installation providing clean energy access to rural communities while reducing reliance on fossil fuel generators."
    },
    {
      id: 3,
      projectName: "Organic Waste Recycling",
      submitter: "EcoWaste Management",
      location: "Bangladesh",
      type: "waste",
      submissionDate: "2024-12-18",
      expectedCO2: "15,200",
      area: "75",
      status: "pending",
      priority: "high",
      files: ["facility_images.jpg", "waste_data.csv", "emission_calculations.pdf"],
      description: "Innovative organic waste processing facility converting municipal waste into biogas and compost, reducing methane emissions."
    }
  ];

  const recentDecisions = [
    {
      id: 4,
      projectName: "Amazon Forest Protection",
      submitter: "Rainforest Alliance",
      location: "Brazil",
      status: "approved",
      decisionDate: "2024-12-15",
      creditsIssued: "25,000",
      reviewer: "Dr. Maria Santos"
    },
    {
      id: 5,
      projectName: "Wind Farm Expansion",
      submitter: "Nordic Green Energy",
      location: "Norway",
      status: "approved",
      decisionDate: "2024-12-14",
      creditsIssued: "18,500",
      reviewer: "Prof. Erik Hansen"
    },
    {
      id: 6,
      projectName: "Desert Solar Installation",
      submitter: "Desert Power Corp",
      location: "Morocco",
      status: "rejected",
      decisionDate: "2024-12-13",
      creditsIssued: "0",
      reviewer: "Dr. Ahmed Al-Rashid",
      rejectionReason: "Insufficient environmental impact documentation"
    }
  ];

  const stats = [
    { title: "Pending Reviews", value: "23", icon: Clock, color: "from-yellow-400 to-yellow-600" },
    { title: "Approved This Month", value: "47", icon: CheckCircle, color: "from-green-400 to-green-600" },
    { title: "Total Credits Issued", value: "2.4M", icon: Leaf, color: "from-blue-400 to-blue-600" },
    { title: "Active Reviewers", value: "12", icon: User, color: "from-purple-400 to-purple-600" }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'approved':
        return 'text-green-400 bg-green-400/10';
      case 'rejected':
        return 'text-red-400 bg-red-400/10';
      case 'pending':
        return 'text-yellow-400 bg-yellow-400/10';
      default:
        return 'text-gray-400 bg-gray-400/10';
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high':
        return 'text-red-400 bg-red-400/10';
      case 'medium':
        return 'text-yellow-400 bg-yellow-400/10';
      case 'low':
        return 'text-green-400 bg-green-400/10';
      default:
        return 'text-gray-400 bg-gray-400/10';
    }
  };

  const handleApproval = (submissionId, approved) => {
    // In a real app, this would make an API call
    console.log(`${approved ? 'Approved' : 'Rejected'} submission ${submissionId}`);
    setSelectedSubmission(null);
  };

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
          <div className="flex items-center space-x-3 mb-2">
            <Shield className="h-8 w-8 text-green-400" />
            <h1 className="text-4xl font-bold text-white">Authority Panel</h1>
          </div>
          <p className="text-gray-300">Review and verify environmental project submissions for carbon credit approval</p>
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
                className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`bg-gradient-to-r ${stat.color} w-12 h-12 rounded-lg flex items-center justify-center`}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-1">{stat.value}</h3>
                <p className="text-gray-300 text-sm">{stat.title}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Tab Navigation */}
        <div className="mb-8">
          <div className="flex space-x-1 bg-white/10 rounded-lg p-1">
            {[
              { id: 'pending', label: 'Pending Reviews', count: pendingSubmissions.length },
              { id: 'recent', label: 'Recent Decisions', count: recentDecisions.length }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setSelectedTab(tab.id)}
                className={`flex-1 flex items-center justify-center py-2 px-4 rounded-md font-medium transition-colors ${
                  selectedTab === tab.id
                    ? 'bg-white/20 text-white'
                    : 'text-gray-300 hover:text-white hover:bg-white/10'
                }`}
              >
                {tab.label} ({tab.count})
              </button>
            ))}
          </div>
        </div>

        {/* Pending Reviews Tab */}
        {selectedTab === 'pending' && (
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="grid grid-cols-1 gap-6">
              {pendingSubmissions.map((submission, index) => (
                <motion.div
                  key={submission.id}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white/10 backdrop-blur-md rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-2">{submission.projectName}</h3>
                        <div className="flex items-center text-gray-300 space-x-4">
                          <div className="flex items-center">
                            <User className="h-4 w-4 mr-1" />
                            <span className="text-sm">{submission.submitter}</span>
                          </div>
                          <div className="flex items-center">
                            <MapPin className="h-4 w-4 mr-1" />
                            <span className="text-sm">{submission.location}</span>
                          </div>
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-1" />
                            <span className="text-sm">{submission.submissionDate}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${getPriorityColor(submission.priority)}`}>
                          {submission.priority.toUpperCase()} PRIORITY
                        </span>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(submission.status)}`}>
                          {submission.status.toUpperCase()}
                        </span>
                      </div>
                    </div>

                    <p className="text-gray-300 mb-4">{submission.description}</p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                      <div className="bg-white/5 rounded-lg p-3">
                        <p className="text-gray-400 text-xs">Expected CO₂ Absorption</p>
                        <p className="text-lg font-semibold text-green-400">{submission.expectedCO2} tons</p>
                      </div>
                      <div className="bg-white/5 rounded-lg p-3">
                        <p className="text-gray-400 text-xs">Project Area</p>
                        <p className="text-lg font-semibold text-blue-400">{submission.area} hectares</p>
                      </div>
                      <div className="bg-white/5 rounded-lg p-3">
                        <p className="text-gray-400 text-xs">Project Type</p>
                        <p className="text-lg font-semibold text-purple-400 capitalize">{submission.type}</p>
                      </div>
                    </div>

                    <div className="mb-4">
                      <p className="text-sm text-gray-300 mb-2">Submitted Files:</p>
                      <div className="flex flex-wrap gap-2">
                        {submission.files.map((file, fileIndex) => (
                          <span key={fileIndex} className="bg-white/10 text-gray-300 px-2 py-1 rounded text-xs flex items-center">
                            {file.includes('jpg') || file.includes('jpeg') || file.includes('png') ? (
                              <Image className="h-3 w-3 mr-1" />
                            ) : (
                              <FileText className="h-3 w-3 mr-1" />
                            )}
                            {file}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <button
                        onClick={() => setSelectedSubmission(submission)}
                        className="bg-white/10 border border-white/20 text-white px-4 py-2 rounded-lg hover:bg-white/20 transition-all duration-300 flex items-center"
                      >
                        <BarChart3 className="h-4 w-4 mr-2" />
                        Review Details
                      </button>
                      <button
                        onClick={() => handleApproval(submission.id, true)}
                        className="bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2 rounded-lg hover:shadow-lg transition-all duration-300 flex items-center"
                      >
                        <CheckCircle className="h-4 w-4 mr-2" />
                        Approve
                      </button>
                      <button
                        onClick={() => handleApproval(submission.id, false)}
                        className="bg-gradient-to-r from-red-500 to-red-600 text-white px-4 py-2 rounded-lg hover:shadow-lg transition-all duration-300 flex items-center"
                      >
                        <XCircle className="h-4 w-4 mr-2" />
                        Reject
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Recent Decisions Tab */}
        {selectedTab === 'recent' && (
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white/10 backdrop-blur-md rounded-xl border border-white/20 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-white/5">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Project</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Submitter</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Status</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Credits Issued</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Date</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Reviewer</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/10">
                    {recentDecisions.map((decision, index) => (
                      <motion.tr
                        key={decision.id}
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        className="hover:bg-white/5 transition-colors"
                      >
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div>
                            <div className="text-sm font-medium text-white">{decision.projectName}</div>
                            <div className="text-sm text-gray-400">{decision.location}</div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                          {decision.submitter}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(decision.status)}`}>
                            {decision.status === 'approved' ? (
                              <>
                                <CheckCircle className="h-3 w-3 inline mr-1" />
                                APPROVED
                              </>
                            ) : (
                              <>
                                <XCircle className="h-3 w-3 inline mr-1" />
                                REJECTED
                              </>
                            )}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm">
                          {decision.status === 'approved' ? (
                            <span className="text-green-400 font-semibold">{decision.creditsIssued}</span>
                          ) : (
                            <span className="text-red-400">-</span>
                          )}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                          {decision.decisionDate}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                          {decision.reviewer}
                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>
        )}
      </div>

      {/* Detailed Review Modal */}
      {selectedSubmission && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedSubmission(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white/10 backdrop-blur-md rounded-xl border border-white/20 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <h2 className="text-2xl font-bold text-white">{selectedSubmission.projectName}</h2>
                <button
                  onClick={() => setSelectedSubmission(null)}
                  className="text-gray-400 hover:text-white"
                >
                  <XCircle className="h-6 w-6" />
                </button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-4">Project Information</h3>
                  <div className="space-y-3 bg-white/5 rounded-lg p-4">
                    <div className="flex justify-between">
                      <span className="text-gray-300">Submitter:</span>
                      <span className="text-white">{selectedSubmission.submitter}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Location:</span>
                      <span className="text-white">{selectedSubmission.location}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Project Type:</span>
                      <span className="text-white capitalize">{selectedSubmission.type}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Submission Date:</span>
                      <span className="text-white">{selectedSubmission.submissionDate}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Priority:</span>
                      <span className={`px-2 py-1 rounded text-xs ${getPriorityColor(selectedSubmission.priority)}`}>
                        {selectedSubmission.priority.toUpperCase()}
                      </span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white mb-4">Impact Metrics</h3>
                  <div className="space-y-3 bg-white/5 rounded-lg p-4">
                    <div className="flex justify-between">
                      <span className="text-gray-300">Expected CO₂:</span>
                      <span className="text-green-400 font-semibold">{selectedSubmission.expectedCO2} tons</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Project Area:</span>
                      <span className="text-blue-400 font-semibold">{selectedSubmission.area} hectares</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Estimated Credits:</span>
                      <span className="text-purple-400 font-semibold">{Math.floor(selectedSubmission.expectedCO2 * 0.8).toLocaleString()}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-white mb-4">Project Description</h3>
                <p className="text-gray-300 bg-white/5 rounded-lg p-4">{selectedSubmission.description}</p>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-white mb-4">Submitted Documentation</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {selectedSubmission.files.map((file, index) => (
                    <div key={index} className="bg-white/5 rounded-lg p-3 flex items-center">
                      {file.includes('jpg') || file.includes('jpeg') || file.includes('png') ? (
                        <Image className="h-5 w-5 text-green-400 mr-2" />
                      ) : (
                        <FileText className="h-5 w-5 text-blue-400 mr-2" />
                      )}
                      <span className="text-sm text-gray-300">{file}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex gap-4 justify-end">
                <button
                  onClick={() => handleApproval(selectedSubmission.id, false)}
                  className="bg-gradient-to-r from-red-500 to-red-600 text-white px-6 py-2 rounded-lg hover:shadow-lg transition-all duration-300 flex items-center"
                >
                  <XCircle className="h-4 w-4 mr-2" />
                  Reject Project
                </button>
                <button
                  onClick={() => handleApproval(selectedSubmission.id, true)}
                  className="bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-2 rounded-lg hover:shadow-lg transition-all duration-300 flex items-center"
                >
                  <CheckCircle className="h-4 w-4 mr-2" />
                  Approve & Issue Credits
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default AuthorityPanel;