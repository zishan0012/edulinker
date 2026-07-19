import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Clock, Users, BookOpen, CheckCircle, Award } from 'lucide-react';

const CourseDetails = () => {
  const { id } = useParams();

  // Mock data for the specific course (In a real app, you'd fetch this based on the ID)
  const course = {
    id: id,
    title: 'Complete Full-Stack Web Development Bootcamp',
    category: 'Web Development',
    instructor: {
      name: 'Sarah Jenkins',
      title: 'Senior Software Engineer & Educator',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200',
    },
    rating: 4.8,
    reviews: 324,
    students: 1240,
    price: '$89.99',
    duration: '42.5 hours',
    level: 'Beginner to Advanced',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1200',
    description: 'Learn web development from scratch with HTML, CSS, JavaScript, React, Node.js, and MongoDB. This comprehensive bootcamp will take you from a complete beginner to a job-ready full-stack developer. You will build real-world projects, learn industry best practices, and master the modern web development workflow.',
    whatYouWillLearn: [
      'Build responsive websites using HTML5 and CSS3',
      'Master JavaScript ES6+ and modern programming concepts',
      'Create dynamic single-page applications with React',
      'Build scalable backend APIs with Node.js and Express',
      'Work with NoSQL databases using MongoDB and Mongoose',
      'Implement authentication and authorization using JWT',
      'Deploy full-stack applications to cloud platforms',
      'Understand Git and GitHub for version control',
    ],
    modules: [
      { title: 'Introduction to Web Development', duration: '2 hours' },
      { title: 'HTML5 & Semantic Markup', duration: '4.5 hours' },
      { title: 'CSS3 & Responsive Design', duration: '6 hours' },
      { title: 'JavaScript Essentials', duration: '8.5 hours' },
      { title: 'React.js Mastery', duration: '12 hours' },
      { title: 'Node.js & Backend Architecture', duration: '9.5 hours' },
    ]
  };

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      {/* Course Banner */}
      <div className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-2/3">
              <div className="flex items-center gap-2 mb-4 text-blue-400 font-medium text-sm">
                <Link to="/courses" className="hover:text-blue-300">Courses</Link>
                <span>&gt;</span>
                <span>{course.category}</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">{course.title}</h1>
              <p className="text-lg text-slate-300 mb-6">{course.description}</p>
              
              <div className="flex flex-wrap items-center gap-6 text-sm text-slate-300 mb-8">
                <div className="flex items-center text-amber-500">
                  <Star className="w-5 h-5 fill-current mr-1" />
                  <span className="font-bold text-white mr-1">{course.rating}</span>
                  <span className="text-slate-400">({course.reviews} reviews)</span>
                </div>
                <div className="flex items-center">
                  <Users className="w-5 h-5 mr-2" />
                  <span>{course.students} students</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-5 h-5 mr-2" />
                  <span>{course.duration}</span>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <img src={course.instructor.image} alt={course.instructor.name} className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <div className="font-medium">Created by {course.instructor.name}</div>
                  <div className="text-slate-400 text-sm">{course.instructor.title}</div>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/3 w-full">
              <div className="bg-white rounded-2xl overflow-hidden shadow-2xl text-slate-900 sticky top-24">
                <img src={course.image} alt={course.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <div className="text-3xl font-bold mb-6">{course.price}</div>
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-xl transition-colors mb-4">
                    Add to Cart
                  </button>
                  <button className="w-full bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold py-3 px-4 rounded-xl transition-colors mb-6">
                    Enroll Now
                  </button>
                  
                  <div className="text-sm text-slate-600 space-y-3">
                    <div className="flex items-center">
                      <BookOpen className="w-5 h-5 mr-3 text-slate-400" />
                      <span>Full lifetime access</span>
                    </div>
                    <div className="flex items-center">
                      <Award className="w-5 h-5 mr-3 text-slate-400" />
                      <span>Certificate of completion</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Course Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="lg:w-2/3 pr-0 lg:pr-12">
          {/* What you'll learn */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 mb-10">
            <h2 className="text-2xl font-bold mb-6 text-slate-900">What you'll learn</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {course.whatYouWillLearn.map((item, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="w-5 h-5 mr-3 text-blue-500 shrink-0 mt-0.5" />
                  <span className="text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Curriculum */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold mb-6 text-slate-900">Course Content</h2>
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
              {course.modules.map((module, index) => (
                <div key={index} className="border-b border-slate-100 last:border-b-0 p-5 hover:bg-slate-50 transition-colors flex justify-between items-center cursor-pointer">
                  <div className="flex items-center">
                    <div className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm mr-4 shrink-0">
                      {index + 1}
                    </div>
                    <span className="font-medium text-slate-800">{module.title}</span>
                  </div>
                  <span className="text-slate-500 text-sm whitespace-nowrap ml-4">{module.duration}</span>
                </div>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
