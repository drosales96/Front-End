const screen = document.querySelector(".screen");
const button = document.querySelectorAll(".butt");

button.forEach(buttons => {
    buttons.addEventListener("click", () => {
        const pushed_button = buttons.textContent;

        if (buttons.id === "c") {
            screen.textContent = "0";
            return;
        }

        if (buttons.id === "%") {
            screen.textContent = eval(screen.textContent);
        }

        if (buttons.id === "delete") {
            if (screen.textContent.length === 1 || screen.textContent === "Error!") {
                screen.textContent = "0";
            } else {
                screen.textContent = screen.textContent.slice(0, -1);
            }
            return;
        }

        if (buttons.id === "equal") {
            try {
                screen.textContent = eval(screen.textContent);
            } catch {
                screen.textContent = "Error!";
            }
            return;
        }

        if (screen.textContent === "0" || screen.textContent === "Error!") {
            screen.textContent = pushed_button;
        } else {
            screen.textContent += pushed_button;
        }
    })
})
