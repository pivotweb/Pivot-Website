type TestimonialProps = {
  quote: string;
  author: string;
  imageUrl: string;
};

export default function Testimonial({
  quote,
  author,
  imageUrl,
}: TestimonialProps) {
  return (
    <div className="bg-white shadow-lg p-6 lg:ml-8 md:ml-4 sm:ml-0 rounded-lg text-sm text-gray-700 text-center">
      <p className="italic mb-4">“{quote}”</p>

      <div className="flex flex-col items-center gap-2">
        <img
          src={imageUrl}
          alt="author"
          className="w-16 h-16 rounded-full object-cover"
        />
        <p className="text-xs text-gray-600">— {author}</p>
      </div>
    </div>
  );
}
