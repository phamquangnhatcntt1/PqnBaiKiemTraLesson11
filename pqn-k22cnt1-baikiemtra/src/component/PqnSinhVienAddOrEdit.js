
import axios from "../Api/pqnApi.js";
import React, { useEffect, useState } from "react";

export default function PqnSinhVienAddOrEdi({
  onPqnClose,
  onPqnSubmitForm,
  renderUsers,
}) {
  console.log(renderUsers);
  const [PqnMaSV, setPqnMaSV] = useState(0);
  const [PqnHoSV, setPqnHoSV] = useState("");
  const [PqnTenSV, setPqnTenSV] = useState("");
  const [PqnPhai, setPqnPhai] = useState("");
  const [PqnNgaySinh, setPqnNgaySinh] = useState("");
  const [PqnNoiSinh, setPqnNoiSinh] = useState("");
  const [PqnMaKH, setPqnMaKH] = useState("");
  const [PqnHocBong, setPqnHocBong] = useState("");
  const [PqnDiemTrungBinh, setPqnDiemTrungBinh] = useState("");

  useEffect(() => {
    setPqnMaSV(renderUsers.PqnMaSV);
    setPqnHoSV(renderUsers.PqnHoSV);
    setPqnTenSV(renderUsers.PqnTenSV);
    setPqnPhai(renderUsers.PqnPhai);
    setPqnNgaySinh(renderUsers.PqnNgaySinh);
    setPqnNoiSinh(renderUsers.PqnNoiSinh);
    setPqnMaKH(renderUsers.PqnMaKH);
    setPqnHocBong(renderUsers.PqnHocBong);
    setPqnDiemTrungBinh(renderUsers.PqnDiemTrungBinh);
  }, [renderUsers]);

  const pqnHandleClose = () => {
    onPqnClose(false);
  };

  const pqnHandleSubmit = async (event) => {
    event.preventDefault();
    console.log(PqnMaSV, PqnHoSV, PqnTenSV, PqnPhai, PqnNgaySinh,PqnNoiSinh,PqnMaKH,PqnHocBong,PqnDiemTrungBinh);
    // post -> api
    let pqnObjSinhVien = {
        PqnHoSV: PqnHoSV,
        PqnTenSV: PqnTenSV,
        PqnPhai: PqnPhai,
        PqnNgaySinh: PqnNgaySinh,
        PqnNoiSinh: PqnNoiSinh,
        PqnMaKH: PqnMaKH,
        PqnHocBong: PqnHocBong,
        PqnDiemTrungBinh: PqnDiemTrungBinh,
        PqnMaSV: PqnMaSV,
    };
    const pqnRes = await axios.post("PqnSinhVien", pqnObjSinhVien);

    onPqnSubmitForm(false);
  };
  return (
    <div className="">
      <form>
        <div className="input-group mb-3">
          <span className="input-group-text" id="MaSV">
            MaSV
          </span>
          <input
            type="text"
            class="form-control"
            name="MaSV"
            value={PqnMaSV}
            onChange={(ev) => setPqnMaSV(ev.target.value)}
            placeholder="MaSV"
            aria-label="MaSV"
            aria-describedby="MaSV"
          />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text" id="HoSV">
            HoSV
          </span>
          <input
            type="text"
            class="form-control"
            name="HoSV"
            value={PqnHoSV}
            onChange={(ev) => setPqnHoSV(ev.target.value)}
            placeholder="HoSV"
            aria-label="HoSV"
            aria-describedby="HoSV"
          />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text" id="TenSV">
            TenSV
          </span>
          <input
            type="text"
            class="form-control"
            name="TenSV"
            value={PqnTenSV}
            onChange={(ev) => setPqnTenSV(ev.target.value)}
            placeholder="TenSV"
            aria-label="TenSV"
            aria-describedby="TenSV"
          />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text" id="Phai">
            Phai
          </span>
          <input
            type="text"
            class="form-control"
            name="Phai"
            value={PqnPhai}
            onChange={(ev) => setPqnPhai(ev.target.value)}
            placeholder="Phai"
            aria-label="Phai"
            aria-describedby="Phai"
          />
        </div>

        <div className="input-group mb-3">
          <span className="input-group-text" id="NgaySinh">
            NgaySinh
          </span>
          <input
            type="date"
            class="form-control"
            name="NgaySinh"
            value={PqnNgaySinh}
            onChange={(ev) => setPqnNgaySinh(ev.target.value)}
            placeholder="NgaySinh"
            aria-label="NgaySinh"
            aria-describedby="NgaySinh"
          />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text" id="NoiSinh">
            NgaySinh
          </span>
          <input
            type="text"
            class="form-control"
            name="NoiSinh"
            value={PqnNgaySinh}
            onChange={(ev) => setPqnNoiSinh(ev.target.value)}
            placeholder="NoiSinh"
            aria-label="NoiSinh"
            aria-describedby="NoiSinh"
          />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text" id="MaKH">
            NgaySinh
          </span>
          <input
            type="number"
            class="form-control"
            name="PqnMaKH"
            value={PqnNgaySinh}
            onChange={(ev) => setPqnMaKH(ev.target.value)}
            placeholder="MaKH"
            aria-label="MaKH"
            aria-describedby="MaKH"
          />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text" id="HocBong">
            NgaySinh
          </span>
          <input
            type="text"
            class="form-control"
            name="HocBong"
            value={PqnNgaySinh}
            onChange={(ev) => setPqnHocBong(ev.target.value)}
            placeholder="HocBong"
            aria-label="HocBong"
            aria-describedby="HocBong"
          />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text" id="DiemTrungBinh">
            NgaySinh
          </span>
          <input
            type="number"
            class="form-control"
            name="DiemTrungBinh"
            value={PqnNgaySinh}
            onChange={(ev) => setPqnDiemTrungBinh(ev.target.value)}
            placeholder="DiemTrungBinh"
            aria-label="DiemTrungBinh"
            aria-describedby="DiemTrungBinh"
          />
        </div>
        <button
          className="btn btn-primary"
          name="btnPqnSave"
          onClick={(ev) => pqnHandleSubmit(ev)}
        >
          Ghi lại
        </button>
        <button className="btn btn-danger" onClick={pqnHandleClose}>
          Đóng
        </button>
      </form>
    </div>
  );
}
