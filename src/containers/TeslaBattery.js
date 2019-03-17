import React from 'react';
import './TeslaBattery.css';

//Import components here
import TeslaNotice from './TeslaNotice/TeslaNotice';
import TeslaCar from '../components/TeslaCar/TeslaCar';

class TeslaBattery extends React.Component {
  render() {
    return (
      <form className="tesla-battery">
        <h1>Range Per Charge</h1>
        <TeslaCar wheelsize={19}/>
        <TeslaNotice />
      </form>
    )
  }
}
export default TeslaBattery;