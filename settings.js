const resetBtn =
document.getElementById(
    "resetProgressBtn"
);

resetBtn.addEventListener(
    "click",
    () => {

        const confirmReset =
        confirm(
            "Are you sure you want to reset all progress?"
        );

        if(confirmReset){

            localStorage.clear();

            alert(
                "Progress Reset Successfully"
            );

        }

    }
);