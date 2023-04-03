import React from "react";

const Menu = () => {
  const menu = [
    {
      category: "Coffee",
      items: [
        { name: "Brazilian Espresso", price: "THB 80" },
        { name: "Brazilian Cappuccino", price: "THB 100" },
        { name: "Brazilian Latte", price: "THB 110" },
        { name: "Brazilian Mocha", price: "THB 120" },
        { name: "Brazilian Iced Coffee", price: "THB 90" },
        { name: "Drip Coffee", price: "THB 130" },
      ],
    },
    {
      category: "Desserts",
      items: [
        { name: "Brigadeiro", price: "THB 50 per piece" },
        { name: "Pao de Queijo", price: "THB 80 for a serving of 6 pieces" },
        { name: "Pastel", price: "THB 100 for a serving of 3 pieces" },
      ],
    },
    {
      category: "Snacks",
      items: [
        { name: "Tapioca Chips", price: "THB 60" },
        { name: "Cheese Breadsticks", price: "THB 70" },
        { name: "Ham and Cheese Croissant", price: "THB 120" },
        { name: "Grilled Cheese Sandwich", price: "THB 150" },
      ],
    },
    {
      category: "Beverages",
      items: [
        { name: "Iced Tea", price: "THB 60" },
        { name: "Homemade Lemonade", price: "THB 70" },
        {
          name: "Brazilian Soft Drinks (Guaraná, Soda, etc.)",
          price: "THB 80",
        },
      ],
    },
  ];
  return (
    <div className="flex gap-8 justify-center w-full flex-col md:flex-row">
      {menu.map((item) => (
        <div key={item.category}>
          <ul className="my-4 flex flex-col">
            {item.category}
            {item.items.map((list) => (
              <li className="my-2 list-disc text-[16px]">{list.name} - {list.price}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Menu;
