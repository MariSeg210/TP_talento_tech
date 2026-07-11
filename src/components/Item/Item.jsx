import "./Item.css";

export const Item = ({ name, price, image, description, children }) => {
  return (
    /*<article className="item-card">
      <h3 className="item-title">{name}</h3>
      {/* IMAGEN 
      <div className="item-image-container">
        <img src={image} alt={`foto de ${name}`} className="item-image" />
      </div>
      {/* INFO 

      <p className="detail-description">{description}</p>
      <p className="item-price">${price}</p>
      {/* BOTONES 
      <div className="item-actions">{children}</div>
    </article>
  );
};*/
    <article className="card">
      <h3 className="item-title">{name}</h3>
      <div className="item-image-container">
        <img src={image} alt={`foto de ${name}`} className="item-image" />
      </div>
      <p className="detail-description">{description}</p>
      <p className="item-price">${price}</p>
      <div className="item-actions">{children}</div>
    </article>
  );
};
