function placeOrder(callback) { 
    setTimeout(() => {
         console.log("Order placed");
          callback();
         }, 1000);
         } 
         function prepareFood(callback) { 
            setTimeout(() => { console.log("Food prepared");
                 callback();
                 }, 2000); 
                } 
                function deliverFood(callback) {
                     setTimeout(() => { 
                        console.log("Food delivered"); 
                        callback(); 
                    }, 1000);
                 }
                  placeOrder(() => {
                     prepareFood(() => { 
                        deliverFood(() => { 
                            console.log("Aapka Khana!"); 
                        }); 
                    });
                 }); 