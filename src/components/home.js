import React, { Component } from 'react'
import { Grid, Cell } from 'react-mdl';

class Home extends Component {
    render() {
        return (
            <div style={{width: '100%', margin: 'auto'}}>
              <Grid className="home-grid">
                <Cell col={12}>
                    <img
                        src="https://avatars1.githubusercontent.com/u/28032661?v=4"
                        alt="avatar"
                        className="avatar-img"
                    />
                    <div className="banner-text">
                      <h1>Full Stack Android & Web Developer</h1>
                    <hr/>

                    <p>Microsoft Office | Android | Java | .Net | HTML/CSS | Bootstrap | JavaScript | React</p>
                    
                    <div className="social-links">

                    {/* LinkedIn */}
                    <a href="https://linkedin.com/in/apriadi11" rel="noopener noreferrer" target="_blank">
                    <i className="fa fa-linkedin-square" aria-hidden="true" />
                    </a>

                    {/* Github */}
                    <a href="https://github.com/ApriadiM" rel="noopener noreferrer" target="_blank">
                    <i className="fa fa-github-square" aria-hidden="true" />
                    </a>

                    {/* Youtube */}
                    <a href="https://www.youtube.com/channel/UCPrUIXs1SwE-j0MbmNy_1dQ" rel="noopener noreferrer" target="_blank">
                    <i className="fa fa-youtube-square" aria-hidden="true" />
                    </a>

                    {/* Facebook */}
                    <a href="https://web.facebook.com/profile.php?id=100008152481012" rel="noopener noreferrer" target="_blank">
                    <i className="fa fa-facebook-square" aria-hidden="true" />
                    </a>

                    {/* Wordpress */}
                    <a href="https://apriadi11blog.wordpress.com/" rel="noopener noreferrer" target="_blank">
                    <i className="fa fa-wordpress" aria-hidden="true" />
                    </a>

                    </div>

                    </div>
                </Cell>
              </Grid>
            </div>
        )
    }
}

export default Home;