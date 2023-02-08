    let display = document.getElementById("display");
    let btns = document.querySelectorAll("button");

    btns.forEach(function (btn) {
        btn.addEventListener("click", function () {
            let value = btn.getAttribute("id");
            if (value === "clear") {
                display.value = "";
            } else if (value === "equals") {
                display.value = eval(display.value);
            } else {
                console.log(display.value);
                display.value += value;
            }
        });
    });