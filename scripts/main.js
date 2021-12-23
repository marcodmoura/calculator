function insert(num) {
    const number = document.querySelector(".result").innerHTML;
    document.querySelector(".result").innerHTML = number + num;
}

function clean() {
    document.querySelector(".result").innerHTML = "";
}

function calculate() {
    const result = document.querySelector(".result").innerHTML;

    if (result) {
        document.querySelector(".result").innerHTML = eval(result);
    }

}
