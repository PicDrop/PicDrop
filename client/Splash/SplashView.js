import React from 'react';
import FlatButton from 'material-ui/lib/flat-button';
import RaisedButton from 'material-ui/lib/raised-button';

class SplashView extends React.Component {
  render() {
    return (
      <div id="splashview">
        <div className="intro-header">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="intro-message">
                  <h1>PICDROP</h1>
                  <h3>Save the photos you love, organize them your way.</h3>
                  <ul className="list-inline intro-social-buttons">
                    <li>
                      <FlatButton
                        label="Github"
                        href={"https://github.com/PicDrop/PicDrop"}
                        backgroundColor="white"
                        primary={true}
                      />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content-section-a">
          <div className="container">
            <div className="row">
              <div className="col-lg-5 col-sm-6">
                <div className="clearfix"></div>
                <h2 className="section-heading">Easily tag and create categories right from your browser</h2>
                <p className="lead"></p>
              </div>
                <div className="col-lg-5 col-lg-offset-2 col-sm-6">
                  <img
                    className="img-responsive"
                    style={{ width: '100%', height: 'auto' }}
                    src="assets/select-closeup.png"
                    alt=""
                  />
                </div>
            </div>
          </div>
        </div>
        <div className="content-section-b">
          <div className="container">
            <div className="row">
              <div className="col-lg-5 col-sm-pull-6  col-sm-6">
                <video preload="auto" autoPlay loop="loop" muted="muted" volume="0" id="myVideo">
                  <source src="assets/video.mp4" type="video/mp4" />
                </video>
              </div>
                <div className="col-lg-5 col-lg-offset-1 col-sm-push-6  col-sm-6">
                    <div className="clearfix"></div>
                    <h2 className="section-heading">Add tags to find it later</h2>
                    <p className="lead"></p>
                </div>
            </div>
          </div>
        </div>
        <div className="content-section-a">
          <div className="container">
            <div className="row">
              <div className="col-lg-5 col-sm-6">
                <div className="clearfix"></div>
                <h2 className="section-heading">View your pictures in your way</h2>
                <p className="lead"></p>
              </div>
                <div className="col-lg-5 col-lg-offset-2 col-sm-6">
                  <img
                    className="img-responsive"
                    style={{ width: '100%', height: 'auto' }}
                    src="assets/extension1.png"
                    alt=""
                  />
                </div>
            </div>
          </div>
        </div>
        <footer>
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <p className="copyright text-muted small">Copyright &copy; PicDrop 2016. All Rights Reserved</p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default SplashView;
