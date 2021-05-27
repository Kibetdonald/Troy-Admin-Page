import { React, Component } from "react";

//to help us connect the client side with the server side
import axios from 'axios';

export default class Addproduct extends Component {
    constructor(props) {
        super(props)
        //Binding the methods to the class
      
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        //Setting the state to an empty string
        this.state = {
            prd_title: '',
            prd_cat: '',
            prd_price: 0,
            prd_desc: '',
            prd_img: '',
            prd_keyword: '',
            prd_quantity: '',
            categorys: []
        }
    }

//Creating the methods that will handle onChange 
    onChange(event) {
        this.setState({
            [event.target.name]: event.target.value,
        });
    }
  


    /*Lets pull the categories from the database using axios
   componentDidMount(){
       axios.get('http://localhost:3000/addcategory/')
       .then(response =>{
           if(response.data.length >0){
               this.setState({
                   categories: response.data.map(category => category.prd_cat),
                   prd_cat: response.data(0).prd_cat
               })
           }
       })
   }

*/

   
   //But we've done it manualy
    componentDidMount() {
        this.setState({
            categorys: ['Oracle', 'MongoDb'],
            prd_cat: 'Oracle'
        });
    }

    //Handling onsubmit
    onSubmit(e) {
        e.preventDefault();
        const prod = {
            prd_title: this.state.prd_title,
            prd_cat: this.state.prd_cat,
            prd_price: this.state.prd_price,
            prd_desc: this.state.prd_desc,
            prd_img: this.state.prd_img,
            prd_keyword: this.state.prd_keyword,
            prd_quantity: this.state.prd_quantity

        }
     
        //Logging the variable prod in the console just for test purposes
        console.log(prod);


        // axios.post('http://localhost:3000/products/add', prod)
        //     .then(res => console.log(res.data));

        this.setState({
            prd_title: '',
            prd_cat: '',
            prd_price: 0,
            prd_desc: '',
            prd_img: '',
            prd_keyword: '',
            prd_quantity: '',
        });
    }



    render() {
        return (
            <div className="page-wrapper">

                <div className="content container-fluid">


                    <div className="page-header">
                        <div className="row">
                            <div className="col-sm-12">

                            </div>
                        </div>
                    </div>


                    <div className="row">
                        <div className="col-xl-12 col-sm-12 col-12">
                            <div className="card">
                                <div className="card-body">
                                    <h4 className="card-title">Add Products</h4>
                                </div>
                                <div className="card-body">
                                    <form onSubmit={this.onSubmit}>
                                        <div className="form-group row">
                                            <label className="col-form-label col-md-2">Product Title</label>
                                            <div className="col-md-10">
                                                <input type="text"
                                                    name="prd_title"
                                                    onChange={this.onChange}
                                                    value={this.state.prd_title}
                                                    className="form-control" />

                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label className="col-form-label col-md-2">Product Category</label>
                                            <div className="col-md-10">
                                                <select name="prd_cat"
                                                    value={this.state.prd_cat}
                                                    onChange={this.onChange}

                                                    className="form-control">


                                                    {
                                                        this.state.categorys.map(function (category) {
                                                            return <option
                                                                key={category}
                                                                value={category}>{category}
                                                            </option>
                                                        })
                                                    }


                                                </select>
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label className="col-form-label col-md-2">Product Price</label>
                                            <div className="col-md-10">
                                                <input type="text"
                                                    value={this.state.prd_price}
                                                    onChange={this.onChange}
                                                    name="prd_price" className="form-control"
                                                    placeholder="Product Price" />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label className="col-form-label col-md-2">Product Description</label>
                                            <div className="col-md-10">
                                                <input type="text"
                                                    value={this.state.prd_desc}
                                                    name="prd_desc"
                                                    onChange={this.onChange}
                                                    className="form-control" 
                                                    placeholder="Product Description" />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label className="col-form-label col-md-2">Choose Product Image</label>
                                            <div className="col-md-10">
                                                <input className="form-control"
                                                    value={this.state.prd_img}
                                                    onChange={this.onChange}
                                                    name="prd_img" type="file" />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label className="col-form-label col-md-2">Product Keyword</label>
                                            <div className="col-md-10">
                                                <input type="text"
                                                    name="prd_keyword"
                                                    value={this.state.prd_keyword}
                                                    onChange={this.onChange}
                                                    className="form-control" placeholder="Product Keyword" />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label className="col-form-label col-md-2">Product Quantity</label>
                                            <div className="col-md-10">
                                                <input type="text"
                                                    name="prd_quantity"
                                                    value={this.state.prd_quantity}
                                                    onChange={this.onChange}
                                                    className="form-control" placeholder="Product Quantity" />
                                            </div>
                                        </div>
                                        <center>
                                            <div className="form_row">
                                                &nbsp;<input type="submit" value="Add Product" />&nbsp;<br />

                                            </div>

                                        </center>
                                    </form>
                                </div>
                            </div>
                        </div>



                    </div>
                </div>
            </div>


        );

    }
}