import React, { Component } from 'react';

class AppProductPage extends Component {
    render() {
        const product = this.props.location.state.product;
        var productSrc = require('./../../public/img/products/' + product.category + '/' + product.src + '.jpg');
        var total;
        function totalPrice() {
            var quantity = document.getElementById('quantity').value;
            var totalValue = document.getElementById('totalValue');
            var price = product.price;
            price = price.replace('$', '');
            total = (Math.round(price * quantity * 100) / 100).toFixed(2);
            totalValue.innerHTML = '$' + total;
        }

        return (
            <React.Fragment>
                <div className="body">
                    <div className="product-page-wrapper">
                        <div className="product-page-info-page">
                            <div className="product-page-buy-img">
                                <img src={productSrc} alt="" />
                            </div>
                            <div className="product-page-buy-info">
                                <p>{product.item}</p>
                                <hr className="main-hr" />
                                <div className="product-page-info">
                                    <div className="product-page-info-item">Price</div>
                                    <div className="product-page-price">${product.price}</div>
                                </div>
                                <hr className="all-hr" />
                                <div className="product-page-info">
                                    <div className="product-page-info-item">Product details</div>
                                    <div className="product-page-details">{product.description}</div>
                                </div>
                                <hr className="all-hr" />
                                <div className="product-page-info">
                                    <div className="product-page-info-item">Shipping</div>
                                    <div className="product-page-shipping">${product.shipping} (${product.freeShipping} and more Free Shipping)</div>
                                </div>
                                <hr className="all-hr" />
                                <div className="product-page-info">
                                    <div className="product-page-info-item">Current Inventory</div>
                                    <div className="product-page-cur-inv">{product.stock}</div>
                                </div>
                                <div className="product-page-info">
                                    <div className="product-page-info-item">Quantity</div>
                                    <div className="product-page-quantity">
                                        <input id="quantity" type="number" min="1" defaultValue="1" onChange={() => { totalPrice() }} />
                                    </div>
                                </div>
                                <hr className="bottom-hr" />
                                <div className="product-page-info">
                                    <div className="product-page-total">Total</div>
                                    <div className="product-page-total-price" id="totalValue"></div>
                                </div>
                                <div className="product-page-buttons">
                                    <button className="product-page-buy">BUY NOW</button>
                                    <button className="product-page-add">ADD TO CART</button>
                                    <button className="product-page-wish">WISH LIST</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default AppProductPage;