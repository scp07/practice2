                             

const resturent= {
    returentName:'Ashen khai',
    Items:['pasta','pizza','juicel','lassi'],
    Branch:['Dhaka','Barishal','Patuakhali','Barguna'],
    order: function(Index1,Index2){
        return [this.Branch[Index1],this.Items[Index2]];
    },
    OpenHour:{
        sun:{
            open:6 ,
            colse:12,
        },
        mon:{
            open:7 ,
            colse:12,
        },
        tue:{
            open:8 ,
            colse:12,
        },
        wed:{
            open:6 ,
            colse:12,
        },
        thu:{
            open:10 ,
            colse:12,
        },
    },
    OdrerDeleverY: function ({FoodIndex,locatinIndex,CustomerName,parsonalAdrss}){
        console.log(`Congratulations order recived! the customer name is ${CustomerName}. He orderd ${this.Items[FoodIndex]} and his location ${parsonalAdrss}/${this.Branch[locatinIndex]}}`);
    },
    TeaCorner:function (tea,...otherItem){
        console.log(`we make a tea with ${tea} and we will use ${otherItem[1]}`)
    }
}


const {wed,...otherDays} = resturent.OpenHour;
// console.log(otherDays.tue.open);
// console.log(otherDays);
// resturent.OdrerDeleverY({
//     FoodIndex:2,
//     locatinIndex:2,
//     CustomerName:'samour chandra',
//     parsonalAdrss: 'Rupatali Road No-12 '
// });

const abcd = ['a','b','c','d'];

const [aa, ,bb,cc] = abcd;
// console.log(aa,bb,cc)

// let [loc1,loc2] = resturent.Branch;

// [loc2,loc1] = [loc1,loc2]
// console.log(`Our frist brabch in ${loc1} and second location is ${loc2}`);

// let nameArry = ['samour','chandra'];

// let [fristName,lastName] = nameArry;


// [lastName,fristName] = [fristName,lastName]
// console.log(fristName,lastName);


// const [locationBranch,foodName] = resturent.order(2,0);
// console.log(locationBranch,foodName);

// const num  = [1,2,[4,5]];
// let [a, ,[b,c]] = num;
// console.log(a,b,c);

// for (const [i,item] of resturent.Branch.entries()){
//     console.log(`The ${i+1}st place is ${item}`)
// }

let z = 20;
let x = 30;
let y = 10;

const arr = { y:1,z:2,x:3};
const {y:yy,x:xx,z:zz} = arr;

const BoysInSchool = ['Rafi','Junayet','Mukbul',"Safin"];
const GirlsInSchool = ['Jannat','Riya','Sadia','Mahfuz']
const [name1,name2, ,...otherName] = [...BoysInSchool,...GirlsInSchool]
// console.log(name1);
// console.log(name2)
// console.log(otherName)
const TotalStudent = [...BoysInSchool,...GirlsInSchool];
    // for(const [i,student] of TotalStudent.entries()){
    //     console.log(`${i+1}: student is ${student}`)
    // }
const makePizza = function(item1,item2,item3){
    // console.log(`You hava orderd a pizza with :${item1},${item2},${item3} Thanks`)
}
const button = document.querySelector('.a');
button.addEventListener('click',function(e){
    e.preventDefault();
})
// const ingradians = [prompt('Let\'s Give item'),prompt('Let\'s Give item'),prompt('Let\'s Give item')];

makePizza('grlick','onion','garlic');

const samour = function(a,b){
    console.log('hello this is samour chandra paul i am a webdevlper');
    return a+b;
}
const players = ['doni','mashrafi','bailli','samour'];

// for (let [X,items] of players.entries()){
//     // console.log(`The ${X+1} number is ${items}`)
// }

// console.log(`The frist player is ${m} and ${c} others${s} samoir ${s}`);


const FriendGf = {
    fristName: 'ismita',
    lastName:'islam',
    age:19,

}
const {fristName:nagin,age:tar} =FriendGf;
// console.log(nagin)

const counTry = 'Bangladesh';

const PizzaHut = function(frist,second,third){
    console.log(`Order recived . Your pasta with delevard with ${frist} and ${second} with Extra ${third}`);
}

// const userData = [prompt('fist'),prompt('second'),prompt('third')];

// PizzaHut(...userData);

const newResturent = {start:'Friday',...resturent,ownra:'samour'};
// console.log(...newResturent.Branch)

newResturent.returentName = 'Hello world';
// console.log(resturent);
// console.log(newResturent)
// console.log(ab);
// console.log(ac);
// console.log(...other)
let galass = 'tea';
let cup = 'coffe';
([galass,cup]=[cup,galass]);
// console.log(`frist one is ${cup} second ${galass}`)

const marks = [31,34,43,53,66,77,88,99];
const add = function (...parmiters){
    let sum = 0 ;
    for(let i of parmiters){
        sum = sum+i;
    }
    return sum ;
}
console.log(add(...marks))