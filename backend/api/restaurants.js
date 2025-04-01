// this code is written by deepseek
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  // Mock data - replace with actual Yelp API calls
  const mockRestaurants = [
    { name: "Burger Palace", rating: 4.5 },
    { name: "Pizza Heaven", rating: 4.2 },
    { name: "Taco Fantasy", rating: 4.7 }
  ];
  res.json(mockRestaurants);
});

module.exports = router;