import React,{Component} from 'react';

import TodoList from './components/TodoList';
import TodoInput from './components/TodoInput';
import 'bootstrap/dist/css/bootstrap.min.css';
import uuid from 'uuid';

class App extends Component {
  state = { 
    items:[],
    id:uuid(),
    item:'',
    editItem:false,
   }

   //when something is written on the text box then the placeholder will remove and 
   //change its state with item:'' value
   handleChange = (e) =>
   {
     this.setState({
       item: e.target.value
     });
   };

   handleSubmit=(e) =>{
        e.preventDefault();


        const newItem = {
          id:this.state.id,
          title:this.state.item
        };

        const updatedItems = [...this.state.items,newItem];

        this.setState({
          items:updatedItems,
          item:'',
          id:uuid(),
          editItem:false
        });

   }

   handleClear = () =>{
     console.log("clear");
      this.setState({
        items:[]
      });
   };

   handleDelete = (id) =>{
     const filteredItem =  this.state.items.filter(item => item.id !== id);

     this.setState({items:filteredItem});
   }

   handleEdit = id =>
   {
      const filteredItem = this.state.items.filter(item => item.id !== id);
      const selectedItem = this.state.items.find(item => item.id === id);

      this.setState({items:filteredItem,
      item:selectedItem.title,
      editItem:true,
      id:id,
      });
     





   }

  render() { 
    return ( 
        <div className="container">
          <div className="row">
            <div className="col-10 mx-auto col-md-8 mt-4">
              <h3 className="text-capitalize text-center">
                Todo Input
              </h3>

            <TodoInput item={this.state.item}
             handleChange={this.handleChange}
             handleSubmit={this.handleSubmit}
             edit={this.state.editItem}
             
             />
            <TodoList 
            items={this.state.items}
            handleClear={this.handleClear}
            handleDelete = {this.handleDelete}
            handleEdit={this.handleEdit}
            /> 
            
            </div>
          </div>
        </div>


      
     );
  }
}
 
export default App;
