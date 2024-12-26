const pizzaCategories = [
  {
    name: "Veg Pizzas",
    items: [
      { 
        id: 1,
        name: "Margherita", 
        price: 199, 
        description: "Classic delight with 100% real mozzarella cheese.",
        rating: 4.5,
        favorate:true
      },
      { 
        id: 2,
        name: "Farmhouse", 
        price: 249, 
        description: "Loaded with onions, capsicum, tomatoes, and fresh mushrooms.", 
        rating: 4.7,
        favorate:false
      },
      { 
        id: 3,
        name: "Veggie Supreme", 
        price: 299, 
        description: "A supreme combo of veggies on a cheesy crust.",
        rating: 4.6,
        favorate:false
      },
      { 
        id: 4,
        name: "Paneer Tikka Pizza", 
        price: 329, 
        description: "Spiced paneer with crunchy onions and capsicum.", 
        rating: 4.8,
        favorate:false
      }
    ]
  },
  {
    name: "Non-Veg Pizzas",
    items: [
      { 
        id: 5,
        name: "Chicken Tikka Pizza", 
        price: 349, 
        description: "A spicy and smoky delight with marinated chicken.", 
        rating: 4.9,
        favorate:false
      },
      { 
        id: 6,
        name: "Pepperoni Pizza", 
        price: 399, 
        description: "Loaded with spicy and tangy pepperoni slices.", 
        rating: 4.7,
        favorate:false
      },
      { 
        id: 7,
        name: "BBQ Chicken Pizza", 
        price: 369, 
        description: "Barbeque chicken chunks with a smoky flavor.",
        rating: 4.6,
        favorate:false
      },
      { 
        id: 8,
        name: "Meat Lovers Pizza", 
        price: 429, 
        description: "Packed with pepperoni, sausage, bacon, and chicken.", 
        rating: 4.8,
        favorate:false
      }
    ]
  },
  {
    name: "Cheese Lovers",
    items: [
      { 
        id: 9,
        name: "Triple Cheese Burst", 
        price: 299, 
        description: "A cheesy explosion with mozzarella, cheddar, and parmesan.", 
        rating: 4.7,
        favorate:false
      },
      { 
        id: 10,
        name: "Cheesy Garlic Pizza", 
        price: 249, 
        description: "Infused with garlic and overflowing with cheese.",
        rating: 4.5,
        favorate:false
      },
      { 
        id: 11,
        name: "Mozzarella Overload", 
        price: 279, 
        description: "All about rich and stretchy mozzarella goodness.", 
        rating: 4.6,
        favorate:false
      }
    ]
  },
  {
    name: "Gourmet Pizzas",
    items: [
      { 
        id: 12,
        name: "Truffle Mushroom Pizza", 
        price: 499, 
        description: "Earthy truffle oil with mushrooms on a gourmet crust.",
        rating: 4.8,
        favorate:false
      },
      { 
        id: 13,
        name: "Prosciutto & Arugula", 
        price: 549, 
        description: "Italian prosciutto paired with fresh arugula.", 
        rating: 4.9,
        favorate:false
      },
      { 
        id: 14,
        name: "Burrata Pizza", 
        price: 579, 
        description: "Topped with creamy burrata cheese and basil.", 
        rating: 4.8,
        favorate:false
      }
    ]
  },
  {
    name: "Dessert Pizzas",
    items: [
      { 
        id: 15,
        name: "Nutella Pizza", 
        price: 199, 
        description: "A sweet pizza with Nutella spread and toppings.", 
        rating: 4.6,
        favorate:false
      },
      { 
        id: 16,
        name: "Chocolate Pizza", 
        price: 229, 
        description: "Loaded with rich chocolate and a drizzle of syrup.", 
        rating: 4.7,
        favorate:false
      }
    ]
  }
];

export default pizzaCategories;
