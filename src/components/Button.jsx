import React from 'react';
import { ArrowRight } from 'lucide-react';

const Button = ({ children, variant = 'primary', icon: Icon, className = '', ...props }) => {
    const baseStyles = "inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:-tranneutral-y-1 active:tranneutral-y-0 focus:outline-none focus:ring-2 focus:ring-offset-2";

    const variants = {
        primary: "bg-primary text-white shadow-lg hover:shadow-glow hover:bg-primary-dark",
        secondary: "bg-white text-primary border-2 border-primary hover:bg-primary-light",
        outline: "bg-transparent text-white border-2 border-white hover:bg-white hover:text-primary",
        ghost: "bg-transparent text-primary hover:bg-primary-light",
    };

    return (
        <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
            {children}
            {Icon && <Icon size={20} />}
            {!Icon && variant === 'primary' && <ArrowRight size={20} />}
        </button>
    );
};

export default Button;
