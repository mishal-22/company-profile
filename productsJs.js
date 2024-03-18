
// initalizing cart as array
let cartItems=[]
//addEventListener() method attaches an event handler to a document.
//The DOMContentLoaded event fires when the initial HTML document has been completely loaded and parsed 
document.addEventListener('DOMContentLoaded',loadContent)


/**
 *  description : this function will call when the html document loaded 
 */
function loadContent(){
  //The querySelectorAll() method returns a NodeList.
  let cartBtns=document.querySelectorAll('.add-cart');

  // when each button clicked addCart method is called
  cartBtns.forEach((btn)=>{
btn.addEventListener('click',addCart)
  });




/** =================================================================
 * @author mishal
 * @description This method is for adding items to the cart
 ===================================================================*/
function addCart(){
  //parent element of the .add-cart is taking.
  let product=this.parentElement;

  let title=product.querySelector('.card-title').innerHTML;
  let price=product.querySelector('.product-price').innerHTML;
  let imgScr=product.querySelector('img').src;
  // checking cartItems is array if not then initailizing as array other wise taking items from local storage
  if(!Array.isArray(cartItems)){
    cartItems=[]
  }
  else{
  
    cartItems=JSON.parse(localStorage.getItem("products"))
  }
 // checking item already added to the cart eles item added to the cartItems and store to the local storage
  if(cartItems!=null&&cartItems.find((el)=>el.title===title)){
    alert("Item already added")
    productCount()
    return;
  }
  else{
    cartItems.push({title,price,imgScr})
    let productStr=JSON.stringify(cartItems)
    localStorage.setItem("products",productStr);
    productCount()
  }
  
 
}
  



}

/**
 * 
 * @description displaying items in cart
 */
function displayItems(){
  // taking items from the local storage
   cartItems=JSON.parse(localStorage.getItem("products"))
   if(cartItems==null|| cartItems.length==0){
    document.getElementById('order-place').style.display='none';
   }
  console.log(cartItems)
  var displayDiv=document.getElementById('cart-content')
  if(!displayDiv){
    console.error("element with id not found");
    return;
  }
  displayDiv.innerHTML='';
  // display each item in the cart page
  cartItems.forEach((item,index)=>{
    const element=document.createElement('div')
     element.innerHTML=`<div class="card mb-3">
     <div class="card-body">
       <div class="d-flex justify-content-between">
         <div class="d-flex flex-row align-items-center">
           <div>
             <img
               src=${item.imgScr}
               class="img-fluid rounded-3" alt="Shopping item" style="width: 65px;">
           </div>
           <div class="ms-3">
             <h5>${item.title}</h5>
             
           </div>
         </div>
         <div class="d-flex flex-row align-items-center">
           <div style="width: 50px;">
             <h5 class="fw-normal mb-0">X 1</h5>
           </div>
           <div style="width: 150px;">
             <h5 class="mb-0">${item.price}</h5>
           </div>
           <button class="cart-remove-btn" onclick="removeCartProduct(${index})"><i class="bi bi-trash"></i></button>
          
         </div>
       </div>
     </div>
   </div>`;
     displayDiv.appendChild(element)
  });
  // showing grand total amount of the cart items
  grandTotal();

}

/**
 * @description function for showing total items in the cart
 */
function productCount(){
  
  var countDisplay=document.getElementById('prdctCnt')
  //taking length of the array
  let count=cartItems.length;
  if(count!=0){
    
     countDisplay.style.display="block"
     countDisplay.innerHTML=count
  }
  else{
    countDisplay.style.display="none"
  }
  console.log(count)
}
// onload event is for executing function immeadiately after page is loaded 
window.onload=loadFunctions;

/**
 * @description function for load functions immeadiately after page is loaded
 */
function loadFunctions(){
 
  displayItems()
  productCount()
  grandTotal()
}

/**
 * 
 * @param {*} id 
 * @description function for remove items from the cart
 */
function removeCartProduct(id){
cartItems.splice(id,1)
localStorage.setItem("products",JSON.stringify(cartItems))
loadFunctions()
// console.log(id)
}

/**
 * @description function for calculating grand total of cart items
 */
function grandTotal(){
  let total=0;
  cartItems.forEach((item)=>{
   total+=parseInt(item.price.replace(/\D/g,''));
  })
  document.getElementById('total-price').innerHTML=total;
}

/**
 * @description function for placing order and clear items from the cart
 */
function placeTheOrder(){
  alert("Order is placed!")
 localStorage.clear()
 location.reload()
  
  
}