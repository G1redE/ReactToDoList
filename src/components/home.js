import React, { Component, useState } from 'react';
import '../styles/Home.css';
function HomePage() {
    const [input,setInput] = useState("");
    const [items,setItems] = useState([]);
    const [isEdit,setIsEdit] = useState(false);
    const [id,setId] =useState(0);
    

    function handleInput(e){
        
        e.preventDefault();
        if(isEdit!==true && input!==''){
        setItems([...items].concat(input));
        setInput("");
    }
    else{
        if(input!==''){
          
            const updatedItems = [...items].map((todo,i) => {
                if(i === id){
                    todo = input;
                    
                }

                return todo;
            })
            
            setItems(updatedItems);
            setInput("");
            setIsEdit(false);
            }
            

            
            
        }
        
    
    }

    function deleteItem(id) {
        const updatedItems =[...items].filter((_,i) => i!==id);
        setItems(updatedItems);
        setInput("");
        setIsEdit(false);
    }
   

    console.log(items);
    return ( 
    <div className="external-div">
    <div className="mid-div">
        <h2 className="heading">TODO LIST</h2>
        <div className="AddInput">
            <form onSubmit={handleInput}> 
            <input
            type="text"
            onChange={(event) => setInput(event.target.value)}
            value={input}
            required/>
            <button type='submit'>{isEdit ? "Edit" : "Add"}</button>

            </form>
            {items.map((todo,index)=> <div className="list"> <div onClick={(e)=> { 
                if(todo!==""){
                setIsEdit(true);
                setInput(todo);
                setId(index);
                handleInput(e);
                }

            }}>{todo}</div> 
             <button onClick={() => deleteItem(index)} id="deletebtn"> Delete</button> 
             
             </div>)}
        </div>
    
    </div>
    </div>
      );
}

export default HomePage;