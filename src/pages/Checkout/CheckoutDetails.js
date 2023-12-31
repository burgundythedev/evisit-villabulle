import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  SAVE_BILLING_ADDRESS,
  SAVE_SHIPPING_ADDRESS,
} from "../../store/slice/checkoutSlice";
import "./CheckoutDetails.scss";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const initialUserInputs = {
  name: "",
  adress: "",
  city: "",
  postal_code: "",
  country: "",
  phone: "",
};

const CheckoutDetails = () => {
  const [shipAddress, setShipAddress] = useState({ ...initialUserInputs });
  const [billAddress, setBillAddress] = useState({ ...initialUserInputs });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleShipping = (event) => {
    event.preventDefault();
  };

  const handleBilling = (event) => {
    event.preventDefault();
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const isShippingValid = Object.values(shipAddress).every(
      (val) => val !== ""
    );
    const isBillingValid = Object.values(billAddress).every(
      (val) => val !== ""
    );

    if (isShippingValid && isBillingValid) {
      dispatch(SAVE_SHIPPING_ADDRESS(shipAddress));
      dispatch(SAVE_BILLING_ADDRESS(billAddress));
      navigate("/checkout-summary");
    } else {
      toast.error("Form is not completed");
    }
  };

  return (
    <div className="checkout-d">
      <div className="checkout-d__checkout">
        <form className="checkout-d__ship" onSubmit={handleShipping}>
          <h1 className="checkout-d__title"> Shipping Address</h1>
          <label className="checkout-d__label" htmlFor="name">
            Full Name:
          </label>
          <input
            className="checkout-d__input"
            type="text"
            id="name"
            name="name"
            placeholder="Enter your full name"
            value={shipAddress.name}
            onChange={(e) =>
              setShipAddress({ ...shipAddress, name: e.target.value })
            }
            required
          />

          <label className="checkout-d__label" htmlFor="adress">
            Address:
          </label>
          <input
            className="checkout-d__input"
            type="text"
            id="adress"
            name="adress"
            placeholder="Enter your address"
            value={shipAddress.adress}
            onChange={(e) =>
              setShipAddress({ ...shipAddress, adress: e.target.value })
            }
            required
          />
          <label className="checkout-d__label" htmlFor="city">
            City:
          </label>
          <input
            className="checkout-d__input"
            type="text"
            id="city"
            name="city"
            placeholder="Enter your city"
            value={shipAddress.city}
            onChange={(e) =>
              setShipAddress({ ...shipAddress, city: e.target.value })
            }
            required
          />
          <label className="checkout-d__label" htmlFor="postal_code">
            Postal Code:
          </label>
          <input
            className="checkout-d__input"
            type="text"
            id="postal_code"
            name="postal_code"
            placeholder="Enter your postal code"
            value={shipAddress.postal_code}
            onChange={(e) =>
              setShipAddress({ ...shipAddress, postal_code: e.target.value })
            }
            required
          />

          <label className="checkout-d__label" htmlFor="country">
            Country:
          </label>
          <input
            className="checkout-d__input"
            type="text"
            id="country"
            name="country"
            placeholder="Enter your country"
            value={shipAddress.country}
            onChange={(e) =>
              setShipAddress({ ...shipAddress, country: e.target.value })
            }
            required
          />

          <label className="checkout-d__label" htmlFor="phone">
            Phone:
          </label>
          <input
            className="checkout-d__input"
            type="text"
            id="phone"
            name="phone"
            placeholder="Enter your phone number"
            value={shipAddress.phone}
            onChange={(e) =>
              setShipAddress({ ...shipAddress, phone: e.target.value })
            }
            required
          />
        </form>

        <div className="checkout-d__billing">
          <form className="checkout-d__bill" onSubmit={handleBilling}>
            <h1 className="checkout-d__title">Billing Address</h1>
            <label className="checkout-d__label" htmlFor="name">
              Full Name:
            </label>
            <input
              className="checkout-d__input"
              type="text"
              id="name"
              name="name"
              placeholder="Enter your full name"
              value={billAddress.name}
              onChange={(e) =>
                setBillAddress({ ...billAddress, name: e.target.value })
              }
              required
            />

            <label className="checkout-d__label" htmlFor="adress">
              Address:
            </label>
            <input
              className="checkout-d__input"
              type="text"
              id="adress"
              name="adress"
              placeholder="Enter your address"
              value={billAddress.adress}
              onChange={(e) =>
                setBillAddress({ ...billAddress, adress: e.target.value })
              }
              required
            />
            <label className="checkout-d__label" htmlFor="city">
              City:
            </label>
            <input
              className="checkout-d__input"
              type="text"
              id="city"
              name="city"
              placeholder="Enter your city"
              value={billAddress.city}
              onChange={(e) =>
                setBillAddress({ ...billAddress, city: e.target.value })
              }
              required
            />
            <label className="checkout-d__label" htmlFor="postal_code">
              Postal Code:
            </label>
            <input
              className="checkout-d__input"
              type="text"
              id="postal_code"
              name="postal_code"
              placeholder="Enter your postal code"
              value={billAddress.postal_code}
              onChange={(e) =>
                setBillAddress({ ...billAddress, postal_code: e.target.value })
              }
              required
            />

            <label className="checkout-d__label" htmlFor="country">
              Country:
            </label>
            <input
              className="checkout-d__input"
              type="text"
              id="country"
              name="country"
              placeholder="Enter your country"
              value={billAddress.country}
              onChange={(e) =>
                setBillAddress({ ...billAddress, country: e.target.value })
              }
              required
            />

            <label className="checkout-d__label" htmlFor="phone">
              Phone:
            </label>
            <input
              className="checkout-d__input"
              type="text"
              id="phone"
              name="phone"
              placeholder="Enter your phone number"
              value={billAddress.phone}
              onChange={(e) =>
                setBillAddress({ ...billAddress, phone: e.target.value })
              }
              required
            />
          </form>
        </div>
      </div>
      <div className="checkout-d__button-box">
        <button
          className="checkout-d__button"
          type="submit"
          onClick={handleSubmit}
        >
          Proceed to checkout
        </button>
      </div>
    </div>
  );
};

export default CheckoutDetails;
