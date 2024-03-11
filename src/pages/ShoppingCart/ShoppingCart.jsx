import { Container } from './ShoppingCart.styled';

function ShoppingCart() {
  return (
    <>
      <main>
        <Container>
          <div>
            <h1
              style={{
                position: 'absolute',
                top: '15%',
                right: '5%',
                color: '#0b0b0b',
                fontFamily: 'Anta',
              }}
            >
              Shopping Cart
            </h1>
          </div>
        </Container>
      </main>
    </>
  );
}
export default ShoppingCart;
