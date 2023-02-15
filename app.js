const menu = [
  {
    id: 1,
    title: "Vada Pav",
    category: "Appetizers",
    price: `$3.99`,
    img: "./images/item-40.jpg",
    desc: `Bun with potato filling, fried with chickpea flour and spices. `,
  },
  {
    id: 2,
    title: "Vada Pav (2 Pcs)",
    category: "Appetizers",
    price: `$7.00`,
    img: "./images/item-41.jpg",
    desc: `Bun with potato filling, fried with chickpea flour and spices. `,
  },
  {
    id: 3,
    title: "Dabeli",
    category: "Appetizers",
    price: `$3.99`,
    img: "./images/item-42.jpg",
    desc: `Bun with potato stuffing and peanuts topped with pomegranate and sev.`,
  },
  {
    id: 4,
    title: "Dabeli (2 Pcs)",
    category: "Appetizers",
    price: `$7.00`,
    img: "./images/item-42.jpg",
    desc: `Bun with potato stuffing and peanuts topped with pomegranate and sev. `,
  },
  {
    id: 5,
    title: "Samosa",
    category: "Appetizers",
    price: `$2.99`,
    img: "./images/item-59.jpg",
    desc: `All purpose flour pastry stuffed with potatoes, peas, and Indian spices. `,
  },
  {
    id: 6,
    title: "Samosa Chat",
    category: "Appetizers",
    price: `$3.99`,
    img: "./images/item-43.jpg",
    desc: `All-purpose flour pastry stuffed with potatoes, peas, and Indian spices with chutney.`,
  },
  {
    id: 7,
    title: "Bun Samosa",
    category: "Appetizers",
    price: `$5.99`,
    img: "./images/item-44.jpg",
    desc: `Samosa stuffed in bun with traditional chutney `,
  },
  {
    id: 8,
    title: "Tikkha Ghughra",
    category: "Appetizers",
    price: `$4.99`,
    img: "./images/item-45.jpg",
    desc: `All purpose flour pastry stuffed with potatoes, peas, and Indian spices with spicy chutney.`,
  },
  {
    id: 9,
    title: "Pav Bhaji",
    category: "Appetizers",
    price: `$11.99`,
    img: "./images/item-46.jpg",
    desc: `Thick vegetable curry served with soft bread rolls.`,
  },
  {
    id: 10,
    title: "Chole Bhature",
    category: "Appetizers",
    price: `$14.99`,
    img: "./images/item-47.jpg",
    desc: `Chickpea curry served with fried all purpose bread.`,
  },
  {
    id: 11,
    title: "Veg Manchurian",
    category: "Appetizers",
    price: `$14.99`,
    img: "./images/item-48.jpg",
    desc: `Finely chopped veggie balls, fried and cooked with sauces and spices.`,
  },
  {
    id: 12,
    title: "Chili Paneer",
    category: "Appetizers",
    price: `$15.99`,
    img: "./images/item-49.jpg",
    desc: `Cottage cheese cooked with bell pepper and onion with sauces and spices.`,
  },
  {
    id: 13,
    title: "Chilli Chicken",
    category: "Appetizers",
    price: `$15.99`,
    img: "./images/item-50.jpg",
    desc: `Non-Vegetarian. Marinated chicken seasoned with spices and sauces. Cooked with bell pepper and onion.`,
  },
  {
    id: 14,
    title: "Chicken Bites",
    category: "Appetizers",
    price: `$10.99`,
    img: "./images/item-51.jpg",
    desc: `boneless chicken bites`,
  },
  {
    id: 15,
    title: "Indian style personal pizza",
    category: "Appetizers",
    price: `$6.99`,
    img: "./images/item-52.jpg",
    desc: `Pizza`,
  },
  {
    id: 16,
    title: "Pani Puri",
    category: "Appetizers",
    price: `$4.99`,
    img: "./images/item-53.jpg",
    desc: `Water balls served with potato and onion filling.`,
  },
  {
    id: 17,
    title: "Bhel Puri",
    category: "Appetizers",
    price: `$4.99`,
    img: "./images/item-54.jpg",
    desc: `Balls with onions, tomatoes, and sauces.`,
  },
  {
    id: 18,
    title: "Sev Usal",
    category: "Appetizers",
    price: `$8.99`,
    img: "./images/item-55.jpg",
    desc: `sev usal chaat is made using assortments of chutneys, spices, peas, crunchy bite like sev and onions served with bun bread on side.`,
  },
  {
    id: 19,
    title: "Hot and Sour Soup",
    category: "Appetizers",
    price: `$6.49`,
    img: "./images/item-56.jpg",
    desc: `Soup.`,
  },
  {
    id: 20,
    title: "Schezwan Puff (Each)",
    category: "Appetizers",
    price: `$5.49`,
    img: "./images/item-57.jpg",
    desc: `Potato and pea stuffing in a crispy pastry topped with Schezwan sauce.`,
  },
  {
    id: 21,
    title: "Puff",
    category: "Appetizers",
    price: `$4.49`,
    img: "./images/item-58.jpg",
    desc: `Stuffed pastry with potato and peas and Indian spices.`,
  },
  {
    id: 22,
    title: "Cheesy Jalapeno Bites",
    category: "Appetizers",
    price: `$4.99`,
    img: "./images/item-60.jpg",
    desc: `Bites`,
  },
  {
    id: 23,
    title: "Shahi Paneer",
    category: "Appetizers",
    price: `$14.99`,
    img: "./images/item-61.jpg",
    desc: `Paneer cooked with creamy sauce with onion , garlic, ginger and cashews.`,
  },
  {
    id: 24,
    title: "Paneer Tikka Masala",
    category: "Appetizers",
    price: `$14.99`,
    img: "./images/item-62.jpg",
    desc: `Paneer cooked in a sauce with onion, yogurt, garlic, and ginger.`,
  },
  {
    id: 25,
    title: "Kadai Paneer",
    category: "Appetizers",
    price: `$14.99`,
    img: "./images/item-63.jpg",
    desc: `Cottage cheese cooked with sauces, bell peppers, and onions with Indian spices.`,
  },
  {
    id: 26,
    title: "Butter Chicken",
    category: "Appetizers",
    price: `$14.99`,
    img: "./images/item-64.jpg",
    desc: `Non-Vegetarian. Marinated chicken served with a creamy buttery sauce.`,
  },
  {
    id: 27,
    title: "Oat and Nut Muffins",
    category: "breakfast",
    price: 25.99,
    img: "./images/item-27.png",
    desc: `Who said muffins are unhealthy? Bake away some healthy and hearty muffins with the goodness of oats and nuts. Some toasted almonds, walnuts, cashew and a whole lot of oats! `,
  },
  {
    id: 28,
    title: "Sugar Free Granola",
    category: "breakfast",
    price: 20.99,
    img: "./images/item-28.webp",
    desc: `Lap up a bowl full of healthy oats, yoghurt, almonds, fresh fruits, honey, flaxseeds and all good things. `,
  },
  {
    id: 29,
    title: "Spanish Omelette",
    category: "breakfast",
    price: 20.99,
    img: "./images/item-29.webp",
    desc: `Also called as the Tortilla de Patata, this omelette is a specialty found across Spain. Potatoes form the main ingredient in this recipe which are fried and mixed with the egg batter. `,
  },
  {
    id: 30,
    title: " Sloppy Joes",
    category: "breakfast",
    price: 15.99,
    img: "./images/item-30.webp",
    desc: `Toasted bread topped with mutton mince, eggplant, cheese and all that your heart fancies! You're only limited by your imagination when it comes to sloppy joes! `,
  },
  {
    id: 31,
    title: "Fruit and Vegetable Juice",
    category: "breakfast",
    price: 30.99,
    img: "./images/item-31.webp",
    desc: `Kick off your mornings with a healthy blend of carrots, apples, oranges and ginger to add a zing. A recipe that caters to your detox diet. `,
  },
  {
    id: 32,
    title: "Chickpea Fritters",
    category: "breakfast",
    price: 25.99,
    img: "./images/item-32.webp",
    desc: `Smooth pancake-like fritters made with gram flour and layered with garden fresh veggies. Now that's a wholesome start to your day! `,
  },
  {
    id: 33,
    title: "Roasted Cauliflower Tacos",
    category: "lunch",
    price: 22.99,
    img: "./images/item-33.jpg",
    desc: `Inspired by the classic Mexican dish, these roasted cauliflower tacos paired with a colorful, crunchy taco slaw might be our new favorite taco recipe. Perfect for lunch! `,
  },
  {
    id: 34,
    title: "Steak Sandwich With Arugula",
    category: "lunch",
    price: 30.99,
    img: "./images/item-34.jpg",
    desc: `Keep carbs on the menu with this open-faced powerhouse sandwich that makes use of leftover dinner proteins. `,
  },
  {
    id: 35,
    title: "Shaved Carrot and Radish Salad",
    category: "lunch",
    price: 25.99,
    img: "./images/item-35.png",
    desc: `Who says salads need lettuce? The carrot ribbons and thinly sliced radishes are an amazing and unexpected substitute `,
  },
  {
    id: 36,
    title: "Salmon Niçoise Salad",
    category: "lunch",
    price: 30.99,
    img: "./images/item-36.jpg",
    desc: `With olives, hard-boiled egg, potatoes and green beans, this is a great make-ahead lunch you can pack on the go. `,
  },
  {
    id: 37,
    title: "Lemon-Pepper Linguine With Creamy Chicken and Broccoli",
    category: "lunch",
    price: 26.99,
    img: "./images/item-37.jpeg",
    desc: `The sauce base in this citrus-packed noodle dish only takes about 20 minutes to whip up to perfection. Chicken and broccoli also hold up marvelously in the fridge throughout the week! `,
  },
  {
    id: 38,
    title: "Butternut Squash Curry",
    category: "lunch",
    price: 30.99,
    img: "./images/item-38.png",
    desc: `We love how you can plop a bunch of fresh veg into a dutch oven and end up with this intensely delicious, aromatic curry for colder days. You can make a single batch to enjoy all week, and serve it with rice, noodles and other vegetarian staples as you go.

    `,
  },
  {
    id: 39,
    title: "Greek Chicken Grain Bowl",
    category: "lunch",
    price: 35.99,
    img: "./images/item-39.jpg",
    desc: `Put together this healthy, delicious meal in advance, then just grab and go when you need to head out the door. `,
  },
];

const sectionCenter = document.querySelector(".section-center");
const container = document.querySelector(".btn-container");

// load items 
window.addEventListener("DOMContentLoaded", function() {
  displayMenuItems(menu);
  displayMenuButtons();
});


function displayMenuItems(menuItems){
  let displayMenu = menuItems.map(function (item) {
    // console.log(item);

    return `<article class="menu-item">
    <img src=${item.img} class="photo" alt=${item.title}>
    <div class="item-info">
      <header>
        <h4>${item.title}</h4>
        <h4 class="price">${item.price}</h4>
      </header>
      <p class="item-text">
        ${item.desc}
      </p>
    </div>
  </article>`;
  });
  displayMenu = displayMenu.join("");
  sectionCenter.innerHTML = displayMenu;
} 

function displayMenuButtons() {
  const categories = menu.reduce(function (values, item) {
    if(!values.includes(item.category)) {
      values.push(item.category);
    }
    return values;
  },
  ['all']
  );
const categoryBtns = categories.map(function(category) {
   return `<button class="filter-btn" type="button"
    data-id=${category}>
            ${category}
          </button>`
}).join("");  
container.innerHTML = categoryBtns;
const filterBtns = container.querySelectorAll(".filter-btn");
// filter items 
filterBtns.forEach(function (btn) {
  btn.addEventListener("click", function(e) {

    const category = e.currentTarget.dataset.id;
    const menuCategory = menu.filter(function (menuItem) {
      // console.log(menuItems.category);
      if(menuItem.category === category){
        return menuItem;
      }
    });
    //console.log(menuCategory);
    if(category === "all") {
      displayMenuItems(menu);
    }else {
      displayMenuItems(menuCategory);
    }
  });
});
}
