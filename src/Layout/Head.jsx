import logo from "../Images/react.png"

const subHeaderStyle = {
    color: "blueviolet",
    backgroundColor: "lightgray"
};


const Header = () => {
    return (
    <div>
        <MainHeader />
        <SubHeader />
    </div>);
}

const MainHeader = () => {
    return (
    <div className="pt-2 py-1 pl-2" style={{backgroundColor: 'black'}}>
        <img src={logo} style={{height:"35px", verticalAlign:"top"}}></img>
        <span className="h2 pt-3 ps-2 text-white-50">React Course - TaskOPedia</span>
    </div>)
}

const SubHeader = () => {
    return <p style={subHeaderStyle} className="text-center">This will be an exciting course.</p>
}

export default Header;