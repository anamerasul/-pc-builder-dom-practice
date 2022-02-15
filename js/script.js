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