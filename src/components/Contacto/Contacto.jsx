import { useState } from "react";
import "./Contacto.css";

export const Contacto = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí conectarías con tu backend o servicio de email (EmailJS, Formspree, etc.)
    console.log("Datos enviados:", formData);
    setSubmitted(true);

    // Limpiar el formulario
    setFormData({ name: "", email: "", subject: "", message: "" });

    // Ocultar mensaje de éxito después de 5 segundos
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="formContainer">
      <h2 className="title">Ponte en contacto</h2>
      <p className="subtitle">Sugerencias, dudas o comentarios. ¡Escríbenos!</p>

      {submitted && (
        <div className="successMessage">
          ¡Gracias! Tu mensaje ha sido enviado con éxito.
        </div>
      )}

      <form className="form" onSubmit={handleSubmit}>
        <div className={styles.inputGroup}>
          <label htmlFor="name" className="label">
            Nombre completo
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="input"
            placeholder="Juan Pérez"
            required
          />
        </div>

        <div className="inputGroup">
          <label htmlFor="email" className="label">
            Correo electrónico
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="input"
            placeholder="juan@correo.com"
            required
          />
        </div>

        <div className="inputGroup">
          <label htmlFor="subject" className="label">
            Asunto
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="input"
            placeholder="Consulta sobre soporte / Ventas"
            required
          />
        </div>

        <div className="inputGroup">
          <label htmlFor="message" className={styles.label}>
            Mensaje
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="textarea"
            placeholder="Escribe tu mensaje aquí..."
            rows="5"
            required
          ></textarea>
        </div>

        <button type="submit" className="submitBtn">
          Enviar mensaje
        </button>
      </form>
    </div>
  );
};
