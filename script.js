

let text = document.getElementById('text');

let buttons = document.querySelectorAll('button')

let string = '';

buttons.forEach(e => {
    e.addEventListener('click', (b) => {
        if( b.target.innerText == '='){
            string = String(eval(string))
            text.value = string;
        }
        else if( b.target.innerText == 'RESET'){
            string = '';
            text.value = string;
        }
        else if( b.target.innerText == 'DEL'){
           string = string.substring(0, string.length-1)
           text.value = string
        }
        else{
            string += b.target.innerText;
            text.value = string
        }
         
    })
})













// let btn9 = document.querySelector('.btn-9')
// let btn8 = document.querySelector('.btn-8')
// let btn7 = document.querySelector('.btn-7')
// let btn6 = document.querySelector('.btn-6')
// let btn5 = document.querySelector('.btn-5')
// let btn4 = document.querySelector('.btn-4')
// let btn3 = document.querySelector('.btn-3')
// let btn2 = document.querySelector('.btn-2')
// let btn1 = document.querySelector('.btn-1')
// let zero = document.querySelector('.zero')
// let buttons = document.querySelectorAll('.btn')

// let del = document.querySelector('.del')
// let reset = document.querySelector('.reset')
// let equal = document.querySelector('.equal')
// let plus = document.querySelector('.plus')
// let minus = document.querySelector('.minus')
// let div = document.querySelector('.div')
// let incr = document.querySelector('.increase')
// let point = document.querySelector('.point')

// let btn = document.querySelectorAll('.btns')

// let text = document.getElementById('text')

// let string = '';

// buttons.forEach(v => {
//     v.addEventListener('click', (b) => {
//         text.value += v.innerHTML;
//     })
// })
// btn.forEach(v => {
//     v.addEventListener('click', (b) => {
        
        
//     })
// })

// equal.addEventListener('click', () => {
//     text.value = eval(text)
// })
  
// reset.addEventListener('click', () => {
//     text.value = ''
// })

// del.addEventListener('.click', () => {
//     text.value = text.value.toString().substring(0, string.length-1)
// })
