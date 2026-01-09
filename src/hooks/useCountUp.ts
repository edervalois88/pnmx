'use client';

import { useEffect, useState, useRef } from 'react';

interface UseCountUpOptions {
    end: number;
    duration?: number;
    start?: number;
    decimals?: number;
    prefix?: string;
    suffix?: string;
}

export function useCountUp({
    end,
    duration = 2000,
    start = 0,
    decimals = 0,
    prefix = '',
    suffix = ''
}: UseCountUpOptions) {
    const [count, setCount] = useState(start);
    const [isVisible, setIsVisible] = useState(false);
    const elementRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !isVisible) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        const currentElement = elementRef.current;
        if (currentElement) {
            observer.observe(currentElement);
        }

        return () => {
            if (currentElement) {
                observer.unobserve(currentElement);
            }
        };
    }, [isVisible]);

    useEffect(() => {
        if (!isVisible) return;

        const startTime = Date.now();
        const range = end - start;

        const timer = setInterval(() => {
            const now = Date.now();
            const progress = Math.min((now - startTime) / duration, 1);

            // Easing function for smooth animation
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);
            const currentCount = start + range * easeOutQuart;

            setCount(currentCount);

            if (progress === 1) {
                clearInterval(timer);
                setCount(end);
            }
        }, 16); // ~60fps

        return () => clearInterval(timer);
    }, [isVisible, end, start, duration]);

    const formattedValue = `${prefix}${count.toFixed(decimals).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}${suffix}`;

    return { value: formattedValue, ref: elementRef };
}
