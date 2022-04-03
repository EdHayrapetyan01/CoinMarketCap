import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { Table } from 'reactstrap';
import { v4 as uuidv4 } from 'uuid';
import moment from 'moment';

import './styles.scss';

export default function Profile() {
  const history = useHistory();
  const [cryptos, SetCryptos] = useState([]);

  //API configs.
  // const COINMARKETAPI = 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?limit=10';
  const PROXY = 'https://cors-anywhere.herokuapp.com/';

  // the url coin market url broked after few request, that's why i continued with this alternative
  const PASTEBIANAPI = 'https://pastebin.com/raw/92m9rUzH';

  let config = {
    params: {
      offset: 0,
      limit: 10,
      convert: 'USD',
    },
    headers: {
      'X-CMC_PRO_API_KEY': 'YOUR_API_KEY',
      'content-type': 'application/json',
      accept: 'application/json',
      Origin: 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest',
      'Access-Control-Allow-Origin': '*',
    },
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios(`${PROXY}${PASTEBIANAPI}`, config);
        SetCryptos(result.data.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(cryptos, 'cryptos');

  const handleCurrentCrypto = (crypto) => {
    history.push({
      pathname: '/current-crypto',
      state: { crypto },
    });
  };
  return (
    <div className='crypto-container'>
      <div className='crypto-table'>
        {cryptos.length ? (
          <Table dark style={{ color: 'white' }}>
            <thead>
              <tr>
                <th>Name</th>
                <th>Total Supply</th>
                <th>Symbol</th>
                <th>Last Updated</th>
              </tr>
            </thead>
            {cryptos?.map((crypto) => {
              return (
                <tbody key={uuidv4()} style={{ height: '70px' }}>
                  <tr key={uuidv4()} onClick={() => handleCurrentCrypto(crypto)}>
                    <td>{crypto.name}</td>
                    <td>{crypto.total_supply}</td>
                    <td>{crypto.symbol}</td>
                    <td>{moment(crypto.last_updated).format('MMMM Do YYYY, h:mm:ss a')}</td>
                  </tr>
                </tbody>
              );
            })}
          </Table>
        ) : (
          <h1 className='loading'>Loading....</h1>
        )}
      </div>
    </div>
  );
}
