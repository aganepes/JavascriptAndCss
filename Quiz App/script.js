let questions=[
    {
        id: 1,
        question: 'Which language runs directly in a web browser for client-side functionality?',
        asks: {
            a: 'Java',
            b: 'C++',
            c: 'Python',
            d: 'JavaScript'
        },
        answer: 'd'
    },
    {
        id: 2,
        question: 'In Python, what is primarily used to define a block of code (like a function body or loop)?',
        asks: {
            a: 'Parentheses ( )',
            b: 'Curly Braces { }',
            c: 'Semicolons ;',
            d: 'Indentation'
        },
        answer: 'd'
    },
    {
        id: 3,
        question: 'What is the mechanism in Object-Oriented Programming (OOP) that allows a class to inherit properties and methods from another class?',
        asks: {
            a: 'Encapsulation',
            b: 'Polymorphism',
            c: 'Abstraction',
            d: 'Inheritance'
        },
        answer: 'd'
    },
    {
        id: 4,
        question: 'Which data structure operates on a Last-In, First-Out (LIFO) principle?',
        asks: {
            a: 'Queue',
            b: 'Linked List',
            c: 'Array',
            d: 'Stack'
        },
        answer: 'd'
    },
    {
        id: 5,
        question: 'Which SQL keyword is used to retrieve data from a database?',
        asks: {
            a: 'UPDATE',
            b: 'CREATE',
            c: 'SELECT',
            d: 'INSERT'
        },
        answer: 'c'
    },
    {
        id: 6,
        question: 'In C and C++, what is a variable that stores the memory address of another variable called?',
        asks: {
            a: 'Reference',
            b: 'Pointer',
            c: 'Function',
            d: 'Literal'
        },
        answer: 'b'
    },
    {
        id: 7,
        question: 'Which of the following is NOT a programming language but a markup language used for defining web page structure?',
        asks: {
            a: 'HTML',
            b: 'PHP',
            c: 'JavaScript',
            d: 'C#'
        },
        answer: 'a'
    },
    {
        id: 8,
        question: 'What is the most widely used distributed version control system for tracking changes in source code?',
        asks: {
            a: 'Subversion (SVN)',
            b: 'Git',
            c: 'Mercurial',
            d: 'CVS'
        },
        answer: 'b'
    },
    {
        id: 9,
        question: 'Which of these is a popular JavaScript library for building user interfaces, maintained by Meta (Facebook)?',
        asks: {
            a: 'Django',
            b: 'Flask',
            c: 'React',
            d: 'Ruby on Rails'
        },
        answer: 'c'
    },
    {
        id: 10,
        question: 'What translates source code into machine code before the program is executed, creating an executable file?',
        asks: {
            a: 'Assembler',
            b: 'Compiler',
            c: 'Debugger',
            d: 'Interpreter'
        },
        answer: 'b'
    }
]
const questionTitle=document.querySelector('.question'),
    AskContainer=document.querySelector('.ask'),
    Button=document.querySelector('.next-question');
const answersTag=AskContainer.getElementsByTagName('input');

let QuestionId=0;
let SelectAnswer=false;
let Answers=[];
let getGrade=(array)=>{
   let b=Math.round(array.filter((e)=>{
        return e==true;
    }).length/array.length);
   if(b<0.3) 
    return 2;
   if(0.3<b<0.57) 
    return 3;
   if(0.57<b<0.7) 
    return 4;
   if(b>0.7) 
    return 5;
}


let setQuizContainer=(question)=>{
    if(question.length==0){
        questionTitle.innerText=`Total questions:${Answers.length}
       Correct answers:${Answers.filter((e)=>{
            return e==true;
        }).length}
       Your grade:${getGrade(Answers)}`;
        AskContainer.innerHTML=``;
    }else{
        questionTitle.innerText=question.question;
        AskContainer.innerHTML=`
                    <ul>
                        <li>
                            <input type="radio" name="answer" value="${question.asks.a}" id="a">
                            <label for="a" id="a_text">${question.asks.a}</label>
                        </li>
                        <li>
                            <input type="radio" name="answer" value="${question.asks.b}" id="b">
                            <label for="b" id="b_text">${question.asks.b}</label>
                        </li>
                        <li>
                            <input type="radio" name="answer" value="${question.asks.c}" id="c">
                            <label for="c" id="c_text">${question.asks.c}</label>
                        </li>
                        <li>
                            <input type="radio" name="answer" value="${question.asks.d}" id="d">
                            <label for="d" id="d_text">${question.asks.d}</label>
                        </li>
                    </ul>
        `;
        }
}
setQuizContainer(questions[QuestionId])
// Correct Answer to control
let a=[];
window.onload=()=>{
     a[0]=answersTag[0].value;
     a[1]=answersTag[1].value;
     a[2]=answersTag[2].value;
     a[3]=answersTag[3].value;
}    

// to work 
Button.addEventListener('click',()=>{
    // Correct ask and Select ask to control
    if(!(QuestionId==-1)){
        for(i=0;i<a.length;i++){
            if(answersTag[i].checked){
                SelectAnswer=true;
                if(a[i]==questions[i].answer){
                        Answers.push(true)
                    }else{
                        Answers.push(false)
                    }            
                }
            }
    }

    if((SelectAnswer==true)||(QuestionId==-1))  QuestionId++ ;

    if(!(QuestionId==questions.length)) {
        setQuizContainer(questions[QuestionId]);
        if(QuestionId==0) Button.innerText='Submit'
    }else{
        setQuizContainer([])
        Button.innerText='Restart';
        QuestionId=-1;
        Answers=[]
    }  
    SelectAnswer=false;
})


