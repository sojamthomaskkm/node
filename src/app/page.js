import React from 'react'

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
    posts:"14",
    followers:"650",
    following:"700"
  }
  ]
  console.log(profile)
  const post=[
    {
      username:"soja_m_thomas",
      image:"url",
      likes:"350",
      comments:["good","nice"],
      share:"5",
      hashtags:["instagram","picture"]
    }
  ]
  console.log(post)
}
export default page
