import { BookDetails } from "../SearchBooks/BookDetails";
import { BookCheckoutPage } from "./BookCheckoutPage";
import { useParams } from "react-router-dom";
import { useState } from "react";
export const CheckoutDetails = (props) => {
  const param = useParams();

  const mval = props.items.map((BookDetails) => (
    <BookCheckoutPage
      id={BookDetails.id}
      img={BookDetails.img}
      title={BookDetails.title}
      author={BookDetails.author}
      description={BookDetails.description}
    />
  ));

  const filteredData = mval.filter(
    (matchedData) => matchedData.props.id === param.id
  );

  return (
    <BookCheckoutPage
      key={filteredData[0].props.id}
      id={filteredData[0].props.id}
      img={filteredData[0].props.img}
      title={filteredData[0].props.title}
      author={filteredData[0].props.author}
      description={filteredData[0].props.description}
    />
  );
};
