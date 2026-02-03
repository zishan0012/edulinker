import React from 'react';
import { Star, Users, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const CourseCard = ({ course }) => {
    return (
        <div className="glass-card bg-white overflow-hidden group border-l-4 border-transparent hover:border-brand-500 h-full flex flex-col transition-all duration-300">
            <div className="relative overflow-hidden aspect-[16/10]">
                <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4">
                    <span className="bg-brand-500/90 backdrop-blur-sm text-white px-4 py-1.5 rounded-lg text-xs font-bold shadow-lg shadow-brand-500/20 uppercase tracking-widest">
                        {course.category}
                    </span>
                </div>
            </div>

            <div className="p-8 flex flex-col flex-grow space-y-4">
                <div className="flex items-center justify-between text-[11px] font-black uppercase tracking-widest opacity-60">
                    <div className="flex items-center gap-1.5 text-brand-600">
                        <Star size={14} fill="currentColor" />
                        <span>{course.rating} Rating</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                        <Users size={14} />
                        <span>{course.students} Students</span>
                    </div>
                </div>

                <h3 className="text-xl font-bold text-black group-hover:text-brand-500 transition-colors line-clamp-2 leading-tight uppercase tracking-tight">
                    {course.title}
                </h3>

                <div className="flex items-center gap-3 py-4 border-y border-neutral-50">
                    <div className="w-10 h-10 rounded-xl bg-neutral-100 flex items-center justify-center text-brand-500 font-black text-sm">
                        {course.instructor.charAt(0)}
                    </div>
                    <div className="flex flex-col">
                        <span className="text-[10px] text-neutral-400 font-bold uppercase tracking-widest">Instructor</span>
                        <span className="text-sm font-bold text-neutral-700">{course.instructor}</span>
                    </div>
                    <div className="ml-auto flex items-center gap-1.5 text-neutral-400 font-bold">
                        <Clock size={14} />
                        <span className="text-[10px] uppercase">{course.duration}</span>
                    </div>
                </div>

                <div className="pt-4 flex items-center justify-between mt-auto">
                    <div className="flex flex-col">
                        <span className="text-[10px] text-neutral-400 font-bold uppercase tracking-widest">Course Fee</span>
                        <span className="text-2xl font-black text-black">${course.price}</span>
                    </div>
                    <Link to={`/courses/${course.id}`} className="w-12 h-12 bg-brand-50 rounded-xl flex items-center justify-center text-brand-500 group-hover:bg-brand-500 group-hover:text-white transition-all duration-300">
                        <ArrowRight size={20} />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CourseCard;
