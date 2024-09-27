/* eslint-disable react/no-unescaped-entities */
import './Blog.scss';


function Blog(){
    return(
        <div className='blog-container'>
            <div className="blog-wrapper">
                <div className="single-blog">
                    <img src="https://i.imgur.com/WxgC0m0.jpg" className = 'logo' alt="" />

                    <div className="description">Discover practical and effective tips to improve the search engine optimization of your website. Boost your online visibility and drive more qualified traffic with these proven SEO strategies.</div>
                    <div onClick={() => window.open('https://blog.wilfriedngoune.me/seo/how-to-optimize-the-seo-of-my-web-page','_blank')} className="button">Read</div>
                </div>
                <div onClick={() => window.open('https://blog.wilfriedngoune.me','_blank')}  className="discover-more-container">
                    <div className="svg-container">
                        <img src="/left-arrow.svg" alt="" className='arrow-for-more' />
                    </div>
                    <div className="text">Discover more articles</div>
                </div>
            </div>
        </div>
    )
}

export default Blog