// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const blogPosts = [
  {
    id: 1,
    title: 'The Future of Web Development in 2023',
    excerpt: 'Explore the latest trends and technologies shaping the web development landscape this year.',
    image: 'https://placehold.co/600x400/5443a9/FFFFFF/png?text=Web+Development',
    date: 'June 15, 2023',
    author: 'John Doe',
    category: 'Development'
  },
  {
    id: 2,
    title: 'How AI is Transforming Digital Marketing',
    excerpt: 'Discover how artificial intelligence is revolutionizing marketing strategies and customer engagement.',
    image: 'https://placehold.co/600x400/5443a9/FFFFFF/png?text=AI+Marketing',
    date: 'May 28, 2023',
    author: 'Jane Smith',
    category: 'Marketing'
  },
  {
    id: 3,
    title: 'UX Design Principles Every Designer Should Know',
    excerpt: 'Learn the fundamental principles of user experience design that lead to successful digital products.',
    image: 'https://placehold.co/600x400/5443a9/FFFFFF/png?text=UX+Design',
    date: 'April 12, 2023',
    author: 'Michael Johnson',
    category: 'Design'
  },
  {
    id: 4,
    title: 'Building Scalable Applications with Modern Architecture',
    excerpt: 'A deep dive into architectural patterns that enable applications to scale efficiently.',
    image: 'https://placehold.co/600x400/5443a9/FFFFFF/png?text=Architecture',
    date: 'March 29, 2023',
    author: 'Sarah Williams',
    category: 'Development'
  },
  {
    id: 5,
    title: 'The Psychology of Color in Brand Identity',
    excerpt: 'Understand how color choices influence consumer perception and brand recognition.',
    image: 'https://placehold.co/600x400/5443a9/FFFFFF/png?text=Brand+Colors',
    date: 'February 18, 2023',
    author: 'David Brown',
    category: 'Branding'
  },
  {
    id: 6,
    title: 'Maximizing ROI on Your Digital Marketing Campaigns',
    excerpt: 'Strategies and tactics to ensure your marketing budget delivers the best possible returns.',
    image: 'https://placehold.co/600x400/5443a9/FFFFFF/png?text=Marketing+ROI',
    date: 'January 5, 2023',
    author: 'Emily Chen',
    category: 'Marketing'
  }
];

const BlogCard = ({ post, index }) => {
  return (
    <motion.div
      className="bg-[#fdfdff] rounded-lg shadow-lg overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -10, transition: { duration: 0.3 } }}
    >
      <img 
        src={post.image} 
        alt={post.title} 
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <div className="flex justify-between items-center mb-3">
          <span className="text-sm text-primary font-medium">{post.category}</span>
          <span className="text-sm text-gray-500">{post.date}</span>
        </div>
        <h3 className="text-xl font-bold mb-3">{post.title}</h3>
        <p className="text-gray-600 mb-4">{post.excerpt}</p>
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-500">By {post.author}</span>
          <a href="#" className="text-primary font-medium hover:text-purple-600 transition-colors">
            Read More →
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const Section6 = () => {
  return (
    <section id="blogs" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Latest Insights</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Stay updated with our latest articles, insights, and industry trends.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <BlogCard key={post.id} post={post} index={index} />
          ))}
        </div>
        
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <button className="px-8 py-3 border border-primary text-primary rounded-full font-medium hover:bg-primary hover:text-white transition-colors">
            View All Articles
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Section6; 