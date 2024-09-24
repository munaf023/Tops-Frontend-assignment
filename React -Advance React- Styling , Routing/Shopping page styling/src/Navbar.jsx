import React from 'react'

function Navbar(props) {
  return (
    <div className="container">
    <header className="header">
      <div className="logo">
        <img src="logo.png" alt="Nest Mart & Grocery" />
      </div>
      <nav className="nav">
        <ul>
          <li><a href="/">About Us</a></li>
          <li><a href="/">My Account</a></li>
          <li><a href="/">Wishlist</a></li>
          <li><a href="/">Order Tracking</a></li>
        </ul>
      </nav>
      <div className="search">
        <input type="text" placeholder="Search for items..." />
        <button type="submit">
          <i className="fa fa-search"></i>
        </button>
      </div>
      <div className="actions">
        <div className="location">
          <button type="button">
            <i className="fa fa-map-marker"></i>
            <span>Your Location</span>
            <i className="fa fa-angle-down"></i>
          </button>
        </div>
        <div className="compare">
          <button type="button">
            <i className="fa fa-refresh"></i>
            <span>Compare</span>
          </button>
        </div>
        <div className="wishlist">
          <button type="button">
            <i className="fa fa-heart"></i>
            <span>Wishlist</span>
          </button>
        </div>
        <div className="cart">
          <button type="button">
            <i className="fa fa-shopping-cart"></i>
            <span>Cart</span>
          </button>
        </div>
        <div className="account">
          <button type="button">
            <i className="fa fa-user"></i>
            <span>Account</span>
          </button>
        </div>
      </div>
    </header>
    <main className="main">
      <section className="banner">
        <div className="banner-content">
          <h1>Fresh Vegetables</h1>
          <h2>Big discount</h2>
          <p>Save up to 50% off on your first order</p>
          <form>
            <input type="email" placeholder="Your email address" />
            <button type="submit">Subscribe</button>
          </form>
        </div>
        <div className="banner-image">
          <img src="banner-image.jpg" alt="Fresh Vegetables" />
        </div>
      </section>
      <section className="categories">
        <div className="categories-title">
          <h2>Browse All Categories</h2>
        </div>
        <div className="categories-list">
          <ul>
            <li><a href="/">Deals</a></li>
            <li><a href="/">Home</a></li>
            <li><a href="/">About</a></li>
            <li><a href="/">Shop</a></li>
            <li><a href="/">Vendors</a></li>
            <li><a href="/">Mega menu</a></li>
            <li><a href="/">Blog</a></li>
            <li><a href="/">Pages</a></li>
            <li><a href="/">Contact</a></li>
          </ul>
        </div>
      </section>
    </main>
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <img src="logo.png" alt="Nest Mart & Grocery" />
        </div>
        <div className="footer-info">
          <p>Copyright © 2023 Nest Mart & Grocery. All rights reserved.</p>
          <p>Need help? Call Us: +1800 900</p>
        </div>
      </div>
    </footer>
  </div>
  )
}

export default Navbar
