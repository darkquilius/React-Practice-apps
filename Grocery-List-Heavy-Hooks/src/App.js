import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'

function App() {

  const [name, setName] = useState("");
  const [list, setList] = useState([]);
  const [editing, setEditing] = useState(false);
  const [editID, setEditID] = useState(null);
  const [alert, setAlert] = useState({show: false, msg: "", type: ""});

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!name){
      showAlert(true, "danger", "Enter a value...")
    }
    else if(name && editing){
      setList(list.map((item) => {
        if(item.id === editID){
          return {...item, title: name}
        }
        return item
      }))
      setEditing(false);
      setName("");
      showAlert(true, "success", "successfully edited...")
    }
    else{
      // show the alert wehn done
      showAlert(true, "success", "successfully added...")
      const newItem = {id: Date.now().toString(), title: name};
      setList([...list, newItem]);
      setName("");
    }
  }

  const showAlert = (show=false, type="", msg="") => {
    setAlert({show, type, msg});
  }

  const clearList = () => {
    showAlert(true, "danger", "All items cleared...")
    setList([])
  }

  const removeItem = (id) => {
    showAlert(true, "success", "Item removed...");
    setList(list.filter((item) => item.id !== id))
  }

  const editItem = (id) => {
    const editItem = list.find((item) => item.id === id);
    setEditing(true);
    setEditID(id);
    setName(editItem.title);
  }

  return (
    <section className="section-center">
      
      <form className="grocery-form" onSubmit={handleSubmit}>
        
        {alert.show && <Alert {...alert} removeAlert={showAlert}  list={list}/>}
        
        <h3>Grocery List</h3>
        
        <div className="form-control">
          
          <input 
            type="text" 
            className="grocery"
            placeholder="ex. Bread"
            value={name}
            onChange={(e) => setName(e.target.value)}>
          </input>
          
          <button className="submit-btn" type="submit">
            {editing? "edit": "submit"}
          </button>
        
        </div>
      
      </form>
      
      <div className="grocery-container">
        
        <List items={list} name={name} editItem={editItem} removeItem={removeItem}/>
        
        <button className="clear-btn" onClick={clearList}>
          clear
        </button>
      
      </div>
    
    </section>
  )
}

export default App
