import React from 'react';
import Paper from 'material-ui/lib/paper';
import Card from 'material-ui/lib/card/card';
import CardActions from 'material-ui/lib/card/card-actions';
import CardMedia from 'material-ui/lib/card/card-media';
import CardTitle from 'material-ui/lib/card/card-title';
import Social from './Social';
import GridList from 'material-ui/lib/grid-list/grid-list';
import GridTile from 'material-ui/lib/grid-list/grid-tile';
import StarBorder from 'material-ui/lib/svg-icons/toggle/star-border';

const styles = {
  root: {
    marginTop: -10,
    marginLeft: -14,
    //backgroundColor: '#E9E9F4',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    minHeight: screen.height - 240,
    padding: 21,
  },
  card: {
    maxWidth: 320,
    maxHeight: 300,
    minWidth: 320,
    minHeight: 430,
    margin: 16,
  },
  image: {
    maxWidth: 300,
    maxHeight: 300,
    minWidth: 300,
    minHeight: 300,
    border: '10px solid white',
  }
};

const teamData = [
  {
    img: 'http://lorempixel.com/300/300',
    member: 'Travis Miller',
    role: 'Product Owner, Full-Stack Engineer',
    linkedIn: 'travisbmiller',
    github: 'travisbmiller',
  },
  {
    img: 'http://lorempixel.com/300/300',
    member: 'Bryan Bierce',
    role: 'Scrum Master, Full-Stack Engineer',
    linkedIn: 'bryanbierce',
    github: 'bryanbierce',
  },
  {
    img: 'http://lorempixel.com/300/300',
    member: 'Ryan Jagger',
    role: 'Full-Stack Engineer',
    linkedIn: 'ryanjagger',
    github: 'ryanjagger',
  },
  {
    img: 'http://lorempixel.com/300/300',
    member: 'Santosh Gautam',
    role: 'Full-Stack Engineer',
    linkedIn: 'gautamsantosh',
    github: 'gautamsan',
  },

];
class About extends React.Component {
  render() {
    return (
      <div>
        About us
        <Paper style={styles.root} zDepth={1}>
          {teamData.map(tile => (
            <Card style={styles.card}>
              <CardMedia>
                <img style={styles.image} src={tile.img} />
              </CardMedia>
              <CardTitle style={{ marginTop: -20, textAlign: 'center' }}title={tile.member} subtitle={tile.role}  />
              <CardActions style={{ marginTop: -7, padding: 0, textAlign: 'center' }}>
                <Social github={tile.github} linkedIn={tile.linkedIn}/>
              </CardActions>
            </Card>
          ))}
        </Paper>
    </div>

    );
  }
}

export default About;