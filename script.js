let player = document.getElementById('pt')
let reset = document.getElementById('rb')
let boxes = Array.from(document.getElementsByClassName('box'))
let winbl = getComputedStyle(document.body).getPropertyValue('--victory-blocks')

const playerO = "O"
const playerX = "X"

let currentplayer = playerX
let newarray = Array(9).fill(null)

const Start = () => {boxes.forEach(box => box.addEventListener('click',selected))}

function selected(s){
  const id = s.target.id
  if(!newarray[id] && win()==false){
    newarray[id] = currentplayer
    s.target.innerText = currentplayer
    if (win() !==false){
      let victoryblocks = win()
      victoryblocks.map( box => boxes[box].style.backgroundColor=winbl)
      return
    }
    currentplayer = currentplayer == playerX ? playerO : playerX
  }
}

const winmatch = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6],
]

function win(){
  for (const i of winmatch) {
    let [a,b,c] = i
    if(newarray[a] && (newarray[a] == newarray[b] && newarray[a] == newarray[c])){
      return [a,b,c]
    }
  }
  return false
}


rb.addEventListener('click',ng)
function ng(){
  newarray.fill(null)
  boxes.forEach(box => {
  box.innerText = ''
  box.style.backgroundColor=''})
  currentplayer = playerX
}

Start()
