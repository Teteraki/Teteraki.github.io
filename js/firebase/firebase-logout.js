import {
  getAuth,
  signOut,
} from "https://www.gstatic.com/firebasejs/11.6.0/firebase-auth.js";

const auth = getAuth();
const logoutButton = document.getElementById("logout-button");

// Listen for button click to log out
logoutButton.addEventListener("click", (e) => {
  signOut(auth)
    .then(() => {
      console.log("Signed Out");
      window.location.href = "/admin.html"; // Redirect to login page after sign-out
    })
    .catch((error) => {
      alert.error("Sign Out Error", error);
    });
});
