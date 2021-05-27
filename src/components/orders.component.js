import {React, Component  } from "react";

export default class Orders extends Component{
    //constructor(){
       // super()
        
   // }
    render(){
        return(
            <div className="page-wrapper">
			
            <div className="content container-fluid">
                
               
                
                    <div className="row">
                        <div className="col-sm-12">
                            <h3 className="page-title">Orders</h3>
                            
                        </div>
                    </div>
                
              

                <div className="row">
                    <div className="col-xl-12 col-sm-3 col-12">
                        <div className="card">
                            <div className="card-body">
                                
   <div className="table-responsive">
    <br />
    <div className="row">
     <div className="input-daterange">
      <div className="col-md-4">
      <h6>Start Date:</h6>
       <input type="text" name="start_date" id="start_date" className="form-control" />
      </div>
      <div className="col-md-4">
        <h6>End Date:</h6>
       <input type="text" name="end_date" id="end_date" className="form-control" />
      </div>      
     </div>
     <div className="col-md-4">
      <input type="button" name="search" id="search" value="Search" className="btn btn-info" />
     </div>
    </div>
    <br />
    <table id="order_data" className="table table-bordered table-striped">
     <td>
      <tr>
       <th>Order ID</th>
       <th>Customer ID</th>
         <th>Amount</th>
       <th>Invoice Number</th>
       <th>Product Id</th>
       <th>Quantity</th>
       <th>Order Date</th>
       <th>Order Status</th>
      
      </tr>
     </td>
    </table>
    <center><button onClick="window.print()">Print Orders</button></center>

    
   </div>
  </div>


                            </div>
                            </div>
                            </div>
                            </div>
                            </div> 
       
          

        );
         
    }
}