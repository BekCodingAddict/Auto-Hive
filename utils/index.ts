export async function fetchCars() {
  const headers = {
    "x-rapidapi-key": "2d3e43f2f2msh7ae627bc6ee3c4ep1aa9a1jsn6cc135258bf5",
    "x-rapidapi-host": "cars-by-api-ninjas.p.rapidapi.com",
  };

  const response = await fetch(
    "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla",
    { headers: headers }
  );

  const result = await response.json();

  return result;
}
