import ProductCard from "../ProductCard/ProductCard";
import BlownBead from "../../assets/BlowmBead.png";
import CayenneChocolate from "../../assets/CayenneChocolate.png";
import SweetCorn from "../../assets/SweetCorn.png";

function ProductsPage() {
    const ProductsCard = [
        {
            id: 1,
            type: "default",
            img: BlownBead,
            header: "Brown bread",
            text: "Bon Au Pain is a pioneer in the healthy fast food scene.Bon Au Pain is a pioneer in the healthy fast food scene.Bon Au Pain is a pioneer in the healthy fast food scene.",
            newPrice: "$19.55",
            oldPrice: "$22.55",
        },
        {
            id: 2,
            type: "reverse",
            img: CayenneChocolate,
            header: "Cayenne chocolate",
            text: "Bon Au Pain is a pioneer in the healthy fast food scene.Bon Au Pain is a pioneer in the healthy fast food scene.Bon Au Pain is a pioneer in the healthy fast food scene.",
            newPrice: "$19.55",
            oldPrice: "$22.55",
        },
        {
            id: 3,
            type: "default",
            img: SweetCorn,
            header: "Sweet corn",
            text: "Bon Au Pain is a pioneer in the healthy fast food scene.Bon Au Pain is a pioneer in the healthy fast food scene.Bon Au Pain is a pioneer in the healthy fast food scene.",
            newPrice: "$19.55",
            oldPrice: "$22.55",
        }
    ]
    return (
        <div className="ProductsPage w-full min-h-screen flex flex-col justify-between items-center px[250px] py-[50px] ">
            <h2 className="font-bold text-[calc(32px+0.5vw)] text-[#150101]">Our Product</h2>
            <nav className="py-[50px]">
                <ul className="flex gap-6 w-full flex-wrap justify-center px-[50px]">
                    <li className="cursor-pointer font-medium text-[calc(12px+0.5vw)] text-[#000] relative before:bg-[#d23166] before:content-[''] before:w-[100%] before:h-[5px] before:absolute before:bottom-[-5px] before:left-0 before:rounded-[5px] before:animate-[line-nav_0.3s_1]">ICE CREAM</li>
                    <li className="cursor-pointer opacity-60 font-medium text-[calc(12px+0.5vw)] text-[#000] relative hover:before:bg-[#d23166] hover:before:content-[''] hover:before:w-[100%] hover:before:h-[5px] hover:before:absolute hover:before:bottom-[-5px] hover:before:left-0 hover:before:rounded-[5px] hover:before:animate-[line-nav_0.3s_1]">CAYENNE CHOCOLATE</li>
                    <li className="cursor-pointer opacity-60 font-medium text-[calc(12px+0.5vw)] text-[#000] relative hover:before:bg-[#d23166] hover:before:content-[''] hover:before:w-[100%] hover:before:h-[5px] hover:before:absolute hover:before:bottom-[-5px] hover:before:left-0 hover:before:rounded-[5px] hover:before:animate-[line-nav_0.3s_1]">CAKE BATTER</li>
                    <li className="cursor-pointer opacity-60 font-medium text-[calc(12px+0.5vw)] text-[#000] relative hover:before:bg-[#d23166] hover:before:content-[''] hover:before:w-[100%] hover:before:h-[5px] hover:before:absolute hover:before:bottom-[-5px] hover:before:left-0 hover:before:rounded-[5px] hover:before:animate-[line-nav_0.3s_1]">CANDY CANE</li>
                    <li className="cursor-pointer opacity-60 font-medium text-[calc(12px+0.5vw)] text-[#000] relative hover:before:bg-[#d23166] hover:before:content-[''] hover:before:w-[100%] hover:before:h-[5px] hover:before:absolute hover:before:bottom-[-5px] hover:before:left-0 hover:before:rounded-[5px] hover:before:animate-[line-nav_0.3s_1]">PLATTERS</li>
                    <li className="cursor-pointer opacity-60 font-medium text-[calc(12px+0.5vw)] text-[#000] relative hover:before:bg-[#d23166] hover:before:content-[''] hover:before:w-[100%] hover:before:h-[5px] hover:before:absolute hover:before:bottom-[-5px] hover:before:left-0 hover:before:rounded-[5px] hover:before:animate-[line-nav_0.3s_1]">DESSERT</li>
                </ul>
            </nav>
            <div className="ProductsContainer w-full flex flex-col justify-between items-center gap-5 px-[250px] max-[1400px]:px-[100px] max-[1050px]:px-[50px]">
                {ProductsCard.map(product => <ProductCard key={product.id} type={product.type} img={product.img} header={product.header} text={product.text} newPrice={product.newPrice} oldPrice={product.oldPrice} />)}
            </div>
        </div>
    );
}

export default ProductsPage;