import React,{ Component,Fragment } from 'react';
import Header from '../component/Header';
import Footer from '../component/Footer';
import Main from '../component/Main';
import '../Index.css'

export class Home extends Component {
    render(){
        return (
            <Fragment>
            <Header />  
            <Main />
            <Footer/>    
            </Fragment>
        )
    }
}