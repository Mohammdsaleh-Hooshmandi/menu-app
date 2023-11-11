import { Fragment } from "react";
import GlobalStyle from "./components/Common/GlobalStyles";
import Header from "./components/Header/Header";



const App = () => {
	return (
		<Fragment>
			<GlobalStyle />
			<Header />
			<h1 style={{ marginTop: '100vh' }}>React.js</h1>
		</Fragment>
	);
}

export default App;