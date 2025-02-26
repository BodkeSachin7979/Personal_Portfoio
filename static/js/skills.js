// Function to add a new skill inside a category
function addSkill(button) {
  let skillName = prompt("Enter new skill:");
  if (skillName) {
    let skillList = button.nextElementSibling;
    let skillItem = document.createElement("span");
    skillItem.className = "skill-item";
    skillItem.textContent = skillName;
    skillItem.onclick = function () {
      this.remove();
    };
    skillList.appendChild(skillItem);
  }
}
