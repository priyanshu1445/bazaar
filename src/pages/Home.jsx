import React from 'react'
import HeroSlider from '../components/HeroSlider'
import TrendingSlider from '../components/TrendingSlider'
import ProductSlider from '../components/ProductSlider'
import CategoryGrid from '../components/CategoryGrid';
import Foooter from '../components/Footer';
import ShoppingCartLottie from '../components/ShoppingCartLottie';
import ParallaxScroll from '../components/ParallaxScroll';
import GetInTouch from '../components/GetInTouch';



const categoriesData = [
  {
    name: "Dairy Products",
    slug: "dairy-products",
    description: "Fresh and organic dairy items",
    image: "https://source.unsplash.com/400x300/?milk",
  },
  {
    name: "Bakery",
    slug: "bakery",
    description: "Bread, cakes, and pastries",
    image: "https://source.unsplash.com/400x300/?bread",
  },
  {
    name: "Fruits & Vegetables",
    slug: "fruits-vegetables",
    description: "Farm fresh fruits and veggies",
    image: "https://source.unsplash.com/400x300/?fruits",
  },
  {
    name: "Beverages",
    slug: "beverages",
    description: "Refreshing drinks and juices",
    image: "https://source.unsplash.com/400x300/?juice",
  },
  {
    name: "Snacks",
    slug: "snacks",
    description: "Tasty snacks for your cravings",
    image: "https://source.unsplash.com/400x300/?snack",
  },
  {
    name: "Frozen Foods",
    slug: "frozen-foods",
    description: "Frozen and ready to cook meals",
    image: "https://source.unsplash.com/400x300/?frozen-food",
  },
];


const Home = () => {
  return (
    <div>
      <HeroSlider/>

      <CategoryGrid categories={categoriesData} />
      <TrendingSlider />

    <div>
        <ProductSlider heading={"Trending Products"}/>
        {/* <ShoppingCartLottie/> */}
    </div>
      <ProductSlider heading={"Trending Snacks"}/>
      
      <ParallaxScroll/>

      <GetInTouch />


{/* <Foooter/> */}
    </div>
  )
}

export default Home
