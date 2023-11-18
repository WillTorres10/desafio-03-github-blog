import {ThemeProvider} from "styled-components";
import {defaultTheme} from "./styles/themes/default.ts";
import {GlobalStyles} from "./styles/global.ts";
import {Router} from "./Router.tsx";
import {BrowserRouter} from "react-router-dom";

function App() {

    return (
        <ThemeProvider theme={defaultTheme}>
            <GlobalStyles/>
            <BrowserRouter>
                <Router />
            </BrowserRouter>
        </ThemeProvider>
    )
}

export default App
