import { MoreHorizontal, Plus } from "react-feather";
export default class Constants {
  static BASE_URL = "https://api.quicksell.co/";

  static INIT_DATA_URL = `${this.BASE_URL}v1/internal/frontend-assignment`;
  static groupingOptions = ["User", "Progress", "Priority"];
  static orderingOptions = ["Priority", "Title"];
  static priorityOptions = {
    0: "No Priority",
    4: "Urgent",
    3: "High",
    2: "Medium",
    1: "Low"



  };

  static progressOptions = ["Todo", "In progress", "Done", "Backlog", "Cancelled"];
  static selectedOrderKey = "selected-order";
  static selectedGroupingKey = "selected-grouping";

}
