import Button from "../Button";
import data from '../Data.json';
import Cardsitem from "../Components/Trending/Cardsitem";


function Work() {
    return (
        <div>
            <div style={{ backgroundColor: "#F9F2EA" }}>
                <div className='container' style={{ width: '1270px' }}>
                    <div className="row" style={{ marginTop: "100px", marginBottom: "50px" }}>
                        <p className='small-title'>For Work </p>
                        <div className="col-lg-12 d-flex justify-content-between">
                            <div className="section-header">
                                <h3 className='title-name'>Work in style</h3>
                            </div>
                            <div className='mt-3'>
                                <Button />
                            </div>
                        </div>
                    </div>

                    <div className='row  row-cols-lg-4 row-col-md-3 row-col-2 cards-gap'>
                        {
                            data.work.map((item: any) => {
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

export default Work