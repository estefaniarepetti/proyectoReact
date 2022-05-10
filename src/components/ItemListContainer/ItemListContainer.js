import React from "react"

export default class Footer extends React.Component{
    render(){
        console.log(this.props)

return(

<div>

    <h3 className="ItemList"> {this.props.greeting}     a a estar aca </h3>
    </div>


)
    }
}