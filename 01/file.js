const fs =  require('fs');

//fs.writeFileSync('01test.txt', 'Hello node, your king is here!!');

const res = fs.readFileSync('./contact.txt','utf-8');
console.log(res);