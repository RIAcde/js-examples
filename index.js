//1) a, b, c raqamlari berilgan. Shu sonlardan foydalanib uch xonali son yasang, qachonki istalgan berilgan raqamlardan biri 0 ga teng yoki  kichik bo'lsa 0 ni konsolga chiqaring.

function newNumber(a, b, c) {
    if (a === 0 | b === 0 | c === 0 | a < 0 | b < 0 | c < 0) {
        console.log(0)
    } else {
        let res = a * 100 + b * 10 + c
        console.log(res)
    }
}

// 2) Berilgan son hafta kunining qaysi kuniga to'g'ri keladi . Agar kelgan son 1 ga teng bo'lsa 'Dushanba' ni konsolga chiqaring,  Agar kegan son ikkiga teng bo'lsa  'Seshanba' ni konsolga chiqaring va hz ..,  Agar hafta kuniga to'g'ri kelmasa 'none' konsolga chiqsin.

let day = 1  //hafta kunini raqamda kiriting
switch (day) {
    case 1:
        console.log('dushanba')
        break;
    case 2:
        console.log('seshanba')
        break;
    case 3:
        console.log('chorshanba')
        break;
    case 4:
        console.log('payshanba')
        break;
    case 5:
        console.log('juma')
        break;
    case 6:
        console.log('shanba')
        break;
    case 7:
        console.log('yakshanba')
        break;
    default:
        console.log('Bunday hafta kuni mavjud emas!')
        break;
}

// 3) Berilgan yill kabisa yili ekanligini aniqlang. Agar kabisa yili bo'lsa true  konsolga chiqsin.  Agar bo'linmasa false  konsolga chiqsin. Kabisa yil deb 4 yilda bir marta keladigan yilga aytiladi. Shu yili kunlar soni 365 emas 366 ga teng bo'ladi. Bu yili fevral oyida 29 kun bo'ladi

function longYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        return console.log(true)
    } else {
        return console.log(false)
    }
}

longYear(2024)

// 4) a soni berilgan. 1 - 999 sonlar orasida. Agar a soni 1 honali son bo'lsa 1 ni return qiling. Agar a soni 2 honali son bo'lsa 2 ni return qiling. Agar a soni 3 honali bo'lsa 3 ni return qiling


function checkNumber(a) {
    if (a < 1 || a > 999) {
        return console.log('Oraliqdagi qiymat xato')
    }

    if (a >= 1 && a < 10) {
        return console.log(1)
    } else if (a > 10 && a < 100) {
        return console.log(2)
    } else if (a > 100 && a < 1000) {
        return console.log(3)
    }
}

// 5) a, b, c, d sonlar berilgan. Agar ularning qiymati barchasi musbat   bo'lsa true konsolga chiqaring bo'lmasa false ni konsolga chiqaring.

function checkNum(a, b, c, d) {
    if (a > 0 && b > 0 && c > 0 && d > 0) {
        return console.log(true)
    } else {
        return console.log(false)
    }
}

// 6) a soni berilgan.  0 dan a gacha bo'lgan sonlaryig'indisini toping  va yig'indini konsolga chiqaring. a sonini ham hisobga oling.

function sum(a) {
    if (a < 0) {
        return console.log('Manfiy son kiritildi')
    }
    let s = 0
    for (let i = 0; i <= a; i++) {
        s = s + i
    }
    console.log("Yig'indi: ", s)
}

// 7)  a soni berilgan. Shu son mukammal raqam yoki yo'qmi shuni aniqlang. Agar mukammal raqam bo'lsa true bo'lmasa false konsolga chiqaring. Mukammal raqam deb bo'linuvchilar  yig'indisiga teng bo'ladigan songa (o'zidan tashqari) aytiladi. Deylik: a = 6, uning bo'linuvchilari 1,2,3 => 6 = 1 + 2 + 3   demak 6 raqami murakkab raqam hisoblanadi. a = 15, uning bo'linuvchilari 1,3,5, => 1 + 3 + 5 = 8    bo'linuvchilari yig'indisi 8ga teng 15 ga emas. Shuning uchun bu mukammal son emas

function mukammal(a) {
    let s = 0
    for (let i = 1; i < a; i++) {
        if (a % i === 0) {
            s+=i
        }
    }
    if (a === s) {
        console.log(`${a} soni mukammal son`)
    } else {
        console.log(`${a} soni mukammal son emas`)
    }
}

// 8) n soni berilgan. Shu sonni raqamlarini sonini  konsolga chiqaring. Misol: 123 -> raqamlari soni: 3

function raqamSoni(n) {
    let numbers = n.toString().length
    console.log("Raqamlari soni: ", numbers)
}

// 9) n soni berilgan. Berilgan son palindrome  ekanligini aniqlang. Agar bo'lsa true bo'lmasa false chiqaring. Masalan: n = 12321  bunda chap tomondan va o'ng  tomondan o'qisa ham bir hil bo'lishi kerak. Bu misolni while orqali ishlash yaxshiroq edi lekin for ni o'rganish uchun for da ishlaymiz .
function polindrome(n) {
    let str = n.toString()
    let len = str.length

    for (let i = 0; i < len; i++) {
        if(str[i] != str[len - 1 - i]) {
            return console.log('Polindrom emas')
        }
    }
    return console.log('Polindrom')
}

// 10) n  soni berilgan. Shu sonni raqamlarini yig'indisini toping.

function numbersSum(n) {
    let str = n.toString()
    let s = 0

    for( let i = 0; i < str.length; i++ ) {
        s += parseInt(str[i])
    }
    
    return console.log("Yig'indi: ", s)
}

// 11) array[] berilgan. Shu massivni teskarisini yangi massivga ko'chirib o'tkazing va konsolga chiqaring.

function reversedArray(arr) {
    let revArr = []
    for (let i = arr.length - 1; i>=0; i--) {
        revArr.push(arr[i])
    }

    return revArr
}

// let myArr = [1, 2, 3, 4, 5]
// let reversed =  reversedArray(myArr)

// console.log(reversed)

// 12) n va array[] berilgan. Shu massivda nechta n soni borligini topib konsolga chiqaring. Masalan:  n = 4 , array[2,4,6,4,], Natija: bu yerda 2 ta 4 bor.

function findNumber(n, arr) {
    let count = 0

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === n) {
            count++
        }
    }

    return count
}

// let myArr = [2, 4, 5, 6, 4]
// let n = 4
// let result = findNumber(n, myArr)
// console.log(`Bu yerda ${result} ta ${n} bor`)

// 13) a, array[] berilgan. Arrayning xohlagan ikkita  elementlarini  yig'indisi a ga teng bo'lishini aniqlang va ularni  konsolga chiqaring.

function findNumbers(a, arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i+1; j < arr.length; j++) {
            if (arr[i] + arr[j] === a) {
                console.log("(", arr[i], ',', arr[j], ")")
            }
            
        }
    }
}

// let myArr = [3, 2, 3, 6, 5]
// let a = 8
// findNumbers(a, myArr)

// 14) Sonlardan iborat massiv berilgan. Shu massivni  elementlarini o'sish tartibida jo'ylashtiring (sort by increasing (ascending) ) va hosil bo'lgan massivni ni konsolga chiqaring.
let newArray = [5, 3, 7, 8, 1, 9]

newArray.sort((a, b) => {
    return a - b
})

console.log(newArray)

// 15) Sonlardan iborat massiv berilgan. Shu massivdagi eng katta ikkinchi  elementni toping. Bunda array elementlari bir biriga teng emas deb oling.
let myNewArray = [5, 3, 7, 8, 1, 9]

newArray.sort((a, b) => {
    return b - a
})

console.log(newArray[1])

// yoki

// function findSecondNumber(newArr) {
//     newArray.sort((a, b) => {
//         return b - a
//     })
    
//     let largest = newArray[0]
//     for (let i = 1; i < newArray.length; i++) {
//         if (newArray[i] < largest) {
//             return newArray[i]
//         }
//     }
    
//     return "Bunaqa son yo'q"
// }


// let myNewArray = [5, 3, 7, 8, 1, 9]
// let secondLargest = findSecondNumber(myNewArray)
// console.log("Eng katta 2 chi element ", secondLargest)