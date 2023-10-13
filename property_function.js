let a = 0;

function afn0() {
  let a = 1;
  console.log('vanial fun', a);
}

const afn1 = function () {
  console.log('variable fun1', a);
};

const afn2 = () => {
  console.log('arrow fun2');
};

afn0();
afn1();
afn2();
