import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import CardHorizontal from "./components/CardHorizontal/CardHorizontal";

function App() {
    const [count, setCount] = useState(0);

    return <>
        {/* <img src="https://morethandigital.info/wp-content/uploads/2017/03/10-Top-Webseiten-für-gratis-lizenzfreie-Bilder.jpeg" alt="" width={'50%'}/> */}

        <div className="placeholder">
            placeholder div
        </div>

        <CardHorizontal />
    </>;
}

export default App;
