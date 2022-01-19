import "./Banner.css";

function Banner() {
  return (

    
      <div className="Banner-wrap">
      <div class="BannerBody">
        <div className="BannerContentParent">
          <div className="BannerContent1">
            <h1> Your #1 Advisor for Dental Procedures </h1>
          </div>
          <div className="BannerContent2">
            <p>Get honest answer on dental treatments</p>
            <p>Real patient results</p>
            <p>Transparent costs</p>
          </div>
          <div className="askButtonParent">
            <button className="AskButton">ask a dentist &#8594;</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
