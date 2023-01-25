import React from "react";
import Icon from '@mui/material/Icon';

function Fields(props){
    return (
        <div className="input-group col-lg-12 mb-2 px-5">
            <div className="input-group-prepend">
                <span className="input-group-text bg-white pl-4 border-md border-right-0">
                    <Icon>{props.iconName}</Icon>
                </span>
            </div>
            <input id={props.idName} type={props.type} name={props.idName} placeholder={props.placeholder} onChange={props.onChange} className="form-control bg-white border-left-0 border-md"></input>
        </div>
    );
}

export default Fields;