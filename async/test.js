function test_1() {
  console.log('1');
  setTimeout(()=> console.log('2'), 0);
  Promise.resolve().then(() => console.log('3'));
  console.log('4');
} // output will be 1 then 4 then 3 then 2

function test_2() {
  setTimeout(() => console.log('timeout 100'), 100);
  setTimeout(() => console.log('timeout 0'), 0);
  Promise.resolve().then(() => console.log('promise'));
  console.log('sync');
} // output will be sync sync, promise, timeout 0 and timeout 100

function t_3() {
  async function get_car() {
    console.log('B');
    return 'Corolla';
  }
  console.log('A');
  get_car().then((car) => console.log('D', car));
  console.log('C');
}
// output A B C D Corolla

function drill4() {
  async function load() {
    console.log('2');
    await null;
    console.log('4');
  }
  console.log('1');
  load();
  console.log('3');
}
// 1 2 3 4

function drill5() {
  const slow = new Promise((resolve) => setTimeout(() => resolve('slow'), 300));
  const fast = new Promise((resolve) => setTimeout(() => resolve('fast'), 100));
  Promise.all([slow, fast]).then((results) => console.log(results));
}

// slow fast
