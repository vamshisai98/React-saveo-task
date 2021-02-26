import './App.css';
import React, { useState, useEffect } from 'react';

function App() {
  const [details, setDetails] = useState([
    {
      LocationName: 'bangalore',
      Lattitude: '12222212121',
      Longitude: '233232332332',
    },
    {
      LocationName: 'Hyderbad',
      Lattitude: '12222212121',
      Longitude: '233232332332',
    },
    {
      LocationName: 'Chennai',
      Lattitude: '12222212121',
      Longitude: '233232332332',
    },
    {
      LocationName: 'Mumbai',
      Lattitude: '12222212121',
      Longitude: '233232332332',
    },
    {
      LocationName: 'Kolkata',
      Lattitude: '12222212121',
      Longitude: '233232332332',
    },
  ]);

  const [button, setButton] = useState(true);

  const [inp, setInp] = useState({
    LocationName: '',
    Lattitude: '',
    Longitude: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (val) => {
    setInp({ ...inp, [val.target.id]: val.target.value });
  };

  useEffect(() => {
    if (
      inp.LocationName.length === 0 &&
      inp.Lattitude.length === 0 &&
      inp.Longitude.length === 0
    ) {
      setButton(true);
    } else {
      setButton(false);
    }
  }, [inp]);

  return (
    <div className='app'>
      <button id='home'>Home</button>
      <div className='content'>
        <div className='form-details'>
          <form onSubmit={handleSubmit}>
            <div className='location-name'>
              <label for='lname'>Location Name</label>
              <input
                type='text'
                id='lname'
                placeholder='Location'
                onChange={handleChange}
              />
            </div>
            <div className='lattitude'>
              <label for='latname'>Enter Lattitude</label>
              <input
                type='text'
                id='latname'
                placeholder='Lat'
                onChange={handleChange}
              />
            </div>
            <div className='longitude'>
              <label for='longname'>Enter Longitude</label>
              <input
                type='text'
                id='longname'
                placeholder='Lang'
                onChange={handleChange}
              />
            </div>
            <div className='submit'>
              {button ? (
                <button type='submit' id='submit'>
                  Submit
                </button>
              ) : (
                <button type='submit' id='add'>
                  Add
                </button>
              )}
            </div>
          </form>
        </div>
        <div className='content2'>
          <div className='table-content'>
            <div className='table-header'>ALL CO-ORDINATES</div>
            <div className='table'>
              <table>
                <thead>
                  <tr>
                    <th width='67%'>My Co-ordinates</th>
                    <th width='20%'>DEFAULT</th>
                    <th width='20%'>DEFAULT</th>
                  </tr>
                </thead>
                <tbody>
                  {details.map((detail, index) => (
                    <tr key={index}>
                      <td>{detail.LocationName}</td>
                      <td>{detail.Lattitude}</td>
                      <td>{detail.Longitude}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className='route'>
              <button type='submit' id='route'>
                Show Route
              </button>
            </div>
          </div>
          <div className='map-content'>map</div>
        </div>
      </div>
    </div>
  );
}

export default App;
