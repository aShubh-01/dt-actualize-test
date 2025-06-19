import Image from 'next/image';

interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
  avatar: string;
  bgColor: string;
}

interface TestimonialsProps {
  testimonials: Testimonial[];
}

export const Testimonials = ({testimonials} : TestimonialsProps) => {
    return <section className="mb-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Here's what others said after facing this round:
          </h2>

          <div className="grid md:grid-cols-3 gap-6 mt-10">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden mr-4 relative">
                      <Image
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                        sizes="48px"
                      />
                    </div>
                    <div className="flex flex-col">
                      <h3 className="font-semibold text-lg text-gray-800">{testimonial.name}</h3>
                      <span className="text-xs text-gray-500">{testimonial.role}</span>
                    </div>
                  </div>
                  <div className={`${testimonial.bgColor} p-4 rounded-lg`}>
                    <p className="text-gray-700 leading-relaxed">"{testimonial.quote}"</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
}