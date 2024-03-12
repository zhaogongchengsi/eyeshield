import { Suspense } from "react";
import { useRoutes } from "react-router-dom";
import routes from "~react-pages";
import Loading from "~/components/ui/loading";
import { Theme } from "@radix-ui/themes";

function App() {
  return (
    <>
      <Theme>
        <Suspense fallback={<Loading />}>{useRoutes(routes)}</Suspense>
      </Theme>
    </>
  );
}


export default App;
