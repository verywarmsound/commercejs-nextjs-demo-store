import React, {Component} from 'react';
import Link from 'next/link';
import Head from 'next/head';
import {connect} from 'react-redux';
import {addToCart} from '../../store/actions/cartActions';
import {withTranslation} from 'react-i18next';
import PropTypes from 'prop-types';

class Activities extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: 'hottest',
    };
    this.handleAddToCart = this.handleAddToCart.bind(this);
  }

  /**
   * Add to Cart
   */
  handleAddToCart(productId) {
    this.props.dispatch(addToCart(productId, 1));
  }

  renderSidebar() {
    const {categories, t} = this.props;
    const hiddenUnusedCategories = categories.filter((category) => category.slug !== 'hottest');
    const sortedCategories = hiddenUnusedCategories.sort((a, b) => a.slug.localeCompare(b.slug));
    return (
      <>
        {sortedCategories.map((category) => (
          <div key={category.id} className="custom-container-item">
            <button className="category-link" onClick={() => this.setState({category: category.slug})}>
              {t(category.name)}
            </button>
          </div>
        ))}
      </>
    );
  }

  /**
   * Render collections based on categories available in data
   */
  renderCollection() {
    const {categories, products, t} = this.props;
    const catSlug = this.state.category;
    const cat = categories.find((category) => category.slug === catSlug);
    if (!cat) {
      return [];
    }
    /**
     * Filter products by category
     */
    const fileteredProducts = products.filter((product) =>
      product.categories.find((productCategory) => productCategory.id === cat.id),
    );
    return (
      <div className="activities-wrap">
        {fileteredProducts.map((product) => (
          <div key={product.id} className="list-item">
            <Link href="/product/[permalink]" as={`/product/${product.permalink}`}>
              <a
                className="item-link"
                style={{
                  background: `url("${product.media.source}") center center/cover`,
                }}
              />
            </Link>
            <div className="product-bottom">
              <div className="product-name-price">
                <p className="product-link">{t(product.name)}</p>
                <p className="product-link">{product.price.formatted_with_symbol}</p>
              </div>
              <button
                className="add-to-cart"
                onClick={() => {
                  this.handleAddToCart(product.id);
                }}>
                + Add
              </button>
            </div>
          </div>
        ))}
      </div>
    );
  }

  render() {
    return (
      <div className="section-activities">
        <Head>
          <title>Activities</title>
        </Head>
        <div ref={this.sidebar} className="list-wrapper">
          {this.renderSidebar()}
        </div>

        {/* Main Content */}
        <div ref={this.page} className="activities-wrap">
          {this.renderCollection()}
        </div>
      </div>
    );
  }
}

Activities.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object),
};

Activities.defaultProps = {
  products: [],
};

export default  withTranslation()(connect((state) => state)(Activities));
