const mMenu = document.getElementById('siteSel')
const prodWrap = document.querySelector('.ProdWrap')
const lazyWrap = document.querySelector('.LazyWrap')

mMenu.querySelectorAll('li').forEach(a => a.addEventListener('click',e => {
    preSel = mMenu.querySelector('.curSel')
    console.log(Boolean(preSel))
    t = e.target
    id = t.id
    if (preSel === t) return
    t.classList.add('curSel')
    preSel.classList.remove('curSel')
    prodWrap.classList.toggle('hidden')
    lazyWrap.classList.toggle('hidden')

}))