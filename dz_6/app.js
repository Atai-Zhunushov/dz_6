const input = document.getElementById('input')
const reverseButton = document.querySelector('#reverse_button')
const  TodoList =  document.querySelector('#todo_list')

let reversTodo = e => {
    if (input.value.trim() !=='') {
        let arr = []
        arr.push(input.value)
        arr.map(word => {
            const p = document.createElement('p')
            TodoList.append(p)
            p.append(word , " - " , word.split("").reverse().join(""))
        })
        input.value = ""
    }
    else input.value = ""
}
reverseButton.onclick = () => reversTodo()
input.onkeydown = e => {
    if (e.keyCode === 13) reversTodo()
}
