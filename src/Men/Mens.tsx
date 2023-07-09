import Button from "../Button";
import data from '../Data.json';
import Cardsitem from "../Components/Trending/Cardsitem";

function Mens() {
    return (
        <div>
            <div style={{ backgroundColor: "#F9F2EA" }}>
                <div className='container' style={{ width: '1270px' }}>
                    <div className="row" style={{ marginTop: "100px", marginBottom: "50px" }}>
                        <p className='small-title'>For Men</p>
                        <div className="col-lg-12 d-flex justify-content-between">
                            <div className="section-header">
                                <h3 className='title-name'>Things for Men</h3>
                            </div>
                            <div className='mt-3'>
                                <Button />
                            </div>
                        </div>
                    </div>

                    <div className='row row-cols-lg-4 row-cols-12 cards-gap'>
                        {
                            data.men.map((item: any) => {
                                return <div key={item.id}>
                                    <Cardsitem text={item.title} image={item.img} price={item.price} />
                                </div>
                            })
                        }

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Mens