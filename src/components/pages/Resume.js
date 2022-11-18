import React from 'react';

export default function Resume() {
  const handleButtonClick = () => {
      fetch('my_resume.pdf').then(response => {
        response.blob().then(blob => {
            // Creating new object of PDF file
            const fileURL = window.URL.createObjectURL(blob);
            // Setting various property values
            let alink = document.createElement('a');
            alink.href = fileURL;
            alink.download = 'my_resume.pdf';
            alink.click();
        })
    })
  }

  return (
    <div>
      <h1>Resume</h1>
      <p>
        <button onClick={handleButtonClick}>Download My Resume</button>
      </p>
    </div>
  );
}
