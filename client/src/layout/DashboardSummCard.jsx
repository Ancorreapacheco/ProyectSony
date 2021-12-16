import React from 'react';

import './css/style_main.css';

export const DashboardSummCard = ({infoCard}) =>{

    return(  
        <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4" key={infoCard.id}>
            <div className="card">
                <div className="card-header p-3 pt-2">
                    <div className="icon icon-lg icon-shape bg-gradient-dark shadow-dark text-center border-radius-xl mt-n4 position-absolute">
                        <i className="material-icons opacity-10">{infoCard.icon}</i>
                    </div>
                    <div className="text-end pt-1">
                        <p className="text-sm mb-0 text-capitalize">{infoCard.title}</p>
                        <h4 className="mb-0">{infoCard.value}</h4>
                    </div>
                </div>
                <hr className="dark horizontal my-0"></hr>
                <div className ="card-footer p-3">
                    <p className ="mb-0"><span className ="text-success text-sm font-weight-bolder">{infoCard.var} </span>{infoCard.spamTime}</p>
                </div>
            </div>
        </div>
    )
}