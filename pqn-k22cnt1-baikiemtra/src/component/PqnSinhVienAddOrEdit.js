import React, { useEffect, useState } from 'react'
import axios from '../Api/pqnApi';


export default function PqnSinhVienAddOrEdit(onPqnClose, onPqnSubmitForm, renderStudent) {
    console.log(renderStudent);
    const [pqnMaSV, setPqnMaSV] = useState(0);
    const [pqnHoSV, setPqnHoSV] = useState("");
    const [pqnTenSV, setPqnTenSV] = useState("");
    const [pqnPhai, setPqnPhai] = useState("");
    const [pqnNgaySinh, setPqnNgaySinh] = useState("");
    const [pqnNoiSinh, setPqnNoiSinh] = useState("");
    const [pqnMaKH, setPqnMaKH] = useState("");
    const [pqnHocBong, setPqnHocBong] = useState("");
    const [pqnDiemTrungBinh, setPqnDiemTrungBinh] = useState("");

    useEffect(() => {
        if (renderStudent) {
            setPqnMaSV(renderStudent.MaSV);
            setPqnHoSV(renderStudent.HoSV);
            setPqnTenSV(renderStudent.TenSV);
            setPqnPhai(renderStudent.Phai);
            setPqnNgaySinh(renderStudent.NgaySinh);
            setPqnNoiSinh(renderStudent.NgaySinh);
            setPqnMaKH(renderStudent.NgaySinh);
            setPqnHocBong(renderStudent.HocBong);
            setPqnDiemTrungBinh(renderStudent.DiemTrungBinh);
        }
    }, [renderStudent]);
    const pqnHandleClose = () => {
        onPqnClose(false);
    }

    const pqnHandleSubmit = async (event) => {
        event.preventDefault();
        console.log(pqnMaSV, pqnHoSV, pqnTenSV, pqnPhai, pqnNgaySinh, pqnNoiSinh, pqnMaKH, pqnHocBong, pqnDiemTrungBinh);
        let pqnObjectStudent = {
            PqnMaSV: pqnMaSV,
            PqnHoSV: pqnHoSV,
            PqnTenSV: pqnTenSV,
            PqnPhai: pqnPhai,
            PqnNgaySinh: pqnNgaySinh,
            PqnNoiSinh: pqnNoiSinh,
            PqnMaKH: pqnMaKH,
            PqnHocBong: pqnHocBong,
            PqnDiemTrungBinh: pqnDiemTrungBinh
        }
        const pqnRes = await axios.post("PqnSinhVien", pqnObjectStudent);
        onPqnSubmitForm(false);
    }
    return (
        <div className='border'>
            <div class="input-group mb-3">
                <span class="input-group-text" id="MaSV">MaSV</span>
                <input type="text" class="form-control"
                    name='MaSV' value={pqnMaSV} onChange={(ev) => setPqnMaSV(ev.target.value)}
                    placeholder="MaSV" aria-label="MaSV" aria-describedby="MaSV" />
            </div>

            <div class="input-group mb-3">
                <span class="input-group-text" id="HoSV">HoSV</span>
                <input type="text" class="form-control"
                    name='HoSV' value={pqnHoSV} onChange={(ev) => setPqnHoSV(ev.target.value)}
                    placeholder="HoSV" aria-label="HoSV" aria-describedby="HoSV" />
            </div>

            <div class="input-group mb-3">
                <span class="input-group-text" id="TenSV">TenSV</span>
                <input type="text" class="form-control"
                    name='TenSV' value={pqnTenSV} onChange={(ev) => setPqnTenSV(ev.target.value)}
                    placeholder="TenSV" aria-label="TenSV" aria-describedby="TenSV" />
            </div>
            <div class="input-group mb-3">
                <span class="input-group-text" id="Phai">Phai</span>
                <input type="text" class="form-control"
                    name='Phai' value={pqnPhai} onChange={(ev) => setPqnPhai(ev.target.value)}
                    placeholder="Phai" aria-label="Phai" aria-describedby="Phai" />
            </div>
            <div class="input-group mb-3">
                <span class="input-group-text" id="NoiSinh">NoiSinh</span>
                <input type="text" class="form-control"
                    name='NoiSinh' value={pqnNoiSinh} onChange={(ev) => setPqnNoiSinh(ev.target.value)}
                    placeholder="NoiSinh" aria-label="NoiSinh" aria-describedby="NoiSinh" />
            </div>
            <div class="input-group mb-3">
                <span class="input-group-text" id="MaKH">MaKH</span>
                <input type="text" class="form-control"
                    name='MaKH' value={pqnMaKH} onChange={(ev) => setPqnMaKH(ev.target.value)}
                    placeholder="MaKH" aria-label="MaKH" aria-describedby="MaKH" />
            </div>
            <div class="input-group mb-3">
                <span class="input-group-text" id="HocBong">HocBong</span>
                <input type="text" class="form-control"
                    name='HocBong' value={pqnHocBong} onChange={(ev) => setPqnHocBong(ev.target.value)}
                    placeholder="HocBong" aria-label="HocBong" aria-describedby="HocBong" />
            </div>
            <div class="input-group mb-3">
                <span class="input-group-text" id="DiemTrungBinh">DiemTrungBinh</span>
                <input type="text" class="form-control"
                    name='DiemTrungBinh' value={pqnDiemTrungBinh} onChange={(ev) => setPqnDiemTrungBinh(ev.target.value)}
                    placeholder="DiemTrungBinh" aria-label="DiemTrungBinh" aria-describedby="DiemTrungBinh" />
            </div>
            
            <button className='btn btn-primary' name='btnPqnSave' onClick={(ev) => pqnHandleSubmit(ev)}>Ghi lai</button>
            <button className='btn btn-danger' onClick={pqnHandleClose}>Dong</button>
        </div>
    )
}
