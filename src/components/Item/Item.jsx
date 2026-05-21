import "./Item.css";

export const Item = ({ name, price, image, description, children }) => {
  return (
    <article>
      <h2>{name}</h2>
      <img src={image} alt={`foto de ${name}`} />
      <p>{`Precio: ${price}`}</p>
      {description && <p className="description">{description} </p>}
      {children}
      {/*  Permite agregar contenido adicional dentro del componente
      Item, como botones o enlaces. */}
    </article>
  );
};
