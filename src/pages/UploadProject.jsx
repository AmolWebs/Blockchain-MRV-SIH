import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import { 
  Upload, 
  Image, 
  FileText, 
  MapPin, 
  Calendar,
  Leaf,
  Camera,
  Satellite,
  Cpu,
  X,
  Check
} from 'lucide-react';

const UploadProject = () => {
  const [dragActive, setDragActive] = useState(false);
  const [files, setFiles] = useState([]);
  const [formData, setFormData] = useState({
    projectName: '',
    location: '',
    projectType: 'reforestation',
    startDate: '',
    endDate: '',
    description: '',
    expectedCO2: '',
    area: ''
  });
  const [uploadStep, setUploadStep] = useState(1);

  const projectTypes = [
    { id: 'reforestation', label: 'Reforestation', icon: Leaf },
    { id: 'solar', label: 'Solar Energy', icon: Camera },
    { id: 'wind', label: 'Wind Energy', icon: Satellite },
    { id: 'ocean', label: 'Ocean Cleanup', icon: Cpu },
  ];

  const dataTypes = [
    { id: 'plantation', label: 'Plantation Counts', icon: Leaf, description: 'Tree count data and species information' },
    { id: 'satellite', label: 'Satellite Images', icon: Satellite, description: 'High-resolution satellite imagery' },
    { id: 'iot', label: 'IoT Readings', icon: Cpu, description: 'Sensor data and measurements' },
    { id: 'photos', label: 'Field Photos', icon: Camera, description: 'On-ground documentation photos' }
  ];

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFiles(e.dataTransfer.files);
    }
  };

  const handleFiles = (fileList) => {
    const newFiles = Array.from(fileList).map(file => ({
      id: Date.now() + Math.random(),
      file,
      name: file.name,
      size: (file.size / 1024 / 1024).toFixed(2),
      type: file.type.includes('image') ? 'image' : 'document'
    }));
    setFiles(prev => [...prev, ...newFiles]);
  };

  const removeFile = (fileId) => {
    setFiles(prev => prev.filter(f => f.id !== fileId));
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = () => {
    setUploadStep(3);
    // Simulate upload process
    setTimeout(() => {
      setUploadStep(4);
    }, 2000);
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold text-white mb-2">Upload New Project</h1>
          <p className="text-gray-300">Submit your environmental project data for verification</p>
        </motion.div>

        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex items-center justify-center">
            {[1, 2, 3, 4].map((step, index) => (
              <div key={step} className="flex items-center">
                <motion.div
                  initial={{ scale: 0.8 }}
                  animate={{ scale: uploadStep >= step ? 1.1 : 0.8 }}
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                    uploadStep >= step 
                      ? 'bg-green-500 text-white' 
                      : 'bg-gray-600 text-gray-300'
                  }`}
                >
                  {uploadStep > step ? <Check className="h-4 w-4" /> : step}
                </motion.div>
                {index < 3 && (
                  <div className={`w-20 h-1 mx-2 ${
                    uploadStep > step ? 'bg-green-500' : 'bg-gray-600'
                  }`} />
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-2 text-sm text-gray-300">
            <span>Project Info</span>
            <span>Upload Data</span>
            <span>Processing</span>
            <span>Complete</span>
          </div>
        </div>

        {uploadStep === 1 && (
          <motion.div
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20"
          >
            <h2 className="text-2xl font-bold text-white mb-6">Project Information</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Project Name</label>
                <input
                  type="text"
                  value={formData.projectName}
                  onChange={(e) => handleInputChange('projectName', e.target.value)}
                  className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-green-400 focus:outline-none"
                  placeholder="Enter project name"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Location</label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-3.5 h-4 w-4 text-gray-400" />
                  <input
                    type="text"
                    value={formData.location}
                    onChange={(e) => handleInputChange('location', e.target.value)}
                    className="w-full bg-white/5 border border-white/20 rounded-lg pl-10 pr-4 py-3 text-white placeholder-gray-400 focus:border-green-400 focus:outline-none"
                    placeholder="Project location"
                  />
                </div>
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-300 mb-3">Project Type</label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {projectTypes.map(type => {
                  const Icon = type.icon;
                  return (
                    <motion.div
                      key={type.id}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleInputChange('projectType', type.id)}
                      className={`p-4 rounded-lg border cursor-pointer transition-all ${
                        formData.projectType === type.id
                          ? 'bg-green-500/20 border-green-400 text-green-400'
                          : 'bg-white/5 border-white/20 text-gray-300 hover:bg-white/10'
                      }`}
                    >
                      <Icon className="h-6 w-6 mx-auto mb-2" />
                      <p className="text-sm text-center">{type.label}</p>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Start Date</label>
                <input
                  type="date"
                  value={formData.startDate}
                  onChange={(e) => handleInputChange('startDate', e.target.value)}
                  className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white focus:border-green-400 focus:outline-none"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Expected End Date</label>
                <input
                  type="date"
                  value={formData.endDate}
                  onChange={(e) => handleInputChange('endDate', e.target.value)}
                  className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white focus:border-green-400 focus:outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Expected CO₂ Absorption (tons)</label>
                <input
                  type="number"
                  value={formData.expectedCO2}
                  onChange={(e) => handleInputChange('expectedCO2', e.target.value)}
                  className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-green-400 focus:outline-none"
                  placeholder="0"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Project Area (hectares)</label>
                <input
                  type="number"
                  value={formData.area}
                  onChange={(e) => handleInputChange('area', e.target.value)}
                  className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-green-400 focus:outline-none"
                  placeholder="0"
                />
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-300 mb-2">Project Description</label>
              <textarea
                value={formData.description}
                onChange={(e) => handleInputChange('description', e.target.value)}
                rows={4}
                className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-green-400 focus:outline-none"
                placeholder="Describe your environmental project..."
              />
            </div>

            <button
              onClick={() => setUploadStep(2)}
              className="w-full bg-gradient-to-r from-green-500 to-blue-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              Continue to Data Upload
            </button>
          </motion.div>
        )}

        {uploadStep === 2 && (
          <motion.div
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20"
          >
            <h2 className="text-2xl font-bold text-white mb-6">Upload Project Data</h2>

            {/* Data Types */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {dataTypes.map(type => {
                const Icon = type.icon;
                return (
                  <div
                    key={type.id}
                    className="p-4 bg-white/5 border border-white/20 rounded-lg hover:bg-white/10 transition-all"
                  >
                    <Icon className="h-6 w-6 text-green-400 mb-2" />
                    <h3 className="font-medium text-white mb-1">{type.label}</h3>
                    <p className="text-xs text-gray-400">{type.description}</p>
                  </div>
                );
              })}
            </div>

            {/* File Upload Area */}
            <div
              className={`relative border-2 border-dashed rounded-xl p-8 text-center transition-colors ${
                dragActive 
                  ? 'border-green-400 bg-green-400/10' 
                  : 'border-gray-600 hover:border-gray-500'
              }`}
              onDragEnter={handleDrag}
              onDragLeave={handleDrag}
              onDragOver={handleDrag}
              onDrop={handleDrop}
            >
              <input
                type="file"
                multiple
                onChange={(e) => handleFiles(e.target.files)}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              />
              
              <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-white mb-2">Upload your files</h3>
              <p className="text-gray-400 mb-4">
                Drag and drop files here, or click to select files
              </p>
              <p className="text-sm text-gray-500">
                Supported formats: JPG, PNG, PDF, CSV, JSON
              </p>
            </div>

            {/* Uploaded Files */}
            {files.length > 0 && (
              <div className="mt-6">
                <h3 className="text-lg font-medium text-white mb-4">Uploaded Files</h3>
                <div className="space-y-3">
                  {files.map(file => (
                    <motion.div
                      key={file.id}
                      initial={{ y: 10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      className="flex items-center justify-between p-3 bg-white/5 border border-white/20 rounded-lg"
                    >
                      <div className="flex items-center space-x-3">
                        {file.type === 'image' ? (
                          <Image className="h-5 w-5 text-green-400" />
                        ) : (
                          <FileText className="h-5 w-5 text-blue-400" />
                        )}
                        <div>
                          <p className="text-white text-sm font-medium">{file.name}</p>
                          <p className="text-gray-400 text-xs">{file.size} MB</p>
                        </div>
                      </div>
                      <button
                        onClick={() => removeFile(file.id)}
                        className="text-gray-400 hover:text-red-400 p-1"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            <div className="flex gap-4 mt-8">
              <button
                onClick={() => setUploadStep(1)}
                className="flex-1 bg-white/10 border border-white/20 text-white py-3 rounded-lg font-semibold hover:bg-white/20 transition-all duration-300"
              >
                Back
              </button>
              <button
                onClick={handleSubmit}
                disabled={files.length === 0}
                className="flex-1 bg-gradient-to-r from-green-500 to-blue-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Submit Project
              </button>
            </div>
          </motion.div>
        )}

        {uploadStep === 3 && (
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20 text-center"
          >
            <div className="mb-6">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="w-16 h-16 border-4 border-green-400 border-t-transparent rounded-full mx-auto mb-4"
              />
              <h2 className="text-2xl font-bold text-white mb-2">Processing Your Submission</h2>
              <p className="text-gray-300">
                Your project data is being validated and processed for review...
              </p>
            </div>
          </motion.div>
        )}

        {uploadStep === 4 && (
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20 text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            >
              <Check className="h-16 w-16 text-green-400 mx-auto mb-4" />
            </motion.div>
            <h2 className="text-2xl font-bold text-white mb-2">Project Submitted Successfully!</h2>
            <p className="text-gray-300 mb-6">
              Your project "{formData.projectName}" has been submitted for authority review. 
              You'll receive updates on the verification status.
            </p>
            <div className="flex gap-4 justify-center">
              <button
                onClick={() => {
                  setUploadStep(1);
                  setFiles([]);
                  setFormData({
                    projectName: '',
                    location: '',
                    projectType: 'reforestation',
                    startDate: '',
                    endDate: '',
                    description: '',
                    expectedCO2: '',
                    area: ''
                  });
                }}
                className="bg-white/10 border border-white/20 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/20 transition-all duration-300"
              >
                Submit Another Project
              </button>
              <button
                onClick={() => window.location.href = '/dashboard'}
                className="bg-gradient-to-r from-green-500 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
              >
                View Dashboard
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default UploadProject;