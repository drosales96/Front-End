const screen = document.querySelector(".screen");
const buttons = document.querySelectorAll(".butt");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const pushedButton = button.textContent;

        if (button.id === "c") {
            screen.textContent = "0";
            return;
        }

        if (button.id === "delete") {
            if (screen.textContent.length === 1 || screen.textContent === "Error!") {
                screen.textContent = "0";
            } else {
                screen.textContent = screen.textContent.slice(0, -1);
            }
            return;
        }

        if (button.id === "equal") {
            try {
                const expression = screen.textContent.replace(/mod/g, '%');
                screen.textContent = eval(expression);
            } catch {
                screen.textContent = "Error!";
            }
            return;
        }

        if (pushedButton === ".") {
            const parts = screen.textContent.split(/[\+\-\*\/\%]/);
            const lastPart = parts[parts.length - 1];
            if (lastPart.includes(".")) {
                return;
            }
        }

        if (pushedButton === "mod") {
            screen.textContent += " mod ";
            return;
        }

        if (screen.textContent.length > 12) {
            screen.textContent = 'Too long!';
            screen.textContent = '';
            screen.textContent = "0";
            return;
        }

        if (screen.textContent === "0" || screen.textContent === "Error!") {
            if (pushedButton === "0") {
                screen.textContent = "0";
            } else if (pushedButton === ".") {
                screen.textContent += pushedButton;
            } else {
                screen.textContent = pushedButton;
            }
        } else {
            screen.textContent += pushedButton;
        }
    });
});
