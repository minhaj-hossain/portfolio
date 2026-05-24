import React from 'react';

const QuoteSection = () => {
    return (
        <>
            {/* Quote Section */}
            <section className="py-20 md:py-section-gap text-center relative overflow-hidden">
                <div className="absolute inset-0 kinetic-gradient opacity-30 -skew-y-3"></div>
                <div className="relative z-10 px-4 md:px-6">
                    <span className="material-symbols-outlined text-secondary text-4xl md:text-5xl mb-stack-sm animate-bounce">format_quote</span>
                    <blockquote className="font-display text-2xl sm:text-4xl md:text-6xl text-on-surface max-w-5xl mx-auto italic font-black leading-tight tracking-tighter">
                        &quot;First, solve the problem.  <br className="hidden sm:block" /> Then,  <span className="text-[#00f2ff] text-glow">write the code.</span>&quot;
                    </blockquote>
                    <p className="mt-8 md:mt-stack-md font-mono text-[9px] md:text-[10px] text-on-surface-variant uppercase tracking-[0.3em] font-bold">— john Johnson</p>
                </div>
            </section>
        </>
    );
};

export default QuoteSection;