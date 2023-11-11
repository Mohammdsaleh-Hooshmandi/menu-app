import { Fragment, useState } from "react";
import { createPortal } from "react-dom";
import GlobalStyle from "./components/Common/GlobalStyles";
import Header from "./components/Header/Header";
import List from "./components/OrderedList/List";
import BackDrop from "./components/Common/BackDrop";



const App = () => {
	const [showList, setShowList] = useState(false);

	const openListHandler = () => {
		setShowList(true);
	};
	const closeListHandler = () => {
		setShowList(false);
	};

	return (
		<Fragment>
			<GlobalStyle />
			{showList && createPortal(<BackDrop onClick={closeListHandler} onClose={closeListHandler} />, document.getElementById('backdrop-root'))}
			{showList && createPortal(<List onClose={closeListHandler} />, document.getElementById('list-root'))}
			<Header onOpen={openListHandler} />
			<section style={{ height: '100vh' }}></section>
			<section style={{ height: '100vh' }}></section>
			<section style={{ height: '100vh' }}></section>
			<section style={{ height: '100vh' }}></section>
		</Fragment>
	);
}

export default App;