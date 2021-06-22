import React ,{ Fragment }from 'react';

const  Landing =() => {

  return(
        <Fragment>
          <div className="dark-overlay">
            <div className="landing-inner">
                <h1 className="x-large">Connect World</h1>
                <div className="buttons">
                    <a href="/community" className="btn btn-primary">Open New World</a>
                </div>
            </div>
          </div>
        </Fragment>
  )
}

export default Landing