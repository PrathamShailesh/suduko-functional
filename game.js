count=0
ans=0
lose=true

const randomNumber = Math.floor(Math.random() * 3) + 1;

var problem3=[
    "-2-43-95-",
    "---6--4-3",
    '-74-8----',
    "-----3--2",
    "-8--4--1-",
    "6--5-----",
    "-69-1-78-",
    "5-87-9-31",
    "-31-52-4-"
]

var solution3=[
    '126437958',
    "895621473",
    "374985126",
    "457193862",
    "983246517",
    "612578394",
    "269314785",
    "548769231",
    "731852649"
]

var problem2=[
    "---6--4--",
    "7----36--",
    "----91-8-",
    "-38-5-2--",
    "-5-18---3",
    '---3-6-45',
    "-4-2-9-6-",
    '9-3-6-52-',
    "-2-43-1-8"
]

var solution2=[
    '581672439',
    "792843651",
    "364591782",
    "438957216",
    "256184973",
    "179326845",
    "845219367",
    "913768524",
    "627435198"
]




var problem=[
    "2--3-----",
    "8-4-62--3",
    "-138--2--",
    "----2-39-",
    "5-7---621",
    "-32--6---",
    "-2---914-",
    "6-125-8-9",
    "-----1--2"
]

var solution=[
    "276314958",
    "854962713",
    "913875264",
    "468127395",
    "597438621",
    "132596487",
    "325789146",
    "641253879",
    "789641532",
]

if (randomNumber === 2) {
    problem = problem2.slice(); 
    solution=solution2.slice()
}
else if(randomNumber===3){
    problem=problem3.slice();
    solution=solution3.slice()
}



let bgm = new Audio("/bg.mp3");
bgm.play();
bgm.loop = true;


window.onload=function(){
    startgame()
    // localStorage.clear()
    localStorage.setItem('wrong',0)
    localStorage
}

function startgame(){
    for(let i=1;i<10;i++){
        const number = document.createElement("div")
        number.innerText=i;
        number.id=i;
        number.addEventListener('click',toggle);
        number.classList.add('number');
        document.querySelector(".numbers").appendChild(number)
    }

    for(let i=0;i<9;i++){
        for(let j=0;j<9;j++){
            const tile = document.createElement("div")
            if(problem[i][j]!="-"){
                tile.innerText=problem[i][j];
                tile.classList.add("tilecolor")
            }
            if([i]==2 || [i]==5){
                tile.style.borderBottom="2px solid black"
            }
            if([j]==3 ||[j]==6){
                tile.style.borderLeft="2px solid black"
            }

            tile.id=`${i}-${j}`;
            tile.addEventListener('click',select)
            tile.classList.add("tile")
            document.querySelector(".game").appendChild(tile)

        }
    }

}
tog=null

let btn=new Audio("/click.mp3")
function toggle(){
    if(tog!=null){
        tog.classList.remove("tog")
    }
    tog=this;
    tog.classList.add("tog")
    btn.pause();
    btn.currentTime=0;
    btn.play()


}
function checkIfGameFinished() {
    if(ans==46){
        localStorage.setItem('gameState', 'win');
        window.location.href='result.html'
    }
    if(timer==0){
        localStorage.setItem('gameState','lose')
    }

}

let correct = new Audio("correct.mp3")
let wr=new Audio('/wrong.mp3')

function select(){
    if(tog){
        if(this.innerText!=""){
            return
        }
    }
    let num=this.id.split("-")
    let i = num[0]
    let j = num[1]

    if(solution[i][j]==tog.id){
        checkIfGameFinished();
        this.innerText=tog.id;
        ans+=1
        correct.pause();
        correct.currentTime=0;
        correct.play()
    }
    else{
        wr.pause();
        wr.currentTime=0;
        wr.play()
    
        count+=1 ;
        localStorage.setItem('wrong',count)
        document.querySelector(".wrong_ans h2").innerText="wrong tries-"+count                  
    }
}

function timer(){
const timer = document.querySelector(".time h2");
let timeLeft = 10;
function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secondsDisplay = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${secondsDisplay.toString().padStart(2, '0')}`;
}

timer.textContent = `Count Down : ${formatTime(timeLeft)}`;
const timerInterval = setInterval(() => {
    timeLeft--;
    timer.textContent = `Count Down : ${formatTime(timeLeft)}`;
    localStorage.setItem('time',timeLeft)

    if (timeLeft === 0) {
        clearInterval(timerInterval);
        localStorage.setItem('gameState', 'lose')
        window.location.href = "result.html";
    }
}, 1000);

}
timer()
