import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));

const subHeaderStyle = {
    color: "blueviolet",
    backgroundColor: "lightgray"
};

function Header(){
    return (
    <div>
        <MainHeader />
        <SubHeader />
    </div>);
}

function MainHeader(){
    return <h1 className='text-primary'>React course!</h1>
}

function SubHeader(){
    return <p style={subHeaderStyle}>This will be an exciting course.</p>
}

function MainBody(){
    return (
        <div>
            <p>In this course, we will learn react js by building TaskOPedia</p>
            <ul>
                <li>Call Ben</li>
                <li>Go to walmart</li>
            </ul>
        </div>
    );
}

function Footer(){
    return <p style={{color:'gray', backgroundColor:'black'}}>Happy coding!</p>
}

root.render(
    <div>
        <Header />
        <MainBody />
        <Footer />
    </div>
);
