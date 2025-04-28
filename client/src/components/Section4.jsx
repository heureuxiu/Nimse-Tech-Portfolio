// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const teamMembers = [
  {
    id: 1,
    name: 'John Doe',
    role: 'CEO & Founder',
    image: 'https://placehold.co/400x400/5443a9/FFFFFF/png?text=John',
    bio: 'John has over 15 years of experience in the tech industry and leads our company vision.',
    socials: {
      twitter: '#',
      linkedin: '#',
      github: '#'
    }
  },
  {
    id: 2,
    name: 'Jane Smith',
    role: 'CTO',
    image: 'https://placehold.co/400x400/5443a9/FFFFFF/png?text=Jane',
    bio: 'Jane brings 12 years of software development expertise and oversees all technical operations.',
    socials: {
      twitter: '#',
      linkedin: '#',
      github: '#'
    }
  },
  {
    id: 3,
    name: 'Michael Johnson',
    role: 'Design Director',
    image: 'https://placehold.co/400x400/5443a9/FFFFFF/png?text=Michael',
    bio: 'Michael is an award-winning designer with a passion for creating beautiful, functional interfaces.',
    socials: {
      twitter: '#',
      linkedin: '#',
      github: '#'
    }
  },
  {
    id: 4,
    name: 'Sarah Williams',
    role: 'Marketing Lead',
    image: 'https://placehold.co/400x400/5443a9/FFFFFF/png?text=Sarah',
    bio: 'Sarah has a proven track record of creating marketing strategies that drive growth.',
    socials: {
      twitter: '#',
      linkedin: '#',
      github: '#'
    }
  }
];

const TeamMemberCard = ({ member, index }) => {
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
        src={member.image} 
        alt={member.name} 
        className="w-full h-64 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-bold">{member.name}</h3>
        <p className="text-primary font-medium mb-3">{member.role}</p>
        <p className="text-gray-600 mb-4">{member.bio}</p>
        <div className="flex space-x-4">
          <a href={member.socials.twitter} className="text-gray-500 hover:text-primary transition-colors">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.232 8.232 0 012 18.407a11.616 11.616 0 006.29 1.84" />
            </svg>
          </a>
          <a href={member.socials.linkedin} className="text-gray-500 hover:text-primary transition-colors">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" clipRule="evenodd" />
            </svg>
          </a>
          <a href={member.socials.github} className="text-gray-500 hover:text-primary transition-colors">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const Section4 = () => {
  return (
    <section id="team" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Team</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our talented team of professionals is passionate about creating exceptional digital experiences.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <TeamMemberCard key={member.id} member={member} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section4; 