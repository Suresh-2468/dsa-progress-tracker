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



const roadmapData = {


// ====================================
// Arrays
// ====================================

arrays: {
    title: "Arrays Roadmap",

    beginner: [
        "Two Sum",
        "Maximum Subarray",
        "Best Time To Buy & Sell Stock",
        "Contains Duplicate",
        "Missing Number"
    ],

    intermediate: [
        "Product Of Array Except Self",
        "Merge Intervals",
        "3Sum",
        "Container With Most Water"
    ],

    advanced: [
        "Trapping Rain Water",
        "Sliding Window Maximum",
        "Median Of Two Sorted Arrays"
    ]
},

// ====================================
// Strings
// ====================================

strings: {
    title: "Strings Roadmap",

    beginner: [
        "Valid Anagram",
        "Longest Common Prefix",
        "Valid Palindrome",
        "Reverse String",
        "First Unique Character"
    ],

    intermediate: [
        "Group Anagrams",
        "Longest Substring Without Repeating Characters",
        "String Compression",
        "Decode String"
    ],

    advanced: [
        "Minimum Window Substring",
        "Longest Repeating Character Replacement",
        "Regular Expression Matching"
    ]
},

// ====================================
// Hashing
// ====================================

hashing: {
    title: "Hashing Roadmap",

    beginner: [
        "Contains Duplicate",
        "Valid Anagram",
        "Two Sum",
        "Happy Number"
    ],

    intermediate: [
        "Group Anagrams",
        "Top K Frequent Elements",
        "Subarray Sum Equals K"
    ],

    advanced: [
        "Longest Consecutive Sequence",
        "LFU Cache"
    ]
},

// ====================================
// Linked List
// ====================================

linkedlist: {
    title: "Linked List Roadmap",

    beginner: [
        "Reverse Linked List",
        "Linked List Cycle",
        "Merge Two Sorted Lists"
    ],

    intermediate: [
        "Remove Nth Node From End",
        "Reorder List",
        "Add Two Numbers"
    ],

    advanced: [
        "Copy List With Random Pointer",
        "LRU Cache"
    ]
},

// ====================================
// Stack
// ====================================

stack: {
    title: "Stack Roadmap",

    beginner: [
        "Valid Parentheses",
        "Implement Stack Using Queues",
        "Baseball Game"
    ],

    intermediate: [
        "Min Stack",
        "Daily Temperatures",
        "Decode String"
    ],

    advanced: [
        "Largest Rectangle In Histogram",
        "Basic Calculator"
    ]
},

// ====================================
// Queue
// ====================================

queue: {
    title: "Queue Roadmap",

    beginner: [
        "Implement Queue Using Stacks",
        "Number Of Recent Calls",
        "Time Needed To Buy Tickets"
    ],

    intermediate: [
        "Design Circular Queue",
        "Task Scheduler",
        "Rotting Oranges"
    ],

    advanced: [
        "Sliding Window Maximum",
        "Jump Game VI"
    ]
},

// ====================================
// Heap
// ====================================

heap: {
    title: "Heap Roadmap",

    beginner: [
        "Last Stone Weight",
        "Kth Largest Element In A Stream",
        "Top K Frequent Elements"
    ],

    intermediate: [
        "Kth Largest Element In An Array",
        "Merge K Sorted Lists",
        "Find Median From Data Stream"
    ],

    advanced: [
        "IPO",
        "Minimum Cost To Hire K Workers"
    ]
},

// ====================================
// Trees
// ====================================

trees: {
    title: "Trees Roadmap",

    beginner: [
        "Binary Tree Inorder Traversal",
        "Maximum Depth Of Binary Tree",
        "Same Tree"
    ],

    intermediate: [
        "Balanced Binary Tree",
        "Diameter Of Binary Tree",
        "Level Order Traversal"
    ],

    advanced: [
        "Lowest Common Ancestor",
        "Serialize And Deserialize Binary Tree"
    ]
},

// ====================================
// BST
// ====================================

bst: {
    title: "BST Roadmap",

    beginner: [
        "Search In BST",
        "Minimum Distance Between BST Nodes"
    ],

    intermediate: [
        "Validate BST",
        "Kth Smallest Element In BST"
    ],

    advanced: [
        "Delete Node In BST",
        "BST Iterator"
    ]
},

// ====================================
// Trie
// ====================================

trie: {
    title: "Trie Roadmap",

    beginner: [
        "Implement Trie"
    ],

    intermediate: [
        "Design Add And Search Words"
    ],

    advanced: [
        "Word Search II",
        "Maximum XOR Of Two Numbers"
    ]
},

// ====================================
// Graphs
// ====================================

graphs: {
    title: "Graphs Roadmap",

    beginner: [
        "Number Of Islands",
        "Flood Fill",
        "Find If Path Exists In Graph"
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

// ====================================
// Dynamic Programming
// ====================================

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
},



// ====================================
// Recursion
// ====================================

recursion: {

    title: "Recursion Roadmap",

    beginner: [
        "Factorial",
        "Fibonacci Number",
        "Power Function",
        "Sum Of Digits"
    ],

    intermediate: [
        "Generate Parentheses",
        "Subsets",
        "Letter Combinations Of Phone Number"
    ],

    advanced: [
        "Tower Of Hanoi",
        "Palindrome Partitioning"
    ]

},

// ====================================
// Binary Search
// ====================================

binarysearch: {

    title: "Binary Search Roadmap",

    beginner: [
        "Binary Search",
        "Search Insert Position",
        "Sqrt(x)"
    ],

    intermediate: [
        "Find First And Last Position",
        "Search In Rotated Sorted Array",
        "Find Peak Element"
    ],

    advanced: [
        "Median Of Two Sorted Arrays",
        "Split Array Largest Sum"
    ]

},

// ====================================
// Sliding Window
// ====================================

slidingwindow: {

    title: "Sliding Window Roadmap",

    beginner: [
        "Maximum Average Subarray",
        "Contains Duplicate II"
    ],

    intermediate: [
        "Longest Substring Without Repeating Characters",
        "Permutation In String",
        "Fruit Into Baskets"
    ],

    advanced: [
        "Minimum Window Substring",
        "Sliding Window Maximum"
    ]

},

// ====================================
// Two Pointers
// ====================================

twopointers: {

    title: "Two Pointers Roadmap",

    beginner: [
        "Valid Palindrome",
        "Merge Sorted Array",
        "Remove Duplicates From Sorted Array"
    ],

    intermediate: [
        "Two Sum II",
        "Container With Most Water",
        "3Sum"
    ],

    advanced: [
        "Trapping Rain Water",
        "4Sum"
    ]

},

// ====================================
// Greedy
// ====================================

greedy: {

    title: "Greedy Roadmap",

    beginner: [
        "Assign Cookies",
        "Lemonade Change"
    ],

    intermediate: [
        "Jump Game",
        "Partition Labels",
        "Gas Station"
    ],

    advanced: [
        "Task Scheduler",
        "Minimum Number Of Arrows To Burst Balloons"
    ]

},

// ====================================
// Backtracking
// ====================================

backtracking: {

    title: "Backtracking Roadmap",

    beginner: [
        "Subsets",
        "Permutations"
    ],

    intermediate: [
        "Combination Sum",
        "Letter Combinations Of Phone Number"
    ],

    advanced: [
        "N Queens",
        "Word Search",
        "Sudoku Solver"
    ]

},

// ====================================
// Graph Algorithms
// ====================================

graphalgo: {

    title: "Graph Algorithms Roadmap",

    beginner: [
        "BFS Traversal",
        "DFS Traversal",
        "Flood Fill"
    ],

    intermediate: [
        "Topological Sort",
        "Course Schedule",
        "Number Of Islands"
    ],

    advanced: [
        "Dijkstra Algorithm",
        "Bellman Ford",
        "Minimum Spanning Tree"
    ]

}};

// ====================================
// Problem Difficulty Mapping
// ====================================

const difficultyMap = {};

// Loop through all roadmap topics
Object.values(roadmapData).forEach(topic => {

    // Beginner = Easy
    topic.beginner.forEach(problem => {

        difficultyMap[problem] = "easy";

    });

    // Intermediate = Medium
    topic.intermediate.forEach(problem => {

        difficultyMap[problem] = "medium";

    });

    // Advanced = Hard
    topic.advanced.forEach(problem => {

        difficultyMap[problem] = "hard";

    });

});



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




// ====================================
// Update Dashboard Stats
// ====================================

function updateStats() {

    let total = 0;

    let easy = 0;

    let medium = 0;

    let hard = 0;

    // Loop through localStorage
    for(let i = 0; i < localStorage.length; i++) {

        const problemName = localStorage.key(i);

        const solved =
            localStorage.getItem(problemName);

        if(solved === "true") {

            total++;

            const difficulty =
                difficultyMap[problemName];

            if(difficulty === "easy") {

                easy++;

            }

            else if(difficulty === "medium") {

                medium++;

            }

            else if(difficulty === "hard") {

                hard++;

            }

        }

    }

    // Update Dashboard Cards

    document.getElementById(
        "totalSolved"
    ).textContent = total;

    document.getElementById(
        "easySolved"
    ).textContent = easy;

    document.getElementById(
        "mediumSolved"
    ).textContent = medium;

    document.getElementById(
        "hardSolved"
    ).textContent = hard;

}


// ====================================
// CODING PLATFORMS DATA
// Stores information of all platforms
// ====================================

const platformData = {

    // LeetCode Details
    leetcode: {

        name: "LeetCode",

        description:
        "Interview Preparation Platform",

        username:
        "ArthamSuresh",

        link:
        "https://leetcode.com",

        total: 95,

        easy: 50,

        medium: 35,

        hard: 10

    },

    // GeeksforGeeks Details
    gfg: {

        name: "GeeksforGeeks",

        description:
        "Learning & Articles",

        username:
        "ArthamSuresh",

        link:
        "https://www.geeksforgeeks.org",

        total: 42,

        easy: 25,

        medium: 12,

        hard: 5

    },

    // HackerRank Details
    hackerrank: {

        name: "HackerRank",

        description:
        "Assessments & Practice",

        username:
        "ArthamSuresh",

        link:
        "https://www.hackerrank.com",

        total: 20,

        easy: 12,

        medium: 6,

        hard: 2

    },

    // CodeChef Details
    codechef: {

        name: "CodeChef",

        description:
        "Competitive Programming",

        username:
        "ArthamSuresh",

        link:
        "https://www.codechef.com",

        total: 19,

        easy: 10,

        medium: 6,

        hard: 3

    }

};


// ====================================
// CODING PLATFORM SWITCHING
// Runs only on coding-platforms.html
// ====================================

const platformItems =
document.querySelectorAll(".platform-item");


// Check if platform page exists

if(platformItems.length > 0 ){

    // Loop through all platform buttons

    platformItems.forEach(item => {

        item.addEventListener("click", () => {
            

            // Get platform key
            // Example:
            // leetcode, gfg, hackerrank

            const key =
            item.dataset.platform;

            // Ignore Add Platform card

            if(!platformData[key]) return;

            // Remove active class
            // from all platform buttons

            platformItems.forEach(el => {

                el.classList.remove("active");

            });

            // Add active class
            // to selected platform

            item.classList.add("active");

            // Get selected platform data

            const platform =
            platformData[key];

            // ============================
            // Update Platform Title
            // ============================

            document.getElementById(
                "platformName"
            ).textContent =
            platform.name;

            

            // ============================
            // Update Description
            // ============================

            document.getElementById(
                "platformDescription"
            ).textContent =
            platform.description;

            // ============================
            // Update Username
            // ============================

            document.getElementById(
                "platformUsername"
            ).textContent =
            platform.username;

            // ============================
            // Update Profile Link
            // ============================

            document.getElementById(
                "platformLink"
            ).href =
            platform.link;

            // ============================
            // Update Statistics
            // ============================

            document.getElementById(
                "totalProblems"
            ).textContent =
            platform.total;

            document.getElementById(
                "easyProblems"
            ).textContent =
            platform.easy;

            document.getElementById(
                "mediumProblems"
            ).textContent =
            platform.medium;

            document.getElementById(
                "hardProblems"
            ).textContent =
            platform.hard;

            // ============================
            // Update Progress Bars
            // ============================

            const easyPercent =
            Math.round(
            (platform.easy / platform.total) * 100
            );

            const mediumPercent =
            Math.round(
            (platform.medium / platform.total) * 100
            );

            const hardPercent =
            Math.round(
            (platform.hard / platform.total) * 100
            );

            document.getElementById(
                "easyPercent"
            ).textContent =
            easyPercent + "%";

            document.getElementById(
                "mediumPercent"
            ).textContent =
            mediumPercent + "%";

            document.getElementById(
                "hardPercent"
            ).textContent =
            hardPercent + "%";

            document.getElementById(
                "easyFill"
            ).style.width =
            easyPercent + "%";

            document.getElementById(
                "mediumFill"
            ).style.width =
            mediumPercent + "%";

            document.getElementById(
                "hardFill"
            ).style.width =
            hardPercent + "%";

        });

    });

}
