import humans from '../Asserts/humans.webp'
import smiley_girl from '../Asserts/smiley-girl.webp'
import '../Division/Division.css'

function Cards3() {
  return (
    <div className='container two-pictures'>
      <div className="row">
        <div className="col-lg-8 col-md-8 col-12">
          <img src={humans} className='humans'/>
        </div>
        <div className="col-lg-4 col-md-4 col-12">
          <img src={smiley_girl}  className='girl'/>
        </div>
      </div>
    </div>
  )
}

export default Cards3