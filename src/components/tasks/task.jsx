import React, { Component } from 'react';

class Task extends Component {

    render() {
        return (
            <div className="card d-flex mb-3 active">
                <div className="d-flex flex-grow-1 min-width-zero">
                    <div className="card-body align-self-center d-flex flex-column flex-md-row justify-content-between min-width-zero align-items-md-center pb-2">
                        <a href="#" className="list-item-heading mb-0 truncate w-40 w-xs-100  mb-1 mt-1">
                            <i className="heading-icon simple-icon-refresh"></i> 
                            <span className="align-middle d-inline-block">{ this.props.title }</span>
                        </a> 
                        <p className="mb-1 text-muted text-small w-15 w-xs-100">{ this.props.category }</p> 
                        <p className="mb-1 text-muted text-small w-15 w-xs-100">{ this.props.todayDate }</p> 
                        <div className="w-15 w-xs-100">
                            <span className="badge badge-primary badge-pill">{ this.props.label }</span>
                        </div>
                    </div> 
                    <div className="custom-control custom-checkbox pl-1 align-self-md-center align-self-start mr-4 pt-4">
                        <div className="itemCheck mb-0 custom-control custom-checkbox">
                            <input type="checkbox" autocomplete="off" className="custom-control-input" value="true" id="__BVID__183" />
                                <label className="custom-control-label" for="__BVID__183"></label>
                        </div>
                    </div>
                </div> 
                <div className="card-body pt-1">
                    <p className="mb-0">  
                        { this.props.details }
                    </p>
                </div>
            </div>
        );
    }
}

export default Task;
