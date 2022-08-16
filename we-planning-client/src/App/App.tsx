import { useReducer, FunctionComponent, useMemo } from "react";
import Provider from "./context";
import Router from "./Router";
import { store } from "../Core/store";
import { wdcReducer } from "../Core/Reducer/wdcReducer";
import { Col, Container } from "../Common/Grid";



const App: FunctionComponent = () => {
    const [state, dispatch] = useReducer(wdcReducer, store);

    
    return (
        <Provider value={{ dispatch, state }}>
            <>
                    <Container>
                        <Col size={11} styleString="min-height: 100vh;">
                            {useMemo(() => {
                                return <Router />;
                            }, [])}
                        </Col>
                    </Container>
            </>
        </Provider>
    );
};

export default App;
