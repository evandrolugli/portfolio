import React from 'react';
import { Link } from 'react-router-dom';
import { FaSmile, FaMusic, FaFilm, FaMicrophoneAlt } from 'react-icons/fa';
import { FaLink, FaHeart, FaFutbol, FaChessKnight, FaCode, FaSwimmer } from 'react-icons/fa';

const interests = {
  songs: [
    { name: 'Sorri, Sou Rei', artist: 'Natiruts feat Sonia', link: 'https://open.spotify.com/track/5LQtm0sJK8IgIlweuu4yD3' },
    { name: 'River', artist: 'Leon Bridges', link: 'https://open.spotify.com/track/3hhbDnFUb2bicI2df6VurK' },
    { name: 'Vida Loka - Pt.1', artist: 'Racionais MCs', link: 'https://open.spotify.com/track/6m8AgjfI28ER6odzMxmHtR' },
    { name: 'Vida Loka - Pt.2', artist: 'Racionais MCs', link: 'https://open.spotify.com/track/4nTrxp4aH0g2yLVPkFmljF' },
    { name: 'Ceu Azul', artist: 'Charlie Brown Jr', link: 'https://open.spotify.com/track/1z1EeTXwnz3gvoUvzvkkdw' }
    
  ],
  movies: [
    { name: 'Interstellar', director: 'Christopher Nolan', thumbnail: 'https://image.tmdb.org/t/p/w200/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg', link: 'https://www.imdb.com/title/tt0816692/' },
    { name: 'Avatar', director: 'James Cameron', thumbnail: 'https://via.placeholder.com/40', link: 'https://www.imdb.com/title/tt0499549/' },
    { name: 'Gladiator', director: 'Ridley Scott', thumbnail: 'https://image.tmdb.org/t/p/w200/ty8TGRuvJLPUmAR1H1nRIsgwvim.jpg', link: 'https://www.imdb.com/title/tt0172495/' },
    { name: 'Cidade de Deus', director: 'Fernando Meirelles, Kátia Lund', thumbnail: 'https://via.placeholder.com/40', link: 'https://www.imdb.com/title/tt0317248/' },
    { name: 'O Auto da Compadecida', director: 'Guel Arraes', thumbnail: 'https://via.placeholder.com/40', link: 'https://www.imdb.com/title/tt0271383/' },
    { name: 'The Intern', director: 'Nancy Meyers', thumbnail: 'https://via.placeholder.com/40', link: 'https://www.imdb.com/title/tt2361509/' }
  ],
  podcasts: [
    { name: 'Conversations with Tylor', episode: 'Brian Winter on Brazil, Argentina and the Future of Latin America', link: 'https://open.spotify.com/episode/7qiIZj13NxEZ02pQKALoCx' },
    { name: 'Lex Fridman', episode: 'Neri Oxman', link: 'https://open.spotify.com/episode/1SNVM3bvU5qLfSaVgzJXYu' },
    { name: 'Lex Fridman', episode: 'Yuval Noah Harari', link: 'https://open.spotify.com/episode/4cDwZmBR7pbGsEM4dVmCl2' },
    { name: 'RealLife English', episode: 'School English vs Street English', link: 'https://open.spotify.com/episode/607vwqGbRqX87tT4yJOQzc' }
  ]
};

const getRandomItems = (arr: any[], num: number) => {
  const shuffled = arr.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, num);
};

export function About() {
  const randomSongs = getRandomItems(interests.songs, 3);
  const randomMovies = getRandomItems(interests.movies, 3);
  const randomPodcasts = getRandomItems(interests.podcasts, 3);

  return (
    <div className="max-w-3xl mx-auto py-8 px-4">

      <h2 className="text-2xl font-bold mb-4">Hi, I'm Evandro</h2>
      <p className="text-base text-gray-400 mb-4">
      Thank you for visiting my page. I am a passionate developer. I started coding around 2010. My professional journey took a brief deviation into marketing, where I dedicated around 7 years to gaining valuable insights into education and improving my soft skills.
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
    
      <div className="mb-6 mt-10">
        
        <div className="mb-6">
          <h4 className="text-lg font-bold mb-4 flex items-center text-orange-300">
            <FaSmile className="mr-2 text-orange-400" /> Interests
          </h4>
          <div className="grid grid-cols-2 gap-6">
            <ul className="space-y-3 text-sm">
              <li className="flex items-center ">
                <FaFutbol className="mr-2 " />
                Football / Corinthians 
                <FaHeart className="ml-2" />
              </li>
              <li className="flex items-center ">
                <FaCode className="mr-2 " />
                Programming / Coding
              </li>
            </ul>
            <ul className="space-y-3 text-base">
              <li className="flex items-center ">
                <FaSwimmer className="mr-2 " />
                Swimming
              </li>
              <li className="flex items-center ">
                <FaChessKnight className="mr-2 " />
                Chess / Rating: 1400 
                <a href="https://www.chess.com/member/evandrolugli" className="text-orange-300 ml-2" target="_blank" rel="noopener noreferrer">
                  <FaLink className="inline-block" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mb-6 grid grid-cols-2 gap-4">
          <div>
            <h4 className="text-lg font-bold mb-4 flex items-center text-orange-300">
              <FaMusic className="mr-2 text-orange-400" /> Favorite Songs
            </h4>
            <ul className="list-none text-sm text-gray-300">
              {randomSongs.map((song, index) => (
                <li key={index} className="mb-4">
                  <strong>{song.name}</strong>
                  {song.link && (
                    <a href={song.link} className="text-orange-300 ml-2" target="_blank" rel="noopener noreferrer">
                      <FaLink className="inline-block" />
                    </a>
                  )}
                  <div>{song.artist}</div>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4 flex items-center text-orange-300">
              <FaFilm className="mr-2 text-orange-400" /> Favorite Movies
            </h4>
            <ul className="list-none text-sm text-gray-300">
              {randomMovies.map((movie, index) => (
                <li key={index} className="flex items-center mb-4">
                  <img src={movie.thumbnail} alt={movie.name} className="w-10 h-10 rounded mr-2 object-cover" />
                  <div>
                    <strong>{movie.name}</strong>
                    {movie.link && (
                      <a href={movie.link} className="text-orange-300 ml-2" target="_blank" rel="noopener noreferrer">
                        <FaLink className="inline-block" />
                      </a>
                    )}
                    <div>{movie.director}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mb-6">
          <h4 className="text-lg font-bold mb-4 flex items-center text-orange-300">
            <FaMicrophoneAlt className="mr-2 text-orange-400" /> Podcasts
          </h4>
          <div className="mb-6 grid grid-cols-3 gap-4">
            {randomPodcasts.map((podcast, index) => (
              <div key={index}>
                
                <ul className="list-none text-sm text-gray-300">
                  <li className="mb-2">
                    <strong>{podcast.name}</strong>
                    {podcast.link && (
                      <a
                        href={podcast.link}
                        className="text-orange-300 ml-2"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaLink className="inline-block" />
                      </a>
                    )}
                    <div>{podcast.episode}</div>
                  </li>
                </ul>
              </div>
            ))}
          </div>
        </div>

      </div>

    </div>

  );
}