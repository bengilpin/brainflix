import "./Header.scss";
import logo from "../../assets/images/Logo/BrainFlix-logo.svg";
import profilePic from "../../assets/images/Images/Mohan-muruge.jpg";
import searchIcon from "../../assets/images/Icons/search.svg";
import upload from "../../assets/images/Icons/upload.svg";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <header>
        <div className="header">
          <Link to="/">
            <img className="header__anchor--logo" src={logo}></img>
          </Link>
          <div className="header__container">
            <div className="header__container--inner">
              <div className="header__container--inner--search-container">
                <img
                  className="header__container--inner--search-container--icon"
                  src={searchIcon}
                ></img>
                <input
                  className="header__container--inner--search-container--input"
                  placeholder="Search"
                ></input>
              </div>
              <div className="header__container--inner--button-container">
                <Link to="/upload">
                <img
                  src={upload}
                  className="header__container--inner--button-container--icon"
                ></img>
                <button className="header__container--inner--button-container--button">
                  UPLOAD
                </button>
                </Link>
              </div>
            </div>
            <img
              className="header__container--profilePic"
              src={profilePic}
            ></img>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
