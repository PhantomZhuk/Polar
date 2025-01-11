import "./App.css"
import HomePage from "./components/HomePage/HomePage";
import AdvantagesPage from "./components/AdvantagesPage/AdvantagesPage";
export default function App() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center">
      <HomePage />
      <AdvantagesPage />
    </div>
  );
}