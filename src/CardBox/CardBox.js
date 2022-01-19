import './CardBox.css';

function CardBox() {
    return (
      <div className="Cards">
        <div class="Card1">
            <img className="CardImg" src="./CardImg.jpg" alt="Avatar" />
                <div class="Container1">
                    <h4>Dr. Roy Thomas</h4>
                    <span>IMPLANTOLOGY</span>
                </div>
        </div>
        <div class="Card1">
            <img className="CardImg" src="./CardImg.jpg" alt="Avatar" />
                <div class="Container1">
                    <h4>Dr. Roy Thomas</h4>
                    <span>ENDONTIST</span>
                </div>
        </div>
        <div class="Card1">
            <img className="CardImg" src="./CardImg.jpg" alt="Avatar" />
                <div class="Container1">
                    <h4>Dr.Kavitha gowda</h4>
                    <span>ENDONTIST</span>
                </div>
        </div>
        <div class="Card1">
            <img className="CardImg" src="./CardImg.jpg" alt="Avatar" />
                <div class="Container1">
                    <h4>Dr. Abdulhaq Suliman</h4>
                    <span>IMPLANTOLOGY</span> 
                </div>
                
        </div>
       

      </div>
    );
  }

  export default CardBox;