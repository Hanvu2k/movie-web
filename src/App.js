import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loading from "./components/Loading/Loading";

// import Browse from "./pages/browse/Browse";
// import Search from "./pages/search/Search";

const Browse = lazy(() => import("./pages/browse/Browse"));
const Search = lazy(() => import("./pages/search/Search"));

function App() {
    return (
        <BrowserRouter>
            <Suspense fallback={<Loading isLoading={true} />}>
                <Routes>
                    <Route path="/" element={<Browse />} />
                    <Route path="/search" element={<Search />} />
                </Routes>
            </Suspense>
        </BrowserRouter>
    );
}

export default App;
