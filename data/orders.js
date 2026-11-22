export let orders=JSON.parse(localStorage.getItem('orders'))||[];
export function addOrder(order){
    orders.unshift(order);
    saveToStorage();
}
export function removeOrder(orderId) {
  orders = orders.filter((order) => order.id !== orderId);
  saveToStorage();
}

export function getOrder(orderId){
    return orders.find((order)=>{
        return order.id===orderId
    });
}
function saveToStorage(){
    localStorage.setItem('orders',JSON.stringify(orders));

}