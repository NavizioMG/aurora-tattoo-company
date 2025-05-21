
import React from 'react';
import { Instagram } from 'lucide-react';

// Artist interface
interface Artist {
  id: string;
  name: string;
  specialty?: string;
  instagram: string;
  avatarUrl: string;
}

// Sample artists data
const sampleArtists: Artist[] = [
  {
    id: '1',
    name: 'Alex Rivera',
    specialty: 'Neo-Traditional & Japanese',
    instagram: 'alex_tattoos',
    avatarUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
  },
  {
    id: '2',
    name: 'Jordan Lee',
    specialty: 'Black & Grey Realism',
    instagram: 'jordan_ink',
    avatarUrl: 'https://images.unsplash.com/photo-1528892952291-009c663ce843?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
  },
  {
    id: '3',
    name: 'Sam Chen',
    specialty: 'Geometric & Dotwork',
    instagram: 'samchen_tattoo',
    avatarUrl: 'https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
  },
  {
    id: '4',
    name: 'Taylor Morgan',
    specialty: 'Watercolor & Fine Line',
    instagram: 'taylor_tattoos',
    avatarUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
  },
];

interface ArtistCardProps {
  artist: Artist;
}

const ArtistCard: React.FC<ArtistCardProps> = ({ artist }) => {
  return (
    <div className="bg-muted rounded-lg overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(212,175,55,0.2)]">
      <div className="aspect-square overflow-hidden">
        <img 
          src={artist.avatarUrl} 
          alt={artist.name} 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-1 text-aurora-gold">{artist.name}</h3>
        {artist.specialty && (
          <p className="text-sm text-white/80 mb-3">{artist.specialty}</p>
        )}
        <a 
          href={`https://instagram.com/${artist.instagram}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-aurora-gold hover:text-white transition-colors"
        >
          <Instagram className="mr-2 h-5 w-5" />
          @{artist.instagram}
        </a>
      </div>
    </div>
  );
};

const ArtistList: React.FC = () => {
  return (
    <section id="meet-artists" className="py-20 bg-black">
      <div className="container-custom">
        <div className="ornament mb-10">
          <h2 className="section-title">Meet Our Artists</h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {sampleArtists.map((artist) => (
            <ArtistCard key={artist.id} artist={artist} />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-white mb-6">
            Each artist brings their unique style and expertise to our studio.
            Contact us to discuss your tattoo ideas with our talented team.
          </p>
          <a 
            href="#book-appointment" 
            className="inline-block bg-aurora-gold hover:bg-opacity-90 text-black font-bold py-3 px-8 rounded-md transition-all"
          >
            Book a Consultation
          </a>
        </div>
      </div>
    </section>
  );
};

export default ArtistList;
