const sidebar = document.querySelector(".sidebar");
const toggleButton = document.getElementById("toggleSidebar");
const micIcon = document.querySelector(".mic-icon");

// toggleButton.addEventListener("click", () => {
//     sidebar.classList.toggle("open");
// });


// micIcon.addEventListener("click", () => {
//     micIcon.classList.add("shake");

//     // Remove the shake class after the animation completes
//     setTimeout(() => {
//         micIcon.classList.remove("shake");
//     }, 500); // Adjust the time to match your animation duration
// });

// // const micIcon = document.querySelector(".mic-icon");

// micIcon.addEventListener("click", () => {
//     micIcon.classList.toggle("listening");
// });
// const micIcon = document.querySelector(".mic-icon");

micIcon.addEventListener("click", () => {
    micIcon.classList.toggle("listening");
});


