import './HeroItem.scss';

export default function HeroItem() {
    return (
        <div >
            <div>
            <img className="heroCtn" alt="Happy" src="https://i.picsum.photos/id/102/4320/3240.jpg?hmac=ico2KysoswVG8E8r550V_afIWN963F6ygTVrqHeHeRc"></img>
            <h1 className="centered">Techies Blogs</h1>
            </div>

            <div >
            <img className="left-blog" alt="pappy" src="https://picsum.photos/seed/picsum/200/300"></img>
            <h1 className="nature-blog">Nature Blog</h1> 
            </div>



        </div>
        

    );
}