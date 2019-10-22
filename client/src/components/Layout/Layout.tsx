import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

import Box from '../common/Box';
import { Instrument } from '../../types/apiModels';

import Header from './elements/Header';

const QUERY = gql`
  query Test {
    instruments {
      title
      sentiment
    }
  }
`;

type Data = {
  instruments: Instrument[];
};

function Layout() {
  const { data, loading } = useQuery<Data>(QUERY);

  return (
    <Box p={[2, 3]}>
      <Header>MIA</Header>
      <p css={{ textAlign: 'center' }}>Welcome</p>
      {loading && <p>Loading...</p>}
      {data &&
        data.instruments.map(instrument => (
          <div key={instrument.title}>
            {instrument.title}: {instrument.sentiment}
          </div>
        ))}
    </Box>
  );
}

export default Layout;
