import { useInView } from 'framer-motion'
import { useRef } from 'react';

export function FadeIn({ children }) { // fades in element when first in view
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <section ref={ref}>
            <span
                style={{
                    transform: isInView ? "none" : "translateX(-200px)",
                    opacity: isInView ? 1 : 0,
                    transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.1s"
                }}
            >
                {children}
            </span>
        </section>
    );
}
