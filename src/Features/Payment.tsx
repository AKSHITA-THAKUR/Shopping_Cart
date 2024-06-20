import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
const Payment: React.FC = () => {
	const { isAuthenticated , loginWithRedirect } = useAuth0();
	
	if (!isAuthenticated) {

		return (
			<div>
				<h1 className="text-4xl text-red-600 bg-green-200 p-10">
					You need to login first
				</h1>
                <button
                    onClick={()=> loginWithRedirect({ appState: { returnTo: "/payment" } })}
								className="mt-2 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
						>
						Login
				</button>
			</div>
		);
	}
	return (
		<div>
			<h1 className="text-3xl w-100 h-40 bg-green-100 ">This is the Payment Dashboard</h1>
		</div>
	);
};

export default Payment;
