import React, { useState } from "react";
import { ChevronRight } from "lucide-react";

export const FAQSection: React.FC = () => {
  const [activeFAQ, setActiveFAQ] = useState<number | null>(null);
  const [showMore, setShowMore] = useState(false);

  const faqData = [
    {
      id: 1,
      question: "1. What makes ASVA different from other water brands?",
      answer: "ASVA offers an integrated ecosystem—bottles, refill jars, subscriptions and ionizer machines—under one quality-controlled and accountable system."
    },
    {
      id: 2,
      question: "2. Is ASVA alkaline water safe for daily use?",
      answer: "Yes. ASVA products follow quality practices aligned to applicable compliance and safety requirements for packaged drinking water."
    },
    {
      id: 3,
      question: "3. Do you provide 20L jar subscriptions?",
      answer: "Yes. We offer scheduled refill jar subscriptions with a deposit-return system in serviceable locations."
    },
    {
      id: 4,
      question: "4. Do you sell ionizer machines as well?",
      answer: "Yes. ASVA ionizer machines help you create alkaline water on demand—suitable for home and institutional usage."
    },
    {
      id: 5,
      question: "5. Is free shipping available?",
      answer: "Yes, free shipping is available on selected products and locations. Final availability is shown at checkout."
    },
    {
      id: 6,
      question: "6. How do I contact support?",
      answer: "You can reach ASVA support through phone, email, or the contact page for orders, subscription changes, and service."
    }
  ];





  const toggleFAQ = (id: number) => {
    setActiveFAQ(activeFAQ === id ? null : id);
  };

  // 🔥 show only first 3 initially
  const visibleFAQs = showMore ? faqData : faqData.slice(0, 3);

  return (
    <section className="py-20 px-6 container mx-auto max-w-4xl">
      <div className="border-t border-gray-100 pt-16">
        <h3 className="text-xl font-serif text-gray-800 mb-8 text-center">
          Frequently Asked Questions
        </h3>

        <div>
          {visibleFAQs.map((item) => {
            const isOpen = activeFAQ === item.id;

            return (
              <div key={item.id} className="border-b border-gray-100">
                {/* QUESTION */}
                <div
                  onClick={() => toggleFAQ(item.id)}
                  className="flex items-center justify-between py-6 px-4 cursor-pointer hover:bg-gray-50 transition-colors"
                >
                  <span className="text-xl md:text-2xl font-serif text-black">
                    {item.question}
                  </span>
                  <ChevronRight
                    className={`w-5 h-5 transition-transform duration-300 ${
                      isOpen ? "rotate-90 text-black" : "text-gray-400"
                    }`}
                  />
                </div>

                {/* ANSWER */}
                <div
                  className={`overflow-hidden transition-all duration-700 px-4 ${
                    isOpen ? "max-h-40 pb-6 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-gray-600">{item.answer}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* LEARN MORE BUTTON */}
        <div className="flex justify-center mt-12">
          <button
            onClick={() => setShowMore(!showMore)}
            className="text-[10px] font-bold text-gray-500 uppercase tracking-widest hover:text-black transition-colors"
          >
            {showMore ? "Show Less" : "Learn More"}
          </button>
        </div>
      </div>
    </section>
  );
};
