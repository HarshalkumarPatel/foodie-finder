// this code is written by deepseek
// Use THIS for Docker-to-Docker communication:
const API_BASE = 'http://backend:3000';

// OR use THIS for local testing (comment the above line):
// const API_BASE = 'http://localhost:4000'; 

document.addEventListener('DOMContentLoaded', async () => {
  try {
    const [recipeRes, restaurantsRes] = await Promise.all([
      fetch(`${API_BASE}/api/recipes`),
      fetch(`${API_BASE}/api/restaurants`)
    ]);
    
    if (!recipeRes.ok || !restaurantsRes.ok) throw new Error('API error');
    
    const recipe = await recipeRes.json();
    const restaurants = await restaurantsRes.json();
    
    // Display data here...
    console.log("Data loaded successfully!");
    
  } catch (error) {
    console.error("Error:", error);
    document.getElementById('recipe-card').innerHTML = `
      <p class="error">⚠️ Failed to load data. Please try again later.</p>
    `;
  }
});