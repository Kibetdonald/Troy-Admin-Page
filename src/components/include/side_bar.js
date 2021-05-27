import { React} from "react";
import { Link } from "react-router-dom";


function Sidebar(){
    
    return(
                   <div className="sidebar" id="sidebar">
                        <div className="sidebar-inner slimscroll">
                            <div id="sidebar-menu" className="sidebar-menu">
                                <ul>
                                    <li className="menu-title"> 
                                        <span>Main</span>
                                    </li>

                                    <li>
                                        <Link to="/" className="fa fa-home"><span>Home</span></Link>
                                    </li> 
                                        
                                    <li> 
                                        <Link to="/orders" i className="fa fa-eye"><span>View Orders</span></Link>
                                      
                                    </li>
                                    <li> 
                                        <Link to="/manage" i className="fa fa-edit"><span>Edit/ Delete Products</span></Link>
                                    </li>
                                    <li> 
                                        <Link to="/addcategory" i className="fa fa-plus"><span>Add Category</span></Link>
                                    </li>
                                    <li> 
                                        <Link to="/addproduct" i className="fa fa-plus"><span>Add Product</span></Link>
                                    </li>
                                    
                                    
							<li className="submenu">
								<Link to="/"><i className="fa fa-book"></i> <span> Reports</span> 
                                <span i className="menu-arrow"></span>
                                </Link>
								<ul>
									<li><a href="sales.php">Sales Reports</a></li>
									<li><a href="stock.php">Stock Reports</a></li>
									<li><a href="pie.php">Quantity Reports</a></li>
								</ul>
							</li>
							
                                    </ul>
                                    </div>
                                    </div>	
                                </div>
    );}
export default Sidebar;
   



