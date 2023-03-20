import axios from 'axios'
import {useState,useEffect} from 'react'
import FloatIcons from '../compontnts/FloatIcons/FloatIcons'
import LeftFloat from '../compontnts/LeftFloat/LeftFloat'
import RightFloat from '../compontnts/RightFloat/RightFloat'
import Cards from './sections/Cards/Cards'
import Hero from './sections/Hero/Hero'
import Nav from './sections/Nav/Nav'

export default function Home() {
  const [data,setData]=useState([])
  useEffect(()=>{
    axios.get("https://dev.deepthought.education/assets/uploads/files/files/others/ddugky_project.json"
    )
    .then(res=>setData(res.data))
    .catch(err=>console.log(err))
  },[])
  console.log(data);
  
  return (
    <>
    <Nav></Nav>
        <RightFloat/>
        <LeftFloat/>
    <div className="">
        <Hero/>
        <Cards/>
        <FloatIcons/>
    </div>
    </>
  )
}
