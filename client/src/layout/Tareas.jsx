import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Tareas extends React.Component {

    constructor(){
        super();
        this.state={
            title:'',
            description:''
        }
        this.addTask=this.addTask.bind(this);
        this.handleChange=this.handleChange.bind(this);
    }


    addTask(e){
        console.log(this.state);
        e.preventDefault();
    }

    handleChange(e){
        const {name, value} = e.target; //Desestructuración del target (solo quiero el name y el valor)
        this.setState(
            {
                [name]:value 
            }
        )
    }

    render(){
        return <div>

            <h1>Tareas</h1>
            <div className="container">
                <form onSubmit={this.addTask}>
                    <div className="mb-3">
                        <label htmlFor="inputText" className="form-label">Tarea: </label>
                        <input type="text" className="form-control" id="title" name="title" onChange={this.handleChange} aria-describedby="emailHelp"/>                
                    </div>     
                    
                    <div className="mb-3">
                    <label htmlFor="inputDescription" className="form-label">Descripción: </label>
                    <textarea className="form-control border border-primary" id="description" name='description' onChange={this.handleChange} rows="3"></textarea>
                    </div>                

                    <button type="submit" className="btn btn-primary">Enviar datos</button>
                </form>

            </div>
        
        </div> 

    }
    
    
}

