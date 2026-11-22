import { renderOrderSummary } from "./checkout/ordersummary.js";
import { renderPaymentSummary } from "./checkout/paymentsummary.js";
import { loadProductsFetch } from "../data/products.js";
// import'../data/cart-class.js';
// import '../data/backend-prac.js';
import { loadCart } from "../data/cart.js";


async function loadPage(){
    try{
        await loadProductsFetch()

        await new Promise((resolve)=>{
            loadCart(()=>{
                resolve();
            });
        });
        
    } catch(error){
        console.log('unexpected error. Please try again later.');
        
    }

   
    renderOrderSummary();
    renderPaymentSummary();

}
loadPage();


// Promise.all([
//     loadProductsFetch(),
//     new Promise((resolve)=>{
//         loadCart(()=>{
//             resolve();
//         });
//     })
// ]).then(()=>{
//     renderOrderSummary();
//     renderPaymentSummary();
// });




// new Promise((resolve)=>{
//    loadProducts(()=>{
//     resolve('value1');
//    });
    
// }).then((value)=>{

//     return new Promise((resolve)=>{
//         loadCart(()=>{
//             resolve();
//         });
//     });    
// }).then(()=>{
//     renderOrderSummary();
//     renderPaymentSummary();
// });





// loadProducts(()=>{
//     loadCart(()=>{

//         renderOrderSummary();
//         renderPaymentSummary();

//     });

// });
