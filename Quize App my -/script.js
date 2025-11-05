let questions=[
    {
        id:1,
        question:'Which language runs in a web browser?-1',
        asks:{
            a:'Java-1',
            b:"C",
            c:'Python',
            d:'JavaScript'
        },
        answer:'Java-1'
    },
    {
        id:2,
        question:'Which language runs in a web browser?-2',
        asks:{
            a:'Java-2',
            b:"C",
            c:'Python',
            d:'JavaScript'
        },
        answer:'Java-2'
    },
    {
        id:3,
        question:'Which language runs in a web browser?-3',
        asks:{
            a:'Java-3',
            b:"C",
            c:'Python',
            d:'JavaScript'
        },
        answer:'Java-3'
    },
    {
        id:4,
        question:'Which language runs in a web browser?-4',
        asks:{
            a:'Java-4',
            b:"C",
            c:'Python',
            d:'JavaScript'
        },
        answer:'Java-4'
    },
    {
        id:5,
        question:'Which language runs in a web browser?-5',
        asks:{
            a:'Java-5',
            b:"C",
            c:'Python',
            d:'JavaScript'
        },
        answer:'Java-5'
    }
]
const questionTitle=document.querySelector('.question'),
    AskContianer=document.querySelector('.ask'),
    Button=document.querySelector('.next-question');
const answersTag=AskContianer.getElementsByTagName('input');

let QuestionId=0;
let SelectAnswer=false;
let Answers=[];
let Bahasy=(array)=>{
   let b=Math.round(array.filter((e)=>{
        return e==true;
    }).length/array.length)
   if(b<0.3) return 2;
   if(0.3<b<0.57) return 3;
   if(0.57<b<0.7) return 4;
   if(b>0.7) return 5;
}


let setQuizContianer=(question)=>{
    if(question.length==0){
        questionTitle.innerText=`Jemi soraglar:${Answers.length}
        Dogry jogaplar:${Answers.filter((e)=>{
            return e==true;
        }).length}
        Senin bahang:${Bahasy(Answers)}`;
        AskContianer.innerHTML=``;
    }else{
        questionTitle.innerText=question.question;
        AskContianer.innerHTML=`
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
setQuizContianer(questions[QuestionId])
// Correct Answer to controle
let a=[];
window.onload=()=>{
     a[0]=answersTag[0].value;
     a[1]=answersTag[1].value;
     a[2]=answersTag[2].value;
     a[3]=answersTag[3].value;
}    

// to work 
Button.addEventListener('click',()=>{
    // Correct ask and Select ask to Controle
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
        setQuizContianer(questions[QuestionId]);
        if(QuestionId==0) Button.innerText='Submit'
    }else{
        setQuizContianer([])
        Button.innerText='Tazeden bashla'
        QuestionId=-1;
        Answers=[]
    }  
    SelectAnswer=false;
})


