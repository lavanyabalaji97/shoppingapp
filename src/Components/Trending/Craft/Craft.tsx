import '../Craft/Craft.css'
import Button from '../../../Button';
import steel from '../../../Asserts/steel.webp'
import steel2 from '../../../Asserts/steel2.webp'


function Craft() {
    return (
        <div className='container'>
            <div className="row d-flex">
                <div className="col-lg-6 craft-section">
                    <p className='small-title'>In focus</p>
                    <h3 className='craft-title'>The world's <br />oldest craft form</h3>
                    <p className='craft-para'>Dhokra Metal Craft. Dhokra is amongst the oldest traditional techniques of metal casting in India, practiced for over 4,000 years, said to date back to the era of the Indus Valley Civilisation. The lost wax technique or ‘cire-perdue’ has been the medium of metal workers in Madhya Pradesh, Chhattisgarh, Orissa and West Bengal. Entirely handcrafted, the unique 13-stage process of Dhokra /Bell-metal making today, is an outcome of the original craft instinct handed down through the centuries. Dhokra or Bell metal is an alloy of brass, and other metals that impart an antique effect to the castings.</p>
                    <div className='dhokra-btn'>
                        <Button/>
                    </div>
                </div>
                <div className='col-lg-6 d-flex'>
                    <div className='col-lg-6'>
                        <a href="">
                            <img src={steel} alt="" width={"300px"} className='dokra-img' />
                        </a>
                        <div>
                            <span className='metal-craft'>Dhokra metal craft</span>
                            <div className='product-title'>
                                <a href="">Dhokra Metal Craft Curio - Village <br />Woman</a>
                            </div>
                        </div>
                        <div className='product-price'>
                            <p>₹ 4,740 INR</p>
                        </div>
                    </div>
                    <div className='col-lg-6'>
                        <a href="">
                            <img src={steel2} alt="" width={"300px"} className='dokra-img' />
                        </a>
                        <div>
                            <span className='metal-craft'>Dhokra metal craft</span>
                            <div className='product-title'>
                                <a href='#'>Dhokra Metal Craft Curio - Village <br />Woman</a>
                            </div>
                        </div>
                        <div className='product-price'>
                            <p>₹ 4,740 INR</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Craft