import './RightBlogItem.scss';

export default function RightBlogItem(props) {

return(
<div className="rightBlogItem-ctn">

<div className="rightBlogItem-left">
                <img src={props.item.imageUrl} alt={props.item.imageAlt} />
            </div>
<div className="rightBlogItem-right">
                <div className="rightBlogItem-title">
                    <h1>{props.item.title}</h1>
                </div>
                <div className="rightBlogItem-desc">
                    <p>{props.item.desc}</p>
                </div>
            </div>

</div>


);



}