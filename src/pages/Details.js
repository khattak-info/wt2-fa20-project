import React,{ Component,Fragment } from 'react';
import Header from '../component/Header';
import Footer from '../component/Footer';
import Member from '../component/Member';
import '../Index.css'

export class Details extends Component {
    render(){
        return (
            <Fragment>
            <Header /> 
            <Member />
            <Footer/>    
            </Fragment>
        )
    }
}