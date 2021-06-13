import './BlogItem.css';

export default function BlogItem(props) {
    return (
        <div className="blog__item">
            <img className="blog__item-img" src="https://picsum.photos/500" alt="Blog 1" />
            <div className="blog__item-content">
                <h1>This is my first blog</h1>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam,
                    perferendis!
                </p>
                <button className="blog__item-cta">Continue</button>
            </div>
        </div>
    );
}