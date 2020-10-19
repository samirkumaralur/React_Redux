import React, { Component } from 'react'
import {connect} from "react-redux";
class Home extends Component {
    
    OnClickHandler=(e)=>{
        console.log(e.target.innerText);
        this.props.cardIdToBeDeleted(e.target.innerText);
    }
    render() {
        const {cards, cardIdToBeDeleted}=this.props;
        return (
            <div>
                {
                    cards.map(card=>{
                        return(                       
                        <div>
                            <p onClick={this.OnClickHandler.bind(this)}>{card.id}</p> 
                            <p>{card.Name}</p>
                            <p>{card.age}</p>
                            <hr/>
                        </div>);
                    })
                }
            </div>
        )
    }
}

const mapReducerStateToComponentProps=(state, ownProps)=>{
    let idLocal=ownProps.id;
    return{
        cards:state.cards.filter(card=>{return (card.id===idLocal)})
    }
}

const mapReducerDispatchToProps=(dispatch)=>{
    return{
        cardIdToBeDeleted: (id)=>{dispatch({type:"DELETE_CARD", id:id})}
    }
    
}


export default connect(mapReducerStateToComponentProps, mapReducerDispatchToProps)(Home);
