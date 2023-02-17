// Write your JS code here

import './index.css'

const Header = () => (
  <div>
    <nav className="nav-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
        alt="website logo"
        className="nav-logo"
      />
      <ul className="ul-list">
        <li className="list-item">Home</li>
        <li className="list-item">Products</li>
        <li className="list-item">Cart</li>
        <li className="list-item">
          <button className="logout-btn" type="button">
            Logout
          </button>
        </li>
      </ul>
    </nav>
  </div>
)

export default Header
