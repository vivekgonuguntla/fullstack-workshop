function createShoppingCart() {
  let items = [];
  let discountPercent = 0;

  return {
    addItem(item) {
      const existing = items.find(i => i.id === item.id);

      if (existing) {
        existing.quantity += item.quantity;
      } else {
        items.push({ ...item });
      }
    },


    getItems() {
      return items.map(item => ({ ...item }));
    },

  
    updateQuantity(id, quantity) {
      const item = items.find(i => i.id === id);
      if (item && quantity > 0) {
        item.quantity = quantity;
      }
    },

   
    removeItem(id) {
      items = items.filter(item => item.id !== id);
    },


    getTotal() {
      const total = items.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      );

      const discountedTotal =
        total - (total * discountPercent) / 100;

      return Number(discountedTotal.toFixed(2));
    },

 
    getItemCount() {
      return items.reduce((count, item) => count + item.quantity, 0);
    },

 
    isEmpty() {
      return items.length === 0;
    },


    applyDiscount(code, percent) {
      if (code && percent > 0) {
        discountPercent = percent;
      }
    },

   
    clear() {
      items = [];
      discountPercent = 0;
    }
  };
}


const cart = createShoppingCart();

cart.addItem({ id: 1, name: "Laptop", price: 999, quantity: 1 });
cart.addItem({ id: 2, name: "Mouse", price: 29, quantity: 2 });
cart.addItem({ id: 1, name: "Laptop", price: 999, quantity: 1 });

console.log(cart.getItems());

cart.updateQuantity(1, 3);
cart.removeItem(2);

console.log(cart.getTotal());      
console.log(cart.getItemCount());  
console.log(cart.isEmpty());       

cart.applyDiscount("SAVE10", 10);
console.log(cart.getTotal());      

cart.clear();
console.log(cart.isEmpty());      

