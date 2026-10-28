function createPriceTag(initialPrice) {
    let currentPrice = initialPrice;

    return function(action, amount) {
        if (action === "add") {
            currentPrice += amount;
        } else if (action === "sub") {
            currentPrice -= amount;
        } else if (action === "get") {
            return currentPrice;
        }
    };
}

function formatCurrency(position) {
    return function(symbol) {
        return function(value) {
            if (position === "before") return symbol + " " + value;
            return value + " " + symbol;
        };
    };
}

function renderPriceTag(tagManager, formatter) {
    let rawPrice = tagManager("get");
    console.log("ЦЕНА НА САЙТЕ: " + formatter(rawPrice));
}

let price = createPriceTag(1000);
price("add", 500);
price("sub", 200);
renderPriceTag(price, formatCurrency("after")("сом"));