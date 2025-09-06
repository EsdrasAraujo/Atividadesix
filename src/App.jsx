import { useState } from "react";
import "./App.css";
import Card from "./components/Card";
import { filmeMock } from "./moki/filmeMock";
import { Route, Routes } from "react-router-dom";
import RoutesApp from "./routes";

function App() {
  return <RoutesApp />;
}

export default App;
