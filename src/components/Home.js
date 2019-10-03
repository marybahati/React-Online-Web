import React from 'react'

class Home extends React.Component {
    render () {
        return (
                <section class="intro">
						<header>
							<h1>Noon's Love</h1>
							<p>A free responsive site template designed by <a href="https://twitter.com/ajlkn">@ajlkn</a> / <a href="https://html5up.net">HTML5 UP</a></p>
							<ul className="actions">
								<li><a href="#first" className="arrow scrolly"><span className="label">Next</span></a></li>
							</ul>
						</header>
						<div className="content">
							<span className="image fill" data-position="center"><img src="https://images.unsplash.com/photo-1525206809752-65312b959c88?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60" alt="" /></span>
						</div>
				</section>
        )
    }
}

export default Home