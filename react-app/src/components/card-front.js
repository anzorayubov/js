import React, {Component} from 'react';


export default class CardFront extends Component{

  render(){
      return(

        <div className='card-side side-front' >
          <div className='container-fluid'>

            <div className='row'>

              <div className='col-xs-6'>
                <img scr='https://cdn.pixabay.com/photo/2019/06/05/18/05/landscape-4254269_1280.jpg' />
              </div>

               <div className='col-xs-6 side-front-contend'>
                  <h2>Anzor</h2>
                  <p> По своей сути рыбатекст является альтернативой традиционному lorem ipsum, который вызывает у некторых людей недоумение при попытках прочитать рыбу текст. В отличии от lorem ipsum, текст рыба на русском языке наполнит любой макет непонятным смыслом и придаст неповторимый колорит советских времен. </p>
               </div>

            </div>

          </div>
        </div>
      )
  }
}
