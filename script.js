// =============================
// Profile Dropdown
// =============================

const profileDropdown = document.getElementById("profileDropdown");

if (profileDropdown) {

    profileDropdown.addEventListener("click", () => {

        profileDropdown.classList.toggle("active");

    });

}

// =============================
// Select Elements
// =============================

const topicCards = document.querySelectorAll(".topic-card");

const roadmapPopup = document.getElementById("roadmapPopup");

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
    },

    strings: {
        title: "Strings Roadmap",
        beginner: [
            "Valid Anagram",
            "Longest Common Prefix",
            "Valid Palindrome"
        ],
        intermediate: [
            "Group Anagrams",
            "Longest Substring Without Repeating Characters"
        ],
        advanced: [
            "Minimum Window Substring",
            "Longest Repeating Character Replacement"
        ]
    },

    linkedlist: {
        title: "Linked List Roadmap",
        beginner: [
            "Reverse Linked List",
            "Linked List Cycle",
            "Merge Two Sorted Lists"
        ],
        intermediate: [
            "Remove Nth Node From End",
            "Reorder List"
        ],
        advanced: [
            "Copy List With Random Pointer",
            "LRU Cache"
        ]
    },

    trees: {
        title: "Trees Roadmap",
        beginner: [
            "Binary Tree Inorder Traversal",
            "Maximum Depth of Binary Tree",
            "Same Tree"
        ],
        intermediate: [
            "Balanced Binary Tree",
            "Diameter of Binary Tree",
            "Binary Tree Level Order Traversal"
        ],
        advanced: [
            "Lowest Common Ancestor",
            "Serialize and Deserialize Binary Tree"
        ]
    },

    graphs: {
        title: "Graphs Roadmap",
        beginner: [
            "Number of Islands",
            "Find if Path Exists in Graph",
            "Flood Fill"
        ],
        intermediate: [
            "Clone Graph",
            "Course Schedule",
            "Rotting Oranges"
        ],
        advanced: [
            "Network Delay Time",
            "Word Ladder",
            "Alien Dictionary"
        ]
    },

    dp: {
        title: "Dynamic Programming Roadmap",
        beginner: [
            "Climbing Stairs",
            "House Robber",
            "Min Cost Climbing Stairs"
        ],
        intermediate: [
            "Coin Change",
            "Longest Increasing Subsequence",
            "Partition Equal Subset Sum"
        ],
        advanced: [
            "Edit Distance",
            "Longest Common Subsequence",
            "Burst Balloons"
        ]
    }

};

// =============================
// Dynamic Popup System
// =============================

topicCards.forEach((card) => {

    card.addEventListener("click", () => {

        const topic = card.dataset.topic;

        const data = roadmapData[topic];

        if (!data) {

            console.error("Topic not found:", topic);

            return;

        }

        popupContent.innerHTML = `

            <div class="popup-header">

                <h2>${data.title}</h2>

                <button id="closePopup">✕</button>

            </div>

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
        // Close Popup Button
        // =============================

        const closePopup = document.getElementById("closePopup");

        closePopup.addEventListener("click", () => {

            roadmapPopup.classList.remove("active");

        });

        // =============================
        // Toggle Solved Problems
        // =============================

        const solveCircles = document.querySelectorAll(".solve-circle");

        solveCircles.forEach((circle) => {

        circle.addEventListener("click", (e) => {

            e.stopPropagation();

            const problemItem = circle.closest("li");

            const problemName =
                problemItem.querySelector("span").textContent;

                problemItem.classList.toggle("solved");

            const isSolved =
                problemItem.classList.contains("solved");

            localStorage.setItem(
                problemName,
                isSolved
            );

            updateStats();

            });

        });
        document
        .querySelectorAll(".roadmap-box li")
        .forEach((item) => {

            const problemName =
                item.querySelector("span").textContent;

            const solved =
                localStorage.getItem(problemName);

            if (solved === "true") {

                item.classList.add("solved");

            }

        });

    });

});

// =============================
// Close Popup On Background Click
// =============================

roadmapPopup.addEventListener("click", (e) => {

    if (e.target === roadmapPopup) {

        roadmapPopup.classList.remove("active");

    }

});
// ====================================
// Update Dashboard Stats
// ====================================

function updateStats() {

    // Variable to store total solved count
    let total = 0;

    // Loop through all localStorage items
    for(let i = 0; i < localStorage.length; i++) {

        // Get current key name
        const key = localStorage.key(i);

        // Check if problem is solved
        if(localStorage.getItem(key) === "true") {

            // Increase solved count
            total++;

        }

    }

    // Update Total Solved card
    document.getElementById("totalSolved").textContent = total;

}





// ====================================
// Restore Saved Problems
// ====================================

// Select all problems in popup
document
.querySelectorAll(".roadmap-box li")
.forEach((item) => {

    // Get problem name
    const problemName =
        item.querySelector("span").textContent;

    // Read saved status
    const solved =
        localStorage.getItem(problemName);

    // If previously solved
    if(solved === "true") {

        // Add solved styling
        item.classList.add("solved");

    }

});


// ====================================
// Load Stats On Page Start
// ====================================

// Update stats when page loads
updateStats();