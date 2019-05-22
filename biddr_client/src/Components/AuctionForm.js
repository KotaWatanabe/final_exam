import React from "react";

export const AuctionForm = props => {
  const { data = {}, errors = [] } = props;

  const handleSubmit = event => {
    event.preventDefault();
    const formNode = event.currentTarget;
    const formData = new FormData(formNode);

    console.log("props.onSubmit", props.onSubmit);
    if (typeof props.onSubmit === "function") {
      props.onSubmit({
        title: formData.get("title"),
        description: formData.get("description"),
        end_date: formData.get("end_date"),
        reserve_price: formData.get("reserve_price")
      });
    }
  };
  

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Title</label> <br />
        <input name="title" id="title" defaultValue={data.title} />
      </div>

      <div>
        <label htmlFor="description">Body</label> <br />
        <textarea
          name="description"
          id="description"
          cols="60"
          rows="4"
          defaultValue={data.body}
        />
      </div>

      <div>
          <label htmlFor="end_date">End Date</label> <br/>
          <input name="end_date" id="end_date" type="date" defaultValue={data.end_date} />
      </div>

      <div>
          <label htmlFor="reserve_price">Reserve Price</label> <br/>
          <input name="reserve_price" id="reserve_price" type="number" defaultValue={data.reserve_price} />
      </div>

      <div>
        <input type="submit" value="Submit" />
      </div>
    </form>
  );
};
