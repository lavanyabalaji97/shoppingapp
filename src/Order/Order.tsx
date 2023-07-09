import elephant from '../Asserts/elephant.webp'
import '../Order/order.css'
function Order() {
    return (
        <div style={{ backgroundColor: "#EAE2D8" }}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 d-none d-md-flex">
                        <div className='imd-data'>
                            <img src={elephant} alt="" />
                        </div>
                    </div>
                    <div className="col-lg-6 right-content m-auto">
                        <div className="content-info">
                            <p className='sub-title'>For large orders</p>
                            <h3 className='sub-heading'>Place a bulk <br />order with us</h3>
                            <p className='sub-para'> Whether you want to place a large customised order for a single item or a large assortment of multiple craft products, we can sort it out for you! For years we have also worked on custom orders for our clients – it is one of the many benefits of having direct relationships with our artisans. Just drop us a note!</p>
                        </div>
                        <div className='btn-section'>
                            <a href="" className='more-btn'>Learn More</a>
                            <a href="" className='touch-btn'>Get In Touch</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Order