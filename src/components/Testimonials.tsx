// app/components/Testimonials.tsx - Testimonials Section
interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Alex Johnson",
    role: "Senior Developer",
    company: "TechCorp",
    content:
      "SnippetApp has completely transformed how our team shares and reuses code. We've reduced redundant code by 60%.",
    avatar: "AJ",
  },
  {
    name: "Sarah Chen",
    role: "Full Stack Engineer",
    company: "StartupXYZ",
    content:
      "The search functionality is incredible. I can find any snippet in seconds, even from months ago.",
    avatar: "SC",
  },
  {
    name: "Marcus Rivera",
    role: "Dev Lead",
    company: "Digital Solutions",
    content:
      "Our onboarding process is now 40% faster thanks to our curated snippet library for new developers.",
    avatar: "MR",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-gray-800/30 py-16">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Trusted by Developers Worldwide
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Join thousands of developers who have streamlined their workflow
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial: Testimonial, index: number) => (
            <div
              key={index}
              className="bg-gray-800/50 rounded-xl p-6 border border-gray-700"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-emerald-500/20 rounded-full flex items-center justify-center text-emerald-400 font-bold mr-4">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-gray-400 text-sm">
                    {testimonial.role} at {testimonial.company}
                  </p>
                </div>
              </div>
              <p className="text-gray-300 italic">"{testimonial.content}"</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center text-gray-400">
          <p>
            Used by over{" "}
            <span className="text-emerald-400 font-bold">10,000+</span>{" "}
            developers across{" "}
            <span className="text-emerald-400 font-bold">500+</span> companies
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
