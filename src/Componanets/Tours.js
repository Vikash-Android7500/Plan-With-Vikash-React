import Card from "./Card";
function Tours({ tours, removeTour }) {
  return (
    <main className="container">
      <section>
        <h2 className="title"> Plan With Vikash</h2>
      </section>
      <section className="cards">
        {
          tours.map((tour) => {
          return <Card key={tour.id} {...tour} removeTour={removeTour}></Card>;
        })
        }
      </section>
    </main>
  );
}

export default Tours;
