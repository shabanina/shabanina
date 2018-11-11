import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import productsArray from '../productsArray';

class ListItems extends Component {
    render() {
        var category = this.props.location.state.category;
        var title;
        switch (category) {
            case "albums": title = "albums"; break;
            case "love_myself": title = "love myself"; break;
            case "official_md": title = "official md"; break;
            case "tour_md": title = "tour md"; break;
            case "exhibition": title = "exhibition"; break;
            case "dvd": title = "dvd"; break;
            default: title = ""; break;
        }
        const products = productsArray.filter(function (item) {
            return item.category === category;
        });
        console.log("category " + category);
        console.log("title " + title);
        return (
            <React.Fragment>
                <div className="wrapper">
                    <div className="category-title">{title}</div>
                    {/* <select>
                        <option value="bestMatch">Best Match</option>
                        <option value="highLow">Price High-Low</option>
                        <option value="lowHigh">Price Low-High</option>
                    </select> */}
                    <Items products={products} category={category} />
                </div>
            </React.Fragment>
        );
    }
}

function Items(props) {
    const products = props.products;
    const category = props.category;
    const listItems = products.map((item) =>
        <Item key={item.id} value={item} category={category} />
    );
    return (
        <React.Fragment>
            <div className="items-wrapper">
                {listItems}
            </div>
        </React.Fragment>
    );
}

function Item(props) {
    const category = props.category;
    var productSrc = require('./../../public/img/products/' + category + '/' + props.value.src + '.jpg');
    return (
        <React.Fragment>
            <div className="item">
                <div className="item-image">
                    <img src={productSrc} alt="" />
                    <Link to={{ pathname: "/productpage/" + props.value.id, state: { product: props.value } }} onClick={() => { window.scrollTo(0, 0); }}><div className="item-view-info">VIEW INFO</div></Link>
                </div>
                <p>{props.value.item}</p>
                <hr />
                <div className="item-info">
                    <div className="item-price">${props.value.price}</div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default ListItems;