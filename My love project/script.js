// Function to handle answer submission for each question
function handleAnswer(questionId, correctAnswer, nextPage) {
    const answer = document.querySelector(`input[name="answer"]:checked`).value;
    
    if (answer === correctAnswer) {
        localStorage.setItem(`q${questionId}-answer`, answer);  // Save the answer in localStorage
        
        // Show correct message and delay before redirect
        alert("Correct! 😊");
        
        // Delay before redirecting
        setTimeout(function() {
            window.location.href = nextPage;  // Navigate to the next page after a short delay
        }, 3000);  // 3 second delay before redirecting
    } else {
        // Show try again message and delay before redirect
        alert("Try again!");
    }
}

// Function to handle the form submission on each question page
function initQuestionForm(questionId, correctAnswer, nextPage) {
    const form = document.getElementById(`question${questionId}-form`);
    
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        handleAnswer(questionId, correctAnswer, nextPage);  // Check answer and proceed to next page
    });
}

// For example, on Question 1
if (document.getElementById('question1-form')) {
    initQuestionForm(1, '8 Feb 2021', 'question2.html');
}

// For Question 2
if (document.getElementById('question2-form')) {
    initQuestionForm(2, '3', 'question3.html');
}

// For Question 3
if (document.getElementById('question3-form')) {
    initQuestionForm(3, 'Hehe our secret', 'question4.html');
}

// For Question 4 (Final Question)
if (document.getElementById('question4-form')) {
    const finalForm = document.getElementById("question4-form");
    
    finalForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const answer = document.querySelector('input[name="answer"]:checked').value;
        
        if (answer === 'Yes') {
            localStorage.setItem('q4-answer', answer);  // Save the final answer
            
            // Show correct message and delay before redirect
            alert("Correct! 😊");

            // Delay before redirecting to letter.html
            setTimeout(function() {
                window.location.href = 'letter.html';  // Navigate to the love letter page
            }, 3000);  // 3 second delay before redirecting
        } else {
            alert('Try again!');
        }
    });

    // Add "No" option movement on hover
    const noOption = document.getElementById("no");
    
    noOption.addEventListener("mouseover", function() {
        noOption.style.transform = "translateX(100px)";  // Move the "No" button to the right
        noOption.style.transition = "transform 0.3s ease";  // Smooth transition
    });

    noOption.addEventListener("mouseout", function() {
        noOption.style.transform = "translateX(0)";  // Reset the position when mouse leaves
    });
}
