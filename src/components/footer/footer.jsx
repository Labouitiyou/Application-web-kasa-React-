import logo from "../../assets/Logo_Footer.png";
import "../footer/footer.css"

const Footer = () => {
    return (
        <div className="wrapperFooter">
            <img className="logoFooter" src={logo} alt="logo"/>
            <p className="pFooter">© 2020 Kasa. All rights reserved</p>
        </div>
    );
};

export default Footer;