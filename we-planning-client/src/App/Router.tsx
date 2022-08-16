import { BrowserRouter, Route, Routes as Switch } from "react-router-dom";
import NotFoundPage from "../Page/NotFoundPage";
import URLS from "../Constants/urls";
import Main from "../Page/Main";

const Router = () => {
    return (
        <div style={{paddingLeft: "1rem"}}>
            <BrowserRouter>
                <Switch>
                    <Route path={URLS.home} element={<Main />} />
                    <Route path={URLS.other} element={<NotFoundPage />} />
                </Switch>
            </BrowserRouter>
        </div>
    );
};
export default Router;
