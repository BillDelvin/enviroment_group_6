const p1 = 5;
const p2 = 10;

// function myFunction() {
//   return p1 * p2;
// }

// function multiplyFunc(p1, p2) {
//   return p1 * p2;
// }

// number
// function minFunc(p1, p2) {
//   return p1 - p2;
// }

// // console.log(myFunction());

// // console.log(multiplyFunc(4, 12));

// function myFunction({ tinggiBadan, minimumTinggi, callback }) {
//   const minimumBeratBadang = callback(tinggiBadan, minimumTinggi);
//   console.log(minimumBeratBadang);
// }

// myFunction({ tinggiBadan: 180, minimumTinggi: 110, callback: minFunc });

const list = document.getElementById("list");

// function getInputValue() {
//   const name = document.getElementById("nama").value; // kenapa harus didalam?
//   list.innerHTML += `<li>${name}</li>`;
// }

const onSubmit = (event) => {
  event.preventDefault();
  const { nama, email } = event.target;

  list.innerHTML += `
    <li>
        <p>${nama.value}<p>
        <p>${email.value}<p>
    </li>`;
};

addEventListener("submit", onSubmit);
