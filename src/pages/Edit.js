import React,{ Component,Fragment } from 'react';
import Header from '../component/Header';
import Footer from '../component/Footer';
import EditForm from '../component/EditForm';
import '../Index.css'

export class Edit extends Component {
    render(){
        return (
            <Fragment>
            <Header />  
            <EditForm/>
            <Footer/>    
            </Fragment>
        )
    }
}