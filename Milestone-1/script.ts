const toggleButton = document.getElementById(
  "toggle-skills"
) as HTMLButtonElement;
const skills = document.getElementById("skills") as HTMLElement;
const toggleExperienceButton = document.getElementById(
  "toggle-experience"
) as HTMLButtonElement;
const experience = document.getElementById("experience") as HTMLElement;

// toggleButton.addEventListener("click", () => {
//   if (skills.style.display === "none") {
//     skills.style.display = "block";
//   } else {
//     skills.style.display = "none";
//   }
// });

toggleExperienceButton.addEventListener("click", () => {
  if (experience.style.display === "none") {
    experience.style.display = "block";
  } else {
    experience.style.display = "none";
  }
});
