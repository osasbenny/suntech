import React, { useState } from 'react';
import { Upload, X, CheckCircle } from 'lucide-react';

const Quote = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    propertyType: '',
    roofType: '',
    utilityProvider: '',
    averageMonthlyBill: '',
    electricityUsage: '',
    installationTimeframe: '',
    additionalInfo: ''
  });

  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setUploadedFile(file);
    }
  };

  const removeFile = () => {
    setUploadedFile(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Form Data:', formData);
    console.log('Uploaded File:', uploadedFile);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen pt-20 bg-gray-50 flex items-center justify-center">
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-8 text-center">
          <CheckCircle className="w-16 h-16 text-solar-green mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-solar-navy mb-4">Thank You!</h2>
          <p className="text-gray-700 mb-6">
            Your solar assessment request has been submitted successfully. Our team will review your information and contact you within 24 hours to schedule your free consultation.
          </p>
          <div className="space-y-2 text-sm text-gray-600">
            <p>📧 You'll receive a confirmation email shortly</p>
            <p>📞 We'll call you to schedule your assessment</p>
            <p>🏠 Free on-site evaluation included</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20 bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-solar-blue to-solar-navy text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Get Your Free Solar Assessment
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
              Take the first step toward energy independence. Our experts will create a custom solar solution tailored to your property and energy needs.
            </p>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Form */}
              <div>
                <h2 className="text-2xl font-bold text-solar-navy mb-6">Tell Us About Your Property</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-solar-blue focus:border-solar-blue transition-colors duration-200"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-solar-blue focus:border-solar-blue transition-colors duration-200"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-solar-blue focus:border-solar-blue transition-colors duration-200"
                      />
                    </div>
                    <div>
                      <label htmlFor="propertyType" className="block text-sm font-medium text-gray-700 mb-2">
                        Property Type *
                      </label>
                      <select
                        id="propertyType"
                        name="propertyType"
                        required
                        value={formData.propertyType}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-solar-blue focus:border-solar-blue transition-colors duration-200"
                      >
                        <option value="">Select Property Type</option>
                        <option value="residential">Residential</option>
                        <option value="commercial">Commercial</option>
                        <option value="agricultural">Agricultural</option>
                        <option value="industrial">Industrial</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-2">
                      Property Address *
                    </label>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      required
                      value={formData.address}
                      onChange={handleInputChange}
                      placeholder="Street Address, City, State, ZIP"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-solar-blue focus:border-solar-blue transition-colors duration-200"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="roofType" className="block text-sm font-medium text-gray-700 mb-2">
                        Roof Type
                      </label>
                      <select
                        id="roofType"
                        name="roofType"
                        value={formData.roofType}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-solar-blue focus:border-solar-blue transition-colors duration-200"
                      >
                        <option value="">Select Roof Type</option>
                        <option value="asphalt-shingle">Asphalt Shingle</option>
                        <option value="metal">Metal</option>
                        <option value="tile">Tile</option>
                        <option value="slate">Slate</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="utilityProvider" className="block text-sm font-medium text-gray-700 mb-2">
                        Utility Provider
                      </label>
                      <select
                        id="utilityProvider"
                        name="utilityProvider"
                        value={formData.utilityProvider}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-solar-blue focus:border-solar-blue transition-colors duration-200"
                      >
                        <option value="">Select Utility Provider</option>
                        <option value="alliant-energy">Alliant Energy</option>
                        <option value="mid-american-energy">MidAmerican Energy</option>
                        <option value="interstate-power">Interstate Power</option>
                        <option value="municipal-utility">Municipal Utility</option>
                        <option value="rural-electric-coop">Rural Electric Cooperative</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="averageMonthlyBill" className="block text-sm font-medium text-gray-700 mb-2">
                        Average Monthly Electric Bill
                      </label>
                      <select
                        id="averageMonthlyBill"
                        name="averageMonthlyBill"
                        value={formData.averageMonthlyBill}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-solar-blue focus:border-solar-blue transition-colors duration-200"
                      >
                        <option value="">Select Range</option>
                        <option value="under-100">Under $100</option>
                        <option value="100-200">$100 - $200</option>
                        <option value="200-300">$200 - $300</option>
                        <option value="300-400">$300 - $400</option>
                        <option value="over-400">Over $400</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="installationTimeframe" className="block text-sm font-medium text-gray-700 mb-2">
                        Installation Timeframe
                      </label>
                      <select
                        id="installationTimeframe"
                        name="installationTimeframe"
                        value={formData.installationTimeframe}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-solar-blue focus:border-solar-blue transition-colors duration-200"
                      >
                        <option value="">Select Timeframe</option>
                        <option value="immediately">Immediately</option>
                        <option value="within-3-months">Within 3 months</option>
                        <option value="within-6-months">Within 6 months</option>
                        <option value="within-12-months">Within 12 months</option>
                        <option value="just-researching">Just researching</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="additionalInfo" className="block text-sm font-medium text-gray-700 mb-2">
                      Additional Information
                    </label>
                    <textarea
                      id="additionalInfo"
                      name="additionalInfo"
                      rows={4}
                      value={formData.additionalInfo}
                      onChange={handleInputChange}
                      placeholder="Tell us about any specific requirements, questions, or concerns..."
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-solar-blue focus:border-solar-blue transition-colors duration-200"
                    />
                  </div>

                  {/* File Upload */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Upload Recent Utility Bill (Optional)
                    </label>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-solar-blue transition-colors duration-200">
                      {uploadedFile ? (
                        <div className="flex items-center justify-center space-x-3">
                          <div className="flex items-center space-x-2">
                            <Upload className="w-5 h-5 text-solar-blue" />
                            <span className="text-sm text-gray-700">{uploadedFile.name}</span>
                          </div>
                          <button
                            type="button"
                            onClick={removeFile}
                            className="text-red-500 hover:text-red-700 transition-colors duration-200"
                          >
                            <X className="w-5 h-5" />
                          </button>
                        </div>
                      ) : (
                        <div>
                          <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                          <p className="text-sm text-gray-600">
                            Click to upload or drag and drop
                          </p>
                          <p className="text-xs text-gray-500 mt-1">
                            PDF, PNG, JPG up to 10MB
                          </p>
                          <input
                            type="file"
                            accept=".pdf,.png,.jpg,.jpeg"
                            onChange={handleFileUpload}
                            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                          />
                        </div>
                      )}
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-solar-orange hover:bg-orange-600 text-white py-4 px-6 rounded-lg font-semibold text-lg transition-colors duration-200"
                  >
                    Get My Free Assessment
                  </button>
                </form>
              </div>

              {/* Info Panel */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-solar-navy mb-4">What Happens Next?</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-solar-blue rounded-full flex items-center justify-center text-white font-bold text-sm">1</div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Review & Contact</h4>
                      <p className="text-sm text-gray-600">We'll review your information and contact you within 24 hours</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-solar-blue rounded-full flex items-center justify-center text-white font-bold text-sm">2</div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Site Assessment</h4>
                      <p className="text-sm text-gray-600">Free on-site evaluation of your property's solar potential</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-solar-blue rounded-full flex items-center justify-center text-white font-bold text-sm">3</div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Custom Proposal</h4>
                      <p className="text-sm text-gray-600">Detailed proposal with system design and financing options</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-4 bg-solar-yellow/20 rounded-lg">
                  <h4 className="font-semibold text-solar-navy mb-2">Why Choose SunTech?</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• 15+ years of Iowa solar experience</li>
                    <li>• Free, no-obligation assessments</li>
                    <li>• Certified, professional installers</li>
                    <li>• Comprehensive warranties</li>
                    <li>• Local Iowa company</li>
                  </ul>
                </div>

                <div className="mt-6 text-center">
                  <p className="text-sm text-gray-600 mb-2">Have questions? Call us directly:</p>
                  <a
                    href="tel:5633074849"
                    className="text-solar-blue hover:text-solar-navy font-semibold text-lg transition-colors duration-200"
                  >
                    (563) 307-4849
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Quote;