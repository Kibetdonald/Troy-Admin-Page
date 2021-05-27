import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addProduct, deleteProductById } from '../actions';
import { Modal, Button ,Table, Col} from "react-bootstrap";
import Input from '../components/UI/Input';
import {getProducts } from "../actions/product.action";
// import productReducer from '../reducers/product.reducer';
const Manage = (props) => {

    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [categoryId, setCategoryId] = useState("");
    const [productPictures, setProductPictures] = useState([]);
    const [show, setShow] = useState(false);
    const [productDetailModal, setProductDetailModal] = useState(false);
    const [productDetails, setProductDetails] = useState(null);
    const category = useSelector((state) => state.category);
    const product = useSelector((state) => state.product);
    const dispatch = useDispatch();
  
    useEffect(() => {
      dispatch(getProducts());
  }, []);

    const handleClose = () => {
    const form = new FormData();
    form.append("name", name);
    form.append("quantity", quantity);
    form.append("price", price);
    form.append("description", description);
    form.append("category", categoryId);

    for (let pic of productPictures) {
      form.append("productPicture", pic);
    }

    dispatch(addProduct(form)).then(() => setShow(false));
  };


  
  const handleShow = () => setShow(true);

  const createCategoryList = (categories, options = []) => {
    for (let category of categories) {
      options.push({ value: category._id, name: category.name });
      if (category.children.length > 0) {
        createCategoryList(category.children, options);
      }
    }

    return options;
  };
  const showProductDetailsModal = (product) => {
    setProductDetails(product);
    setProductDetailModal(true);
  };

  const renderProducts = () => {
    return (
      <Table style={{ fontSize: 12 }} responsive="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
        
          {product.products.length > 0 ? product.products.map(product => (
                <tr key={product._id}>
                  <td>2</td>
                  <td>{product.name}</td>
                  <td>{product.price}</td>
                  <td>{product.quantity}</td>
                  <td>{product.description}</td>
                  <td>
                    <button class="btn btn-light" style={{color:"#2196f3"}} onClick={() => showProductDetailsModal(product)}>
                   <i class="fas fa-info-circle"></i>
                    </button>
                    <button class="btn btn-light"
                      onClick={() => {
                        const payload = {
                          productId: product._id,
                        };
                        dispatch(deleteProductById(payload));
                      }}
                    >
                    <i class="fa fa-trash" style={{color: "#f44336"}} aria-hidden="true"></i>

                 
                    </button>
                  </td>
                </tr>
              ))
            : null}
        </tbody>
       
      </Table>
    );
  };




    return (
        <div className="page-wrapper">

            <div className="content container-fluid">



                <div className="row">
                    <div className="col-lg-12">
                        <h3 className="page-title">Product</h3>

                    </div>
                </div>


                <div className="row">
                    <div style={{margin:"auto"}}className="col-lg-10">
                        <div className="card">
                            <div className="card-header">
                                <h4 style={{textAlign: "center"}} className="card-title">Add Product</h4>
                            </div>
                            <div className="card-body">
                            <center>
                            <button style={{textAlign: "center"}} onClick={handleShow} className="btn btn-outline-secondary"><span>Add Product</span></button>
                         
                            </center>
                               

                                <Modal show={show} onHide={handleClose}
                                >
                                    <Modal.Header closeButton>
                                        <Modal.Title>Add Product</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                       <form enctype="application/json">
                                       <Input
          label="Name"
          value={name}
          placeholder={`Product Name`}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          label="Quantity"
          value={quantity}
          placeholder={`Quantity`}
          onChange={(e) => setQuantity(e.target.value)}
        />
        <Input
          label="Price"
          value={price}
          placeholder={`Price`}
          onChange={(e) => setPrice(e.target.value)}
        />
        <Input
          label="Description"
          value={description}
          placeholder={`Description`}
          onChange={(e) => setDescription(e.target.value)}
        />
        <select
          className="form-control"
          value={categoryId}
          onChange={(e) => setCategoryId(e.target.value)}
        >
          <option>select category</option>
          {createCategoryList(category.categories).map((option) => (
            <option key={option.value} value={option.value}>
              {option.name}
            </option>
          ))}
        </select>
        {/* {productPictures.length > 0
          ? productPictures.map((pic, index) => (
              <div key={index}>{pic.name}</div>
            ))
          : null} */}
                                     

                                       </form>
                                      
                                        {/* <input
                                            type="file"
                                            //  value={categoryName}
                                            //  placeholder={`Category Name`}
                                            //  onChange={(e) => setCategoryName(e.target.value)}
                                            className="form-control"

                                        /> */}

                                    </Modal.Body>
                                    <Modal.Footer>
                                                 
                                        <Button variant="secondary" onClick={handleClose}>
                                            Add product
          </Button>
                                    </Modal.Footer>
                                </Modal>
                            </div>
                        </div>

                    </div>

                    <div className="col-lg-12" style={{margin:"auto"}}>
                        <div className="card">
                            <div className="card-header">
                                <h4 style={{textAlign:"center"}} className="card-title">Edit/Delete Product</h4>
                            </div>
                            <div className="card-body">
                            <Col>{renderProducts()}</Col>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>





    );
}
export default Manage