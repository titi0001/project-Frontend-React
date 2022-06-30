import React from 'react';
import PropTypes from 'prop-types';

class MissionCard extends React.Component {
  render() {
    const { name } = this.props;
    const { year } = this.props;
    const { country } = this.props;
    const { destination } = this.props;
    return (
      <div className="mission-card" data-testid="mission-card">
        <section>
          <p className="name" data-testid="mission-name">
            { name }
          </p>
          <p className="year" data-testid="mission-year">
            { year }
          </p>
          <p className="country" data-testid="mission-country">
            { country }
          </p>
          <p className="destination" data-testid="mission-destination">
            { destination }
          </p>
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
