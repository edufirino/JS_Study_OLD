//funcao que retorna os 'todos' armazenados na memoria de browser
//function which returns the toDos stored browser localStorage
function get_todos(){
    //creates an array type var
    var todos = new Array;
    //retorna do banco de dados o item chamado 'todo' que esta em formato JSON 
    //returns from the localStorage the json item 'toDo' 
    var todos_str = localStorage.getItem('todo');
    //checks if it isn't null
    //"!== null" means strictly not null, which is different from undefined
    if(todos_str !== null){
        //converts json to JS array
        todos = JSON.parse(todos_str)
    }
    return todos;
}

function add(){
    //procura pelo valor digitado no elemento de input da tela e armazena numa variavel
    //gets the value from the input and stores in a var
    var task = document.getElementById('task').value;
    //stores the todo list in a var
    var todos = get_todos();
    //add the new element to the list
    todos.push(task);
    //converts the list to json and sends it back to the localStorage
    localStorage.setItem('todo',JSON.stringify(todos));
    show();
    //clears the text from the todo input
    document.getElementById('task').value="";
    //avoid any further actions
    return false;
}

//da um fodendo display
function show(){
    //retorna o fucking todos
    var todos = get_todos();
    
    //vai montando o html, adicionando cada todo e seu respectivo botao
    var html = '<ul>';
    for(var i=0;i<todos.length;i++){
        html+='<li>'+todos[i]+'<button class="remove" id="'+i+'">Delete</button> </li>';
        
    };
    html +='</ul>';
    
    //seta o codigo html pronto dentro do elemento 'todos' que esta no arquivo html
    document.getElementById('todos').innerHTML=html;
    
    //retorna todos os botao de remover que seguem a classe 'remove' do css
    var buttons = document.getElementsByClassName('remove');
    //adiciona ao EventListener (onClick) de cada botao para que a funcao remove seja executada
    for(var i=0;i<buttons.length;i++){
        buttons[i].addEventListener('click',remove);
    };
    
}

//function used by the remove button which is created in the method show(); 
function remove(){
    //get the id from the clicked button
    var id=this.getAttribute('id');
    //get the todo list
    var todos=get_todos();

    //splice removes from the array by the id
    todos.splice(id,1);
    //converts the list to json and sends it back to the localStorage
    localStorage.setItem('todo',JSON.stringify(todos));
    show();
    //avoid any further actions
    return false;
}

//adds the the event listener to the add button, binding it to the add method
document.getElementById('add').addEventListener('click',add);
show();