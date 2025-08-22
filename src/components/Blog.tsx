import React from 'react';
import { Calendar, User, ArrowRight } from 'lucide-react';

const Blog: React.FC = () => {
  const blogPosts = [
    {
      title: "Why Every Muslim Should Learn Arabic",
      excerpt: "Discover the profound spiritual and intellectual benefits of learning the language of the Qur'an and how it deepens your connection to Islamic teachings.",
      image: "https://images.pexels.com/photos/8471879/pexels-photo-8471879.jpeg?auto=compress&cs=tinysrgb&w=600",
      author: "Dr. Ahmad Al-Mansouri",
      date: "December 15, 2024",
      readTime: "5 min read",
      slug: "why-every-muslim-should-learn-arabic"
    },
    {
      title: "Top Benefits of Learning Arabic Online",
      excerpt: "Explore the advantages of online Arabic learning, from flexible scheduling to accessing world-class instructors from the comfort of your home.",
      image: "https://images.pexels.com/photos/8164742/pexels-photo-8164742.jpeg?auto=compress&cs=tinysrgb&w=600",
      author: "Sarah Khalil",
      date: "December 12, 2024",
      readTime: "4 min read",
      slug: "benefits-of-learning-arabic-online"
    },
    {
      title: "How Tarteel Academy Makes Arabic Easy for Beginners",
      excerpt: "Learn about our proven methodology that has helped thousands of complete beginners achieve Arabic fluency through structured, interactive learning.",
      image: "https://images.pexels.com/photos/8164654/pexels-photo-8164654.jpeg?auto=compress&cs=tinysrgb&w=600",
      author: "Prof. Yusuf Al-Azhari",
      date: "December 10, 2024",
      readTime: "6 min read",
      slug: "arabic-easy-for-beginners"
    }
  ];

  return (
    <section id="blog" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Arabic Learning Insights</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover valuable tips, insights, and inspiration for your Arabic learning journey
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post, index) => (
            <article key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4 bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {post.readTime}
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <User className="w-4 h-4 mr-2" />
                  <span className="mr-4">{post.author}</span>
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>{post.date}</span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">{post.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{post.excerpt}</p>
                
                <a
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center text-emerald-600 font-semibold hover:text-emerald-700 transition-colors"
                >
                  Read More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">Stay Updated with Arabic Learning Tips</h3>
          <p className="text-emerald-100 mb-6 max-w-2xl mx-auto">
            Get weekly insights, learning strategies, and exclusive content delivered to your inbox
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-full text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="bg-white text-emerald-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
              Subscribe
            </button>
          </div>
        </div>

        {/* SEO Keywords Section */}
        <div className="mt-16 text-center">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Popular Arabic Learning Topics</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "Learn Arabic online",
                "Arabic tutoring worldwide",
                "Quran Arabic lessons",
                "Online Arabic classes for adults",
                "Affordable Arabic courses",
                "Arabic fluency academy",
                "Islamic Arabic learning",
                "Arabic conversation practice"
              ].map((keyword, index) => (
                <span key={index} className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm hover:bg-emerald-100 hover:text-emerald-700 transition-colors cursor-pointer">
                  {keyword}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;