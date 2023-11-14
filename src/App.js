import { Fragment, useState } from "react";
import { createPortal } from "react-dom";
import GlobalStyle from "./components/Common/GlobalStyles";
import Header from "./components/Header/Header";
import List from "./components/OrderedList/List";
import BackDrop from "./components/Common/BackDrop";
import Menu from "./components/FoodsList/Menu";
import { ListContextProvider } from "./store/list-context";



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
			<ListContextProvider>
				{showList && createPortal(<BackDrop onClick={closeListHandler} onClose={closeListHandler} />, document.getElementById('backdrop-root'))}
				{showList && createPortal(<List onClose={closeListHandler} />, document.getElementById('list-root'))}
				<Header onOpen={openListHandler} />
				<Menu />
			</ListContextProvider>
		</Fragment>
	);
}

export default App;