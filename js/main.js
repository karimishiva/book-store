

function myFunc(txt) {
    var buy = document.getElementById("btn-1");
    var sell = document.getElementById("btn-2");
    var rent = document.getElementById("btn-3");
    var buy2 = document.getElementById("buy-btn");
    var sell2 = document.getElementById("sell-btn");
    var rent2 = document.getElementById("rent-btn");

    if (txt == 'sell') {
        document.getElementById("main-text").innerHTML = "Buy and sell your textbooks";
        sell.classList.add("active");
        buy.classList.remove("active");
        rent.classList.remove("active");
        sell2.classList.add("active");
        buy2.classList.remove("active");
        rent2.classList.remove("active");
    }
    else if (txt == "rent") {
        document.getElementById("main-text").innerHTML = "Rent your textbooks";
        rent.classList.add("active");
        buy.classList.remove("active");
        sell.classList.remove("active");
        sell2.classList.remove("active");
        buy2.classList.remove("active");
        rent2.classList.add("active");
    }
    else {
        document.getElementById("main-text").innerHTML = "Buy your textbooks";
        rent.classList.remove("active");
        buy.classList.add("active");
        sell.classList.remove("active");
        sell2.classList.remove("active");
        buy2.classList.add("active");
        rent2.classList.remove("active");
    }
}