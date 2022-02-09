import React from "react";
//import Product from "./Product";
import ProductList from "./ProductList";
class Navbar extends React.Component {
  constructor(props)
  {
    super(props);
  }
  state = {};
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            My Cart
            <span class="badge bg-secondary"> {this.props.productList.length}</span>
          </a>
        </div>
      </nav>
    );
  }
}

export default Navbar;
