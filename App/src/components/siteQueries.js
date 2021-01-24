import { gql } from "apollo-boost"

export const GET_STUDENTS = gql`
    query {
        getStudents
    }
`
export const GET_STUDENT = gql`
    query GetStudent ($id: String){
        getStudent(id:$id)
    }
`
export const DELETE_STUDENTS = gql`
    mutation DeleteStudents($dataObj: [String]){
        deleteStudents(dataObj:$dataObj)
    }
`

export const ADD_STUDENT = gql`
    mutation AddStudent($dataObj:JSON){
        addStudent(dataObj:$dataObj)
    }
`
export const EDIT_STUDENT = gql`
    mutation EditStudent($dataObj:JSON){
        editStudent(dataObj:$dataObj)
    }
`