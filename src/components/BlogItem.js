import './BlogItem.scss';

export default function BlogItem(props) {
    return (
        <div className="blogItem-ctn">
            <div className="blogItem-left">
                <img src={props.item.imageUrl} alt={props.item.imageAlt} />
            </div>
            <div className="blogItem-right">
                <div className="blogItem-title">
                    <h1>{props.item.title}</h1>
                </div>
                <div className="blogItem-desc">
                    <p>{props.item.desc}</p>
                </div>
            </div>
        </div>
    );
}