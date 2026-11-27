const cars = [
  { id: 1, make: 'Toyota', model: 'Corolla Altis', price: 6350000 },
  { id: 2, make: 'Honda', model: 'City', price: 5100000 },
  { id: 3, make: 'Suzuki', model: 'Alto', price: 2950000 },
]

function App() {
  return (
    <main>
      <h1>Car listings admin</h1>
      <ul>
        {cars.map((car) => (
          <li key={car.id}>
            {car.make} {car.model}, PKR {car.price.toLocaleString('en-US')}
          </li>
        ))}
      </ul>
    </main>
  )
}

export default App
