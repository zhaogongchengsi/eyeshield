import { Suspense } from "react";
import { useRoutes } from "react-router-dom";
import routes from "~react-pages";
import Loading from "~/components/ui/loading";

function App() {

  return (
    <>
      <Suspense fallback={<Loading />}>{useRoutes(routes)}</Suspense>
    </>
  );
}


export default App;
