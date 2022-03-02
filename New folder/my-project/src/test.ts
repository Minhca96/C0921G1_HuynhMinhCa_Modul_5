// This file is required by karma.conf.js and loads recursively all the .spec and framework files
let x = 0;
async function r5() {
  x += 1;
  console.log(x);
  return 5;
}
(async () => {
  x += await r5();
  console.log(x);
})();
