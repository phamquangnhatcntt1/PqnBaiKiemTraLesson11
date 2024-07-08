import React from 'react'
import axios from '../Api/pqnApi';

export default function PqnListSinhVien({ renderPqnListSinhVien, onPqnDelete , onPqnEdit }) {
    console.log("PqnListSinhVien:", renderPqnListSinhVien);
    const pqnHandleEdit = (sinhvien) => {
        // Call a function passed from the parent component to handle the edit operation
        // You can pass the sinhvien object to the parent component
        onPqnEdit(sinhvien);
      };

    // Check if renderPqnListUsers is an array
    if (!Array.isArray(renderPqnListSinhVien)) {
        return <div>No data available</div>;
    }
    
    const pqnHandleDelete = async (param) => {
        if (window.confirm("Ban co muon xoa khong?")) {
                const pqnRes = await axios.delete("PqnSinhVien/" + param.PqnMaSV);
                console.log("PqnSinhVien/" + param.PqnMaSV);
                // Optionally, you can update the list after successful deletion
                onPqnDelete();
        }
    }
    // Render the list of users
    let pqnElementSinhVien = renderPqnListSinhVien.map((PqnSinhVien, index) => {
        return (
            <>
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
                        <button className='btn btn-success' onClick={() => pqnHandleEdit(PqnSinhVien)}>Edit</button>
                        <button className='btn btn-danger' onClick={()=>pqnHandleDelete(PqnSinhVien)}>Remove</button>
                    </td>
                </tr>
            </>
        )
    })

    

    return (
        <div className='row'>
            <div className='col-md-12'>
                <table className='table table-bordered'>
                    <thead>
                        <th>MaSV</th>
                        <th>HoSV</th>
                        <th>TenSV</th>
                        <th>Phai</th>
                        <th>NgaySinh</th>
                        <th>NoiSinh</th>
                        <th>MaKH</th>
                        <th>HocBong</th>
                        <th>DiemTrungBinh</th>
                        <th>Chuc Nang</th>
                    </thead>
                    <tbody>
                        {pqnElementSinhVien}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
