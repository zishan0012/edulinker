import React from 'react';
import { motion as Motion } from 'framer-motion';

const Reveal = ({ children, className = "", delay = 0 }) => {
    return (
        <Motion.div
            variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: delay }}
            className={className}
        >
            {children}
        </Motion.div>
    );
};

export default Reveal;
