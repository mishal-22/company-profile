
let cartItems=[]

document.addEventListener('DOMContentLoaded',loadContent)

function loadContent(){
  let cartBtns=document.querySelectorAll('.add-cart');
  cartBtns.forEach((btn)=>{
btn.addEventListener('click',addCart)
  });

if(JSON.parse(localStorage.getItem("products"))!=null){
cartItems=JSON.parse(localStorage.getItem("products"))
}
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
  console.log(cartItems)
  var displayDiv=document.getElementById('cart-content')
  if(!displayDiv){
    console.error("element with id not found");
    return;
  }
  displayDiv.innerHTML='';
  
  cartItems.forEach(item=>{
    const element=document.createElement('div')
     element.textContent=item.title+'-'+item.price;
     displayDiv.appendChild(element)
  });

}
function productCount(){
  
  var countDisplay=document.getElementById('prdctCnt')
  if(count!=0){
    let count=cartItems.length;
     countDisplay.style.display="block"
     countDisplay.innerHTML=count
  }
  console.log(count)
}

window.onload=loadFunctions;

function loadFunctions(){
  // localStorage.clear();
  displayItems()
  productCount()
}