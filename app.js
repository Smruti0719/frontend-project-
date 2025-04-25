let selectbtn = document.querySelectorAll('.btn');
let selectrestart = document.querySelector('.restart-btn');
let won = document.querySelector('#winner');

let winresult = [
  [0,1,2], [3,4,5], [6,7,8], // Rows
  [0,3,6], [1,4,7], [2,5,8], // Columns
  [0,4,8], [2,4,6]           // Diagonals
];

let turnX = true;

let reset = () => {
  turnX = true;
  showbtn();
  won.textContent = ""; 
}

let hidebtn = () => {
  for (let btn of selectbtn) {
    btn.disabled = true;
  }
}

let showbtn = () => {
  for (let btn of selectbtn) {
    btn.disabled = false;
    btn.textContent = "";
  }
}

let whoiswinner = (winner) => {
  won.textContent = `🎉 Congratulations! Winner is ${winner}`;
  hidebtn();
}

let checkwinner = () => {
  for (let arr of winresult) {
    let value1 = selectbtn[arr[0]].textContent;
    let value2 = selectbtn[arr[1]].textContent;
    let value3 = selectbtn[arr[2]].textContent;

    if (value1 !== "" && value2 !== "" && value3 !== "") {
      if (value1 === value2 && value2 === value3) {
        whoiswinner(value1);
        return;
      }
    }
  }
}

selectbtn.forEach((btn) => {
  btn.addEventListener('click', () => {
    if (turnX) {
      btn.textContent = 'X';
      turnX = false;
    } else {
      btn.textContent = 'O';
      turnX = true;
    }
    btn.disabled = true;
    checkwinner(); 
  });
});

selectrestart.addEventListener('click', reset);
