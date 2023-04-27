import React from 'react';

import { useEffect, useState } from 'react';


function generateFormFromJson(jsonObject) {
    
    const formElements = [];
    const [data, setData] = useState('');
    const [text, setText] = useState('');
    const [select, setSelect] = useState('');
    const [radio, setRadio] = useState('');

    function generateFormElements(parameter, level) {

        let formElement;

        switch (parameter.uiType.toLowerCase()) {
            case 'input':
                formElement = (
                    <input type={parameter.uiType}
                        sort={parameter.sort}
                        name={parameter.jsonKey}
                        value={parameter.data}
                        onChange={(e) => setData(e.target.value)}
                        placeholder={parameter.placeholder}
                        required={parameter.validate.required}

                    />);
                break;
            case 'textarea':
                formElement = (<textarea
                    sort={parameter.sort}
                    name={parameter.jsonKey}
                    value={parameter.text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder={parameter.placeholder}
                    required={parameter.validate.required}

                />);
                break;
            case 'select':
                formElement = (
                    <select
                        sort={parameter.sort}
                        required={parameter.validate.required}
                        name={parameter.jsonKey}
                        value={select}
                        onChange={(e) => setSelect(e.target.value)}
                        placeholder={parameter.placeholder}

                    >


                        {parameter.validate.options.map(option => (
                            <option key={option.value} value={option.label} >
                                {option.label}
                            </option>
                        ))}
                    </select>
                );
                break;

            case 'radio':
                formElement = (
                    <>
                        {
                            parameter.validate.options.map(option => (
                                <div key={option.value}>
                                    <label>
                                        <input
                                            sort={parameter.sort}
                                            type={parameter.uiType}
                                            name={parameter.jsonKey}
                                            value={radio}
                                            placeholder={parameter.placeholder}
                                            required={parameter.validate.required}
                                            // checked={selectedOption === option.value}
                                            onClick={(e) => setRadio(option.label)}
                                        />
                                        {option.label}
                                    </label>
                                </div>
                            ))

                        }
                    </>
                );
                break;

            case 'Group':
                formElement = (
                    <>
                        {
                            parameter.subParameters.map((subField, i) => {
                                generateFormElements(subField);
                            })
                        }
                    </>

                )
                break;
            default:
                formElement = null;
                break;
        }

        if (formElement)
            formElements.push(formElement);
    }
    generateFormElements(jsonObject, 0);

    return formElements;
}

const field = (props) => {

    const fieldConfig = props.fieldConfig;

    let element = generateFormFromJson(fieldConfig);
    // console.log(element);
    return (

        <div className="field-wrapper">
            <table cellPadding={40}  >
                <tbody>
                    <tr>
                        <td>{fieldConfig.label}</td>
                        <td align='left'>{element}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}


export default field;