let ur_ch = 0;
let cmp_ch = 1;

// rock = 2 sci =3 ppr =4

var choices = [2, 3, 4]

let x = document.getElementById("rock")
let y = document.getElementById("scissor")
let z = document.getElementById("ppr")


let xyz = document.getElementById("cscr")
let abc = document.getElementById("uscr")

let res = document.getElementById("result")

const resw = "Result: You Won"
const resl = "Result: You Lost"
const rest = "Result: Tie"

let u_sc = Number(abc.innerText)
let c_sc = Number(xyz.innerText)

localStorage.setItem("urscore", u_sc)
localStorage.setItem("cmpscore", c_sc)

let a = localStorage.getItem("urscr")
let b = localStorage.getItem("cmpscr")

// abc.innerText = a
// xyz.innerText = b

// if (a != 0) {
//     abc.innerText = a
// }
// else {
//     abc.innerText = u_sc
// }

// if (b != 0) {
//     xyz.innerText = b
// }
// else {
//     xyz.innerText = c_sc
// }

x.addEventListener("click", function () {
    cmp_ch = choices[Math.floor(Math.random() * choices.length)];
    ur_ch = 2
    if (ur_ch === cmp_ch) {
        console.log("Tie")
        res.innerText = rest
    }

    if ((ur_ch === 2 && cmp_ch === 3) || (ur_ch === 3 && cmp_ch === 4) || (ur_ch === 4 && cmp_ch === 2)) {
        console.log("You Win")
        a = a + 1
        abc.innerText = a
        res.innerText = resw
        localStorage.setItem("urscore", a)
    }

    if ((ur_ch === 2 && cmp_ch === 4) || (ur_ch === 3 && cmp_ch === 2) || (ur_ch === 4 && cmp_ch === 3)) {
        console.log("You Lose")
        b = b + 1
        xyz.innerText = b
        res.innerText = resl
        localStorage.setItem("cmpscore", b)
    }
})
y.addEventListener("click", function () {
    cmp_ch = choices[Math.floor(Math.random() * choices.length)];
    ur_ch = 3
    if (ur_ch === cmp_ch) {
        console.log("Tie")
        res.innerText = rest
    }

    if ((ur_ch === 2 && cmp_ch === 3) || (ur_ch === 3 && cmp_ch === 4) || (ur_ch === 4 && cmp_ch === 2)) {
        console.log("You Win")
        a = a + 1
        abc.innerText = a
        res.innerText = resw
        localStorage.setItem("urscore", a)
    }

    if ((ur_ch === 2 && cmp_ch === 4) || (ur_ch === 3 && cmp_ch === 2) || (ur_ch === 4 && cmp_ch === 3)) {
        console.log("You Lose")
        b = b + 1
        xyz.innerText = b
        res.innerText = resl
        localStorage.setItem("cmpscore", b)
    }
})

z.addEventListener("click", function () {
    cmp_ch = choices[Math.floor(Math.random() * choices.length)];
    ur_ch = 4
    if (ur_ch === cmp_ch) {
        console.log("Tie")
        res.innerText = rest
    }

    if ((ur_ch === 2 && cmp_ch === 3) || (ur_ch === 3 && cmp_ch === 4) || (ur_ch === 4 && cmp_ch === 2)) {
        console.log("You Win")
        a = a + 1
        abc.innerText = a
        res.innerText = resw
        localStorage.setItem("urscore", a)
    }

    if ((ur_ch === 2 && cmp_ch === 4) || (ur_ch === 3 && cmp_ch === 2) || (ur_ch === 4 && cmp_ch === 3)) {
        console.log("You Lose")
        b = b + 1
        xyz.innerText = b
        res.innerText = resl
        localStorage.setItem("cmpscore", b)
    }
})

