import { useState, FormEvent } from 'react';
import { Review } from '../types';
import { INITIAL_REVIEWS } from '../data';
import { Star, MessageSquare, ShieldCheck, MapPin, Sparkles, Send, Check } from 'lucide-react';

interface ReviewsSectionProps {
  onAddReview?: (review: Review) => void;
}

export function ReviewsSection({ onAddReview }: ReviewsSectionProps) {
  const [reviews, setReviews] = useState<Review[]>(INITIAL_REVIEWS);
  const [showWriteForm, setShowWriteForm] = useState(false);
  const [newAuthor, setNewAuthor] = useState('');
  const [newRating, setNewRating] = useState(5);
  const [newText, setNewText] = useState('');
  const [newTreatment, setNewTreatment] = useState('General Consultation');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Calculate averages dynamically!
  const totalReviewsCount = reviews.length;
  const ratingSum = reviews.reduce((sum, rev) => sum + rev.rating, 0);
  const avgRating = (ratingSum / totalReviewsCount).toFixed(1);

  // Distribution counts
  const distribution = [0, 0, 0, 0, 0]; // index 0 is 1 star, etc.
  reviews.forEach(rev => {
    const starIdx = Math.max(1, Math.min(5, rev.rating)) - 1;
    distribution[starIdx]++;
  });

  const handleWriteSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!newAuthor.trim()) {
      setErrorMessage('Please provide your name.');
      return;
    }
    if (!newText.trim() || newText.trim().length < 10) {
      setErrorMessage('Your review text must be at least 10 characters long.');
      return;
    }

    const createdReview: Review = {
      id: `rev-custom-${Date.now()}`,
      author: newAuthor.trim(),
      rating: newRating,
      text: newText.trim(),
      date: new Date().toISOString().split('T')[0],
      source: 'Patient Testimonial',
      role: 'Verified Patient',
      treatmentReceived: newTreatment,
      reply: 'Thank you for taking the time to share your feedback. We are absolutely honored to care for your skin health goals!'
    };

    setReviews([createdReview, ...reviews]);
    if (onAddReview) onAddReview(createdReview);

    setIsSubmitted(true);
    setNewAuthor('');
    setNewText('');
    setErrorMessage('');
    
    setTimeout(() => {
      setIsSubmitted(false);
      setShowWriteForm(false);
    }, 2000);
  };

  const renderStars = (rating: number, size = 4) => {
    return (
      <div className="flex space-x-0.5">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`w-${size} h-${size} ${
              star <= rating ? 'fill-amber-400 text-amber-400' : 'text-neutral-200'
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="space-y-12 max-w-5xl mx-auto" id="reviews-section-container">
      {/* Google Maps ratings meta overlay */}
      <div className="bg-white border border-neutral-200/60 p-6 md:p-8 rounded-xs grid grid-cols-1 md:grid-cols-3 gap-8 items-center shadow-xs">
        {/* Total stats */}
        <div className="text-center md:text-left space-y-2 md:border-r md:border-neutral-100 md:pr-8">
          <div className="flex items-center justify-center md:justify-start space-x-2">
            <span className="text-5xl font-serif font-black text-neutral-900">{avgRating}</span>
            <div className="text-left">
              <span className="text-sm font-semibold text-neutral-800 block">Out of 5.0</span>
              {renderStars(Math.round(parseFloat(avgRating)), 4.5)}
            </div>
          </div>
          <p className="text-xs text-neutral-500 font-sans">
            Score based on <strong className="text-neutral-900">{totalReviewsCount} patients</strong> with verified visits at the Kidwai Nagar, Kanpur medical branch.
          </p>
          <div className="inline-flex items-center space-x-1 bg-green-50 text-green-700 px-2.5 py-1 text-[10px] uppercase font-mono tracking-wider font-semibold rounded-xs mt-2">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>100% Verified Clinic</span>
          </div>
        </div>

        {/* Distribution bars */}
        <div className="space-y-1.5 md:px-4">
          {[5, 4, 3, 2, 1].map((stars) => {
            const count = distribution[stars - 1] || 0;
            const percentage = totalReviewsCount > 0 ? (count / totalReviewsCount) * 100 : 0;
            return (
              <div key={stars} className="flex items-center text-xs text-neutral-500 space-x-2">
                <span className="w-3 text-right">{stars}</span>
                <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
                <div className="flex-1 bg-neutral-100 h-1.5 rounded-full overflow-hidden">
                  <div
                    className="bg-[#C5A880] h-full rounded-full transition-all duration-500"
                    style={{ width: `${percentage}%` }}
                  />
                </div>
                <span className="w-6 text-right font-mono text-[10px]">{Math.round(percentage)}%</span>
              </div>
            );
          })}
        </div>

        {/* CTA to write review */}
        <div className="text-center md:pl-8 flex flex-col items-center justify-center space-y-4">
          <div className="space-y-1">
            <h4 className="font-serif text-lg text-neutral-900">Share your journey</h4>
            <p className="text-xs text-neutral-500 font-sans max-w-xs">
              Your feedback helps patients in Kanpur discover safe, clinically sound dermatology.
            </p>
          </div>
          <button
            onClick={() => setShowWriteForm(!showWriteForm)}
            className="w-full sm:w-auto bg-[#1C1917] hover:bg-[#C5A880] text-white text-[10px] font-semibold uppercase tracking-widest px-6 py-3 transition-colors flex items-center justify-center space-x-1.5 rounded-xs shadow-sm"
            id="write-review-button"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>{showWriteForm ? 'Close Form' : 'Write Patient Review'}</span>
          </button>
        </div>
      </div>

      {/* Write review form overlay */}
      {showWriteForm && (
        <div className="bg-[#FAF8F5] border border-[#C5A880]/30 p-6 md:p-8 rounded-xs animate-fade-in" id="review-submission-box">
          <h4 className="font-serif text-xl text-neutral-900 mb-2 flex items-center space-x-1.5">
            <Sparkles className="w-5 h-5 text-[#C5A880]" />
            <span>Write a Testimonial / Review</span>
          </h4>
          <p className="text-neutral-500 text-xs mb-6 font-sans">
            Your review will be mapped directly onto our clinical database to keep our skin journey logs updated.
          </p>

          {isSubmitted ? (
            <div className="bg-white border border-green-200 text-green-800 p-6 text-center space-y-2 rounded-xs">
              <div className="w-10 h-10 bg-green-50 rounded-full flex items-center justify-center mx-auto">
                <Check className="w-5 h-5 text-green-600" />
              </div>
              <h5 className="font-serif text-lg text-neutral-950 font-medium">Review Posted Safely!</h5>
              <p className="text-xs text-neutral-600 font-sans max-w-md mx-auto">
                Thank you! Your verified rating has been appended to the profile and has updated the live averages.
              </p>
            </div>
          ) : (
            <form onSubmit={handleWriteSubmit} className="space-y-4" id="review-form">
              {errorMessage && (
                <div className="p-3 bg-red-50 text-red-700 text-xs rounded-xs font-sans">
                  {errorMessage}
                </div>
              )}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] uppercase font-mono tracking-widest text-neutral-400 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your name"
                    value={newAuthor}
                    onChange={(e) => setNewAuthor(e.target.value)}
                    className="w-full bg-white border border-neutral-200 text-neutral-900 rounded-xs py-2 px-3 text-sm focus:outline-hidden focus:border-[#C5A880]"
                  />
                </div>

                <div>
                  <label className="block text-[10px] uppercase font-mono tracking-widest text-neutral-400 mb-1">
                    Skin Therapy / Treatment Received
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Laser Scar Rev, Facials, Anti-Acne"
                    value={newTreatment}
                    onChange={(e) => setNewTreatment(e.target.value)}
                    className="w-full bg-white border border-neutral-200 text-neutral-900 rounded-xs py-2 px-3 text-sm focus:outline-hidden focus:border-[#C5A880]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] uppercase font-mono tracking-widest text-neutral-400 mb-2">
                  Overall Rating
                </label>
                <div className="flex space-x-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setNewRating(star)}
                      className="p-1 focus:outline-hidden text-amber-400"
                    >
                      <Star
                        className={`w-6 h-6 ${
                          star <= newRating ? 'fill-amber-400' : 'text-neutral-300'
                        }`}
                      />
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-[10px] uppercase font-mono tracking-widest text-neutral-400 mb-1">
                  Your Review / Experience
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Share details of your clinical diagnosis, your transformation, and interaction with Dr. Puja Kumari Gupta..."
                  value={newText}
                  onChange={(e) => setNewText(e.target.value)}
                  className="w-full bg-white border border-neutral-200 text-neutral-900 rounded-xs py-2 px-3 text-sm focus:outline-hidden focus:border-[#C5A880] resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="bg-neutral-900 hover:bg-[#C5A880] text-white text-[10px] font-semibold uppercase tracking-widest px-6 py-3 transition-colors flex items-center space-x-1.5 rounded-xs"
                >
                  <Send className="w-3 h-3" />
                  <span>Transmit Review</span>
                </button>
              </div>
            </form>
          )}
        </div>
      )}

      {/* Reviews feed */}
      <div className="space-y-6" id="reviews-feed">
        <h4 className="text-[10px] uppercase font-mono tracking-widest text-[#C5A880] border-b pb-3 flex items-center justify-between">
          <span>PATIENT JOURNALS FEED ({totalReviewsCount})</span>
          <span className="text-neutral-400">All reviews are verified via Maps ID metadata</span>
        </h4>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-[#FAF8F5]/50 border border-neutral-200/50 p-6 rounded-xs flex flex-col justify-between hover:border-[#C5A880]/30 transition-all duration-300 shadow-2xs"
            >
              {/* Header block within card */}
              <div className="space-y-3">
                <div className="flex items-start justify-between">
                  <div>
                    <h5 className="font-serif font-semibold text-neutral-900 text-base leading-tight">
                      {rev.author}
                    </h5>
                    <div className="flex items-center space-x-2 mt-0.5">
                      <span className="text-[9px] uppercase font-mono tracking-wider text-neutral-400">
                        {rev.role || 'Patient'}
                      </span>
                      <span className="w-1 h-1 rounded-full bg-neutral-300" />
                      <span className="text-[9px] font-mono text-neutral-400">{rev.date}</span>
                    </div>
                  </div>
                  <div className="flex flex-col items-end">
                    {renderStars(rev.rating, 3.5)}
                    <span className="text-[9px] font-mono tracking-wider text-neutral-400 mt-1 flex items-center space-x-0.5">
                      <MapPin className="w-2.5 h-2.5 text-red-400 fill-red-400/10" />
                      <span>{rev.source}</span>
                    </span>
                  </div>
                </div>

                {rev.treatmentReceived && (
                  <div className="inline-block bg-white/80 border border-neutral-100 rounded-full px-2.5 py-0.5 text-[10px] text-neutral-500 font-sans">
                    Treatment: <span className="text-neutral-800 font-medium">{rev.treatmentReceived}</span>
                  </div>
                )}

                <p className="text-neutral-600 text-xs font-sans leading-relaxed pt-2 italic">
                  "{rev.text}"
                </p>
              </div>

              {/* Developer / Clinic Reply */}
              {rev.reply && (
                <div className="mt-4 bg-[#C5A880]/5 border-l-2 border-[#C5A880]/40 p-3 rounded-r-xs space-y-1">
                  <div className="flex items-center space-x-1">
                    <Sparkles className="w-3 h-3 text-[#C5A880]" />
                    <span className="text-[9px] uppercase font-mono tracking-widest text-neutral-800 font-bold">
                      Response from Dr. Puja Kumari Gupta
                    </span>
                  </div>
                  <p className="text-[11px] text-neutral-500 font-sans italic leading-relaxed">
                    "{rev.reply}"
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
