
// 1 savol
let result = 5 % 2;
alert("Qoldigi" + result);


// 2 savol
let LyuboySon = Math.floor(Math.random() * 10) + 1;
alert("sluchayniy son 1 dan 10 gacham:" + LyuboySon);


// 3 savol
let son = 12.510;
let intrNumber = Math.floor(son);
console.log(intrNumber); 

// 4 savol
function countLetters(qwer) {
    qwer = qwer.replace(/\s/g, '');
    return qwer.length;
}
let qwer = "MARS IT SCHOOL";
let letterCount = countLetters(qwer);
alert("harflar soni'MARS IT SCHOOL': " + letterCount);

// 6 savol
let sonlar = ["a", "b", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "x", "y", "z"];
let MyName = "Abdulqodir";

MyName = MyName.toLowerCase();


for (let i = 0; i < MyName.length; i++) {
    
    let currentSonlar = MyName[i];
    if (sonlar.includes(currentSonlar)) {
        console.log(currentSonlar);
    } else {
        console.log("Notogri" + currentSonlar);
    }
}


// 8 savol
let ism = prompt("Abdulqodir");
let reverseISM = ism.split('').reverse().join('');
console.log("Ridoqludba", reverseISM);


// 9 savol
let hafta = +prompt("hafta kunini kirit")
switch (hafta) {
    case 1:
        console.log("ponedelnik");
        break;
    case 2:
        console.log("vtornik");
        break;
    case 3:
        console.log("sreda");
        break;
    case 4:
        console.log("chetverg");
        break;
    case 5:
        console.log("juma");
        break;
    case 6:
        console.log("subbota");
        break;
        case 7:
            console.log("yakshanbi");
            break;
    default:
        console.log("notogri");
        break;
}

// 10 savol
let sonn = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let son1 of sonn) {
    if (son1 % 2 === 0) {
        console.log(son1);
    }
}



// 5 savol
// let qwer1="MARS IT SCHOOL"
// let sum=''
// function printTenTimes() {
//     for (let i = 0; i < 10; i++) {
//         sum+= qwer1[i]
//     }
// }
// console.log(sum);
// printTenTimes();

// 7 savol
// let justyear=+prompt("hozirgi yilni kiriting")
// let birthyear=+prompt("tugulgan yilingizni kiriting")
// let justmonth=+prompt("hozirgi oyni kiriting")
// let birthmonth=+prompt("tugulgan oyingizni kiriting")
// let res = justyear - birthyear
// function HappyBirthDay() {
//     if(justmonth > birthmonth){
//     return alert(res + "")
//     }
// }

//
// function ltr(qwer) {
//     return qwer.replace(/[^A-Za-z]/g, '').length;
// }

// let qwer = "MARS IT SCHOOL";
// let ltr = ltr(qwer);
// alert("12" + 'ltr');


