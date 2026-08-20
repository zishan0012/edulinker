import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Clock, User, Tag, Search, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const posts = [
    {
      id: 1,
      title: 'Top 10 Web Development Trends to Watch in 2025',
      excerpt: 'From AI-assisted coding to WebAssembly, we break down the technologies that are shaping the future of the web and what you need to learn now.',
      category: 'Web Development',
      author: 'Sarah Jenkins',
      date: 'July 15, 2026',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=700',
      featured: true,
    },
    {
      id: 2,
      title: 'How to Break Into Data Science with No Experience',
      excerpt: 'A step-by-step roadmap for aspiring data scientists, covering the key skills, tools, and projects you need to land your first role.',
      category: 'Data Science',
      author: 'Dr. Alan Smith',
      date: 'July 10, 2026',
      readTime: '8 min read',
      image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&q=80&w=700',
      featured: false,
    },
    {
      id: 3,
      title: 'The UI/UX Design Principles Every Developer Should Know',
      excerpt: 'Good design is not just for designers. Discover the core visual principles that will help you build more intuitive and beautiful interfaces.',
      category: 'Design',
      author: 'Jessica Wong',
      date: 'July 5, 2026',
      readTime: '5 min read',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=700',
      featured: false,
    },
    {
      id: 4,
      title: 'Understanding React Server Components: A Deep Dive',
      excerpt: 'React Server Components are changing how we think about data fetching and rendering. This guide cuts through the complexity with practical examples.',
      category: 'Web Development',
      author: 'Mike Johnson',
      date: 'June 28, 2026',
      readTime: '10 min read',
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=700',
      featured: false,
    },
    {
      id: 5,
      title: 'SEO in 2025: What Still Works and What Doesn\'t',
      excerpt: 'The SEO landscape has shifted dramatically. We analyze the latest algorithm updates and share the strategies that are delivering real results today.',
      category: 'Marketing',
      author: 'Emma Thompson',
      date: 'June 20, 2026',
      readTime: '7 min read',
      image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&q=80&w=700',
      featured: false,
    },
    {
      id: 6,
      title: 'Deploying Python Apps to AWS: A Complete Guide',
      excerpt: 'From EC2 instances to Lambda functions and ECS containers, learn the best ways to host your Python applications on Amazon Web Services.',
      category: 'Cloud',
      author: 'David Chen',
      date: 'June 12, 2026',
      readTime: '9 min read',
      image: 'https://miro.medium.com/1*bH7r8B1_4D93Vt37ZZ-tcg@2x.jpeg',
      featured: false,
    },
    {
      id: 7,
      title: 'Making It Personal: The Future of Professional Learning',
      excerpt: 'Explore the rise of personalized learning technologies and how AI is enabling customized education pathways for every student.',
      category: 'Career',
      author: 'Aarav Malhotra',
      date: 'July 19, 2026',
      readTime: '6 min read',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRanN9b8wH44fy3iWv-jFTkHVGZdvfCVI0A9hzjNNDbFA&s=10',
      featured: false,
    },
  ];

  const featuredPost = posts.find(p => p.featured);
  const filteredPosts = posts.filter(p =>
    !p.featured && p.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const tags = ['All', 'Web Development', 'Data Science', 'Design', 'Marketing', 'Cloud'];

  return (
    <div className="bg-slate-50 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Edulinker Blog</h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Insights, tutorials, and career tips from our expert instructors and the tech community.
            </p>
          </motion.div>
        </div>

        {/* Featured Post */}
        {featuredPost && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 mb-16 group hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative h-64 lg:h-auto overflow-hidden">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                  Featured
                </div>
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-blue-50 text-blue-600 text-xs font-semibold px-3 py-1 rounded-full">{featuredPost.category}</span>
                </div>
                <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors leading-tight">
                  {featuredPost.title}
                </h2>
                <p className="text-slate-600 leading-relaxed mb-6">{featuredPost.excerpt}</p>
                <div className="flex items-center gap-4 text-sm text-slate-500 mb-6">
                  <span className="flex items-center gap-1"><User className="w-4 h-4" />{featuredPost.author}</span>
                  <span className="flex items-center gap-1"><Clock className="w-4 h-4" />{featuredPost.readTime}</span>
                </div>
                <Link to={`/blog/${featuredPost.id}`} className="inline-flex items-center gap-2 text-blue-600 font-bold hover:text-blue-700 transition-colors">
                  Read Article <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        )}

        {/* Search Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-10">
          <div className="flex overflow-x-auto gap-2 pb-2 md:pb-0 w-full md:w-auto hide-scrollbar">
            {tags.map(tag => (
              <button key={tag} className="px-4 py-2 rounded-full text-sm font-medium bg-white border border-slate-200 text-slate-600 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-colors whitespace-nowrap">
                {tag}
              </button>
            ))}
          </div>
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 border border-slate-200 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm transition-colors"
            />
          </div>
        </div>

        {/* Posts Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300 group flex flex-col"
            >
              <div className="relative h-48 overflow-hidden shrink-0">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-slate-700 text-xs font-semibold px-3 py-1 rounded-full">
                  {post.category}
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h2 className="text-lg font-bold text-slate-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors leading-snug">
                  {post.title}
                </h2>
                <p className="text-slate-500 text-sm leading-relaxed line-clamp-3 mb-4 flex-grow">{post.excerpt}</p>
                <div className="flex items-center justify-between text-xs text-slate-400 pt-4 border-t border-slate-100 mt-auto">
                  <span className="flex items-center gap-1"><User className="w-3.5 h-3.5" />{post.author}</span>
                  <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{post.readTime}</span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Blog;
