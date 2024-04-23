// create a function to load the content
function loadContent() {
    const content = '<h1 style="color: #fff;">hey</h1>'; // the content to be loaded
    document.body.innerHTML = content; // load the content into the body
}

// create a function to generate the styles
function generateStyles() {
    const styles = `
      body {
        background-color: #000; /* black background */
        text-align: center; /* center the text horizontally */
        display: flex; /* use flexbox to center the text vertically */
        justify-content: center; /* center the text horizontally */
        align-items: center; /* center the text vertically */
        height: 100vh; /* make the body take up the full height of the viewport */
        margin: 0; /* remove default margin */
      }
    `;

    const styleElement = document.createElement('style');
    styleElement.textContent = styles;
    document.head.appendChild(styleElement);
}

// load the styles and content after a short delay (to avoid inspectors)
setTimeout(function() {
    generateStyles();
    loadContent();
}, 1000); // load styles and content after 1 second
