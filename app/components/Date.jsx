import { format } from "date-fns";

const Date = ({ date }) => {
  return <div> {format(new Date(date), "MMMM dd, yyyy")}</div>;
};

export default Date;
