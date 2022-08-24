const drum = document.getElementsByClassName("drum");

for (let i = 0; i < drum.length; i++) {
  drum[i].addEventListener("click", () => {
    let btntext = drum[i].textContent;
    playmusic(btntext);
    animation(btntext);
  });
}

document.addEventListener("keypress", (e) => {
  let keytext = e.key;
  playmusic(keytext);
  animation(keytext);
});

// // dastur kodini kamaytirish

function playmusic(key) {
  switch (key) {
    case "w":
      let music1 = new Audio("sounds/crash.mp3");
      music1.play();
      break;
    case "a":
      let music2 = new Audio("sounds/kick-bass.mp3");
      music2.play();
      break;
    case "s":
      let music3 = new Audio("sounds/snare.mp3");
      music3.play();
      break;
    case "d":
      let music4 = new Audio("sounds/tom-1.mp3");
      music4.play();
      break;
    case "j":
      let music5 = new Audio("sounds/tom-2.mp3");
      music5.play();
      break;
    case "k":
      let music6 = new Audio("sounds/tom-3.mp3");
      music6.play();
      break;
    case "l":
      let music7 = new Audio("sounds/tom-4.mp3");
      music7.play();
      break;

    default:
      break;
  }
}

// // animation qo'shish

function animation(key) {
  const pressed = document.querySelector(`.${key}`);
  pressed.classList.add("pressed");

  setTimeout(() => {
    pressed.classList.remove("pressed");
  }, 100);
}

// // klavyatura holatidagi

// document.addEventListener('keypress', (e) => {
//     let keytext = e.key

// switch (keytext) {
//         case 'w':
//             let music1 = new Audio('sounds/crash.mp3')
//             music1.play()
//             break;
//         case 'a':
//             let music2 = new Audio('sounds/kick-bass.mp3')
//             music2.play()
//             break;
//         case 's':
//             let music3 = new Audio('sounds/snare.mp3')
//             music3.play()
//             break;
//         case 'd':
//             let music4 = new Audio('sounds/tom-1.mp3')
//             music4.play()
//             break;
//         case 'j':
//             let music5 = new Audio('sounds/tom-2.mp3')
//             music5.play()
//             break;
//         case 'k':
//             let music6 = new Audio('sounds/tom-3.mp3')
//             music6.play()
//             break;
//         case 'l':
//             let music7 = new Audio('sounds/tom-4.mp3')
//             music7.play()
//             break;

//         default:
//             break;
//     }

//     })

// // if else da holatdagisi

// // if (btntext == "w") {
// //   let music1 = new Audio("sounds/crash.mp3");
// //   music1.play();
// // } else if (btntext == "a") {
// //   let music2 = new Audio("sounds/kick-bass.mp3");
// //   music2.play();
// // } else if (btntext == "s") {
// //   let music3 = new Audio("sounds/snare.mp3");
// //   music3.play();
// // } else if (btntext == "d") {
// //   let music4 = new Audio("sounds/tom-1.mp3");
// //   music4.play();
// // } else if (btntext == "j") {
// //   let music5 = new Audio("sounds/tom-2.mp3");
// //   music5.play();
// // } else if (btntext == "k") {
// //   let music6 = new Audio("sounds/tom-3.mp3");
// //   music6.play();
// // } else if (btntext == "l") {
// //   let music7 = new Audio("sounds/tom-4.mp3");
// //   music7.play();
// // }

// // yangi kod qismi

// // const drum = document.getElementsByClassName("drum");

// // for (let i = 0; i < drum.length; i++) {
// //   drum[i].addEventListener("click", () => {
// //     let btntext = drum[i].textContent;

// //     if (btntext == "w") {
// //       let music1 = new Audio("sounds/crash.mp3");
// //       music1.play();
// //     } else if (btntext == "a") {
// //       let music2 = new Audio("sounds/kick-bass.mp3");
// //       music2.play();
// //     } else if (btntext == "s") {
// //       let music3 = new Audio("sounds/snare.mp3");
// //       music3.play();
// //     } else if (btntext == "d") {
// //       let music4 = new Audio("sounds/tom-1.mp3");
// //       music4.play();
// //     } else if (btntext == "j") {
// //       let music5 = new Audio("sounds/tom-2.mp3");
// //       music5.play();
// //     } else if (btntext == "k") {
// //       let music6 = new Audio("sounds/tom-3.mp3");
// //       music6.play();
// //     }
// //     else if (btntext == 'l') {
// //       let music7 = new Audio('sounds/tom-4.mp3')
// //       music7.play()
// //     }
// //   });
// // }

// // swich  case ishlashi

// // for (let i = 0; i < drum.length; i++) {
// //   drum[i].addEventListener("click", () => {
// //     let btntext = drum[i].textContent;

// //     switch (btntext) {
// //   case "w":
// //     let music1 = new Audio("sounds/crash.mp3");
// //     music1.play();
// //     break;
// //   case "a":
// //     let music2 = new Audio("sounds/kick-bass.mp3");
// //     music2.play();
// //     break;
// //   case "s":
// //     let music3 = new Audio("sounds/snare.mp3");
// //     music3.play();
// //     break;
// //   case "d":
// //     let music4 = new Audio("sounds/tom-1.mp3");
// //     music4.play();
// //     break;
// //   case "j":
// //     let music5 = new Audio("sounds/tom-2.mp3");
// //     music5.play();
// //     break;
// //   case "k":
// //     let music6 = new Audio("sounds/tom-3.mp3");
// //     music6.play();
// //     break;
// //   case "l":
// //     let music7 = new Audio("sounds/tom-4.mp3");
// //     music7.play();
// //     break;

// //   default:
// //     break;
// // }

// //   });
// // }

// // klavyatura bilan ishlash

// // document.addEventListener('keypress',(e)=> {
// //   let keytext = e.key

// // })

// const drum = document.querySelectorAll(".drum");

// for (let i = 0; i < drum.length; i++) {
//   drum[i].addEventListener("click", () => {
//     let btntext = drum[i].textContent;

//     switch (btntext) {
//       case "w":
//         let music1 = new Audio("sounds/crash.mp3");
//         music1.play();
//         break;
//       case "a":
//         let music2 = new Audio("sounds/kick-bass.mp3");
//         music2.play();
//         break;
//       case "s":
//         let music3 = new Audio("sounds/snare.mp3");
//         music3.play();
//         break;
//       case "d":
//         let music4 = new Audio("sounds/tom-1.mp3");
//         music4.play();
//         break;
//       case "j":
//         let music5 = new Audio("sounds/tom-2.mp3");
//         music5.play();
//         break;
//       case "k":
//         let music6 = new Audio("sounds/tom-3.mp3");
//         music6.play();
//         break;
//       case "l":
//         let music7 = new Audio("sounds/tom-4.mp3");
//         music7.play();
//         break;

//       default:
//         break;
//     }
//   });
// }
