import { render } from "@testing-library/react";
import react from "react";
import ReactDom from "react-dom"
import AllComp from "./AllCom";
import 'bootstrap/dist/css/bootstrap.min.css';


ReactDom.render(

  <AllComp/>,
  document.getElementById("root")

)