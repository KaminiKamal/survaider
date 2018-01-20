import React, {Component} from 'react';

class List extends Component {
constructor(props){
  super(props);
}

    render(){
    let style = {
    "padding" : "20px",
    "float" : "left"
    }
      return (
        <div className="collection">
        <a href="#!" className="collection-item active">
          <span>AGE || </span><span>RELATIONSHIP || </span>
          <span>SEX || </span><span>RACE || </span>
          <span>FNLWGT || </span><span>OCCUPATION || </span>
          <span>WORKCLASS || </span><span>EDUCATION</span>
        </a>
          {
            this.props.items.map(function(item, key) {console.log("item", item);
              return <a href="#!" className="collection-item" key={key}>
                        <span>{item.age} || </span><span>{item.relationship} || </span>
                        <span>{item.sex} || </span><span>{item.race} || </span>
                        <span>{item.fnlwgt} || </span><span>{item.occupation} || </span>
                        <span>{item.workclass} || </span><span>{item.education} </span>
                    </a>
            })
           }

        </div>
      )
    }

}



export default List;
