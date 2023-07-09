import './Cards.css'
import Button from '../../Button'
import data from '../../Data.json';
import Cardsitem from './Cardsitem'


function Trending() {
    return (
        <div style={{ backgroundColor: "#F9F2EA" }}>
            <div className='container' style={{ width: '1270px' }}>
                <div className="row" style={{ marginTop: "100px", marginBottom: "50px" }}>
                    <p className='small-title'>For This season</p>
                    <div className="d-flex justify-content-between">
                        <div className="section-header">
                            <h3 className='title-name'>Trending & New</h3>
                        </div>
                        <div className='mt-3'>
                            <Button />
                        </div>
                    </div>
                </div>
                <div className="col-lg-12 col-md-8 col-6">
                    <div className='row row-cols-lg-4 row-cols-md-3 row-cols-sm-2 cards-gap'>
                        {
                            data.Trending.map((item: any) => {
                                return <div key={item.id}>
                                    <Cardsitem text={item.title} image={item.img} price={item.price}  />
                                </div>
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Trending