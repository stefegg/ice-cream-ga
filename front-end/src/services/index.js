import axios from "axios";

export const getBusinesses = (ratingUrl, setBusinesses) => {
  return axios.get(ratingUrl, { crossdomain: true }).then((response) => {
    setBusinesses(response.data);
  });
};

export const getReview = (reviewUrl, busId, setReview) => {
  return axios.get(reviewUrl, { params: { id: busId } }).then((response) => {
    setReview(response.data);
  });
};
