const ul = document.querySelector('ul');
const input = document.querySelector('input');
const button = document.querySelector('button');
const alert = document.querySelector('.alert');
const clear = document.querySelector('.clear');
const body = document.querySelector('body');
let num = 0;
const data = []; 
button.addEventListener('click', function(){
    if(input.value){
        const newTask = input.value;
        
        data.push({taskName: newTask, id: num++})
        console.log(data)
        const li = document.createElement('li');
        li.setAttribute('class', 'item')
        ul.appendChild(li);
        li.innerHTML = newTask;
        alert.innerHTML = 'Task added!'
        alert.style.visibility = 'visible';
        input.value = '';
        clear.style.visibility = 'visible';

    } else {
        alert.innerHTML = 'Empty Task!'
        alert.style.visibility = 'visible';
    }
    
})
input.addEventListener('click', function(){
    alert.style.visibility = 'hidden';
})

clear.addEventListener('click', function(){
    ul.innerHTML = '';
    clear.style.visibility = 'hidden';
    alert.style.visibility = 'hidden';
    data.splice(0)
})