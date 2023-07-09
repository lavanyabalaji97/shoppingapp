import Button from '../../Button'
import data from '../../Data.json';
import Cardsitem from '../Trending/Cardsitem'
import '../Choices/Choices.css'

function Choices() {
    return (
        <div style={{ backgroundColor: "#F9F2EA" }}>
            <div className='container' style={{ width: '1270px', marginBottom: "90px" }}>
                <div className="row" style={{ marginTop: "100px", marginBottom: "50px" }}>
                    <p className='small-title'>For women</p>
                    <div className="col-lg-12 d-flex justify-content-between">
                        <div className="section-header">
                            <h3 className='title-name'>choices for <br /> this reason</h3>
                        </div>
                        <div className='mt-3'>
                            <Button />
                        </div>
                    </div>
                </div>

                <div className='row  row-cols-lg-4 row-col-md-3 row-col-2 cards-bottom'>
                    {
                        data.choice.map((item: any) => {
                            return <div key={item.id}>
                                <Cardsitem text={item.title} image={item.img} price={item.price} />
                            </div>
                        })
                    }

                </div>
            </div>
        </div>
    )
}

export default Choices