import React,{ Component,Fragment } from 'react';
import Header from '../component/Header';
import Footer from '../component/Footer';
import AddForm from '../component/AddForm';
import '../Index.css'

export class Add extends Component {
    render(){
        return (
            <Fragment>
            <Header />  
            <AddForm />
            <Footer/>    
            </Fragment>
        )
    }
}