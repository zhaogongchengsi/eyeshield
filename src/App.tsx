/* eslint-disable @typescript-eslint/no-explicit-any */
import { Suspense } from "react";
import { useRoutes } from "react-router-dom";
import routes from "~react-pages";
import Loading from "~/components/ui/loading";
import { Theme } from "@radix-ui/themes";

function App() {
  return (
    <div>
      <Theme>
        <Suspense fallback={<Loading />}>{useRoutes(routes)}</Suspense>
      </Theme>
    </div>
  );
}


export default App;
