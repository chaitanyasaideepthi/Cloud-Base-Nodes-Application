// notes.js
import { db, auth } from "./firebase.js";
import { collection, addDoc } from 
  "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const saveBtn = document.getElementById("saveNote");

saveBtn.addEventListener("click", async () => {
  const title = document.getElementById("title").value;
  const content = document.getElementById("content").value;

  if (!auth.currentUser) {
    alert("Please login first");
    return;
  }

  try {
    await addDoc(collection(db, "notes"), {
      title: title,
      content: content,
      userId: auth.currentUser.uid,
      createdAt: new Date()
    });
    alert("Note saved successfully ✅");
  } catch (error) {
    console.error(error);
    alert("Error saving note ❌");
  }
});
