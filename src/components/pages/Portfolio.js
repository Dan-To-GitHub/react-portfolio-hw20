import React from 'react';
import './Portfolio.css';

export default function Portfolio() {
  return (
    <div>
      <h1>Portfolio</h1>
      <section className='container' id="work">
        <h2>Work</h2>
        <article className="project-container">
          <img src="https://images.squarespace-cdn.com/content/v1/5c5867627a1fbd515af1bd68/1631914145181-KW1T90WGEYVO61TAAAIM/UN+-+BLACKPINK+Photograph.jpg" className="thumbnail big-box" alt="Fanpage" />
          <a href="https://dan-to-github.github.io/fanpage/" target="_blank">
            <section className="overlay">
              <h3 className="text">Fanpage</h3>
            </section>
          </a>
        </article>
        <article className="project-container">
          <img src="/images/digital-marketing-meeting.jpg" className="thumbnail" alt="Homework 1" />
          <a href="https://dan-to-github.github.io/homework-1/" target="_blank">
            <section className="overlay">
              <h3 className="text">Homework 1: HTML & CSS</h3>
            </section>
          </a>
        </article>
        <article className="project-container">
          <img src="/images/bar-hopper.png" className="thumbnail" alt="Bar Hopper" />
          <a href="https://da-mike.github.io/Bar-Hopper/" target="_blank">
            <section className="overlay">
              <h3 className="text">Bar Hopper Application</h3>
            </section>
          </a>
        </article>
        <article className="project-container">
          <img src="/images/breaktime-bandits.png" className="thumbnail" alt="Breaktime Bandits" />
          <a href="https://breakout-bandits-app.herokuapp.com/" target="_blank">
            <section className="overlay">
              <h3 className="text">Breaktime Bandits Application</h3>
            </section>
          </a>
        </article>
      </section>
    </div>
  );
}
