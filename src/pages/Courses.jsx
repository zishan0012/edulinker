import React from 'react';
import CourseCard from '../components/CourseCard';
import { Search, Filter, SlidersHorizontal } from 'lucide-react';
import { Link } from 'react-router-dom';

const Courses = () => {
    const allCourses = [
        {
            id: 1,
            title: 'Complete Web Design: from Figma to Webflow to Freelancing',
            instructor: 'Vako Shvili',
            rating: 4.8,
            students: '12k',
            duration: '24h',
            price: 49,
            image: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&w=800&q=80',
            category: 'Design'
        },
        {
            id: 2,
            title: 'The Complete Python Bootcamp From Zero to Hero in Python',
            instructor: 'Jose Portilla',
            rating: 4.9,
            students: '45k',
            duration: '32h',
            price: 59,
            image: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?auto=format&fit=crop&w=800&q=80',
            category: 'Development'
        },
        {
            id: 3,
            title: 'Digital Marketing Masterclass - 23 Courses in 1',
            instructor: 'Phil Ebiner',
            rating: 4.7,
            students: '8k',
            duration: '18h',
            price: 39,
            image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&w=800&q=80',
            category: 'Marketing'
        },
        {
            id: 4,
            title: 'Machine Learning A-Z™: Hands-On Python & R In Data Science',
            instructor: 'Kirill Eremenko',
            rating: 4.5,
            students: '22k',
            duration: '40h',
            price: 69,
            image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=800&q=80',
            category: 'Data Science'
        },
        {
            id: 5,
            title: 'Photography Masterclass: A Complete Guide to Photography',
            instructor: 'Phil Ebiner',
            rating: 4.9,
            students: '15k',
            duration: '12h',
            price: 29,
            image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80',
            category: 'Photography'
        },
        {
            id: 6,
            title: 'Adobe Photoshop CC – Essentials Training Course',
            instructor: 'Daniel Scott',
            rating: 4.8,
            students: '9k',
            duration: '16h',
            price: 35,
            image: 'https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&w=800&q=80',
            category: 'Design'
        }
    ];

    return (
        <div className="main-content">
            {/* Header Section */}
            <section className="bg-white pt-20 pb-32 relative overflow-hidden">
                <div className="absolute inset-0 pattern-circuit opacity-[0.03]"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <span className="text-brand-500 font-bold uppercase tracking-[0.2em] text-[10px] mb-4 block">Knowledge Hub</span>
                    <h1 className="text-5xl md:text-7xl font-bold text-slate-900 leading-tight mb-8 italic">
                        Explore Our <span className="gradient-text">Courses</span>
                    </h1>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
                        Discover top-rated programs taught by industry leaders. Master new skills at your own pace with our certified curriculum.
                    </p>
                </div>
            </section>

            <section className="py-24 bg-slate-50 relative">
                <div className="absolute inset-0 pattern-cubes opacity-[0.02]"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    {/* Search and Filter */}
                    <div className="flex flex-col lg:flex-row justify-between items-center gap-8 mb-16">
                        <div className="relative w-full lg:w-[500px] group">
                            <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-brand-500 transition-colors" size={20} />
                            <input
                                type="text"
                                placeholder="What do you want to learn today?"
                                className="w-full pl-16 pr-6 py-5 rounded-xl bg-white border border-slate-100 focus:outline-none focus:ring-4 focus:ring-brand-500/10 focus:border-brand-500 transition-all shadow-xl shadow-slate-200/50"
                            />
                        </div>

                        <div className="flex items-center gap-4 w-full lg:w-auto overflow-x-auto pb-4 lg:pb-0">
                            <div className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-100 rounded-lg text-slate-500 font-bold text-xs uppercase tracking-widest mr-2">
                                <SlidersHorizontal size={16} /> Filters
                            </div>
                            {['All', 'Development', 'Design', 'Business'].map((cat, i) => (
                                <button
                                    key={cat}
                                    className={`whitespace-nowrap px-6 py-2.5 rounded-lg font-bold text-sm transition-all ${i === 0
                                        ? 'bg-brand-500 text-white shadow-lg shadow-brand-500/20'
                                        : 'bg-white text-slate-600 border border-slate-100 hover:border-brand-500 hover:text-brand-500'
                                        }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Course Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {allCourses.map(course => (
                            <CourseCard key={course.id} course={course} />
                        ))}
                    </div>

                    <div className="mt-24 text-center">
                        <button className="btn-primary px-12 py-5 text-lg">
                            Load More Programs
                        </button>
                        <p className="mt-6 text-xs text-slate-400 font-bold uppercase tracking-widest">Showing {allCourses.length} of 500+ Courses</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Courses;
