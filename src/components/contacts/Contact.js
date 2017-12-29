import React from 'react';

import ReactDOM from 'react-dom';

class Contact extends React.Component{
    constructor(props){
        super(props);
        this.name=props.name;
        this.email=props.email;
        this.tel=props.tel;
    }
    render(){
            return(
                <tr>
                    <td>{this.name}</td>
                    <td>{this.email}</td>
                    <td>{this.tel}</td>
                </tr>
            );
    }
}

function ContactInfo(props) {
    return new Contact(props);
}
function UsrInfo(){
    return (
        <table>
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Telephone</th>
            </tr>
            <ContactInfo name="Sara" email="sara@hotmail.com" tel="834-234-553"/>
            <ContactInfo name="Sammy" email="sammy@gmail.com" tel="674-323-742"/>
            <ContactInfo name="John"  email="john@outlook.com" tel="234-657-879"/>
        </table>
    );
}
export default function getReactContact(){
    return(
        ReactDOM.render(
            <UsrInfo />,
            document.getElementById('contacts')
        )
    );
}
