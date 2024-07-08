import "./App.css";
import PqnSinhVienList from "./component/PqnSinhVienList";
import axios from "./Api/pqnApi.js";
import { useEffect, useState } from "react";
import PqnSinhVienAddOrEdit from "./component/PqnSinhVienAddOrEdit";

const PqnApp = () => {
  const [PqnListSinhVien, setPqnListSinhVien] = useState([]);
  const [PqnSinhVienToEdit, setPqnSinhVienToEdit] = useState(null);
  const PqnHandleEdit = (sinhvien) => {
    setPqnSinhVienToEdit(sinhvien);
    setPqnAddOrEdit(true); // Open the form for editing
  };
  // doc du lieu tu api
  const PqnGetAllSinhVien = async () => {
    try {
      const PqnResponse = await axios.get("PqnSinhVien");
      console.log("API Data:", PqnResponse.data);
      setPqnListSinhVien(PqnResponse.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  useEffect(() => {
    PqnGetAllSinhVien();
    console.log("Day la State Data:", PqnListSinhVien);
  }, []); // Empty dependency array to run the effect only once

  const [pqnAddOrEdit, setPqnAddOrEdit] = useState(false);
  const PqnInitSinhVien = {
    PqnHoSV: "Phạm",
    PqnTenSV: "Nhất",
    PqnPhai: "Nam",
    PqnNgaySinh: 21052004,
    PqnNoiSinh: "Ha Noi",
    PqnMaKH: "1",
    PqnHocBong: "Yeah",
    PqnDiemTrungBinh: "100",
    PqnMaSV: "2210900115"
  }

  const [PqnSinhVien, setPqnSinhVien] = useState(PqnInitSinhVien);
  //Ham xu ly them moi
  const PqnHandleAddNew = () => {
    setPqnAddOrEdit(true);
  }

  const PqnHandleClose = (param) => {
    setPqnAddOrEdit(param);
  }
  const PqnHandleSubmit = async (param) => {
    // Handle the submission logic here
    // For example, you can make an API call to update or create a new sinhvien
    console.log("Submitted data:", param);
  
    try {
      // Make an API call to update or create a new sinhvien
      await axios.post("PqnSinhVien", param);
  
      // After handling the submission, fetch the updated data
      await PqnGetAllSinhVien();
      setPqnAddOrEdit(false); // Close the form after submission
    } catch (error) {
      console.error("Error submitting data:", error);
    }
  }
  
  const PqnHandleDelete = () => {
    PqnGetAllSinhVien();
  };
  let PqnElementForm = pqnAddOrEdit === true ? (
    <PqnSinhVienAddOrEdit
      renderSinhVien={PqnSinhVien}
      onPqnClose={PqnHandleClose}
      onPqnSubmitForm={PqnHandleSubmit}
      
    />
  ) : (
    ""
  );
  
  return (
    <div className='container border my-3'>
      <h1>Lam viec voi API</h1>
      <hr />
      <PqnSinhVienList renderPqnListSinhVien={PqnListSinhVien} onPqnDelete={PqnHandleDelete} onPqnEdit={PqnHandleEdit} />
      <button className='btn btn-primary' onClick={PqnHandleAddNew}>Them moi</button>
      <hr />
      {PqnElementForm}
    </div>
  )
}

export default PqnApp;
