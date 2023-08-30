const questionText = document.getElementById("questionText");
const optionsContainer = document.getElementById("optionsContainer");
const submitBtn = document.getElementById("submitBtn");

// Sample questions (replace with your questions from the database)
const questions = [
  {
    text: "What is the capital of France?",
    options: ["Paris", "London", "Berlin"],
    correctOption: "Paris",
  },
  {
    text: "Which planet is known as the Red Planet?",
    options: ["Mars", "Venus", "Jupiter"],
    correctOption: "Mars",
  },
];

let currentQuestionIndex = 0;

// Function to load and display a question
function loadQuestion() {
  const question = questions[currentQuestionIndex];
  questionText.textContent = question.text;
  optionsContainer.innerHTML = "";
  question.options.forEach((option, index) => {
    const optionElement = document.createElement("div");
    optionElement.className = "option";
    optionElement.textContent = option;
    optionElement.addEventListener("click", () => selectOption(index));
    optionsContainer.appendChild(optionElement);
  });
}

// Function to select an option
function selectOption(optionIndex) {
  const question = questions[currentQuestionIndex];
  const selectedOption = question.options[optionIndex];
  if (selectedOption === question.correctOption) {
    alert("Correct!");
  } else {
    alert("Incorrect. Try again.");
  }
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    loadQuestion();
  } else {
    alert("Quiz completed!");
  }
}

// Event listener for submit button
submitBtn.addEventListener("click", () => selectOption(null));

// Initial question load
loadQuestion();
// Initialize Firebase
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID",
  };
  
  firebase.initializeApp(firebaseConfig);
  
  // Firebase Authentication
  const auth = firebase.auth();
  
  // Check if the user is logged in
  auth.onAuthStateChanged((user) => {
    if (user) {
      // User is logged in
      console.log("User is logged in:", user);
    } else {
      // User is not logged in
      console.log("User is not logged in.");
    }
  });
  
  // Add Firebase user authentication to your frontend UI
  // Display login/logout buttons and handle user authentication state
  // Implement login and logout functionality using Firebase Auth methods
  // For example, auth.signInWithEmailAndPassword() and auth.signOut()
  
  // Add Firebase authentication checks to your API routes on the backend
  // Ensure that only authenticated users can access certain routes
  // Use Firebase Admin SDK for server-side authentication checks
  