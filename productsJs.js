
let cartItems=[]

document.addEventListener('DOMContentLoaded',loadContent)

function loadContent(){
  let cartBtns=document.querySelectorAll('.add-cart');
  cartBtns.forEach((btn)=>{
btn.addEventListener('click',addCart)
  });


cartItems=JSON.parse(localStorage.getItem("products") || [])

// let itemList=[]
/** =================================================================
 * @author 
 ===================================================================*/
function addCart(){
  let product=this.parentElement;

  let title=product.querySelector('.card-title').innerHTML;
  let price=product.querySelector('.product-price').innerHTML;
  let imgScr=product.querySelector('img').src;
  
  
 
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
  
  //  displayItems();
  
}
  



}

function displayItems(){
   cartItems=JSON.parse(localStorage.getItem("products"))
   if(cartItems.length==0){
    document.getElementById('order-place').style.display='none';
   }
  console.log(cartItems)
  var displayDiv=document.getElementById('cart-content')
  if(!displayDiv){
    console.error("element with id not found");
    return;
  }
  displayDiv.innerHTML='';
  
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
  grandTotal();

}
function productCount(){
  
  var countDisplay=document.getElementById('prdctCnt')
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

window.onload=loadFunctions;

function loadFunctions(){
 
  displayItems()
  productCount()
  grandTotal()
}
function removeCartProduct(id){
cartItems.splice(id,1)
localStorage.setItem("products",JSON.stringify(cartItems))
loadFunctions()
// console.log(id)
}

function grandTotal(){
  let total=0;
  cartItems.forEach((item)=>{
   total+=parseInt(item.price.replace(/\D/g,''));
  })
  document.getElementById('total-price').innerHTML=total;
}
function placeTheOrder(){
  alert("Order is placed!")
  // localStorage.removeItem()
  cartItems.forEach((item,id)=>{
    cartItems.splice(id)
    localStorage.setItem("products",JSON.stringify(cartItems))
    loadFunctions()
  })
}