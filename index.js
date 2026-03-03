let cartCount = 0;
let total = 0;

function addToCart(price){
cartCount++;
total += price;
document.getElementById("cartCount").innerText = cartCount;
document.getElementById("totalAmount").innerText = total;
}

function checkout(){
if(total === 0){
alert("Cart is empty!");
}else{
alert("Payment Successful 🎉");
cartCount = 0;
total = 0;
document.getElementById("cartCount").innerText = 0;
document.getElementById("totalAmount").innerText = 0;
}
}

function scrollMenu(){
document.getElementById("menu").scrollIntoView({behavior:"smooth"});
}

function startTracking(){
let bike = document.getElementById("deliveryBike");
bike.style.transition="5s linear";
bike.style.left="85%";
setTimeout(()=>{alert("Order Delivered 🚀");},5000);
}

const toggle = document.getElementById("themeToggle");

toggle.addEventListener("click", () => {
document.body.classList.toggle("light-mode");

if(document.body.classList.contains("light-mode")){
toggle.innerHTML = '<i class="fa fa-sun"></i>';
}else{
toggle.innerHTML = '<i class="fa fa-moon"></i>';
}
});