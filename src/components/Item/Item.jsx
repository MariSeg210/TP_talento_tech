import "./Item.css";

export const Item = ({ name, price, image, description, children }) => {
  return (
    <article className="item-card">
      {/* IMAGEN */}
      <div className="item-image-container">
        <img src={image} alt={`foto de ${name}`} className="item-image" />
      </div>

      {/* INFO */}
      <div className="item-info">
        <h2 className="item-title">{name}</h2>
        <p className="detail-description">{description}</p>
        <p className="item-price">${price}</p>

        {/* BOTONES */}
        <div className="item-actions">{children}</div>
      </div>
    </article>
  );
};
