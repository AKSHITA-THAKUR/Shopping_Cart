import { Auth0Provider } from "@auth0/auth0-react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App.tsx";
import store from "./app/store.tsx";
import "./index.css";

const onRedirectCallback = (appState: any) => {
	// Check if there's a returnTo path in appState
	const returnTo = appState?.returnTo || window.location.pathname;
	window.location.replace(returnTo);
};

ReactDOM.createRoot(document.getElementById("root")!).render(
	<Provider store={store}>
		<Auth0Provider
			domain="dev-iyd7c86g8syd41vm.us.auth0.com"
			clientId="pi0GchtkI07CZ59kRqR9Zn6TiD8H2ckO"
			authorizationParams={{
				redirect_uri: window.location.origin,
			}}
			onRedirectCallback={onRedirectCallback}
		>
			<App />
		</Auth0Provider>
		,
	</Provider>
);
