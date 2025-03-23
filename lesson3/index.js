const fs = require('fs').promises;
const colors = require('colors');
(async () => {
    try {
        const data = await fs.readFile('products.txt', 'utf8');
        const products = data.split(/\r?\n/).map(line => line.trim()).filter(line => line.length > 0);
        console.log(products[0].red);
        console.log(products[1].magenta);
        console.log(products[2].yellow);
        console.log(products[3].cyan);
        console.log(products[4].green);

    } catch (err) {
        console.error('error: ', err);
    }
})();

colors.setTheme({
    custom: ['underline', 'bgGreen']
  });
  
console.log('hello! how are you?'.custom);