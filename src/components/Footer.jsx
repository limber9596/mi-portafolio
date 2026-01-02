import "../styless/Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <p>
        © {new Date().getFullYear()} Limbert Molina – Todos los derechos
        reservados.
      </p>
    </footer>
  );
}
