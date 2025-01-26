function Greeting() {
  let animals = ["Dog", "Cat", "Lion", "Bull"];
  const listDisplay = animals.map((element) => {
    <li>{element}</li>;
  });
  return (
    <>
      <ul> listDisplay</ul>
    </>
  );
}

export default Greeting;

//<h1>&quot;I swear by my pretty floral bonnet, I will end you.&quot;</h1>;
