import { Suspense } from "react";
import { useRoutes } from "react-router-dom";
import routes from "~react-pages";
import Loading from "~/components/ui/loading";
import { Theme } from "@radix-ui/themes";
import DefaultLayout from "./components/layout/default";

function App() {
  return (
    <>
      <Theme>
        <Suspense fallback={<Loading />}>
          <DefaultLayout>{useRoutes(routes)}</DefaultLayout>
        </Suspense>
      </Theme>
    </>
  );
}


export default App;
