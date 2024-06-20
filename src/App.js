import iconPlus from './assets/images/icon-plus.svg';
import iconMinus from './assets/images/icon-minus.svg';
import iconStar from './assets/images/icon-star.svg';
import { useState } from 'react';
// import './index.css';

export default function App() {
  return (
    <div className="flex flex-col h-screen font-work-sans">
      <div className="bg-pattern border h-2/5 border-red-950"></div>
      <div className="text-blue-900 border h-3/5 border-green-950 bg-light-pink"></div>
      <Faq />
    </div>
  );
}

function Faq() {
  const [curOpen, setCurOpen] = useState(null);

  return (
    <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 bg-white w-2/5 p-8 shadow-2xl rounded-lg">
      <div className="flex items-center0 w-1/3 justify-between">
        <img src={iconStar} alt="icon-star"></img>
        <h1 className="font-bold text-dark-purple text-5xl">FAQs</h1>
      </div>

      <Items
        index={1}
        curOpen={curOpen}
        onCurOpen={setCurOpen}
        text="What is Frontend Mentor, and how will it help me?"
      >
        <p className="text-grayish-purple text-sm font-normal pt-4">
          Frontend Mentor offers realistic coding challenges to help developers
          improve their frontend coding skills with projects in HTML, CSS and
          JavaScript. It's suitable for all levels and ideal for portoflio
          building.
        </p>
      </Items>

      <Items
        index={2}
        curOpen={curOpen}
        onCurOpen={setCurOpen}
        text="Is Frontend Mentor free?"
      >
        <p className="text-grayish-purple text-sm font-normal pt-4">
          Yes, Frontend Mentor offers both free and premium coding challenges,
          with the free option providing access to a range of projects suitable
          for all skill levels.
        </p>
      </Items>

      <Items
        index={3}
        curOpen={curOpen}
        onCurOpen={setCurOpen}
        text="Can i use Frontend Mentor projects in my portfolio?"
      >
        <p className="text-grayish-purple text-sm font-normal pt-4">
          Yes, you can use projects completed on Frontend Mentor in your
          portfolio. It's an excellent way to showcase your skills to potential
          employers!
        </p>
      </Items>

      <Items
        index={4}
        curOpen={curOpen}
        onCurOpen={setCurOpen}
        text="How can i get help if i'm stuck on a challenge?"
      >
        <p className="text-grayish-purple text-sm font-normal pt-4">
          The best place to get help is inside Frontend Mentor's Discord
          community. There's a help channel where you can ask questions and seek
          support from other community members.
        </p>
      </Items>
    </div>
  );
}

function Items({ index, curOpen, onCurOpen, text, children }) {
  const isOpen = curOpen === index;

  function handleIsOpen() {
    onCurOpen(index);
  }

  return (
    <div>
      <section className="border-b py-4">
        <div className="flex items-center justify-between">
          <h3 className="text-dark-purple hover:text-bright-purple cursor-pointer text-1xl font-semibold">
            {text}
          </h3>
          <div onClick={handleIsOpen}>
            {isOpen ? (
              <img src={iconMinus} alt="icon-minus"></img>
            ) : (
              <img src={iconPlus} alt="icon-plus"></img>
            )}
          </div>
        </div>
        {isOpen && children}
      </section>
    </div>
  );
}
