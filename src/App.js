import React from "react";
import Auth from "./components/Auth/Auth";
import DataContextProvider from "./context/DataContext";

function App() {
  return (
    <div>
      <DataContextProvider>
        <Auth />
      </DataContextProvider>
    </div>
  );
}

export default App;
