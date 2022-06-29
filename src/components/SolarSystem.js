import React from 'react';
import Title from './Title';
import PlanetCard from './PlanetCard';
import planets from '../data/planets';

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system" className="carousel slide" data-bs-ride="carousel">
        <Title headline="Planetas" className="title" />
        <section className="carousel inner">
          {
            planets.map((planet) => (
              <PlanetCard
                key={ planet.name }
                planetName={ planet.name }
                planetImage={ planet.image }
              />))
          }
        </section>
      </div>
    );
  }
}

export default SolarSystem;
