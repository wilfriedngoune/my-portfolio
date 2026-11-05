
import { useEffect, useId } from "react";
import "./ReadMoreModal.scss";
import PropTypes from "prop-types";

const ReadMoreModal = ({
  isOpen,
  onClose,
  title,
  subtitle,
  description,
  items = [],
}) => {
  const titleId = useId();

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="modal-overlay"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        className="modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
      >
        <button
          className="modal__close"
          type="button"
          onClick={onClose}
          aria-label="Close modal"
        >
          &times;
        </button>

        <div className="modal__header">
          <h2 id={titleId} className="modal__title">
            {title}
          </h2>

          {subtitle && (
            <h3 className="modal__subtitle">{subtitle}</h3>
          )}
        </div>

        <div className="modal__body">
          {description && (
            <p className="modal__description">
              {description}
            </p>
          )}

          {items.length > 0 && (
            <ul className="modal__timeline">
              {items.map((item, index) => (
                <li className="modal__item" key={index}>
                  <span
                    className="modal__dot"
                    aria-hidden="true"
                  />

                  <div className="modal__item-content">
                    <h4 className="modal__item-title">
                      {item.title}
                    </h4>

                    {item.description && (
                      <p className="modal__item-description">
                        {item.description}
                      </p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};


ReadMoreModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  description: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string,
    })
  ),
};

export default ReadMoreModal;
