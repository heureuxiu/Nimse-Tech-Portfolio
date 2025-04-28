// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { FaTwitter, FaLinkedinIn, FaDribbble } from 'react-icons/fa';

const teamData = [
  {
    id: 1,
    name: "John Smith",
    position: "Creative Director",
    image: "/team/team1.jpg",
    social: {
      twitter: "#",
      linkedin: "#",
      dribbble: "#"
    }
  },
  {
    id: 2,
    name: "Sarah Johnson",
    position: "Lead Developer",
    image: "/team/team2.jpg",
    social: {
      twitter: "#",
      linkedin: "#",
      dribbble: "#"
    }
  },
  {
    id: 3,
    name: "Michael Chen",
    position: "UI/UX Designer",
    image: "/team/team3.jpg",
    social: {
      twitter: "#",
      linkedin: "#",
      dribbble: "#"
    }
  },
  {
    id: 4,
    name: "Emily Rodriguez",
    position: "Marketing Specialist",
    image: "/team/team4.jpg",
    social: {
      twitter: "#",
      linkedin: "#",
      dribbble: "#"
    }
  }
];

const TeamMemberCard = ({ member, index }) => {
  return (
    <motion.div
      className="bg-white rounded-lg shadow-lg overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
    >
      <div className="relative overflow-hidden group">
        <img 
          src={member.image} 
          alt={member.name}
          className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-primary bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
          <motion.a
            href={member.social.twitter}
            className="bg-white text-primary p-3 rounded-full"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaTwitter />
          </motion.a>
          <motion.a
            href={member.social.linkedin}
            className="bg-white text-primary p-3 rounded-full"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaLinkedinIn />
          </motion.a>
          <motion.a
            href={member.social.dribbble}
            className="bg-white text-primary p-3 rounded-full"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaDribbble />
          </motion.a>
        </div>
      </div>
      <div className="p-6 text-center">
        <h3 className="text-xl font-bold text-dark">{member.name}</h3>
        <p className="text-gray-600 mt-2">{member.position}</p>
      </div>
    </motion.div>
  );
};

const Team = () => {
  return (
    <section id="team" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Meet Our Team</h2>
          <p className="section-subtitle">
            Our talented professionals who are committed to delivering excellence in every project
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {teamData.map((member, index) => (
            <TeamMemberCard key={member.id} member={member} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team; 