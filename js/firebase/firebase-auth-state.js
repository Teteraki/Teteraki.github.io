import {
  getAuth,
  onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/11.6.0/firebase-auth.js";

const auth = getAuth();

onAuthStateChanged(auth, (user) => {
  if (user) {
    //Signed in: show content
    document.body.style.display = "block";
  } else {
    //Not signed in: redirect and alert
    alert("You must be signed in to view this page.");
    window.location.href = "/admin.html";
  }
});
