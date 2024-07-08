import React from "react";
import axios from "../Api/pqnApi.js";
export default function PqnSinhVienList({ renderPqnSinhVienList, onPqnDelete }) {
  console.log("PqnSinhVienList:", renderPqnSinhVienList);
  // hiener thi đữ liệu
  let pqnElementSinhVien = renderPqnSinhVienList.map((PqnSinhVien, index) => {
    return (
      <tr key={index}>
        <td>{PqnSinhVien.PqnMaSV}</td>
        <td>{PqnSinhVien.PqnHoSV}</td>
        <td>{PqnSinhVien.PqnTenSV}</td>
        <td>{PqnSinhVien.PqnPhai}</td>
        <td>{PqnSinhVien.PqnNgaySinh}</td>
        <td>{PqnSinhVien.PqnNoiSinh}</td>
        <td>{PqnSinhVien.PqnMaKH}</td>
        <td>{PqnSinhVien.PqnHocBong}</td>
        <td>{PqnSinhVien.PqnDiemTrungBinh}</td>
        <td>
          <button
            className="btn btn-danger"
            onClick={() => pqnHandleDelete(PqnSinhVien)}
          >
            {" "}
            Delete{" "}
          </button>
        </td>
      </tr>
    );
  });

  const pqnHandleDelete = async (param) => {
    if (window.confirm("Bạn có muốn xóa thật không?")) {
      const pqnRes = await axios.delete("PqnSinhVien/" + param.id);
    }
    onPqnDelete();
  };
  return (
    <div className="row">
      <div className="col-md-12">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>PqnHoSV</th>
              <th>PqnTenSV</th>
              <th>PqnPhai</th>
              <th>PqnNgaySinh</th>
              <th>PqnNoiSinh</th>
              <th>PqnMaKH</th>
              <th>PqnHocBong</th>
              <th>PqnDiemTrungBinh</th>
              <th>PqnMaSV</th>
            </tr>
          </thead>
          <tbody>{pqnElementSinhVien}</tbody>
        </table>
      </div>
    </div>
  );
}