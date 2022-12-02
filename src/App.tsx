import { Suspense } from "react";
import MainLayout from "./layouts/MainLayout";
import Root from "./root";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Spinner from "./components/Spinner";

const App: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/currency-converter");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="app">
      <MainLayout>
        <Suspense fallback={<Spinner />}>
          <Root />
        </Suspense>
      </MainLayout>
    </div>
  );
};

export default App;
