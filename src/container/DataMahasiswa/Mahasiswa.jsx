import React from "react";

const Mahasiswa = (props) => {
        return (
                <tr>
                  <td className="">{props.nim}</td>
                  <td className="">{props.nama}</td>
                  <td className="">{props.alamat}</td>
                  <td className="">{props.hp}</td>
                  <td className="">{props.angkatan}</td>
                  <td className="">{props.status}</td>
                  <button className="btn btn-sm btn-warning" onClick={() => props.hapusData(props.idMahasiswa)}>Hapus</button>
                  
                </tr>
        )
}

export default Mahasiswa;