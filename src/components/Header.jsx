import { Button, HStack, Heading } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <HStack p={'4'} shadow={'base'} bgColor={'blackAlpha.900'}>
      <Heading w={['25%','30%']} color={'white'} size={'md'}>
        Xcrypto
      </Heading>
      <HStack w={['80%','40%']} justifyContent={'space-evenly'}>
        <Button variant={'unstyled'} color={'white'}>
          <Link to="/">Home</Link>
        </Button>
        <Button variant={'unstyled'} color={'white'}>
          <Link to="/exchanges">Exchanges</Link>
        </Button>
        <Button variant={'unstyled'} color={'white'}>
          <Link to="/coins">Coins</Link>
        </Button>
      </HStack>
    </HStack>
  );
};

export default Header;
