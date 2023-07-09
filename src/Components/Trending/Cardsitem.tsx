import './Cards.css'
import { FaRegHeart } from "react-icons/fa";

interface Props {
    price: string;
    image: string;
    text: string;
}

function Cardsitem({ price, image, text }: Props) {
    return (
        <div className="main-container">
            <div className="col-lg-12 col-md-8 col-6">
                <a href="" className='anchor'><img src={image} alt="" className="image-style" style={{ maxWidth: '100%', height: 'auto' }} />
                    <FaRegHeart className='hearticon' />
                    <div className="line">
                        <hr />
                    </div>
                    <p className='text'>{text}</p>
                </a>
                <p className="card-price">{price}</p>
            </div>
        </div>
    );
}


export default Cardsitem
