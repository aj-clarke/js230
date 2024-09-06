// What sequence does the JavaScript runtime run the functions q, d, n, z, s, f, and g in the following code?

setTimeout(() => {
  setTimeout(() => {
    q();              // 7
  }, 15);

  d();                // 3

  setTimeout(() => {
    n();              // 5
  }, 5);

  z();                // 4
}, 10);

setTimeout(() => {
  s();                // 6
}, 20);

setTimeout(() => {
  f();                // 1
});

g();                  // 2


// f, g, d, z, n, s, q

// ALMOST, but f comes before g