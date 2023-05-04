const wk = ['s','d','f','g','h','j']
const bk = ['e','r','t','y']

const keys =document.querySelectorAll('.key')

const wks = document.querySelectorAll('.key.white')
const bks = document.querySelectorAll('.key.black')

keys.forEach(key => {
 key.addEventListener('click', () => playnote(key))
})

document.addEventListener('keydown', e =>{
    const key =e.key
    const wi = wk.indexOf(key)
    const bi = bk.indexOf(key)

    if(wi>-1) playnote(wks[wi])
    if(bi>-1) playnote(bks[bi])
})

function playnote(key)
{
    const noteA = document.getElementById(key.dataset.note)
    noteA.currentTime = 0;
    noteA.play()
    key.classList.add('active')
    noteA.addEventListener('ended',()=> {
        key.classList.remove('active')
    })

}