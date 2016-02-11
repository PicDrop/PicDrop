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
    //marginTop: 14,
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  card: {
    maxWidth: 300,
    maxHeight: 402,
    minWidth: 300,
    minHeight: 402,
    margin: 6,
  },
  image: {
    maxWidth: 280,
    maxHeight: 280,
    minWidth: 280,
    minHeight: 280,
    border: '10px solid white',
  },
  banner: {
/*    width: screen.availWidth,
    height: screen.availHeight * 0.4,*/
/*    left: 0,
    top: 0,*/
    minWidth: screen.availWidth,
    maxHeight: screen.availHeight * 0.35,
    background: 'linear-gradient(rgba(20,20,20, .5),rgba(20,20,20, .5))',
  },
  overlay: {
    position: 'absolute',
    zIndex: 999,
    color: '#F1EFE0',
    textShadow: '3px 3px rgba(0, 0, 0, 0.51)',
    fontFamily: 'sansita one, cursive',
    fontSize: '65',
    fontWeight: 'bold',
    left: '44%',
    top: '54%',
  },
  container: {
    height: screen.height - 172,
    backgroundImage: 'url(/assets/team_pattern.png)',
    backgroundRepeat: 'repeat',
  },
};

const teamData = [
  {
    img: '/assets/tm.jpeg',
    member: 'Travis Miller',
    role: 'Product Owner, Full Stack Software Engineer',
    linkedIn: 'travisbmiller',
    github: 'travisbmiller',
  },
  {
    img: '/assets/bb.jpg',
    member: 'Bryan Bierce',
    role: 'Scrum Master, Full Stack Software Engineer',
    linkedIn: 'bryanbierce',
    github: 'bryanbierce',
  },
  {
    img: '/assets/rj.jpg',
    member: 'Ryan Jagger',
    role: 'Full Stack Software Engineer',
    linkedIn: 'ryanjagger',
    github: 'ryanjagger',
  },
  {
    img: '/assets/sg.jpeg',
    member: 'Santosh Gautam',
    role: 'Full Stack Software Engineer',
    linkedIn: 'gautamsantosh',
    github: 'gautamsan',
  },

];
class About extends React.Component {
  render() {
    return (
      <div style={styles.container}>

          <div style={{ position: 'relative' }}>
            <img style={styles.banner} src="http://i65.tinypic.com/2afbrrl.jpg" alt=""/>
            <p style={styles.overlay}>The Team</p>
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
