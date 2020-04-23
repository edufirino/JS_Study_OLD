var questions=[{

    question:"Era essa peça que você queria?",
    choices:["ai ai","não sabia...","era essa mesmo!","oi?"],
    correctAnswer:2
},{
    question:"Como você descreveria o seu corpo?",
    choices:["Legal...","Estadual...","Bonito...","Nada a ver irmão!"],
    correctAnswer:3
},{

    question:"Aonde você deixaria um oco?",
    choices:["na Economia","No Jailson","No meu pai?","seu cu!"],
    correctAnswer:3
},{


    question:"Você tá afim de trabalhar?",
    choices:["sim","maybe","não, não no salame nao pode nao...","quero trabalhar e relaxar!"],
    correctAnswer:3
},{
    question:"Por que você tacou a pedra atrás?",
    choices:["por causa de um moreno","por causo de agressão em cima de um trabalho pra fazer eu se transformar em cobra","pq achei q tinha só a mulher na frente,mas não foi com a intenção disso","não quero falar com bandeirantes."],
    correctAnswer:2
},{
    question:"Para que você quer esses 5 reais?",
choices:["para comprar cachaça","para se tirar um decumento","para comprar alimento","para se criar vergonha na cara"],
correctAnswer:2
},{
    question:"Não vai dar?",
choices:["Não vai dar","Não vai dar o que pai!","Não me alimentei antes de sair","você quer subir em arvore?"],
correctAnswer:1
},{
    question:"Eu vou...",
choices:["Gozar!","Tacar o P.U","As mina ai do baile","Se prepara para sentar"],
correctAnswer:1
},{
    question:"Quanto custa um calça para uma jovem de 16 anos?",
    choices:["mais de 300 reais","menos de 300 reais","300 reais","NDA"],
    correctAnswer:0
},{
    question:"Por que ninguem entrou no Sol?",
    choices:["NDA","não sabia...","era essa mesmo!","Porque o Sol não tem porta"],
    correctAnswer:2
},{
    question:"Qual classe é mais fraca?",
    choices:["Mago","Feiticeiro","22 goblins","as outras mais fortes"],
    correctAnswer:0
},{
    question:"O que fazer em uma guerra?",
    choices:["bola de fogo","quebrar as janelas","mentir para os membros do grupo","ter uma vida paralela no RPG"],
    correctAnswer:3
},{
    question:"Qual das seguintes esta incorreta?",
    choices:["yorgute","mortandela","mendingo","NDA"],
    correctAnswer:3
},{
    question:"Qual dessas frases são sinonimas?",
    choices:["oricandalabraxubia","Haz","Oh Glória","Todas as anteriores"],
    correctAnswer:2
}];

var currentQuestion=0;
var correctAnswers=0;
var quizOver=false;


//execute this function only after the page is ready
$(document).ready(pageLoad);
function pageLoad(){
    displayCurrentQuestion();
    $(this).find(".quizMessage").hide();

    //executed when nextButton is clicked
    $(this).find(".nextButton").on("click",function(){
        if(!quizOver){
            value=$("input[type='radio']:checked").val();
            //the QuizMessage is only shown when no option has been selected
            if(value==undefined){
                $(document).find(".quizMessage").text("Please select an answer");
                $(document).find(".quizMessage").show();
            }
            else{
                $(document).find(".quizMessage").hide();
                if(value == questions[currentQuestion].correctAnswer){
                    correctAnswers++;
                }
                currentQuestion++;
                if(currentQuestion<questions.length){
                    displayCurrentQuestion();
                }
                else{
                    displayScore();
                    $(document).find(".nextButton").text("Play Again?");
                    quizOver=true;
                }
            }


        }
        else{
            quizOver=false;
            $(document).find(".nextButton").text("Next Question");
            resetQuiz();
            displayCurrentQuestion();
            hideScore();
        }
    });
}



function displayCurrentQuestion(){
    console.log("In display current Question");

    var question = questions[currentQuestion].question;
    var questionClass = $(document).find(".quizContainer > .question");
    var choiceList = $(document).find(".quizContainer > .choiceList");
    var numChoices = questions[currentQuestion].choices.length;

    //Set the questionClass(DIV) text to the current question
    $(questionClass).text(question);

    //Remove all current <li> elements (if any) from the choiceList Div
    $(choiceList).find("li").remove();

    var choice;
    for(i=0;i<numChoices;i++){
        //stores the choice at the index i from the currentQuestion in the var choice
        choice=questions[currentQuestion].choices[i];
        //sets up the html listItem for each choice - and append it to the choiceList Div
        $('<li><input type="radio" value='+i+' name="dynradio" />'+ choice+'</li>').appendTo(choiceList);
    }
}

function resetQuiz(){
    currentQuestion=0;
    correctAnswers=0;
    hideScore();
}
function displayScore(){
    $(document).find(".quizContainer > .result").text("You scored: " 
    + correctAnswers + " out of: " + questions.length);
    $(document).find(".quizContainer > .result").show();
}
function hideScore()
{
    $(document).find(".result").hide();
}