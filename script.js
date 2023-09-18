const calculator = () => {
    let string = "";
    const calcButtons = document.querySelectorAll(".calc-button");
    const screen = document.querySelector(".screen");
    calcButtons.forEach(button => {
        button.addEventListener('click', () => {
            //Setting the string
            const buttonValue = button.textContent;
            console.log(buttonValue)
            if(buttonValue == 'C') {
                console.log("I am inside")
            }
            string = string + buttonValue;
            screen.textContent = string;
        });
    });

    function handlingC() {
        string = '0';
        screen.innerHTML = string;
    }
};

calculator();