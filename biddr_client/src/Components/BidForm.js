import React from "react";

export const BidForm = props => {
  const { data = {}, errors = [] } = props;

  const handleSubmit = event => {
    event.preventDefault();
    const formNode = event.currentTarget;
    const formData = new FormData(formNode);

    if (typeof props.onSubmit === "function") {
      props.onSubmit({
        price: formData.get("price"),
      });
    }
  };
  

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input name="price" id="price" type="number" />
      </div>
      <div>
        <input type="submit" value="Bit" />
      </div>
    </form>
  );
};
