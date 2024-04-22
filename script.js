// script.js

// Load content dynamically
document.addEventListener('DOMContentLoaded', () => {
  // About section
  document.getElementById('about-heading').innerHTML = 'EFETOMEH';
  document.getElementById('about-text').innerHTML = 'Scientist | Tech Enthusiast | Coffee Snob';
  document.getElementById('profile-pic').src = 'profile-pic.jpg';
  document.getElementById('about-description').innerHTML = 'I am passionate about the intersection of artificial intelligence and neuroscience.';

  // Projects section
  const projects = [
    {
      title: 'Project 1: Verwiki',
      description: 'A web application featuring an innovative two-tiered conceptual organization consisting of an online concept tree and a wiki article database to facilitate deeper understanding of course material.',
      thumbnail: 'project1-thumb.jpg'
    },
    {
      title: 'Project 2: Breeze Parking Technologies',
      description: 'Breeze Parking – Web app allowing a seamless parking experience for drivers, and easy management for parking lot managers.',
      thumbnail: 'project2-thumb.jpg'
    }
  ];
  const projectsList = document.getElementById('projects-list');
  projects.forEach((project) => {
    const projectHTML = `
      <li>
        <img src="${project.thumbnail}" alt="${project.title}">
        <h3>${project.title}</h3>
        <p>${project.description}</p>
      </li>
    `;
    projectsList.innerHTML += projectHTML;
  });

  // Skills section
  const skills = ['JavaScript', 'React.js', 'Material UI', 'HTML/CSS'];
  const skillsList = document.getElementById('skills-list');
  skills.forEach((skill) => {
    const skillHTML = `<li>${skill}</li>`;
    skillsList.innerHTML += skillHTML;
  });

  // Contact section
  const contactLinks = [
    {
      url: 'https://twitter.com/eftmh',
      icon: 'fab fa-twitter'
    },
    {
      url: 'https://github.com/eftmh',
      icon: 'fab fa-github'
    },
    {
      url: 'https://linkedin.com/in/eftmh',
      icon: 'fab fa-linkedin'
    }
  ];
  const contactLinksList = document.getElementById('contact-links');
  contactLinks.forEach((link) => {
    const linkHTML = `
      <li>
        <a href="${link.url}" target="_blank">
          <i class="${link.icon}"></i>
        </a>
      </li>
    `;
    contactLinksList.innerHTML += linkHTML;
  });

  // Copyright
  document.getElementById('copyright').innerHTML = '&copy; 2024 EFETOMEH';
});
