import React, { Component } from 'react'
import './About.scss'
import cartoonNoBackground from '../../../assets/no-bg-cartoon.png'

class About extends Component {
  render () {
    return (
      <main>
        <section className='Hero'>
          <h1>About Me</h1>
        </section>
        <section className='About--Body'>
          <div className='About--Content'>
          <img className='self-portrait' src={cartoonNoBackground} />
          <p><em>Hi! I’m Eric Windmill. </em></p>
          <p>I’m a front-end developer, writer, UI designer and Sommelier. I currently live in dreamy
            Portland, Oregon, USA. I help clients and comapnies design killer user-centered experiences on mobile and
            web and implement the code it needs to work.
            I also write about development and design and my opinions here, at Huffington Post, and CSS Tricks.</p>
          <p>
            <strong>A little more... </strong> I like to consider exactly how people will interact with products. UI Development is my first love in dev world. I believe that thinking about UI and development in tech has changed the way I see the world. Learning design or development will teach you <em>how to think</em>, and <em>be creative.</em> Building websites and apps has been one of the great joys of my life thus far.
          </p><p>
            I'm also fortunate enough to get to engineer  products as well.  Most of my energy goes into front-end work with JS and CSS. I have serious shiny-object-syndrome and waste too much time diving into the latest and greatest soon-to-be-dead front-end technologies. At my current full-time gig, I get to develop in Dart, Flutter, and other Google technologies.
          </p>
          <p>Otherwise, I'm a Sommelier. Wine has changed the way I live possibly as much development. Some humans and animals that I call friends and family are really important to me. I like to read philosophy books, and for as long as I can remember I've devoured music.</p>
          </div>
          <section className='Currently'>
            <div>
              <h3>Currently Listening:</h3>
              <p>John Moreland - Big Bad Luv</p>
              <img className='album-img' src="http://americansongwriter.com/wp-content/uploads/2017/05/John-Moreland-Big-Bad-Luv-4AD0007-800x800.jpg" alt='John Moreland album cover' />
            </div>
            <div>
              <h3>Currently Reading:</h3>
              <p>Yavul Harari - Sapiens</p>
              <img className='book-img' src="https://s3-us-west-2.amazonaws.com/tabs.web.media/c/9/c9lw/c9lw-square-orig.jpg" alt='Sapiens book cover' />
            </div>
          </section>
        </section>
      </main>
    )
  }
}

export default About
