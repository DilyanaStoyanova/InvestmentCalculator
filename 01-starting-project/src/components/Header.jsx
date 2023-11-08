import logo from "../../public/investment-calculator-logo.png";

export default function Header() {
    return (
        <header id="header">
            <img src={logo} alt="A bag full of money" />
            <h1>Investment Calculator</h1>
        </header>
    );
}