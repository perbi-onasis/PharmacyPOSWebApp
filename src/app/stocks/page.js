"use client";

import React from "react";
import ProductForm from "./item/form";
import { FaPlus } from "react-icons/fa";
import NavBar from "../(components)/NavBar";

export default function Stocks() {
  return (
    <div>
      <NavBar/>
      <div className="overflow-x-auto">
        <table className="table table-">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Job</th>
              <th>company</th>
              <th>location</th>
              <th>Last Login</th>
              <th>Favorite Color</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>1</th>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
              <td>Littel, Schaden and Vandervort</td>
              <td>Canada</td>
              <td>12/16/2020</td>
              <td>Blue</td>
            </tr>
        
            <tr>
              <th>4</th>
              <td>Marjy Ferencz</td>
              <td>Office Assistant I</td>
              <td>Rowe-Schoen</td>
              <td>Russia</td>
              <td>3/25/2021</td>
              <td>Crimson</td>
            </tr>
            <tr>
              <th>5</th>
              <td>Yancy Tear</td>
              <td>Community Outreach Specialist</td>
              <td>Wyman-Ledner</td>
              <td>Brazil</td>
              <td>5/22/2020</td>
              <td>Indigo</td>
            </tr>
            <tr>
              <th>6</th>
              <td>Irma Vasilik</td>
              <td>Editor</td>
              <td>Wiza, Bins and Emard</td>
              <td>Venezuela</td>
              <td>12/8/2020</td>
              <td>Purple</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* The button to open modal */}
      <label
        htmlFor="add_item_model"
        className="fixed bottom-10 right-10 btn btn-circle p-2 btn-primary"
      >
        <FaPlus size={25} />
      </label>

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="add_item_model" className="modal-toggle" />
      <div className="modal" role="dialog">
        <div className="modal-box w-11/12 max-w-5xl p-8">
          <ProductForm />
        </div>
      </div>
    </div>
  );
}
