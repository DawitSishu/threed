import React ,{Suspense} from "react";
import gif from "./assets/load.gif";
const App = React.lazy(() => import("./App"));
const LazyLoadedApp = React.lazy(() => import("./App"));


const some = () => {
  return (
    <Suspense
      fallback={
        <div>
          <img src={gif} alt="Loading..." />
          <a href="#">SPLY</a>
        </div>
      }
    >
      {/* Wrap the lazy-loaded component in Suspense */}
      <LazyLoadedApp />
    </Suspense>
  );
};

export default some;
