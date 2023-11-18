import {ThemeProvider} from "styled-components";
import {defaultTheme} from "./styles/themes/default.ts";
import {GlobalStyles} from "./styles/global.ts";

function App() {

    return (
        <ThemeProvider theme={defaultTheme}>
            <GlobalStyles/>
            <h1></h1>
        </ThemeProvider>
    )
}

export default App
