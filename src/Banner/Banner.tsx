import '../Banner/Bannerstyle.css'

function Banner() {
  return (
    <div className="container-fluid black-background">
      <span className='line-style'></span>
      <div className="row d-lg-flex justify-content-center">
        <div className="col-lg-4 text-lg-center marginr">
          <h3 className='explore-heading'>Explore a wide <br /> selection of craft forms</h3>
          <p className='text-start'>
            <a href="" className='link-style'>Learn More</a>
          </p>
        </div>
        <div className="col-lg-4 col-12 text-lg-center hundred">
          <h1 className="count-value">100</h1>
          <span className="count-text">CRAFT FORMS</span>
        </div>
      </div>
    </div>
  )
}

export default Banner