import React from 'react';

export default function AboutMe() {
  return (
    <div>
      <h1>About Me</h1>
      <img src={process.env.PUBLIC_URL + '/images/profile-picture.png'} className="thumbnail" alt="Profile Picture" />
      <p>
        My name is Dan To. This is my portfolio of web development projects from the Berkeley Coding Bootcamp. 
        As I progress through the class, this is where I will post links to the websites I've created.
      </p>
    </div>
  );
}
