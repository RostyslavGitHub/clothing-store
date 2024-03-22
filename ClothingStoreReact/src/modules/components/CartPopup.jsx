import React, { useState } from "react";

const CartPopup = ({ cartContentData, setCartContentData, decreaseItemsCount, addToTheCart }) => {
  const [checkoutOrder, setCheckoutOrder] = useState()

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

  function checkDuplicates(arr) {
    const idCounts = {};
  
    arr.forEach(item => {
      if (idCounts[item.id]) {
        idCounts[item.id]++;
      } else {
        idCounts[item.id] = 1;
      }
    });
  
    const result = {};
    for (const id in idCounts) {
      if (idCounts.hasOwnProperty(id)) {
        result[id] = idCounts[id];
      }
    }
  
    return result;
  }
  
  const quantity = checkDuplicates(cartContentData);

  let content;

  if (cartContentData.length > 0) {
    const uniqueItems = cartContentData.filter(
      (item, index, self) => index === self.findIndex((t) => t.id === item.id)
    );

    content = uniqueItems.map((item, index) => {
      return (
        <div key={item.id} className="cart__item">
          <img src={"../images/" + item.images[[item.choosenColor]][0]} alt={item.title} className="cart__img" />
          <div className="cart__info">
            <div>
              <div className="cart__title-delete-row">
                <div className="cart__title">{item.title}</div>
                <div className="cart-delete-item" onClick={()=>deleteItem(item.id)}>
                  <svg
                    fill="white"
                    height="14px"
                    width="14px"
                    version="1.1"
                    viewBox="0 0 460.775 460.775"
                    xmlSpace="preserve"
                  >
                    <path d="M285.08,230.397L456.218,59.27c6.076-6.077,6.076-15.911,0-21.986L423.511,4.565c-2.913-2.911-6.866-4.55-10.992-4.55 c-4.127,0-8.08,1.639-10.993,4.55l-171.138,171.14L59.25,4.565c-2.913-2.911-6.866-4.55-10.993-4.55 c-4.126,0-8.08,1.639-10.992,4.55L4.558,37.284c-6.077,6.075-6.077,15.909,0,21.986l171.138,171.128L4.575,401.505 c-6.074,6.077-6.074,15.911,0,21.986l32.709,32.719c2.911,2.911,6.865,4.55,10.992,4.55c4.127,0,8.08-1.639,10.994-4.55 l171.117-171.12l171.118,171.12c2.913,2.911,6.866,4.55,10.993,4.55c4.128,0,8.081-1.639,10.992-4.55l32.709-32.719 c6.074-6.075,6.074-15.909,0-21.986L285.08,230.397z" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="cart__size">Size: {item.choosenSize ? item.choosenSize : item.sizes[0]}</div>
            <div className="cart__quantity-price-row">
              <div className="cart__quantity">
                <button className="cart__quantity-sqr" onClick={() => decreaseItemsCount(item.id)}>-</button>
                <div className="cart__quantity-sqr">{`${quantity[item.id]}`}</div>
                <button className="cart__quantity-sqr" onClick={() => addToTheCart(item)}>+</button>
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
      );
    });
  } else if (!checkoutOrder){
    content = <p className="cart__no-items-title">No items yet</p>;
  } else{
    content = checkoutOrder;
  }

  const deleteItem = (itemId) => {
    const filteredData = cartContentData.filter(item => item.id !== itemId);
    setCartContentData(filteredData);
    localStorage.setItem('cartContentData', JSON.stringify(filteredData));
  };

  const calculateTotalPrice = () => {
    let totalPrice = 0;
  
    cartContentData.forEach((item) => {
      if (item.sale) {
        totalPrice += parseFloat(item.sale.replace(",", "."));
      } else {
        totalPrice += parseFloat(item.price.replace(",", "."));
        
      }
    });
    return totalPrice.toFixed(2).replace(".", ",");
  }

  const totalPrice = calculateTotalPrice();

  const checkout = () =>{ 
    setCheckoutOrder(
      <>
      <p className="cart__title">
        Hi, this site is a portfolio project, <br /> 
        and not an actual shop. <br />
        But here is how the order would look like:
      </p>
      {cartContentData.map((item, index )=>
      <ul key={index}>
        <br />
        <li>item: {item.title}</li>
        <li>color: {item.colors[item.choosenColor]}</li>
        <li>size:  {item.choosenSize ? item.choosenSize : item.sizes[0]}</li>
        <li>price: {item.sale ? item.sale : item.price}</li>
      </ul>)}
      </>
    )
    console.log(cartContentData);
    setCartContentData([])
    localStorage.setItem('cartContentData', JSON.stringify([]));
    
  }

  return (
    <>
      <div className="cart-container" onClick={(event) => hideCartContainer(event)}>
        <div className="cart" onClick={(event) => event.stopPropagation()}>
          <div>
            <div className="cart__header">
              <h2 className="cart__main-title">Cart</h2>
              <div onClick={removeCart} className="cart__close-icon">
                <svg
                  width={36}
                  height={36}
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
                </svg>
              </div>
            </div>
            <div className="shipping-info">Free shipping from €150</div>
            <div className="cart__items-row">{content}</div>
          </div>
          <div className="cart__checkout">
            <div className="total-price">
              <div>Total price: </div> <div>€{totalPrice}</div>
            </div>
            <button 
            className={ totalPrice !== "0,00" ? "button" : "button disable-button"} 
            disabled={totalPrice === "0,00"}
            type="button" 
            onClick={checkout}
            
            >Checkout</button>
          </div>
        </div>
      </div>
    </>
    
  );
};

export default CartPopup;
