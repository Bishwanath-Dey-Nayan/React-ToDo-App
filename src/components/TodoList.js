import React, { Component } from 'react';
import TodoItem from './TodoItem';

 class TodoList extends Component {
     state = {  }
     render() { 

        const {items,handleClear,handleDelete, handleEdit} = this.props;
         return ( 
             <div>
                 <ul className="list-group my-5">
                 <h3 className="text-capitalize text-center">
                 List
                 </h3>
                 {
                     items.map(item =>
                        {
                            return(
                                <TodoItem 
                                 key={item.id}
                                 title={item.title}
                                 handleDelete={() => handleDelete(item.id)}
                                 handleEdit={() =>  handleEdit(item.id)}
                                  />
                            );
                        }
                        )
                 }
                

                 <button type="button" className="btn btn-danger btn-block mt-5"
                 onClick={handleClear}
                 >Clear </button>
                 </ul>
             </div>
          );
     }
    }
 
export default  TodoList;