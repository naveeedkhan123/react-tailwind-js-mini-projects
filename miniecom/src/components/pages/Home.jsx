import { useState } from "react";
import { FaCircleMinus, FaCirclePlus } from "react-icons/fa6";
import faqData from "../../Data/FaqData";
import Header from "../common/Header";
import Footer from "../common/Footer";
export default function Home() {
  const [openAns, setOpenAns] = useState(null);

  const toggleAnswer = (index) => {
    setOpenAns((currentIndex) => (currentIndex === index ? null : index));
  };

  return (
    <>
   

<section className="py-12"> 
  <div className="max-w-[1320px] mx-auto">
    <h1 className="text-4xl font-bold">Home</h1>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum quasi eos nisi sequi fugiat quos. Placeat, necessitatibus iure architecto veritatis maxime, reprehenderit rem atque cupiditate repellat eligendi temporibus iusto officiis.</p>

    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum quasi eos nisi sequi fugiat quos. Placeat, necessitatibus iure architecto veritatis maxime, reprehenderit rem atque cupiditate repellat eligendi temporibus iusto officiis.</p>

    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum quasi eos nisi sequi fugiat quos. Placeat, necessitatibus iure architecto veritatis maxime, reprehenderit rem atque cupiditate repellat eligendi temporibus iusto officiis.</p>

    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum quasi eos nisi sequi fugiat quos. Placeat, necessitatibus iure architecto veritatis maxime, reprehenderit rem atque cupiditate repellat eligendi temporibus iusto officiis.</p>
  </div>
</section>

    <section className="py-10 bg-gray-300">
      <h1 className="text-center font-bold uppercase text-3xl">FAQs About</h1>

      <div className="max-w-[1000px] mx-auto mt-7">
        {faqData.map((faq, index) => {
          const isOpen = openAns === index;

          return (
            <div key={faq.question} className="border mt-3">
              <button
                type="button"
                onClick={() => toggleAnswer(index)}
                aria-expanded={isOpen}
                className="w-full bg-[#2553A2] text-left text-white p-4 uppercase font-bold text-[20px] relative cursor-pointer"
              >
                {faq.question}
                <span className="absolute right-3">
                  {isOpen ? <FaCircleMinus /> : <FaCirclePlus />}
                </span>
              </button>

              {isOpen && <p className="p-3 font-bold">{faq.answer}</p>}
            </div>
          );
        })}
      </div>
    </section>

   
    </>
    
  );
}
