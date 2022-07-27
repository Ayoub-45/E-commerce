import logo from '../assets/logo.png';
import { Recommandation } from './Recommandation.Component';
export const Header = function () {
   const text='Jungle House'
    return(
       <div>
          <img src={logo} alt="Jungle" />
          <h1 className='jh-header' style={{
               fontFamily:'Sofia',
               fontWeight: 'bolder',
               textAlign: 'center',
               fontStyle:'italic',
               color:'black',
               fontSize:'72px'
          }}>
            {text}
          </h1>
          <Recommandation/>
          <br />
          <hr />
          <br />
       </div>
    )
 }