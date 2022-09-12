import { useReducer, FunctionComponent, useMemo } from "react";
import Provider from "./context";
import Router from "./Router";
import { store } from "../Core/store";
import { wdcReducer } from "../Core/Reducer/wdcReducer";
import { Col } from "../Common/Grid";
import GeneralContainer from "../Styles/generalContainer";



const App: FunctionComponent = () => {
    const [state, dispatch] = useReducer(wdcReducer, store);

    
    return (
        <Provider value={{ dispatch, state }}>
            <>
                    <GeneralContainer>
                            {useMemo(() => {
                                return <Router />;
                            }, [])}
                    </GeneralContainer>
            </>
        </Provider>
    );
};

export default App;
