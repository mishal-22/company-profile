// let count=0;

let cartBtns=document.querySelectorAll('.add-cart');
  cartBtns.forEach((btn)=>{
    btn.addEventListener('click',addCart);
  });

  updateTotal();
}
let listItems=[]
function addToCart(){
        // count+=1
        // document.getElementById('prdctCnt').style.display="block"
        // document.getElementById('prdctCnt').innerHTML=count;
        let product=this.parentElement;
        let title=product.querySelector('.card-title').innerHTML;
        let price=product.querySelector('.product-price').innerHTML;
        let imgSrc=product.querySelector('.card-img-top').src;
        console.log(title,price,imgSrc)

}