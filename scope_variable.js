var y = 0;
let a = 0;
for (let i = 0; i < 5; i++) {
  const z = y;
  console.log('Count :' + i + ' , Inside Count :' + y, z);
  setTimeout(() => {
    console.log('setTimeout Count :' + i + ' setTimeout Inside Count :' + y, z);
  }, 1000);
  y++;
  a++;
}
console.log('====Welcome to Programiz!=====');
console.log(y);
