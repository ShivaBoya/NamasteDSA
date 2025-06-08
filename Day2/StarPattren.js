let n = 4;
for (let i = 0; i < n; i++) {
  let row = "";
  for (let j = 0; j < n; j++) {
    row += "*";
  }
  console.log(row);
}

let n1 = 4;
for (let i = 0; i < n1; i++) {
  let row = "";
  for (let j = 0; j <= i; j++) {
    row += "*";
  }
  console.log(row);
}

let n2 = 4;
for (let i = 0; i < n2; i++) {
  let row = "";
  for (let j = 0; j <= i; j++) {
    row += (j + 1);
  }
  console.log(row);
}
    
let n3 = 4;
for (let i = 0; i < n3; i++) {
  let row = "";
  for (let j = 0; j <= i; j++) {
    row += (i + 1);
  }
  console.log(row);
}

let n4 = 4;
for (let i = 0; i < n4; i++) {
  let row = "";
  for (let j = 0; j < n4 - i; j++) {
    row += (j + 1);
  }
  console.log(row);
}
let n5 = 4;
for (let i = 0; i < n5; i++) {
  let row = "";
  for (let j = 0; j < n5 - (i + 1); j++) {
    row += " ";
  }
  for (let k = 0; k < i + 1; k++) {
    row += "*";
  }
  console.log(row);
}

let n6 = 4;
for (let i = 0; i < n6; i++) {
  let row = "";
  let toggle = 1;
  for (let j = 0; j < i + 1; j++) {
    row += toggle;
    toggle = toggle === 1 ? 0 : 1;
  }
  console.log(row);
}

let n7 = 4;
let toggle = 1;
for (let i = 0; i < n7; i++) {
  let row = "";
  for (let j = 0; j < i + 1; j++) {
    row += toggle;
    toggle = toggle === 1 ? 0 : 1;
  }
  console.log(row);
}