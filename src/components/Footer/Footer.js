import React from "react"
import BottomNav from "../BottomNav/BottomNav"

export default class Footer extends React.Component{
    render(){
        console.log(this.props)
return(

    <footer>
    <div>
    <h4> {this.props.greeting} {this.props.greeting2}  </h4>
    </div>
    <BottomNav />
    </footer>

)
    }
}