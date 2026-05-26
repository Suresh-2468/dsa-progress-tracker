const profileDropdown = document.getElementById("profileDropdown");

profileDropdown.addEventListener("click", () => {
    profileDropdown.classList.toggle("active");
});

// =============================
// Select Topic Cards
// =============================

// Select all topic cards
const topicCards = document.querySelectorAll(".topic-card");

// Popup container
const roadmapPopup = document.getElementById("roadmapPopup");

// Popup content
const popupContent = document.querySelector(".popup-content");


// =============================
// Roadmap Data
// =============================

const roadmapData = {

    arrays: {

        title: "Arrays Roadmap",

        beginner: [
            "Two Sum",
            "Maximum Subarray",
            "Best Time To Buy & Sell Stock"
        ],

        intermediate: [
            "Product of Array Except Self",
            "Merge Intervals"
        ],

        advanced: [
            "Trapping Rain Water",
            "Sliding Window Maximum"
        ]

    }

};


// =============================
// Dynamic Popup System
// =============================

// Loop through all topic cards
topicCards.forEach((card) => {

    // Add click event to each card
    card.addEventListener("click", () => {

        // Get topic name from data-topic
        const topic = card.dataset.topic;

        // Get roadmap data
        const data = roadmapData[topic];

        // Update popup dynamically
        popupContent.innerHTML = `

            <!-- Popup Header -->

            <div class="popup-header">

                <h2>${data.title}</h2>

                <button id="closePopup">✕</button>

            </div>

            <!-- Beginner Section -->

            <div class="roadmap-box">

                <h3>🟢 Beginner</h3>

                <ul>

                    ${data.beginner.map(problem => `

                        <li>

                            <div class="problem-left">

                                <div class="solve-circle">

                                    <i class="ri-check-line"></i>

                                </div>

                                <span>${problem}</span>

                            </div>

                        </li>

                    `).join("")}

                </ul>

            </div>

            <!-- Intermediate Section -->

            <div class="roadmap-box">

                <h3>🟡 Intermediate</h3>

                <ul>

                    ${data.intermediate.map(problem => `

                        <li>

                            <div class="problem-left">

                                <div class="solve-circle">

                                    <i class="ri-check-line"></i>

                                </div>

                                <span>${problem}</span>

                            </div>

                        </li>

                    `).join("")}

                </ul>

            </div>

            <!-- Advanced Section -->

            <div class="roadmap-box">

                <h3>🔴 Advanced</h3>

                <ul>

                    ${data.advanced.map(problem => `

                        <li>

                            <div class="problem-left">

                                <div class="solve-circle">

                                    <i class="ri-check-line"></i>

                                </div>

                                <span>${problem}</span>

                            </div>

                        </li>

                    `).join("")}

                </ul>

            </div>

        `;

        // Show popup
        roadmapPopup.classList.add("active");



        // =============================
        // Close Popup
        // =============================

        const closePopup = document.getElementById("closePopup");

        closePopup.addEventListener("click", () => {

            roadmapPopup.classList.remove("active");

        });



        // =============================
        // Toggle Solved Problems
        // =============================

        // Select all solve circles
        const solveCircles = document.querySelectorAll(".solve-circle");

        // Loop through circles
        solveCircles.forEach((circle) => {

            // Add click event
            circle.addEventListener("click", () => {

                // Select parent problem item
                const problemItem = circle.closest("li");

                // Toggle solved class
                problemItem.classList.toggle("solved");

            });

        });

    });

});