import { useState } from "react";
import "./FAQ.css";

const questions = [
  {
    question: "How do I find a car on Carsoko?",
    answer:
      "Use the search tool to choose a make, model, and year. You can then browse listings that match what you are looking for.",
  },
  {
    question: "Are the cars inspected?",
    answer:
      "Each seller is responsible for the details in their listing. Always review the photos, ask questions, and arrange an inspection before purchase.",
  },
  {
    question: "Can I sell my car on Carsoko?",
    answer:
      "Yes. Get in touch with our team and we will guide you through preparing your listing for interested buyers.",
  },
  {
    question: "Where can I get more help?",
    answer:
      "Send us an email at info@carsoko.co.ke and our team will be happy to help.",
  },
];

function FAQ() {
  const [openQuestion, setOpenQuestion] = useState(0);

  return (
    <section className="faq-section" id="faq">
      <div className="section-heading">
        <p className="eyebrow">Good to know</p>
        <h2>Frequently asked questions</h2>
      </div>
      <div className="faq-list">
        {questions.map((item, index) => {
          const isOpen = openQuestion === index;
          return (
            <div
              className={`faq-item ${isOpen ? "is-open" : ""}`}
              key={item.question}
            >
              <button
                type="button"
                onClick={() => setOpenQuestion(isOpen ? -1 : index)}
                aria-expanded={isOpen}
              >
                {item.question}
                <span aria-hidden="true">{isOpen ? "-" : "+"}</span>
              </button>
              {isOpen && <p>{item.answer}</p>}
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default FAQ;
