function draw(n) {
  for (i = 0; i < n; i++) {
    var x = '';
    for (j = 0; j < n; j++) {
      x = x + ' *';
      console.log(x);
    }
  }
}
draw(5);