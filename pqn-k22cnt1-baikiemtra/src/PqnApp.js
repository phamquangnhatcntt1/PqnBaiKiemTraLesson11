import "./App.css";
import PqnSinhVienList from "./component/PqnSinhVienList";
import axios from "./Api/pqnApi.js";
import { useEffect, useState } from "react";
import PqnSinhVienAddOrEdit from "./component/PqnSinhVienAddOrEdit";
function PqnApp() {
  const [pqnSinhVienList, setPqnSinhVienList] = useState([]);

  // đọc dữ liệu từ api
  const pqnGetAllSinhViens = async () => {
    const pqnResponse = await axios.get("pqnSinhViens");
    console.log("Api Data:", pqnResponse.data);
    setPqnSinhVienList(pqnResponse.data);
  };

  useEffect(() => {
    pqnGetAllSinhViens();
    console.log("State Data:", pqnSinhVienList);
  }, []);

  const [pqnAddOrEdit, setPqnAddOrEdit] = useState(false);
  const pqnInitSinhVien = {
    PqnHoSV: "Phạm",
    PqnTenSV: "Nhất",
    PqnPhai: "Nam",
    PqnNgaySinh: 21052004,
    PqnNoiSinh: "Hà Nội",
    PqnMaKH: "1",
    PqnHocBong: "Yeah",
    PqnDiemTrungBinh: 100,
    PqnMaSV: "2210900115"
  };
  const [pqnSinhVien, setPqnSinhVien] = useState(pqnInitSinhVien);

  // Hàm xử lý nút thêm mới
  const pqnHandleAddNew = () => {
    setPqnAddOrEdit(true);
  };
  const pqnHandleClose = (param) => {
    setPqnAddOrEdit(param);
  };
  const pqnHandleSubmit = (param) => {
    pqnGetAllSinhViens();
    setPqnAddOrEdit(param);
  };
  const pqnHandleDelete = () => {
    pqnGetAllSinhViens();
  };
  let pqnElementForm =
    pqnAddOrEdit === true ? (
      <PqnSinhVienAddOrEdit
        renderSinhViens={pqnSinhVien}
        onPqnClose={pqnHandleClose}
        onPqnSubmitForm={pqnHandleSubmit}
      />
    ) : (
      ""
    );
  return (
    <div className="container border my-3">
      <h1>Bài Kiểm Tra</h1>
      <hr />
      <PqnSinhVienList
        renderPqnSinhVienList={pqnSinhVienList}
        onPqnDelete={pqnHandleDelete}
      />
      <button
        className="btn btn-primary"
        name="btnPqnThemMoi"
        onClick={pqnHandleAddNew}
      >
        Thêm mới
      </button>
      <hr />
      {pqnElementForm}
    </div>
  );
}

export default PqnApp;