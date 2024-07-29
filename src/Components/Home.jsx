import { useNavigate } from "react-router-dom";

const Home = () => {
    const myNav1 = useNavigate();
    const jump1 = () => {
        myNav1("/home");
    }
    const jump2 = () => {
        myNav1("/insert");
    }
    return (
        <>
            <div style={{ backgroundColor: '', width: '100%', height: '100%', textAlign: 'center', color: 'black', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <h1 style={{fontSize:'3.5rem'}}>DASHBOARD</h1>
                <button id="jump-btn1" onClick={jump1}>⟪</button>
                <button id="jump-btn2" onClick={jump2}>⟫</button>
            </div>
        </>
    )
}
export default Home;