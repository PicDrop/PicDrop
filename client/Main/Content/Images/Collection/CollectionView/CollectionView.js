import React from 'react';

class CollectionView extends React.Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <div className="card">
              <div className="card-image">
                <img src=""/>
              </div>
              <div className="card-content">
                <div className="card-action">
                  <a href="#">dribble.com</a>
                </div>
                <p>Description</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}

export default CollectionView;
