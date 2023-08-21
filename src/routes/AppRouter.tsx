import { FC } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import * as ROUTES from "../constants/routes";
import { HOME, NOTFOUND } from "../pages";
import { HEADER } from "../components";

const AppRouter: FC = () => {
    return (
        <BrowserRouter>
            <HEADER />
            <Routes>
                <Route path={ROUTES.HOME} element={<HOME />} />
                <Route path={ROUTES.NOTFOUND} element={<NOTFOUND />} />
            </Routes>
        </BrowserRouter>
    );
};

export default AppRouter;
