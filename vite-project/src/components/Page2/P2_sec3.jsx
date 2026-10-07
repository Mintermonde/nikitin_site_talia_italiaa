import { useState, useEffect } from "react";
import { Photo } from "../../Photo";

const allDishes = [
  {
    id: 1,
    title: "Spaghetti",
    image: Photo.pastaSpaghetti,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat mi eget auctor aliquam, diam.",
    price: "$12.05",
  },
  {
    id: 2,
    title: "Gnocchi",
    image: Photo.pastaGnocchi,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat mi eget auctor aliquam, diam.",
    price: "$12.05",
  },
  {
    id: 3,
    title: "Rovioli",
    image: Photo.pastaRavioli,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat mi eget auctor aliquam, diam.",
    price: "$12.05",
  },
  {
    id: 4,
    title: "Penne Alla Vodak",
    image: Photo.pastaPenne,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat mi eget auctor aliquam, diam.",
    price: "$12.05",
  },
  {
    id: 5,
    title: "Risoto",
    image: Photo.dishRisotto,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat mi eget auctor aliquam, diam.",
    price: "$12.05",
  },
  {
    id: 6,
    title: "Splitza Signature",
    image: Photo.pizzaSignature,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat mi eget auctor aliquam, diam.",
    price: "$12.05",
  },
];

const dinnerDishes = [
  {
    id: 6,
    title: "Splitza Signature",
    image: Photo.pizzaSignature,
    desc: "Signature Italian pizza baked in stone oven with rich toppings and artisanal cheese blend.",
    price: "$16.50",
  },
  {
    id: 5,
    title: "Risoto",
    image: Photo.dishRisotto,
    desc: "Creamy classic arborio risotto with wild forest mushrooms, herbs and aged parmigiano.",
    price: "$15.00",
  },
  {
    id: 4,
    title: "Penne Alla Vodak",
    image: Photo.pastaPenne,
    desc: "Traditional penne pasta simmered in silky vodka-infused tomato and cream sauce.",
    price: "$14.20",
  },
  {
    id: 3,
    title: "Rovioli",
    image: Photo.pastaRavioli,
    desc: "Handmade pasta parcels filled with ricotta and spinach, drizzled with sage butter.",
    price: "$13.90",
  },
  {
    id: 2,
    title: "Gnocchi",
    image: Photo.pastaGnocchi,
    desc: "Soft pillow potato gnocchi served with sun-ripened cherry tomatoes and basil pesto.",
    price: "$13.50",
  },
  {
    id: 1,
    title: "Spaghetti",
    image: Photo.pastaSpaghetti,
    desc: "Artisanal durum spaghetti with slow-simmered tomato sauce, basil and virgin olive oil.",
    price: "$12.80",
  },
];

const lunchDishes = [
  {
    id: 3,
    title: "Rovioli",
    image: Photo.pastaRavioli,
    desc: "Handmade pasta parcels filled with ricotta and spinach, drizzled with sage butter.",
    price: "$11.50",
  },
  {
    id: 1,
    title: "Spaghetti",
    image: Photo.pastaSpaghetti,
    desc: "Artisanal durum spaghetti with slow-simmered tomato sauce, basil and virgin olive oil.",
    price: "$10.80",
  },
  {
    id: 5,
    title: "Risoto",
    image: Photo.dishRisotto,
    desc: "Creamy classic arborio risotto with wild forest mushrooms, herbs and aged parmigiano.",
    price: "$12.00",
  },
  {
    id: 2,
    title: "Gnocchi",
    image: Photo.pastaGnocchi,
    desc: "Soft pillow potato gnocchi served with sun-ripened cherry tomatoes and basil pesto.",
    price: "$11.00",
  },
  {
    id: 6,
    title: "Splitza Signature",
    image: Photo.pizzaSignature,
    desc: "Signature Italian pizza baked in stone oven with rich toppings and artisanal cheese blend.",
    price: "$13.50",
  },
  {
    id: 4,
    title: "Penne Alla Vodak",
    image: Photo.pastaPenne,
    desc: "Traditional penne pasta simmered in silky vodka-infused tomato and cream sauce.",
    price: "$11.90",
  },
];

const dessertDishes = [
  {
    id: 2,
    title: "Gnocchi Sweet",
    image: Photo.pastaGnocchi,
    desc: "Sweet roasted gnocchi bites tossed with cinnamon sugar and dark chocolate dip.",
    price: "$8.50",
  },
  {
    id: 4,
    title: "Penne Cannoli",
    image: Photo.pastaPenne,
    desc: "Crispy pastry pasta tubes filled with sweet vanilla mascarpone and pistachios.",
    price: "$9.00",
  },
  {
    id: 6,
    title: "Splitza Dolci",
    image: Photo.pizzaSignature,
    desc: "Thin dessert flatbread drizzled with melted hazelnut cocoa and crushed berries.",
    price: "$10.50",
  },
  {
    id: 1,
    title: "Spaghetti Gelato",
    image: Photo.pastaSpaghetti,
    desc: "Authentic spaghetti-style artisan vanilla gelato with strawberry coulis sauce.",
    price: "$8.00",
  },
  {
    id: 3,
    title: "Rovioli di Mela",
    image: Photo.pastaRavioli,
    desc: "Warm pocket pastries stuffed with spiced apple compote and honey caramel.",
    price: "$8.90",
  },
  {
    id: 5,
    title: "Risoto Dolce",
    image: Photo.dishRisotto,
    desc: "Creamy sweet arborio rice pudding infused with orange blossom and crushed almonds.",
    price: "$9.50",
  },
];

const drinkDishes = [
  {
    id: 5,
    title: "Risoto Brew",
    image: Photo.dishRisotto,
    desc: "Refreshing chilled Italian barley beverage with toasted cereal aroma and honey.",
    price: "$5.50",
  },
  {
    id: 3,
    title: "Rovioli Spritz",
    image: Photo.pastaRavioli,
    desc: "Sparkling herbal mocktail infused with citrus peel, fresh rosemary and soda.",
    price: "$6.00",
  },
  {
    id: 1,
    title: "Spaghetti Lemonade",
    image: Photo.pastaSpaghetti,
    desc: "Freshly squeezed Sicilian lemonade with crushed garden mint and cane sugar.",
    price: "$5.00",
  },
  {
    id: 6,
    title: "Splitza Punch",
    image: Photo.pizzaSignature,
    desc: "Vibrant blend of pomegranate, blood orange and sparkling spring water.",
    price: "$6.50",
  },
  {
    id: 4,
    title: "Penne Nectar",
    image: Photo.pastaPenne,
    desc: "Velvety peach and apricot nectar chilled over crushed crystalline ice.",
    price: "$5.80",
  },
  {
    id: 2,
    title: "Gnocchi Herbal Tea",
    image: Photo.pastaGnocchi,
    desc: "Aromatic blend of Tuscan wild herbs, chamomile blossoms and wildflower honey.",
    price: "$4.50",
  },
];

const categories = ["All category", "Dinner", "Lunch", "Dessert", "Drink"];

export default function P2_sec3() {
  const [activeCategory, setActiveCategory] = useState("All category");
  const [dishes, setDishes] = useState([]);

  useEffect(() => {
    if (activeCategory === "Dinner") {
      setDishes(dinnerDishes);
    } else if (activeCategory === "Lunch") {
      setDishes(lunchDishes);
    } else if (activeCategory === "Dessert") {
      setDishes(dessertDishes);
    } else if (activeCategory === "Drink") {
      setDishes(drinkDishes);
    } else {
      setDishes(allDishes);
    }
  }, [activeCategory]);

  return (
    <section className="menu_showcase_zone">
      <div className="menu_showcase_stage">
        <h1 className="menu_showcase_headline">Menu</h1>
        <div className="menu_category_toolbar">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`category_select_pill ${activeCategory === category ? "active_category_pill" : ""}`}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="dishes_display_grid">
          {dishes.map((dish) => (
            <div key={dish.id} className="dish_card_unit">
              <img src={dish.image} alt={dish.title} />
              <h2 className="dish_title_caption">{dish.title}</h2>
              <img src={Photo.ratingStars} alt="5 stars rating" />
              <p className="dish_summary_text">{dish.desc}</p>
              <div className="dish_footer_meta">
                <span className="dish_price_tag">{dish.price}</span>
                <button type="button" className="btn_order_dish">
                  Order now
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="pagination_nav_deck">
          <div className="pagination_nav_arrow">
            <p>&#10094;</p>
          </div>
          <div className="pagination_page_number">
            <p>1</p>
          </div>
          <div className="pagination_page_number">
            <p>2</p>
          </div>
          <div className="pagination_page_number">
            <p>3</p>
          </div>
          <div className="pagination_ellipsis_box">
            <p>. . .</p>
          </div>
          <div className="pagination_nav_arrow">
            <p>&#10095;</p>
          </div>
        </div>
      </div>
    </section>
  );
}