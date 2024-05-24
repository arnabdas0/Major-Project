const sampleListings = [
  {
    title: "Cozy Beachfront Cottage",
    description:
      "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1689737969303-a32ea2f78f0a?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 1500,
    location: "Malibu",
    country: "United States",
    geometry: {
      type: "Point",
      coordinates: [-118.7798, 34.0259],
    },
    category: "beachfront",
  },
  {
    title: "Modern Loft in Downtown",
    description:
      "Stay in the heart of the city in this stylish loft apartment. Perfect for urban explorers!",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1704428381312-0579346a779c?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 1200,
    location: "New York City",
    country: "United States",
    geometry: {
      type: "Point",
      coordinates: [-74.006, 40.7128],
    },
    category: "trending",
  },
  {
    title: "Mountain Retreat",
    description:
      "Unplug and unwind in this peaceful mountain cabin. Surrounded by nature, it's a perfect place to recharge.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1661683508913-b6bb64235147?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 1000,
    location: "Aspen",
    country: "United States",
    geometry: {
      type: "Point",
      coordinates: [-106.837, 39.1911],
    },
    category: "mountains",
  },
  {
    title: "Historic Villa in Tuscany",
    description:
      "Experience the charm of Tuscany in this beautifully restored villa. Explore the rolling hills and vineyards.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 2500,
    location: "Florence",
    country: "Italy",
    geometry: {
      type: "Point",
      coordinates: [11.2558, 43.7696],
    },
    category: "farms",
  },
  {
    title: "Secluded Treehouse Getaway",
    description:
      "Live among the treetops in this unique treehouse retreat. A true nature lover's paradise.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1582880421648-a7154a8c99c1?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 800,
    location: "Portland",
    country: "United States",
    geometry: {
      type: "Point",
      coordinates: [-122.6765, 45.5231],
    },
    category: "treehouse",
  },
  {
    title: "Beachfront Paradise",
    description:
      "Step out of your door onto the sandy beach. This beachfront condo offers the ultimate relaxation.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 2000,
    location: "Cancun",
    country: "Mexico",
    geometry: {
      type: "Point",
      coordinates: [-86.8515, 21.1619],
    },
    category: "beachfront",
  },
  {
    title: "Rustic Cabin by the Lake",
    description:
      "Spend your days fishing and kayaking on the serene lake. This cozy cabin is perfect for outdoor enthusiasts.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1595521624992-48a59aef95e3?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 900,
    location: "Lake Tahoe",
    country: "United States",
    geometry: {
      type: "Point",
      coordinates: [-119.9772, 39.0968],
    },
    category: "lake",
  },
  {
    title: "Luxury Penthouse with City Views",
    description:
      "Indulge in luxury living with panoramic city views from this stunning penthouse apartment.",
    image: {
      filename: "listingimage",
      url: "https://plus.unsplash.com/premium_photo-1661962634250-410a8d439238?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 3500,
    location: "Los Angeles",
    country: "United States",
    geometry: {
      type: "Point",
      coordinates: [-118.2437, 34.0522],
    },
    category: "new",
  },
  {
    title: "Ski-In/Ski-Out Chalet",
    description:
      "Hit the slopes right from your doorstep in this ski-in/ski-out chalet in the Swiss Alps.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?q=60&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 3000,
    location: "Verbier",
    country: "Switzerland",
    geometry: {
      type: "Point",
      coordinates: [7.2285, 46.0965],
    },
    category: "ski",
  },
  {
    title: "Safari Lodge in the Serengeti",
    description:
      "Experience the adventure of a lifetime in this luxurious safari lodge. Watch the wildlife from your private deck.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1516426122078-c23e76319801?q=60&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 5000,
    location: "Serengeti National Park",
    country: "Tanzania",
    geometry: {
      type: "Point",
      coordinates: [34.8333, -2.3333],
    },
    category: "new",
  },
  {
    title: "Historic Canal House",
    description:
      "Stay in a piece of history in this beautifully preserved canal house. Explore the charming city by foot.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1611440052868-58b551b07e2c?q=60&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 2200,
    location: "Amsterdam",
    country: "Netherlands",
    geometry: {
      type: "Point",
      coordinates: [4.9041, 52.3676],
    },
    category: "trending",
  },
  {
    title: "Tropical Villa with Private Pool",
    description:
      "Relax in your own private pool in this tropical villa. Perfect for a secluded and luxurious holiday.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1592555059503-0a774cb8d477?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 2800,
    location: "Bali",
    country: "Indonesia",
    geometry: {
      type: "Point",
      coordinates: [115.1889, -8.4095],
    },
    category: "amazing-pools",
  },
  {
    title: "Luxury Riad in Marrakech",
    description:
      "Immerse yourself in Moroccan culture in this luxurious riad. Enjoy the vibrant souks and delicious cuisine.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1527534079274-21dc9147f3d0?q=60&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 1800,
    location: "Marrakech",
    country: "Morocco",
    geometry: {
      type: "Point",
      coordinates: [-7.9811, 31.6295],
    },
    category: "trending",
  },
  {
    title: "Countryside Manor",
    description:
      "Relax in the tranquility of the countryside in this elegant manor. Enjoy the vast gardens and luxurious interiors.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1607675706981-67e3401b2281?q=60&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 4000,
    location: "Cotswolds",
    country: "United Kingdom",
    geometry: {
      type: "Point",
      coordinates: [-1.7831, 51.8248],
    },
    category: "trending",
  },
  {
    title: "Beachside Bungalow",
    description:
      "Wake up to the sound of waves in this charming beachside bungalow. Perfect for a relaxing vacation.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1518860308377-800f02d5498a?q=60&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 1300,
    location: "Bondi Beach",
    country: "Australia",
    geometry: {
      type: "Point",
      coordinates: [151.2743, -33.8915],
    },
    category: "beachfront",
  },
  {
    title: "Japanese Ryokan",
    description:
      "Experience traditional Japanese hospitality in this serene ryokan. Enjoy the hot springs and beautiful gardens.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1610333684078-c89bd57f2e46?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 2200,
    location: "Kyoto",
    country: "Japan",
    geometry: {
      type: "Point",
      coordinates: [135.7681, 35.0116],
    },
    category: "trending",
  },
  {
    title: "Desert Oasis",
    description:
      "Retreat to this luxurious desert oasis for a unique and tranquil experience. Enjoy the stunning desert landscapes.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1570958295340-278c2ad5f639?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 1600,
    location: "Dubai",
    country: "United Arab Emirates",
    geometry: {
      type: "Point",
      coordinates: [55.2708, 25.2048],
    },
    category: "new",
  },
  {
    title: "Penthouse in Paris",
    description:
      "Stay in this chic penthouse with breathtaking views of the Eiffel Tower. Perfect for a romantic getaway.",
    image: {
      filename: "listingimage",
      url: "https://plus.unsplash.com/premium_photo-1664301045332-b037631b8a56?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 3000,
    location: "Paris",
    country: "France",
    geometry: {
      type: "Point",
      coordinates: [2.3522, 48.8566],
    },
    category: "trending",
  },
  {
    title: "Rainforest Eco Lodge",
    description:
      "Immerse yourself in nature at this eco-friendly lodge in the heart of the rainforest. Perfect for nature enthusiasts.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1595521624742-47e90260edab?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 1500,
    location: "Amazon Rainforest",
    country: "Brazil",
    geometry: {
      type: "Point",
      coordinates: [-60.0258, -3.4653],
    },
    category: "farms",
  },
  {
    title: "Ski Lodge in Whistler",
    description:
      "Enjoy world-class skiing and snowboarding at this cozy ski lodge. Perfect for winter sports enthusiasts.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1548873902-8b69fb85030a?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 2500,
    location: "Whistler",
    country: "Canada",
    geometry: {
      type: "Point",
      coordinates: [-122.9574, 50.1163],
    },
    category: "ski",
  },
  {
    title: "Luxury Yacht",
    description:
      "Sail the seas in style aboard this luxury yacht. Perfect for an unforgettable maritime adventure.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1562281302-809108fd533c?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 5000,
    location: "Monaco",
    country: "Monaco",
    geometry: {
      type: "Point",
      coordinates: [7.4246, 43.7384],
    },
    category: "boats",
  },
  {
    title: "Houseboat in Kerala Backwaters",
    description:
      "Experience the tranquility of Kerala's backwaters on this luxurious houseboat. Explore lush greenery and unique villages while enjoying unparalleled comfort.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 3000,
    location: "Alleppey",
    country: "India",
    geometry: {
      type: "Point",
      coordinates: [76.3677, 9.5807],
    },
    category: "boats",
  },
  {
    title: "Private Beachside Villa in Goa",
    description:
      "Unwind in paradise at this private beachside villa in Goa. Soak up the sun on the pristine beaches and enjoy breathtaking ocean views.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1687079504254-23bac6232f46?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 7000,
    location: "Candolim",
    country: "India",
    geometry: {
      type: "Point",
      coordinates: [73.7826, 15.5232],
    },
    category: "rooms",
  },
  {
    title: "Luxury Treehouse Stay in Wayanad",
    description:
      "Reconnect with nature in this luxurious treehouse nestled amidst the lush forests of Wayanad. Enjoy stunning views and a unique eco-friendly experience.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1550934482-7904d33d1b54?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 4500,
    location: "Wayanad",
    country: "India",
    geometry: {
      type: "Point",
      coordinates: [76.1475, 11.6333],
    },
    category: "treehouse",
  },
];

module.exports = { data: sampleListings };
