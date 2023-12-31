import '../Explore/Explore.css';

function Explore() {
    return (
        <div className="container-lg container-fluid-sm list-types">
            <div className="row">
                <div className="explore-image">
                    <div className="col-lg-8">
                        <div className="d-lg-flex justify-content-between align-items-center heading mb-4">
                            <div>
                                <h1 className='ex-heading px-4'>Explore our  collections</h1>
                            </div>
                            <div className='shop-now'>
                                <a href="">Shop Now</a>
                            </div>
                        </div>
                        <div className='d-lg-flex  justify-content-between'>
                            <ul className='unordered'>
                                <li className='special'><a href="">Women</a></li>
                                <li><a href="">Kids</a></li>
                                <li><a href="">Work</a></li>
                            </ul>
                            <ul className='unordered'>
                                <li className='special'><a href="">Men</a></li>
                                <li><a href="">Home & Living</a></li>
                                <li><a href="">Gifts</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Explore