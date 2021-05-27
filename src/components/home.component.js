import { React, Component } from "react";

export default class Home extends Component{
   

    render(){
        return(
            
            <div className="page-wrapper">
                    
                    <div className="content container-fluid">
                        
                        
                        <div className="page-header">
                            <div className="row">
                                <div className="col-sm-12">
                                    <h3 className="page-title">Welcome Admin!</h3>
                                    <ul className="breadcrumb"><i className="fa fa-tachometer"/>
                                   
                                        <li className="breadcrumb-item active">Dashboard</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                        
        
                        <div className="row">
                            <div className="col-xl-3 col-sm-6 col-12">
                               

                                <div className="orderDiv">
                                    <div className="card-body">
                                        <div className="dash-widget-header">
                                        <span className="dash-widget-icon text-warning">
                                                <i className="fa fa-book"></i>
                                            </span>
                                            <div className="dash-count">
                                                <h3>168</h3>
                                            </div>
                                        </div>
                                        <div className="dash-widget-info">
                                            <h6 className="text-muted">Orders</h6>
                                            <div className="progress progress-sm">
                                            <div className="progress-bar bg-warning w-50"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </div>
                            <div className="col-xl-3 col-sm-6 col-12">
                                <div className="stockDiv">
                                    <div className="card-body">
                                        <div className="dash-widget-header">
                                            <span className="dash-widget-icon text-warning">
                                                <i className="fa fa-credit-card"></i>
                                            </span>
                                            <div className="dash-count">
                                                <h3>487</h3>
                                            </div>
                                        </div>
                                        <div className="dash-widget-info">
                                            
                                            <h6 className="text-muted">Stock</h6>
                                            <div className="progress progress-sm">
                                            <div className="progress-bar bg-warning w-50"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-sm-6 col-12">
                                <div className="transactionDiv">
                                    <div className="card-body">
                                        <div className="dash-widget-header">
                                        <span className="dash-widget-icon text-warning">
                                                <i className="fa fa-barcode"></i>
                                            </span>
                                            <div className="dash-count">
                                                <h3>485</h3>
                                            </div>
                                        </div>
                                        <div className="dash-widget-info">
                                            
                                            <h6 className="text-muted">Transactions</h6>
                                            <div className="progress progress-sm">
                                            <div className="progress-bar bg-warning w-50"></div> 
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-sm-6 col-12">
                                <div className="salesDiv">
                                    <div className="card-body">
                                        <div className="dash-widget-header">
                                        <span className="dash-widget-icon text-warning">
                                                <i className="fa fa-folder"></i>
                                            </span>
                                            <div className="dash-count">
                                                <h3>2523</h3>
                                            </div>
                                        </div>
                                        <div className="dash-widget-info">
                                            
                                            <h6 className="text-muted">New Order</h6>
                                            <div className="progress progress-sm">
                                                <div className="progress-bar bg-warning w-50"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12 col-lg-6">
                            
                               
                                <div className="card card-chart">
                                    <div className="card-header">
                                        <h4 className="card-title">Sales Report</h4>
                                        <div className="card-body">
        
          </div>
          </div>
       
       
        <div id="curve_chart" ></div>
                                    </div>
                                  
                                </div>
                               
                                
                            </div>
                            <div className="col-md-12 col-lg-6">
                            
                                
                                <div className="card card-chart">
                                    <div className="card-header">
                                        <h4 className="card-title">Stock Report</h4>
                                        <div className="card-body">
        
       
     
       
         <div className="container-fluid">
         <div id="columnchart12"></div>
         </div>
         
                                    </div>
                                    
                                </div>
                               
                                
                            </div>	
                        </div>
                        <div className="row">
                            <div className="col-md-6 d-flex">
                            
                                
                                <div className="card card-table flex-fill">
                                    <div className="card-header">
                                        <h4 className="card-title">Orders List</h4>
                                    </div>
                                    <div className="card-body">
                                        <div className="table-responsive">
                                            <table className="table table-hover table-center mb-0">
                                                <thead>
                                                    <tr>
                                                        <th> Name</th>
                                                        <th>Speciality</th>
                                                        <th>Earned</th>
                                                        <th>Reviews</th>
                                                    </tr>
                                                </thead>
                                               
                                            </table>
                                        </div>
                                    </div>
                                </div>
                                
                                
                            </div>
                            <div className="col-md-6 d-flex">
                            
                                
                                <div className="card  card-table flex-fill">
                                    <div className="card-header">
                                        <h4 className="card-title">Transactions</h4>
                                    </div>
                                    <div className="card-body">
                                        <div className="table-responsive">
                                            <table className="table table-hover table-center mb-0">
                                                <thead>
                                                    <tr>													
                                                        <th>Product Name</th>
                                                        <th>Prodyct Id</th>
                                                        <th>Amount sold</th>
                                                        <th>Amount remaining</th>													
                                                    </tr>
                                                </thead>
                                                
                                                   
                                            </table>
                                        </div>
                                    </div>
                                </div>
                               
                            </div>
                        </div>
                        </div>
                                         
               
        );}}