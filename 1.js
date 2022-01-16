//Первый вариант
//Вариант с бесконечным количеством купюр 

function getSum(exchange) {
   const pricePolicy = [200, 100, 20, 10, 5, 2, 1];
   const res = [];

   if (exchange > 0) {
      for (let i = 0; i < pricePolicy.length; i++) {
         let bill = pricePolicy[i];

         while (exchange - bill >= 0) {
            exchange -= bill;
            res.push(bill);
         }
      }
   } else {
      console.log("Пожалуйста введите сумму :)");
   }

   return res;
}

console.log(getSum(73));
