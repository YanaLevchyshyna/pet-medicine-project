import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

import {
  Container,
  Header,
  HeaderContainer,
  Link,
} from './SharedLayout.styled';

export const SharedLayout = () => {
  return (
    <>
      <Header>
        <Container>
          <HeaderContainer>
            <nav>
              <Link to="/">Home</Link>
              <Link to="catalog">Shopping Cart</Link>
              <Link to="favorites">History</Link>
            </nav>
          </HeaderContainer>
        </Container>
      </Header>

      <Suspense>
        <Outlet />
      </Suspense>
    </>
  );
};
