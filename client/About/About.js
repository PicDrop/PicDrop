import React from 'react';
import Social from './Social';
import GridList from 'material-ui/lib/grid-list/grid-list';
import GridTile from 'material-ui/lib/grid-list/grid-tile';
import StarBorder from 'material-ui/lib/svg-icons/toggle/star-border';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: 1580,
    height: 560,
    overflowY: 'auto',
    marginBottom: 24,
  },
};

const teamData = [
  {
    img: 'http://lorempixel.com/530/530',
    member: 'Travis Miller',
    role: 'Product Owner, Full-Stack Engineer',
    linkedIn: 'tmiller',
    github: 'tmiller',
  },
  {
    img: 'http://lorempixel.com/530/530',
    member: 'Bryan Bierce',
    role: 'Scrum Master, Full-Stack Engineer',
    linkedIn: 'bryanbierce',
    github: 'bryanbierce',
  },
  {
    img: 'http://lorempixel.com/530/530',
    member: 'Ryan Jagger',
    role: 'Full-Stack Engineer',
    linkedIn: 'tmiller',
    github: 'tmiller',
  },
  {
    img: 'http://lorempixel.com/530/530',
    member: 'Santosh Gautam',
    role: 'Full-Stack Engineer',
    linkedIn: 'tmiller',
    github: 'tmiller',
  },

];
class About extends React.Component {
  render() {
    return (
      <div>
        About us
        <div style={styles.root}>
          <GridList
            cellHeight={530}
            cols={4}
            style={styles.gridList}
          >
            {teamData.map(tile => (
              <GridTile
                key={tile.member}
                title={tile.member}
                subtitle={<span>{tile.role}</span>}
                actionIcon={<Social github={tile.github} linkedIn={tile.linkedIn}/>}
              >
                <img src={tile.img} />
              </GridTile>
            ))}
          </GridList>
        </div>
      </div>
    );
  }
}

export default About;