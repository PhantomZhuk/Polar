import "./App.css"
import HomePage from "./components/HomePage/HomePage";
import AdvantagesPage from "./components/AdvantagesPage/AdvantagesPage";
import IntermediatePage from "./components/IntermediatePage/IntermediatePage";

export default function App() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center">
      <HomePage />
      <AdvantagesPage />
      <IntermediatePage />
    </div>
  );
}