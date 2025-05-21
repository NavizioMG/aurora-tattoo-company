
import React from 'react';

const SocialProof: React.FC = () => {
  // Sample Instagram posts - In a real implementation, these would come from an API
  const instagramPosts = [
    {
      id: '1',
      imageUrl: 'https://images.unsplash.com/photo-1562962230-16e4623d36e6?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      link: 'https://instagram.com/p/example1'
    },
    {
      id: '2',
      imageUrl: 'https://images.unsplash.com/photo-1571315584707-6e9994184771?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      link: 'https://instagram.com/p/example2'
    },
    {
      id: '3',
      imageUrl: 'https://images.unsplash.com/photo-1573676564137-6a04a9885343?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      link: 'https://instagram.com/p/example3'
    },
    {
      id: '4',
      imageUrl: 'https://images.unsplash.com/photo-1562962230-6d865e504a49?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      link: 'https://instagram.com/p/example4'
    },
    {
      id: '5',
      imageUrl: 'https://images.unsplash.com/photo-1595275306144-b04658466363?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      link: 'https://instagram.com/p/example5'
    },
    {
      id: '6',
      imageUrl: 'https://images.unsplash.com/photo-1560337962-71c3f60ae05e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      link: 'https://instagram.com/p/example6'
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-muted to-black">
      <div className="container-custom">
        <div className="ornament mb-10">
          <h2 className="section-title">Latest Work</h2>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2 md:gap-4">
          {instagramPosts.map((post) => (
            <a
              key={post.id}
              href={post.link}
              target="_blank"
              rel="noreferrer"
              className="block aspect-square overflow-hidden rounded hover-glow"
            >
              <img
                src={post.imageUrl}
                alt="Tattoo artwork"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
            </a>
          ))}
        </div>
        
        <div className="mt-10 text-center">
          <a 
            href="https://instagram.com/auroratattoocompany" 
            target="_blank" 
            rel="noreferrer"
            className="inline-block bg-gradient-to-r from-aurora-red to-aurora-gold text-black font-bold py-2.5 px-6 rounded transition-all hover:shadow-lg"
          >
            Follow us on Instagram
          </a>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
