import React, { Component } from 'react'
import styleCss from './index.module.less'
import { Link } from 'react-router-dom'
export default class Pro1 extends Component {
    render(){
        return(
            <React.Fragment>
                <div className={styleCss.header}>pro1</div>
                <Link to="/pro1/child1" >跳转第一个孩子</Link>
                {this.props.children}
            </React.Fragment>
        )
    }
}