import { useState } from "react"
import styles from "./page.module.css"
import {AiOutlineArrowRight,AiOutlineArrowLeft} from "react-icons/ai"
export default function TodoApp(){

    const [NewData,setNewData] = useState({
        content:"",
        state:"pending",
        id:1
    })

    const [List,setList]= useState({
        data:[]
    })

    function addNewData(event){
        event.preventDefault();

        setList({data:[...List.data,NewData]})
        setNewData({...NewData,id:NewData.id+1})
    }
    function StateChange(event,id,newstate){
        event.preventDefault();
        const NewState = List.data.map(obj=>(
            obj.id == id ? {...obj,state:newstate} : obj  
        ))
        setList({data:NewState})
    }
    return(<main className={styles["container"]}>
        <header className={styles["main-header"]}>
            <div>
                What are you going to do ? 
            <form onSubmit={(e)=>addNewData(e)}>
                <input type="text" placeholder="Add New Element" onChange={(e)=>setNewData({...NewData,content:e.target.value})}></input>
                <button type="submit">Add</button>
            </form>
        </div>
        </header>
    <div className={styles["Todo"]}>
        <div  className={styles["Todo-Pending"]}>
            <header>Pending</header>
            {List.data.map((element ,key)=>(
                element.state=="pending" ? 
                <div key={key} className={styles["Todo-Flex-Pending"]}>
                    <div className={styles["Todo-Content-Pending"]} >{element.content}</div>
                    <button className={styles["Todo-Button-Right"]}onClick={(e)=>StateChange(e,element.id,"onwork")}>
                        <div className={styles["Todo-Button-Bg"]}></div><AiOutlineArrowRight className={styles["React-Arrow-R"]}/></button>
                </div> : ""
            ))}
        </div>
        <div className={styles["Todo-OnWork"]}>
            <header>OnWork</header>
            {List.data.map((element ,key)=>(
                element.state=="onwork" ? 
                <div key={key} className={styles["Todo-Flex-OnWork"]}>
                    <button className={styles["Todo-Button-Left"]}  onClick={(e)=>StateChange(e,element.id,"pending")}>
                        <div className={styles["Todo-Button-Bg"]}></div><AiOutlineArrowLeft /></button>
                    <div className={styles["Todo-Content-OnWork"]} >{element.content}</div>
                    <button className={styles["Todo-Button-Right"]}  onClick={(e)=>StateChange(e,element.id,"completed")}>
                        <div className={styles["Todo-Button-Bg"]}></div><AiOutlineArrowRight/></button>
                </div> : ""
            ))}
        </div>
        <div className={styles["Todo-Completed"]}>
            <header>Completed</header>
            {List.data.map((element ,key)=>(
                element.state=="completed" ? 
                <div key={key} className={styles["Todo-Flex-Completed"]}>
                    <button className={styles["Todo-Button-Left"]} onClick={(e)=>StateChange(e,element.id,"onwork")}>
                        <div className={styles["Todo-Button-Bg"]}></div><AiOutlineArrowLeft/></button>
                <div className={styles["Todo-Content-Completed"]} >{element.content}</div>
                </div> : ""
            ))}
        </div>
    </div>
    </main>)
}