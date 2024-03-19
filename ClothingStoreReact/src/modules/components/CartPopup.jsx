const CartPopup = ({ cartContentData }) => {
  const removeCart = () => {
    const cartPopup = document.querySelector(".cart-container");
    cartPopup.classList.remove("active--cart");
    const body = document.querySelector("body");
    body.classList.remove("overflowHidden");
  };

  const hideCartContainer = (event) => {
    const cartElement = document.querySelector(".cart");
    if (!cartElement.contains(event.target)) {
      removeCart();
    }
  };

  let content;

  if (cartContentData.length > 0) {
    const uniqueItems = cartContentData.filter(
      (item, index, self) => index === self.findIndex((t) => t.id === item.id)
    );

    content = uniqueItems.map((item) => (
      <div key={item.id} className="cart__item">
        <img src={"images/" + item.img} alt={item.title} className="cart__img" />
        <div className="cart__info">
          <div>
            <div className="cart__title-delete-row">
              <div className="cart__title">{item.title}</div>
              <div className="cart-delete-item">
                <svg
                  fill="white"
                  height="14px"
                  width="14px"
                  version="1.1"
                  viewBox="0 0 460.775 460.775"
                  xmlSpace="preserve"
                >
                  {/* Your SVG path here */}
                </svg>
              </div>
            </div>
            <div className="cart__size">Size: XS</div>
          </div>
          <div className="cart__quantity-price-row">
            <div className="cart__quantity">
              <button className="cart__quantity-sqr">-</button>
              <div className="cart__quantity-sqr">1</div>
              <button className="cart__quantity-sqr">+</button>
            </div>
            {item.sale ? (
              <span>
                <span
                  style={{
                    textDecoration: "line-through",
                    fontSize: "1rem",
                  }}
                >
                  €{item.price}
                </span>
                <span className="cart__price" style={{ color: "#FF5733", display: "block" }}>
                  €{item.sale}
                </span>
              </span>
            ) : (
              <span className="cart__price">€{item.price}</span>
            )}
          </div>
        </div>
      </div>
    ));
  } else {
    content = <p className="cart__no-items-title">No items yet</p>;
  }

  return (
    <div className="cart-container" onClick={(event) => hideCartContainer(event)}>
      <div className="cart" onClick={(event) => event.stopPropagation()}>
        <div>
          <div className="cart__header">
            <h2 className="cart__main-title">Cart</h2>
            <div onClick={removeCart} className="cart__close-icon">
              <svg width={36} height={36} fill="currentColor" viewBox="0 0 16 16">
                {/* Your SVG path here */}
              </svg>
            </div>
          </div>
          <div className="shipping-info">Free shipping from €150</div>
          <div className="cart__items-row">{content}</div>
        </div>
        <div className="cart__checkout">
          <div className="total-price">
            <div>Total price: </div> <div>€222</div>
          </div>
          <button className="button">Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default CartPopup;
