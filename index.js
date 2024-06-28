// let btn1 = document.getElementById("count_btn")
// let btn2 = document.getElementById("count_btn2")
// let counter = document.getElementById("counter")
// let counter2 = document.getElementById("counter2")


// btn1.addEventListener('click', () => {
//     if(counter.innerHTML > 1)
//     {
//         counter.innerHTML = +counter.innerHTML - 1
//         counter2.innerHTML =  +counter2.innerHTML - 210;

//     }
// })


// btn2.addEventListener('click', () => {
    
//     counter.innerHTML = +counter.innerHTML + 1
//     counter2.innerHTML =  +counter2.innerHTML + 210;
// })


let res_btn = document.querySelector(".res_header .logo button")
let res_nav = document.querySelector(".res_header .nav")

btn.addEventListener('click', () => {

    res_nav.setAttribute('class', 'nav_active')
})

let res_btn_close = document.querySelector(".nav button")
let a = true

res_btn_close.addEventListener('click', () => {
    res_nav.setAttribute('class', 'nav')
})

let katalog_card_btn2 = document.getElementById("katalog_btn2")
let katalog_filter = document.getElementsByClassName("katalog_filter")[0]

katalog_card_btn2.addEventListener('click', () =>{

    if(a)
    {
        katalog_filter.setAttribute('class', 'katalog_filter_active')
        a = false
    }

        else
        {
            katalog_filter.setAttribute('class', 'katalog_filter')
            a = true
        }
})
