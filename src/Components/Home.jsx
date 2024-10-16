import { useNavigate } from "react-router-dom";

const Home = () => {
    // useNavigate is basically used for the jump one page to another page
    const myNav1 = useNavigate();

    const jump1 = () => {
        myNav1("/display");
    }
    const jump2 = () => {
        myNav1("/insert");
    }
    return (
        <>
            <div style={{ width: '100%', height: '100%', textAlign: 'center', color: '#176179', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <h1 style={{ fontSize: '3rem',fontWeight:'bold'}}>CRUD APPLICATION</h1>
                <button id="jump-btn1" onClick={jump1}>⟪</button>
                <button id="jump-btn2" onClick={jump2}>⟫</button>
            </div>
        </>
    )
}
export default Home;