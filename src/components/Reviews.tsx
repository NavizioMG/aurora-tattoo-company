
import React from 'react';
import { Star } from 'lucide-react';

interface Review {
  id: string;
  author: string;
  rating: number;
  content: string;
  date: string;
}

const reviews: Review[] = [
  {
    id: '1',
    author: 'Jennifer M.',
    rating: 5,
    content: 'Alex did an amazing job on my sleeve. The attention to detail is incredible, and the entire experience from consultation to aftercare was professional and comfortable.',
    date: '2 months ago'
  },
  {
    id: '2',
    author: 'Michael T.',
    rating: 5,
    content: 'Coming to Aurora Tattoo was the best decision. Jordan understood exactly what I wanted and made the experience so comfortable. Will definitely be back for my next piece!',
    date: '1 month ago'
  },
  {
    id: '3',
    author: 'Sarah K.',
    rating: 5,
    content: 'I was nervous about getting my first tattoo, but the team at Aurora made me feel completely at ease. My tattoo turned out better than I could have imagined.',
    date: '3 weeks ago'
  }
];

const RatingStars: React.FC<{ rating: number }> = ({ rating }) => {
  return (
    <div className="flex">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${
            i < rating ? 'text-aurora-gold fill-aurora-gold' : 'text-gray-400'
          }`}
        />
      ))}
    </div>
  );
};

const Reviews: React.FC = () => {
  return (
    <section id="reviews" className="py-20 bg-black">
      <div className="container-custom">
        <div className="ornament mb-10">
          <h2 className="section-title">Client Reviews</h2>
        </div>
        
        <div className="flex flex-col items-center mb-12">
          <div className="flex items-center mb-2">
            <div className="text-3xl font-bold text-aurora-gold mr-2">4.9</div>
            <RatingStars rating={5} />
          </div>
          <p className="text-white/70">Based on 120+ Google Reviews</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <div key={review.id} className="bg-muted rounded-lg p-6 transition-all hover:shadow-[0_0_20px_rgba(212,175,55,0.1)] hover:scale-[1.02]">
              <div className="flex items-center mb-3">
                <p className="font-bold text-white">{review.author}</p>
                <span className="mx-2 text-white/30">•</span>
                <p className="text-sm text-white/50">{review.date}</p>
              </div>
              <div className="mb-4">
                <RatingStars rating={review.rating} />
              </div>
              <p className="text-white/80 italic">"{review.content}"</p>
            </div>
          ))}
        </div>
        
        <div className="mt-10 text-center">
          <a 
            href="https://g.page/auroratattoocompany/review" 
            target="_blank" 
            rel="noreferrer"
            className="inline-block text-aurora-gold hover:text-white underline transition-colors"
          >
            See all Google reviews
          </a>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
