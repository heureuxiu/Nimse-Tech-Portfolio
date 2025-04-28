// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaUser, FaArrowRight } from 'react-icons/fa';

const blogsData = [
  {
    id: 1,
    title: "10 Web Design Trends to Watch in 2023",
    excerpt: "Discover the latest trends that are shaping the web design landscape this year and how to implement them in your projects.",
    image: "/blogs/blog1.jpg",
    date: "June 15, 2023",
    author: "Alex Johnson",
    category: "Web Design"
  },
  {
    id: 2,
    title: "The Importance of Mobile-First Design",
    excerpt: "Learn why designing for mobile devices first can improve user experience and boost your website's performance.",
    image: "/blogs/blog2.jpg",
    date: "July 23, 2023",
    author: "Maria Garcia",
    category: "UX Design"
  },
  {
    id: 3,
    title: "Effective SEO Strategies for Small Businesses",
    excerpt: "Simple yet powerful SEO tactics that small businesses can implement to improve their online visibility and attract more customers.",
    image: "/blogs/blog3.jpg",
    date: "August 05, 2023",
    author: "John Smith",
    category: "Digital Marketing"
  }
];

const BlogCard = ({ blog, index }) => {
  return (
    <motion.div
      className="bg-[#fdfdff] rounded-lg shadow-lg overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
    >
      <div className="overflow-hidden">
        <img 
          src={blog.image} 
          alt={blog.title}
          className="w-full h-60 object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center text-sm text-gray-500 mb-3">
          <div className="flex items-center mr-4">
            <FaCalendarAlt className="mr-2" />
            <span>{blog.date}</span>
          </div>
          <div className="flex items-center">
            <FaUser className="mr-2" />
            <span>{blog.author}</span>
          </div>
        </div>
        <h3 className="text-xl font-bold mb-3">{blog.title}</h3>
        <p className="text-gray-600 mb-4">{blog.excerpt}</p>
        <motion.a
          href="#"
          className="inline-flex items-center text-primary font-semibold"
          whileHover={{ x: 5 }}
        >
          Read More
          <FaArrowRight className="ml-2" />
        </motion.a>
      </div>
    </motion.div>
  );
};

const Blogs = () => {
  return (
    <section id="blogs" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Latest Articles</h2>
          <p className="section-subtitle">
            Stay updated with our latest insights, tips, and industry trends
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {blogsData.map((blog, index) => (
            <BlogCard key={blog.id} blog={blog} index={index} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <motion.button
            className="btn btn-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Posts
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default Blogs; 