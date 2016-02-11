import React from 'react';


class SplashView extends React.Component {
  render() {
    return (
      <div id="splashview">


        <a name="about"></a>
        <div className="intro-header">
            <div className="container">

                <div className="row">
                    <div className="col-lg-12">
                        <div className="intro-message">
                            <h1>PICDROP</h1>
                            <h3>Image bookmarking and archiving</h3>
                            <ul className="list-inline intro-social-buttons">

                                <li>
                                    <a href="https://github.com/PicDrop/PicDrop" className="btn btn-default btn-lg"><i className="fa fa-github fa-fw"></i> <span className="network-name">Github</span></a>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>

            </div>

        </div>


    	<a  name="services"></a>
        <div className="content-section-a">
            <div className="container">
                <div className="row">
                    <div className="col-lg-5 col-sm-6">
                        <div className="clearfix"></div>
                        <h2 className="section-heading">Save directly from your browser</h2>
                        <p className="lead">Wayfarers iPhone truffaut, banh mi portland cronut tattooed. Hashtag mustache squid, keytar man bun kickstarter normcore portland williamsburg pitchfork truffaut wolf hella DIY swag. </p>
                    </div>
                    <div className="col-lg-5 col-lg-offset-2 col-sm-6">
                        <img className="img-responsive" src="assets/select-closeup.png" alt="" />
                    </div>
                </div>

            </div>

        </div>

        <div className="content-section-b">

            <div className="container">

                <div className="row">
                    <div className="col-lg-5 col-lg-offset-1 col-sm-push-6  col-sm-6">
                        <div className="clearfix"></div>
                        <h2 className="section-heading">Bespoke messenger bag ramps hashtag cliche</h2>
                        <p className="lead">Blog synth selfies swag poutine, stumptown hella normcore authentic PBR&B gluten-free. Stumptown microdosing readymade, flexitarian green juice before they sold out freegan cronut bespoke aesthetic swag messenger bag locavore.</p>
                    </div>
                    <div className="col-lg-5 col-sm-pull-6  col-sm-6">
                      <video preload="auto" autoPlay loop="loop" muted="muted" volume="0" id="myVideo">
                        <source src="assets/video.mp4" type="video/mp4" />
                    </video>
                    </div>
                </div>

            </div>

        </div>

        <div className="content-section-a">

            <div className="container">

                <div className="row">
                    <div className="col-lg-5 col-sm-6">
                        <div className="clearfix"></div>
                        <h2 className="section-heading">etsy poutine, mlkshk bitters selfies</h2>
                        <p className="lead"> Narwhal locavore microdosing echo park kickstarter. Sriracha <a target="_blank" href="#">distillery</a> lomo meditation. Kogi cray direct trade, chia yuccie four dollar toast wolf meditation</p>
                    </div>
                    <div className="col-lg-5 col-lg-offset-2 col-sm-6">
                        <img className="img-responsive" src="assets/extension1.png" alt="" />
                    </div>
                </div>

            </div>

        </div>

    	<a  name="contact"></a>
        <div className="banner">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <h2>Footer</h2>
                    </div>
                    <div className="col-lg-6">
                        <ul className="list-inline banner-social-buttons">
                            <li>
                                <a href="https://github.com/IronSummitMedia/startbootstrap" className="btn btn-default btn-lg"><i className="fa fa-github fa-fw"></i> <span className="network-name">Github</span></a>
                            </li>
                        </ul>
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
