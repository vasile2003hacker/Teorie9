const buttons = document.querySelectorAll('button')
const block = document.getElementById('block')
const setColor = (cl) => {
block.className=` continut ${cl}`
}
buttons.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault()
        let culoare = e.target.innerText
        switch (culoare) {
            case 'Galben':
                setColor('bg-galben')
                break;
            case 'Rosu':
                setColor('bg-rosu')
                break;
            case 'Verde':
                setColor('bg-verde')
                break;
            case 'Albastru':
                setColor('bg-albastru')
                break;
            case 'Sur':
                setColor('bg-sur')
                break;
            case 'Negru':
                setColor('bg-negru')
                break;

            default:
                break;
        }
    })
})