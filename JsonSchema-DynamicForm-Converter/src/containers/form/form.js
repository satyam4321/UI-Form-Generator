import React, { Component } from 'react';
import Field from '../../components/field/field'
import Button from 'react-bootstrap/Button';


class MyForm extends Component {


    constructor(props) {
        super(props);

        try {
            let arr = JSON.parse(this.props.Schema);
            
        }
        catch(error){
            alert(error)
        }

        this.state = {
            fields: [

            ]
        };

    }


    fieldChange = (event, field, index) => {
        const updatedField = { ...field };
        updatedField.value = event.target.value;
        updatedField.valid = this.checkValidity(updatedField);

        const updatedFields = [...this.state.fields];
        updatedFields.splice(index, 1, updatedField);
        let formValid = true;
        for (let field of updatedFields) {
            if (!field.valid) {
                formValid = false;
            }
        }
        this.setState({
            fields: updatedFields,
            formValid: formValid
        })

        // console.log(updatedField.value);
        // console.log('field changed')
    }
    removeNullValues = (jsonData) => {
        const udata = jsonData;
        for (const key in jsonData) {
            if(jsonData[key]=="" || jsonData[key]==null){
                delete udata[key]
            }
        }
        return udata;
      }
    onSubmit = (event) => {

        event.preventDefault();
        const formData = new FormData(event.target);
        const jsonData = JSON.stringify(Object.fromEntries(formData.entries()));
        const updatedData = this.removeNullValues(JSON.parse(jsonData));
        const fdata = JSON.parse(JSON.stringify(updatedData));
        console.log(fdata)
    
    }
   
    
    render() {
        try {
            let arr = JSON.parse(this.props.Schema);
            this.state = {
                fields: [

                ]
            };
            for (let i in arr) {
                this.state.fields.push(arr[i])
            }
        }
        catch(error){
            return <p>The JSON schema has syntax errors: {error.message}</p>;
        }

        const fields = this.state.fields;
        const sortedFields = fields.slice().sort((a, b) => a.sort - b.sort);
        this.state.fields = sortedFields;

        return (
        <form onSubmit={(event) => this.onSubmit(event)}>
            {
                this.state.fields.map((field, index) => {
                    return (
                        
                        <Field
                            key={field.jsonKey}
                            fieldConfig={field}  />
                    )
                })
            }
            <Button variant = "dark" type='submit' >Submit</Button>
        </form>)

    }
}

export default MyForm;