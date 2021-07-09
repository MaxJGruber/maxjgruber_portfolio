const faqs = [
  {
    id: 1,
    question: "Am I open to working remotely?",
    answer: "Yes. I can work from home or an office (as long as it's France).",
  },
  {
    id: 2,
    question: "What job offers interest me?",
    answer:
      "I'm looking mostly for permanent full time contracts as Full Stack, Front-End or Back-End Web Developer.",
  },
  {
    id: 3,
    question: "Am I open to learning new non-human languages and technologies?",
    answer:
      "Yes, absolutely. My goal is to learn as much as I can from this industry.",
  },
  {
    id: 4,
    question: "If I speak 3 languages, what language do I dream in?",
    answer: "It depends about who, what and/or when the dream is about.",
  },
  {
    id: 5,
    question: "Do I like the color blue?",
    answer: "Yes. Yes, I do.",
  },
  {
    id: 6,
    question: "What is the meaning of life?",
    answer: "42.",
  },
  // More questions...
];

export default function Faq() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 divide-y-2 divide-gray-200 sm:py-8 sm:px-6 lg:px-8">
        <div className="mt-6 pt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:grid-rows-2 md:gap-x-20 md:gap-y-10">
            {faqs.map((faq) => (
              <div key={faq.id}>
                <dt className="text-lg leading-6 font-medium text-gray-900">
                  {faq.question}
                </dt>
                <dd className="mt-2 text-base text-gray-500">{faq.answer}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
