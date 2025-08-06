import React from 'react';
import MenuCard from '../components/MenuCard';
import '../components/SplashScreen.css';

function Home() {
  return (
    <div>
      {/* Splash section as the top banner */}
      <section className="splash-screen">
        <div className="splash-content">
          <h1>hi my handsome sayang,</h1>
          <p>happy birthday ❤️</p>
        </div>
      </section>

      {/* Audio */}
      <audio autoPlay loop>
        <source src="/songs/best part.mp3" type="audio/mpeg" />
      </audio>

      {/* Main content */}
      <section className="home-content">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '30px',
            padding: '50px',
            justifyItems: 'center',
          }}
        >
          <MenuCard
            title="LETTER"
            buttonText="READ IT"
            image="/images/letter.jpg"
            modalContent={`to the one that brought so much joy, laughter and happiness into my life. to the one that im so grateful for. :)
my most handsome irfan,
its the first time that im ever celebrating ur birthday. ik u think lightly of birthdays but i really hope this day brings 
u joy and happiness that u deserve. i want u to know that i am so inlove with u. im so happy to have u in my life and to be able to call u mine. u make me feel loved, cared for, and valued, and im so lucky to have u in my life. & i really can't imagine a world without u. 
despite having to go through many shitty things, i want u to know that, it doesnt make u less of the irfan i know. ure still the same person, the most handsome, kindest + meanest, both street and book smart guy i have ever known. i love the way u talk and ur opinion on things, i love the way u curse when u play w noob people, i love when i asked u question and uk the answer to it, i love how u always figure things out. ure not a disappointment, and ull never be. ill forever be proud of u. 
baby, i want u to know that as long as im with u, i wont ever leave u. ill stick right by ur side, support you through thick and thin, and love you throughout everything.
so on this day, i wanna say that im very grateful that u were born. and may from now onwards, ur day is filled with all the things that bring u joy, and may all ur dreams and wishes come true. 
i cant wait to meet u and spend my everyday making u the happiest person in the world, bringing ur inner child and laughters out. so be more happy and smile more plsplsplspls. i love u with my whole heart my handsome baby. 
with love, nur safiyya.`}
          />
          <MenuCard
            title="COUPONS"
            buttonText="CLAIM THEM"
            image="/images/ticket.png"
            link="/coupons"
          />
          <MenuCard
            title="GIFT"
            buttonText="CLICK TO OPEN"
            image="/images/gift.png"
            link="/gift"
          />
          <MenuCard
            title="CROSSWORD"
            buttonText="PLAY NOW"
            image="/images/crossword.png"
            link="/crossword"
          />
        </div>
      </section>
    </div>
  );
}

export default Home;
