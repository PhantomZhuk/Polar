import HomePage from "./components/HomePage/HomePage";
import AdvantagesPage from "./components/AdvantagesPage/AdvantagesPage";
import IntermediatePage from "./components/IntermediatePage/IntermediatePage";
import ProductsPage from "./components/ProductsPage/ProductsPage";
import CommentsPage from "./components/CommentsPage/CommentsPage";
import QuestionPage from "./components/QuestionPage/QuestionPage";
import OrderFoodPage from "./components/OrderFoodPage/OrderFoodPage";
import Footer from "./components/Footer/Footer";

export default function App() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center">
      <HomePage />
      <AdvantagesPage />
      <IntermediatePage />
      <ProductsPage />
      <CommentsPage />
      <OrderFoodPage />
      <QuestionPage />
      <Footer />
    </div>
  );
}