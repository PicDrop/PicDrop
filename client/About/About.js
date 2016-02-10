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

const imgUrl = '../../public/client/assets/team_pattern.png';
const styles = {
  root: {
    marginTop: 40,
    //marginLeft: -14,
    //backgroundColor: '#E9E9F4',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    //minHeight: screen.height - 240,
    //padding: 21,
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
  },
  banner: {
/*    width: screen.availWidth,
    height: screen.availHeight * 0.4,*/
    minWidth: screen.availWidth,
    maxHeight: screen.availHeight * 0.4,
  },
  container: {
    height: screen.height - 159,
    backgroundImage: 'url(/assets/team_pattern.png)',
    backgroundRepeat: 'repeat',
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
      <div style={styles.container}>
        <div className="row">
          <div className="col-lg-12">
            <img style={styles.banner} src="http://i65.tinypic.com/2afbrrl.jpg" alt=""/>
          </div>
        </div>
        <div style={styles.root} zDepth={0}>
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
        </div>
    </div>

    );
  }
}

export default About;