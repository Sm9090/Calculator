var input = ''

function getNum(num){
    var inputElement = document.getElementById('Input')
    input += num
    inputElement.value = input
}

function calculate(){
    var inputElement = document.getElementById('Input')
    var Value = inputElement.value
    try{
    var result = eval(Value)
    inputElement.value = result
    input = result
}catch(Error){
    inputElement.value = 'Error'
    input = ''
}
}

function cls(){
    var inputElement = document.getElementById('Input')
    inputElement.value = ''
    input = ''

}

function del(){
    var inputElement = document.getElementById('Input')
    inputElement.value = inputElement.value.slice(0, -1)
    input = inputElement.value

}


