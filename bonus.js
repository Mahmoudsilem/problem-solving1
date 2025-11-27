var createCounter = function (init) {
    let conter = init    
    return {
        increment: function () {
            conter++; 
            return conter;
        },
        reset: function () {
            conter = init; 
            return conter;
         },
        decrement: function () { 
            conter--; 
            return conter;
             }
    }
};
const counter = createCounter(5);
console.log(counter.increment());
console.log(counter.reset());
console.log(counter.decrement());

 // 6; // 5 // 4