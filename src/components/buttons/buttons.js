import './button.css';
import PropTypes from 'prop-types';

const ButtonsGrid = ({ buttonsRows, handleClickCallback }) => (
  <div className="buttonBox">
    {buttonsRows.map((row) => (
      <>
        {row.map((buttonName, btnIndex) => (
          <button
            type="button"
            key={buttonName}
            className={`buttons-grid__btn ${btnIndex === row.length - 1 ? 'buttons-grid__btn--primary' : ''
            } ${buttonName === '0' ? 'buttons-grid__btn--lg' : ''}`}
            onClick={() => {
              handleClickCallback(buttonName);
            }}
          >
            {buttonName}
          </button>
        ))}
      </>
    ))}
  </div>
);

ButtonsGrid.propTypes = {
  buttonsRows: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string).isRequired)
    .isRequired,
  handleClickCallback: PropTypes.func.isRequired,
};

export default ButtonsGrid;
