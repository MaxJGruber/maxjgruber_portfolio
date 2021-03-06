import contentLanguage from "stores/languageContent";

const Faq = () => (
  <div className="bg-white">
    <div className="max-w-7xl mx-auto py-24 px-4 divide-y-2 divide-gray-200 sm:py-10 sm:px-6 lg:px-8">
      <div className="">
        <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:grid-rows-2 md:gap-x-20 md:gap-y-10">
          {contentLanguage().faq.map((faq) => (
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

export default Faq;
