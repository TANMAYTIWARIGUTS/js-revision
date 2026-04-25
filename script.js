function addToCart(cb,x){
    setTimeout(() => {
        console.log("adding to cart ",x)
        x++
        cb(placeOrder, x)
    }, 2000);
}

function createBill(cb, x){
    setTimeout(()=>{
        console.log("creating bill ",x)
        x++
        cb(x)
    }, 500)
}
function placeOrder(x){
    setTimeout(()=>{
        console.log("placing Order ",x)
    }, 1000)
}

// sync
// addToCart(createBill, 1)

// async
// addToCart();
// createBill();
// placeOrder();
