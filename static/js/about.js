document
  .getElementById("uploadProfile")
  .addEventListener("change", function (event) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
        document.getElementById("profilePic").src = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  });

function addAchievement() {
  let achievement = prompt("Enter your achievement or certification:");
  if (achievement) {
    let ul = document.getElementById("achievementList");
    let li = document.createElement("li");
    li.innerHTML = `${achievement} <button onclick="removeAchievement(this)">Remove</button>`;
    ul.appendChild(li);
  }
}

function removeAchievement(button) {
  button.parentElement.remove();
}
