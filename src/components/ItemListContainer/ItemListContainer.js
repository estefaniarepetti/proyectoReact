import React from "react"

export default class Footer extends React.Component{
    render(){
        console.log(this.props)
return(

    <h3 className="ItemList"> {this.props.greeting} va a estar aca </h3>


)
    }
}