console.log(`Ustaw tło elementu HTML`)


const setBacground = () => {
  let p1 = document.querySelector('.p-first')
  let p2 = document.querySelector('.p-second')

  console.log(`działa`)
  // console.log(p1,p2)

  // p1.style.backgroundColor = 'red'
  // p2.style.backgroundColor = 'yellow'

  p1.classList.toggle('bg-red')
  p2.classList.toggle('bg-yellow')
}

let btnSetBackground = document.getElementById('set-bacground')

btnSetBackground.addEventListener('click', setBacground)



/////////////////////////

