import React from 'react';
import PropTypes from 'prop-types';

class MissionCard extends React.Component {
  render() {
    const { name, year, country, destination } = this.props;
    return (
      <div className="mission-card" data-testid="mission-card">
        <section className="cards">
          <div className="card">
            <div className="card-body">
              <p className="card-header" data-testid="mission-name">
                { name }
              </p>
              <p className="card-text" data-testid="mission-year">
                { year }
              </p>
              <p className="card-text" data-testid="mission-country">
                { country }
              </p>
              <p className="card-text" data-testid="mission-destination">
                { destination }
              </p>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

MissionCard.propTypes = {
  name: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
};

export default MissionCard;
