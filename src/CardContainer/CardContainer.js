import './CardContainer.css';
import CardContent from '../CardContent/CardContent'
import CardBox from '../CardBox/CardBox';


function CardContainer() {
    return (
      <div className="ContainerBody">
      <CardContent/>
      <CardBox/>
      <div  className="btn" >
      <button>Find Dentist</button>
      </div>

      </div>
    );
  }

  export default CardContainer;