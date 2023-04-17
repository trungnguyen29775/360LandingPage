import './Home.css'
const Home = ()=>
{
    return(
        <div className='Home-container'>
           
            <div className='content1'>
                <img src='./background.jpg'>
                </img>
            </div>
            <div className='content2'>
                <h2>Virtual Tours to turn heads</h2>
                <h3>Virtual tours and 360 degree photography solutions for marketing, social and digital.</h3>
            </div>
            <div className='content3'>
                <div className='content3-item'>
                    <a className='title' href='#'>360 Photography</a>
                    <p>
                    Looking to showcase or promote a venue, business or property? 360 degree photos are an essential and engaging part of today's digital marketing strategy.
                    </p>
                    <a className='read-more' href='#'>Read more</a>
                </div>
                <div className='content3-item'>
                    <a className='title' href='#'>360 Photography</a>
                    <p>
                    Looking to showcase or promote a venue, business or property? 360 degree photos are an essential and engaging part of today's digital marketing strategy.
                    </p>
                    <a className='read-more' href='#'>Read more</a>
                </div>
                <div className='content3-item'>
                    <a className='title' href='#'>360 Photography</a>
                    <p>
                    Looking to showcase or promote a venue, business or property? 360 degree photos are an essential and engaging part of today's digital marketing strategy.
                    </p>
                    <a className='read-more' href='#'>Read more</a>
                </div>
                
            </div>

            <div className='content4'>
                <h1>360 Projects</h1>
                <h3>A small showcase of our recent work</h3>
                <div className='item-container'>
                    <div className='content4-item'>
                        <img src='./school.jpg'></img>
                        <a className='title' href='#'>Gerard Byrne Studio and Botanical Fusion exhibition</a>
                        <p>A Virtual Tour takes the Botanical Fusion exhibition and artist's studio to a global audience during lockdown.</p>
                        <a className='view-project' href='#'>View Project</a>
                    </div>
                    <div className='content4-item'>
                        <img src='./building.jpg'></img>
                        <a className='title' href='#'>Gerard Byrne Studio and Botanical Fusion exhibition</a>
                        <p>A Virtual Tour takes the Botanical Fusion exhibition and artist's studio to a global audience during lockdown.</p>
                        <a className='view-project' href='#'>View Project</a>
                    </div>
                    <div className='content4-item'>
                        <img src='./ocean.jpg'></img>
                        <a className='title' href='#'>Gerard Byrne Studio and Botanical Fusion exhibition</a>
                        <p>A Virtual Tour takes the Botanical Fusion exhibition and artist's studio to a global audience during lockdown.</p>
                        <a className='view-project' href='#'>View Project</a>
                    </div>
                </div>
            </div>
            <div className='content5'>
                <h1>The Blog</h1>
                <h2>Thoughts on Virtual Tours, Photography and Digital Marketing</h2>
                <div className='content5-item-container'>
                <div className='content5-item'>
                    <img src='./3Dgame.jpg'></img>
                    <a href='#'>Virtual Tour benefits for galleries, museums and exhibitions.</a>
                    <p>What are the benefits of a Virtual Tour experience when galleries are back open and you can visit for real? In this post, I challenged myself to list some reasons a Virtual Tour still has value for art galleries and museums in a soon-to-be (hopefully) post-lock-down world.</p>
                </div>
                <div className='content5-item'>
                    <img src='./marzipano.jpg'></img>
                    <a href='#'>Virtual Tour benefits for galleries, museums and exhibitions.</a>
                    <p>What are the benefits of a Virtual Tour experience when galleries are back open and you can visit for real? In this post, I challenged myself to list some reasons a Virtual Tour still has value for art galleries and museums in a soon-to-be (hopefully) post-lock-down world.</p>
                </div>
                <div className='content5-item'>
                    <img src='./ggstreetview.webp'></img>
                    <a href='#'>Virtual Tour benefits for galleries, museums and exhibitions.</a>
                    <p>What are the benefits of a Virtual Tour experience when galleries are back open and you can visit for real? In this post, I challenged myself to list some reasons a Virtual Tour still has value for art galleries and museums in a soon-to-be (hopefully) post-lock-down world.</p>
                </div>
                </div>
                
            </div>
        </div>
    )
}
export default Home;