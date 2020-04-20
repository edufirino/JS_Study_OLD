//funcao que retorna os 'todos' armazenados na memoria de browser
function get_todos(){
    //cria uma variavel do tipo array
    var todos = new Array;
    //retorna do banco de dados o item chamado 'todo' que esta em formato JSON 
    var todos_str = localStorage.getItem('todo');
    //verifica se o retorno nao veio vazio
    //!== significa strictly
    if(todos_str !== null){
        //converte o json para array do JS
        todos = JSON.parse(todos_str)
    }
    //devolve o array
    return todos;
}

//funcao que adiciona um item de todo a lista
function add(){
    //procura pelo valor digitado no elemento de input da tela e armazena numa variavel
    var task = document.getElementById('task').value;

    //retorna a lista de todos e salva numa variavel (se torna um array JS)
    var todos = get_todos();
    //adiciona a lista de 'todos' o novo elemento  
    todos.push(task);
    //converte o array JS em json e seta no db do browser de volta
    localStorage.setItem('todo',JSON.stringify(todos));

    //da um fodendo display
    show();

    //avoid any further actions
    return false;

}

//funcao para taraararararaammmmm....remover!!!
function remove(){
    //pega o id do botao clicado
    var id=this.getAttribute('id');
    //retorna o fucking todos
    var todos=get_todos();

    //remove do array pelo id
    todos.splice(id,1);
    //converte o array JS em json e seta no db do browser de volta
    localStorage.setItem('todo',JSON.stringify(todos));
    //da um fodendo display
    show();
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

    //adiciona ao EventListener (onClick) do botao add para que a funcao add seja executada
document.getElementById('add').addEventListener('click',add);
//da uma fodendo displayzada
show();