// this code is written by deepseek
document.addEventListener('DOMContentLoaded', async () => {
    try {
      // Use this for Docker-to-Docker communication
      const API_URL = 'http://backend:3000';
      // OR for host testing (comment above, uncomment below):
      // const API_URL = 'http://localhost:3001';
      
      const [recipesRes, restaurantsRes] = await Promise.all([
        fetch(`${API_URL}/api/recipes`),
        fetch(`${API_URL}/api/restaurants`)
      ]);
      
      if (!recipesRes.ok || !restaurantsRes.ok) throw new Error('API error');
      
      const recipe = await recipesRes.json();
      const restaurants = await restaurantsRes.json();
      
      // Display logic here...
      console.log('Data loaded successfully!');
    } catch (error) {
      console.error('Error:', error);
      document.body.innerHTML = `<h2>Loading failed - ${error.message}</h2>`;
    }
  });