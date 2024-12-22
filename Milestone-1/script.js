var toggleButton = document.getElementById("toggle-skills");
var skills = document.getElementById("skills");
var toggleExperienceButton = document.getElementById("toggle-experience");
var experience = document.getElementById("experience");
// toggleButton.addEventListener("click", () => {
//   if (skills.style.display === "none") {
//     skills.style.display = "block";
//   } else {
//     skills.style.display = "none";
//   }
// });
toggleExperienceButton.addEventListener("click", function () {
    if (experience.style.display === "none") {
        experience.style.display = "block";
    }
    else {
        experience.style.display = "none";
    }
});
