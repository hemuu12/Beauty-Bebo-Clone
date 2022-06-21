document.querySelector("#my_account").addEventListener('change', redirect)

function redirect(){
   let op = document.querySelector("#my_account").value
   if(op=="login")
   {
    window.location.href="Login.html"
   }
   if(op=="register"){
    window.location.href="signup.html"
   }

}
let itemFLS = JSON.parse(localStorage.getItem("surajKumarData")) || []
let  cart_itemAll = document.querySelectorAll("#mycart>a")
cart_itemAll.forEach(function(el){
    if(itemFLS.length>0){
    el.innerText=`You have ${itemFLS.length} item in your cart`
}else{
    document.querySelectorAll("#mycart>a").innerText="You have nothing in your cart"
}
})

// document.querySelector("#continueshop").addEventListener