
// ====================================
// Solved Problems Elements
// ====================================

const solvedList =
document.getElementById("solvedList");

const solvedCount =
document.getElementById("solvedCount");

const searchInput =
document.getElementById("searchSolved");


// ====================================
// Solved Problems Data
// ====================================

const solvedProblemsData = {

    leetcode: [

        {
            name: "Two Sum",
            difficulty: "Easy",
            topic: "Arrays"
        },

        {
            name: "Maximum Subarray",
            difficulty: "Medium",
            topic: "Arrays"
        },

        {
            name: "Valid Anagram",
            difficulty: "Easy",
            topic: "Strings"
        }

    ],

    gfg: [

        {
            name: "Kadane Algorithm",
            difficulty: "Easy",
            topic: "Arrays"
        },

        {
            name: "Count Inversions",
            difficulty: "Medium",
            topic: "Sorting"
        },

        {
            name: "Detect Cycle",
            difficulty: "Medium",
            topic: "Graphs"
        }

    ],

    hackerrank: [

        {
            name: "Java Loops",
            difficulty: "Easy",
            topic: "Java"
        },

        {
            name: "String Tokens",
            difficulty: "Easy",
            topic: "Strings"
        },

        {
            name: "Java ArrayList",
            difficulty: "Medium",
            topic: "Collections"
        }

    ],

    codechef: [

        {
            name: "ATM",
            difficulty: "Easy",
            topic: "Implementation"
        },

        {
            name: "FLOW001",
            difficulty: "Easy",
            topic: "Math"
        },

        {
            name: "Life Universe Everything",
            difficulty: "Medium",
            topic: "Implementation"
        }

    ]

};

// ====================================
// Current Selected Platform
// ====================================

let currentPlatform =
"leetcode";

// ====================================
// Render Problems
// ====================================

function renderProblems(problems){

    solvedList.innerHTML = "";

    problems.forEach(problem => {

        const li =
        document.createElement("li");

        li.innerHTML = `

    <div class="problem-info">

        <span class="problem-name">

            ✅ ${problem.name}

        </span>

    </div>

    <div class="problem-tags">

        <span class="difficulty-badge ${problem.difficulty.toLowerCase()}">

            ${problem.difficulty}

        </span>

        <span class="topic-badge">

            ${problem.topic}

        </span>

    </div>

`;

        solvedList.appendChild(li);

    });

}

// ====================================
// Update Platform Data
// ====================================

function updatePlatform(platformKey){

    currentPlatform =
    platformKey;

    const problems =
    solvedProblemsData[platformKey];

    solvedCount.textContent =
    `Total Solved : ${problems.length}`;

    renderProblems(problems);

}

// ====================================
// Platform Switching
// ====================================

const platformItems =
document.querySelectorAll(".platform-item");

platformItems.forEach(item => {

    item.addEventListener("click", () => {

        // Remove Active Class

        platformItems.forEach(el => {

            el.classList.remove("active");

        });

        // Add Active Class

        item.classList.add("active");

        // Selected Platform

        const key =
        item.dataset.platform;

        // Update Data

        updatePlatform(key);

    });

});

// ====================================
// Search Problems
// ====================================

searchInput.addEventListener(
    "input",
    () => {

        const keyword =
        searchInput.value
        .toLowerCase();

        const filtered =
        solvedProblemsData[currentPlatform]
        .filter(problem =>

            problem.name
            .toLowerCase()
            .includes(keyword)
        );

        renderProblems(filtered);

    }
);

// ====================================
// Default Load
// ====================================

updatePlatform("leetcode");

