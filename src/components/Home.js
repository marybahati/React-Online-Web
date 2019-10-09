import React from 'react'

class Home extends React.Component {
    render () {
        return (
                <section className="intro">
						<header>
							<h1>ROWING, CANOE AND KAYAKING</h1>
							<p>A website for Rowing,Kayaking and Conoe News and Upcoming Championship <a href="https://twitter.com/ajlkn">@Mary</a> / <a href="https://html5up.net">React Js</a></p>
							<ul className="actions">
								<li><a href="#first" className="arrow scrolly"><span className="label">Next</span></a></li>
							</ul>
						</header>
						<div className="content">
							<span className="image fill" data-position="center"><img src="https://images.unsplash.com/photo-1491911923017-19f90d8d7f83?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60" alt="" /></span>
						</div>
				</section>
        )
    }
}

export default Home