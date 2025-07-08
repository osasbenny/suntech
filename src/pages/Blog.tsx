import React from 'react';
import { Calendar, ArrowRight, User } from 'lucide-react';
import { Link } from 'react-router-dom';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Iowa Solar Incentives 2024: Complete Guide to Tax Credits and Rebates",
      excerpt: "Discover all the federal and state incentives available for Iowa homeowners considering solar installation. Learn how to maximize your savings with current tax credits, rebates, and financing options.",
      author: "Sarah Williams",
      date: "March 15, 2024",
      readTime: "8 min read",
      category: "Incentives",
      image: "/slider_two.jpg"
    },
    {
      id: 2,
      title: "Solar Panel Performance in Iowa Winters: What You Need to Know",
      excerpt: "Concerned about solar panel efficiency during Iowa's harsh winters? Learn how snow, ice, and cold temperatures actually affect solar energy production and what you can expect year-round.",
      author: "Michael Johnson",
      date: "March 8, 2024",
      readTime: "6 min read",
      category: "Education",
      image: "/7.jpg"
    },
    {
      id: 3,
      title: "Farm Solar Success: How Iowa Agriculture is Embracing Renewable Energy",
      excerpt: "Explore how Iowa farmers are integrating solar energy into their operations. From agrivoltaics to barn-mounted systems, discover the benefits of agricultural solar installations.",
      author: "David Chen",
      date: "February 28, 2024",
      readTime: "10 min read",
      category: "Agriculture",
      image: "/slider.jpg"
    },
    {
      id: 4,
      title: "Battery Storage Systems: Is Solar + Storage Right for Your Iowa Home?",
      excerpt: "Learn about the latest battery storage technology and whether adding storage to your solar system makes sense for Iowa homeowners. Compare costs, benefits, and options.",
      author: "Sarah Williams",
      date: "February 20, 2024",
      readTime: "7 min read",
      category: "Technology",
      image: "/pexels-kindel-media-9875405.jpg"
    },
    {
      id: 5,
      title: "Net Metering in Iowa: How to Maximize Your Solar Savings",
      excerpt: "Understand Iowa's net metering policies and how they affect your solar investment. Learn strategies to optimize your energy usage and maximize credits with your utility company.",
      author: "Michael Johnson",
      date: "February 12, 2024",
      readTime: "5 min read",
      category: "Policy",
      image: "/slider_two.jpg"
    },
    {
      id: 6,
      title: "Solar Installation Timeline: What to Expect During Your Iowa Solar Project",
      excerpt: "Get a detailed walkthrough of the solar installation process from initial consultation to system activation. Learn about permits, inspections, and typical timelines for Iowa projects.",
      author: "David Chen",
      date: "February 5, 2024",
      readTime: "9 min read",
      category: "Process",
      image: "/7.jpg"
    }
  ];

  const categories = ["All", "Incentives", "Education", "Agriculture", "Technology", "Policy", "Process"];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-solar-blue to-solar-navy text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Solar Energy Blog
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
              Stay informed with the latest solar news, tips, and insights from Iowa's solar experts. Learn about incentives, technology, and success stories from across the state.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 mb-12 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                  category === "All" 
                    ? "bg-solar-blue text-white" 
                    : "bg-gray-200 text-gray-700 hover:bg-solar-blue hover:text-white"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Featured Post */}
          <div className="mb-16">
            <div className="grid lg:grid-cols-2 gap-8 items-center bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-8">
                <div className="flex items-center space-x-4 mb-4">
                  <span className="bg-solar-orange text-white px-3 py-1 rounded-full text-sm font-medium">
                    Featured
                  </span>
                  <span className="text-solar-blue text-sm font-medium">
                    {blogPosts[0].category}
                  </span>
                </div>
                <h2 className="text-3xl font-bold text-solar-navy mb-4">
                  {blogPosts[0].title}
                </h2>
                <p className="text-gray-700 mb-6">
                  {blogPosts[0].excerpt}
                </p>
                <div className="flex items-center space-x-4 text-sm text-gray-600 mb-6">
                  <div className="flex items-center space-x-1">
                    <User className="w-4 h-4" />
                    <span>{blogPosts[0].author}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>{blogPosts[0].date}</span>
                  </div>
                  <span>{blogPosts[0].readTime}</span>
                </div>
                <button className="bg-solar-blue hover:bg-solar-navy text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center group">
                  Read Full Article
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                </button>
              </div>
              <div>
                <img
                  src={blogPosts[0].image}
                  alt={blogPosts[0].title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Blog Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post) => (
              <article key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center space-x-2 mb-3">
                    <span className="bg-solar-blue/10 text-solar-blue px-2 py-1 rounded-full text-xs font-medium">
                      {post.category}
                    </span>
                    <span className="text-gray-500 text-xs">{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-solar-navy mb-3 hover:text-solar-blue transition-colors duration-200">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3 text-sm text-gray-500">
                      <div className="flex items-center space-x-1">
                        <User className="w-4 h-4" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{post.date}</span>
                      </div>
                    </div>
                    <button className="text-solar-blue hover:text-solar-navy font-medium text-sm transition-colors duration-200 flex items-center group">
                      Read More
                      <ArrowRight className="ml-1 w-3 h-3 group-hover:translate-x-1 transition-transform duration-200" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-12">
            <button className="bg-solar-orange hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200">
              Load More Articles
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-solar-blue rounded-lg p-8 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter for the latest solar news, Iowa incentives, and energy-saving tips delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-solar-yellow"
              />
              <button className="bg-solar-orange hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-solar-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Go Solar?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Stop reading about solar and start saving with it. Get your free assessment today and join the Iowa solar revolution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/quote"
              className="bg-solar-orange hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 inline-flex items-center group"
            >
              Get Free Assessment
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
            <a
              href="tel:5633074849"
              className="border-2 border-white text-white hover:bg-white hover:text-solar-navy px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200"
            >
              Call (563) 307-4849
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;