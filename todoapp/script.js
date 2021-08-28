let addtodobutton = document.getElementById('addtodo');
let todocontainer = document.getElementById('todocontainer');
let inputfield = document.getElementById('inputfield');

let countt = document.getElementById('count');
let counta = 0;

addtodobutton.addEventListener('click' , function(){

    //counta++;
    //alert(count);
    countt.innerText = counta;
    if(inputfield.value == ""){  // check is something is written inside input field
        alert("write something");
    }
    else{




      counta++;  // count will increase while something is written inside input box
    //  and paragraphy will btn will created

    //  count will increase and countt inner html == count 
    // but when del button will clicked it wil line no 49
    countt.innerText = counta; 


    var paragraph = document.createElement('p');  ///  p or span
    var button = document.createElement('button');

    // paragraph will have class name para-style

    paragraph.classList.add('para-style'); // inline block because paragraph if block level element it aquire complete with of parent

    button.classList.add('btn');
    paragraph.innerText = inputfield.value; //paragraph will have inner text = inputfield.value
    button.innerText = 'del'
    todocontainer.appendChild(paragraph);
    todocontainer.appendChild(button);

    button.addEventListener('click',()=>{

        // when delete button will clicked it will remove current paragraph
        // and button and count will decrease
        todocontainer.removeChild(paragraph);
        todocontainer.removeChild(button);
        counta-- ; 
        countt.innerText = counta;
    })
 //  count will increa
    countt.innerText = counta;  
    }

    // event will occur when paragraph will clicked line - througn
     paragraph.addEventListener('click', function(){
     paragraph.style.textDecoration = 'line-through';
        

    })

    // paragraph.addEventListener('dblclick', function(){
    //     todocontainer.removeChild(paragraph);
    //     counta -= 1;
    // })

    

    inputfield.value = "";
})
