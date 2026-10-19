// Add Footer Element
const body = document.querySelector("body")

const footerElement = document.createElement("footer")
body.appendChild(footerElement)

// Insert Copyright Text
const today = new Date()
const thisYear = today.getFullYear()

const footer = document.querySelector("footer")

const copyright = document.createElement("p")
copyright.innerHTML = `&copy; S. Aruj ${2026}`

footer.appendChild(copyright)

// Create List of Skills
const skills = ["JavaScript", "HTML", "CSS", "Git", "GitHub", "AWS"]

const skillsSection = document.getElementById("skills")
const skillsList = skillsSection.querySelector("ul")

for (let i = 0; i < skills.length; i++) {
  const skill = document.createElement("li")
  skill.innerText = skills[i]
  skillsList.appendChild(skill)
}
