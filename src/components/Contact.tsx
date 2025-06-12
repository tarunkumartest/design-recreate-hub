import React, { useState } from 'react';

export const Contact: React.FC = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleEmailClick = () => {
    window.location.href = 'mailto:tarunkumargadiraju@proton.me';
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent('Portfolio Contact');
    const body = encodeURIComponent(`From: ${email}\n\nMessage:\n${message}`);
    window.location.href = `mailto:tarunkumargadiraju@proton.me?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="mt-[39px] pb-[100px] px-[97px] py-0 max-md:px-10 max-md:py-0 max-sm:px-5 max-sm:py-0">
      <h2 className="text-[#F7F197] text-[100px] font-extrabold leading-[116px] mb-8 max-sm:text-6xl max-sm:leading-[70px]">
        contact.
      </h2>
      
      <button
        onClick={handleEmailClick}
        className="text-[#03045E] text-2xl font-normal leading-[44px] max-sm:text-lg hover:opacity-70 transition-opacity cursor-pointer underline"
      >
        tarunkumargadiraju@proton.me
      </button>
      
      <p className="text-[#03045E] text-2xl font-normal leading-[44px] w-[640px] mt-11 mb-8 max-md:w-full max-sm:text-lg max-sm:leading-8">
        If you're planning to launch a product, optimize your infrastructure, or build an AI-powered MVP — I'd love to hear from you.
        <br />
        <br />
        Whether you're an early-stage founder, a growing team, or just exploring ideas, I can help turn your vision into scalable, functional software.
      </p>

      <form onSubmit={handleSubmit} className="max-w-[640px] space-y-4">
        <div>
          <label htmlFor="email" className="block text-[#03045E] text-lg font-medium mb-2">
            Your Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-3 border-2 border-[#03045E] rounded-lg bg-[#FBF8CC] text-[#03045E] placeholder-[#03045E]/60 focus:outline-none focus:ring-2 focus:ring-[#F7F197] focus:border-[#F7F197] transition-colors"
            placeholder="your.email@example.com"
          />
        </div>
        
        <div>
          <label htmlFor="message" className="block text-[#03045E] text-lg font-medium mb-2">
            Message
          </label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            rows={5}
            className="w-full px-4 py-3 border-2 border-[#03045E] rounded-lg bg-[#FBF8CC] text-[#03045E] placeholder-[#03045E]/60 focus:outline-none focus:ring-2 focus:ring-[#F7F197] focus:border-[#F7F197] transition-colors resize-vertical"
            placeholder="Tell me about your project..."
          />
        </div>
        
        <button
          type="submit"
          className="px-8 py-3 bg-[#03045E] text-[#FBF8CC] font-semibold rounded-lg hover:bg-[#03045E]/90 focus:outline-none focus:ring-2 focus:ring-[#F7F197] focus:ring-offset-2 focus:ring-offset-[#FBF8CC] transition-colors"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};
