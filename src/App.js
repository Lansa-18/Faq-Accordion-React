import backgroundPattern from '../public/assets/images/background-pattern-desktop.svg';

export default function App() {
  return (
    <div className="">
      <div>
        <img src={backgroundPattern} alt="background pattern" />
      </div>
      <div>LIGHT PURPLE</div>
      <Faq/>
    </div>
  );
}

function Faq() {}