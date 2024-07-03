import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export function About() {
  return (
    <div className="max-w-3xl mx-auto py-8 px-4">
    <h2 className="text-2xl font-bold mb-4">Hi, I'm Evandro!</h2>
    <p className="text-base text-gray-400 mb-4">
    I am a passionate developer. I started coding around 2010. My professional journey took a brief deviation into marketing, where I dedicated around 7 years to gaining valuable insights into education and improving my soft skills.
    </p>
    <p className="text-base text-gray-400 mb-4">
    I've been enjoying my time living in Melbourne, VIC, Australia. I'm totally open to packing my bags and moving anywhere, depending on the opportunities and lifestyle it offers.
    </p>
    <p className="text-base text-gray-400 mb-4">
    This is my corner on the web for writing, projects, and anything else I want to share. Check out my {' '}
    <a href="https://github.com/evandrolugli" target="_blank" rel="noopener noreferrer" className="text-purple-300 hover:text-purple-400">GitHub</a>.
    
    </p>
    <p className="text-base text-gray-400 mb-4">
    This site is ad-free, without affiliate links, tracking, analytics, sponsored posts, or a paywall.
    </p>
    <p className="text-base text-gray-400 mb-4">
    My motivation behind this space is self-expression and sharing my learnings with the world. I hope to inspire others to create their own creative corners on the web. Feel free to drop me an email at <a href="mailto:evandro.lugli@gmail.com" className="text-purple-300 hover:text-purple-400">evandro.lugli@gmail.com</a> to say hi!
    </p>
    
    <h3 className="text-2xl font-bold mt-8 mb-4">Interests</h3>
    <div className="mb-6">
      <h4 className="text-lg font-bold mb-2">Books</h4>
      <ul className="list-disc list-inside text-base text-gray-300">
        <li><strong>Animal Farm</strong> by George Orwell</li>
        <li><strong>1984</strong> by George Orwell</li>
      </ul>
    </div>

    <div className="mb-6">
      <h4 className="text-lg font-bold mb-2">Podcasts</h4>
      <ul className="list-disc list-inside text-base text-gray-300">
        <li>Lex Fridman</li>
        <li>Pod Pah</li>
        <li>Joe Experience</li>
      </ul>
    </div>

    <div className="mb-6">
      <h4 className="text-lg font-bold mb-2">Passions</h4>
      <ul className="list-disc list-inside text-base text-gray-300">
        <li>Football</li>
        <li>Programming / Coding</li>
        <li>Swimming</li>
        <li>Chess</li>
      </ul>
    </div>

    <div>
      <h4 className="text-lg font-bold mb-2">Favorite Songs</h4>
      <ul className="list-disc list-inside text-base text-gray-300">
        <li><strong>Sorri Sou Rei</strong> - Natiruts</li>
        <li><strong>Redemption Song</strong> - Bob Marley</li>
      </ul>
    </div>
  </div>

  );
}