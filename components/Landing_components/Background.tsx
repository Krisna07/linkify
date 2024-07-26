'use client';
import React, { useEffect, useRef, useState } from 'react';
import { AnyPixelFormat } from 'three';

const Background = () => {
    const bgRef = useRef(null);
    const [points, setPoints] = useState(0);

    const getRect = (obj:any) => {
        return obj.getBoundingClientRect();
    };

    const calculatePoints = () => {
        const rect = getRect(bgRef.current);
        const Widthnumbers = rect.width / 100;
        const heightNum = rect.height / 100;
        setPoints(Math.round(Widthnumbers * heightNum));
    };

    useEffect(() => {
        calculatePoints();
        window.addEventListener('resize', calculatePoints);

        // Cleanup event listener on unmount
        return () => {
            window.removeEventListener('resize', calculatePoints);
        };
    }, []);

    // console.log(points);

    return (
        <div ref={bgRef} className='absolute w-full h-full bg-dark/75 z-20 flex items-center justify-center wrap overflow-hidden'>
            {[...Array(points).keys()].map( (index) => 
                <div key={index} className='w-2 h-2 bg-silver animate-pulse rounded-full ' style={{ position: 'absolute', top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%` }}></div>
            )}
        </div>
    );
};

export default Background;
