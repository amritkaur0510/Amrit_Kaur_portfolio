// NAVBAR SCROLL
window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  navbar.style.background = "transparent";
});
// SMOOTH SCROLL
document.querySelectorAll("a").forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    if (this.hash !== "") {
      e.preventDefault();
      document.querySelector(this.hash)?.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// DATA
const SkillsData = {
  line1: "A creative problem-solver who turns ideas into pixel-perfect,",
  line2: "Where performance meets artistry, and every pixel serves a purpose",
  skills: [
    { name: 'HTML', level: 95, class: 'html' },
    { name: 'JavaScript', level: 85, class: 'java' },
    { name: 'React', level: 90, class: 'react' },
    { name: 'Node', level: 83, class: 'bag' },
    { name: 'C++', level: 75, class: 'cpp' },
  ],
  circles: [
    { name: 'CSS', percent: 80 },
    { name: 'Bootstrap', percent: 62 },
    { name: 'Material UI', percent: 84 },
    { name: 'WordPress', percent: 93 },
  ]
};

// TYPE TEXT (FIXED)
const typing = document.getElementById("typing");
typing.innerHTML = `
  <span>${SkillsData.line1}</span><br>
  <span>${SkillsData.line2}</span>
`;

// LINE SKILLS
const container = document.getElementById("skillsContainer");
SkillsData.skills.forEach(skill => {
  container.innerHTML += `
    <div class="line">
      <p>${skill.name}</p>
      <div class="bar">
        <div class="line_bar ${skill.class}" style="width:${skill.level}%"></div>
      </div>
      <h5>${skill.level}%</h5>
    </div>
  `;
});

// CIRCLES
const circleContainer = document.getElementById("circleContainer");
SkillsData.circles.forEach(skill => {
  const offset = 301.6 * (1 - skill.percent / 100);

  circleContainer.innerHTML += `
    <div class="circle_box">
      <svg width="150" height="150">
        <circle cx="75" cy="75" r="48"
          style="stroke-dasharray:301.6; stroke-dashoffset:${offset};"/>
        <text x="75" y="70" text-anchor="middle">${skill.percent}%</text>
        <text x="75" y="100" text-anchor="middle">${skill.name}</text>
      </svg>
    </div>
  `;
});

// CONTACT SCROLL
function scrollToContact() {
  document.querySelector(".contact").scrollIntoView({ behavior: "smooth" });
}