import React, { Component, Fragment } from "react";

class Stock extends Component {
  state = {
    text: "",
    isChecked: false
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  toggleChange = () => this.setState({ isChecked: !this.state.isChecked });

  renderStock = stock => {
    const { text, isChecked } = this.state;
    if (
      text !== "" &&
      stock.category.toLowerCase().indexOf(text.toLowerCase()) === -1
    ) {
      return null;
    }
    if (isChecked && stock.stocked === false) {
      return null;
    }

    return (
      <table className="table w-50 m-auto">
        <tbody>
          <tr>
            <td>{stock.category}</td>
            <td colSpan="5">
              {stock.stocked === false ? (
                <p className="text-danger">{stock.name}</p>
              ) : (
                <p>{stock.name}</p>
              )}
            </td>
            <td>{stock.price}</td>
          </tr>
        </tbody>
      </table>
    );
  };

  render() {
    return (
      <Fragment>
        <div className="mt-5" style={{ width: "30%", margin: "auto" }}>
          <input
            type="text"
            className="form-control"
            name="text"
            value={this.state.text}
            onChange={this.onChange}
            placeholder="Search Stock..."
          />
          <label style={{ marginRight: "10em", padding: "2.5px" }}>
            <input type="checkbox" onChange={this.toggleChange} />
            Only show products in stock
          </label>
        </div>
        <table className="table w-50 m-auto">
          <thead>
            <tr>
              <th>Categories</th>
              <th>Name</th>
              <th>Price</th>
            </tr>
          </thead>
        </table>

        <div>
          {this.props.stocks.map((stock, index) => {
            return this.renderStock(stock);
          })}
        </div>
      </Fragment>
    );
  }
}

export default Stock;
