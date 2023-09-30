import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

export default function Slider() {
  return (
    <>
      <Carousel>
        <div>
          <img src='https://upload.wikimedia.org/wikipedia/commons/2/23/Cristiano_Ronaldo_WC2022_-_01.jpg' alt="hey" />

        </div>
        <div>
          <img src='https://www.realmadrid.com/img/vertical_380px/zidane_20220712070022.jpg' alt="hey" />

        </div>
        <div>
          <img src='https://cnnespanol.cnn.com/wp-content/uploads/2023/04/230216150618-lionel-messi-barcelona-photo-getty-deportes-full-169.jpg?quality=100&strip=info' alt="hey" />

        </div>
      </Carousel>
        </> 
  )
  
}

