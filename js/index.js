// Add Footer Element
const body = document.body

const footerElement = document.createElement("footer")
body.appendChild(footerElement)

// Insert Copyright Text
const today = new Date()
const thisYear = today.getFullYear()

const copyright = document.createElement("p")
copyright.innerHTML = `&copy; S. Aruj ${thisYear}`

footerElement.appendChild(copyright)

// Create List of Skills
const skills = ["JavaScript", "HTML", "CSS", "Git", "GitHub", "AWS"]

const skillsSection = document.getElementById("skills")
const skillsList = skillsSection.querySelector("ul")

for (let i = 0; i < skills.length; i++) {
  const skill = document.createElement("li")
  skill.innerText = skills[i]
  skillsList.appendChild(skill)
}

// Message Form
const messageForm = document.forms["leave_message"]

messageForm.addEventListener("submit", function (event) {
  event.preventDefault()

  // Get form values
  const usersName = event.target.usersName.value
  const usersEmail = event.target.usersEmail.value
  const usersMessage = event.target.usersMessage.value

  console.log(usersName, usersEmail, usersMessage)

  // Select Messages section and list
  const messageSection = document.getElementById("messages")
  const messageList = messageSection.querySelector("ul")

  // Create new message entry
  const newMessage = document.createElement("li")

  newMessage.innerHTML = `
    <a href="mailto:${usersEmail}">${usersName}</a>
    <span> ${usersMessage}</span>
  `

  // Create Remove button
  const removeButton = document.createElement("button")
  removeButton.innerText = "remove"
  removeButton.type = "button"

  removeButton.addEventListener("click", function () {
    const entry = removeButton.parentNode
    entry.remove()
  })

  // Add button to message
  newMessage.appendChild(removeButton)

  // Add message to list
  messageList.appendChild(newMessage)

  // Reset the form
  messageForm.reset()
})

// Projects Section
const projectSection = document.getElementById("projects")
const projectList = projectSection.querySelector("ul")

// Fetch GitHub repositories
fetch("https://api.github.com/users/saruj111/repos")
  .then((response) => {
    return response.json()
  })
  .then((data) => {
    const repositories = data
    console.log(repositories)

    for (let i = 0; i < repositories.length; i++) {
      const project = document.createElement("li")
      project.innerText = repositories[i].name
      projectList.appendChild(project)
    }
  })
  .catch((error) => {
    console.error("Error fetching repositories:", error)

    const errorMessage = document.createElement("li")
    errorMessage.innerText = "Unable to load GitHub repositories at this time."
    projectList.appendChild(errorMessage)
  })
