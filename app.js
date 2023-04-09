function getCart(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const cart = {
                items: ["Burger", "Pizza"],
                totalPrize: 200
            }
            resolve(cart)
        }, 3000);
    })
}
function paymentProcess(cart){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(cart.totalPrize>0){
                const paymentDetail = {
                    cardNumber: "1234 5678 9012 3456",
                    expiryDate: "12/24",
                    cvv: "123"
                }

                resolve(paymentDetail)
            }
        }, 3000);
    })
}
function placeOrder(paymentDetail){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const orderDetail = {
                items: ["Burger", "Pizza"],
                totalPrize: 200,
                paymentDetail: paymentDetail,
                status: "Order Placed"
            }
            resolve(orderDetail)
        }, 3000);
    })
}

getCart().then((cart)=> {

    console.log("Cart: ",cart)
    return paymentProcess(cart)
    
})
.then((paymentDetail)=>{
 console.log("Payment Detail: ",paymentDetail)
 return placeOrder(paymentDetail)
})
.then((orderDetail)=>{
    console.log("Order Detail: ",orderDetail)
})
.catch((error)=>{
    console.log("error: ", error)
});;