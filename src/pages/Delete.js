import React,{ Component,Fragment } from 'react';
import Header from '../component/Header';
import Footer from '../component/Footer';
import DeleteMember from '../component/DeleteMember';
import '../Index.css'

export class Delete extends Component {
    render(){
        return (
            <Fragment>
            <Header /> 
            <DeleteMember/> 
            <Footer/>    
            </Fragment>
        )
    }
}