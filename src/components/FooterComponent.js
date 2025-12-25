import React from "react";
import "../Footer.css"; // optional external stylesheet

const FooterComponent = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© 2025 <strong>SRV Technologies</strong>. All Rights Reserved.</p>
        <p className="footer-links">
          <a href="/privacy">Privacy Policy</a> | <a href="/terms">Terms of Service</a>
        </p>
      </div>
    </footer>
  );
};

export default FooterComponent;