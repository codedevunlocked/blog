import './HeroItem.css';

export default function HeroItem() {
    return (
        <div className="featured__blog-item">
            <h1>This is my new Article</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
                blanditiis, ab earum in, magni iste nam pariatur nesciunt animi
                repellat sint saepe debitis ex ipsa.
            </p>
            <button className="featured__blog-cta">Read More</button>
        </div>
    );
}