import React, { Component } from 'react';

class TodoInput extends Component {
    state = {  }
    render() { 
        const{item,handleChange,handleSubmit,edit} = this.props;
        return ( 
            <div className="card card-body my-3">
            <form onSubmit={handleSubmit}>
                <div className="input-group">
                <div className="input-group-prepend">
                <div className="input-group-text bg-primary text-white">
                <i className="fas fa-book" />
                </div>
                </div>
                <input type="text" className="form-control" placeholder="Add a Todo Item......" value={item}
                onChange={handleChange}
                
                />
                </div>
                <button type="submit"
                 className={edit ? "btn btn-block btn-success" : "btn btn-block btn-primary"}>
                {edit ? "Edit Item":"Add item"}</button>
            </form>
               
            </div>
         );
    }
}
 
export default TodoInput



