// ====================================
// CODING PLATFORM SWITCHING
// Runs only on coding-platforms.html
// ====================================
console.log("platForm.js loaded");

const platformItems =
document.querySelectorAll(".platform-item");
console.log(
    "Buttons Found:",
    platformItems.length
);


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
