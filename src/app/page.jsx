import React from 'react'
import Card from './components/Card'

const page = () => {
  let name="SOJA"
  const Greet=(a)=>{
  console.log("Heyy my name is:",a)
  }
  console.log(Greet(name))
  const Add =(a,b)=>{
    return a+b
  }
  console.log("Sum=",Add(10,20))
  let a=5
  const multiply=(a)=>{
    for(let i=0;i<11;i++){
      console.log("5*"+i+"="+(5*i))
    }
    
  }
  multiply(a)

  const myobj={
    NAME:"SOJA",
    BATCH:"S3D",
    ROLL_NO:57,
    COLLEGE:"CEC"
  }
  console.log(myobj)

  const arrobj=[
    {
    NAME:"SOJA",
    BATCH:"S3D",
    ROLL_NO:57,
    COLLEGE:"CEC"
  },
  {
    NAME:"MEGHA",
    BATCH:"S3D",
    ROLL_NO:38,
    COLLEGE:"CEC"
  }
  ]
  console.log(arrobj)
  

  const profile=[
    {
    username:"soja_m_thomas",
    name:"soja",
    posts:14,
    followers:650,
    following:700
  }
  ]
  console.log(profile)
  const post=[
    {
      username:"soja_m_thomas",
      image:"url",
      likes:350,
      comments:["good","nice"],
      share:5,
      hashtags:["instagram","picture"]
    }
  ]
  console.log(post)

  const checknum=(n)=>{
    if(n>0){
      console.log("positive number");
    }
    else if(n<0){
      console.log("negative number");
    }
    else{
      console("zero");
  }
  };
  checknum(20);


  const large=(a,b,c)=>{
  if (a>b && a>c) {
    console.log(a," is larger");
  }else if(b>c){
    console.log(b," is larger");
  }else{
    console.log(c," is larger");
  }
};
large(10,30,40);



let count=0;
const arr=[1,2,3,4,5,6]

  for( let i=0;i<=arr.length;i++)
  {
    if(arr[i]%2==0)
    {
      count++;
    }
  }

console.log("the even number count is ",count);



const array=[1,2,3,4,5,6,7]
const ispresent=(a)=>{
  for(let i=0;i<=arr.length;i++)
  {
    if (a==arr[i])
      return true;
      
  } return false;
}
if (ispresent(1))
  console.log("The number is present!");
else
      console.log("The number is Not present!");
 const utube=[
  {
   views:3000,
   like:2500,
   share:550,
   subscibers:2000,
   comments:[
    {
      userid:"soja",
      content:"good presentation"
  },
  {
      userid:"sona",
      content:"nice videoo"
  }
 ]}
]
console.log(utube);

const mName="SOJA M THOMAS"

const ytvideo={
  name:"GoldRush video song",
  channel:"Sony music south",
  views:"685k",
  uploadeddate:"5days ago"
}
return(
  <div>

    <div>
      <h2 className='text-8xl text-red-500'>This is my first JS project</h2>
      <p className='text-7xl text-green-400'>{mName}</p>

    <p className='text-6xl'>{myobj.NAME}</p>
    <p className='text-6xl'>{myobj.BATCH}</p>
    <p className='text-6xl'>{myobj.ROLL_NO}</p>
    <Card data={ytvideo} />
    </div>
  </div>
)
}
export default page;
