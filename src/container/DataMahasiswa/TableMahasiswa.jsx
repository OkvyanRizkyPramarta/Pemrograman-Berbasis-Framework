import React, {Component} from "react";
import './bootstrap.min.css';
import Mahasiswa from "./Mahasiswa";

class TableMahasiswa extends Component {
    state = {
        dataMahasiswa:[],
        insertData: {
            id: 1,
            nim: "",
            nama: "",
            alamat: "",
            hp: "",
            angkatan: "",
            status: ""
        }
    }

    ambilDataDariServerAPI = () => {
        fetch('http://localhost:3001/mahasiswa?_sort=id')
            .then(response => response.json())
            .then(jsonHasilAmbilDariAPI => {
                this.setState( {
                    dataMahasiswa: jsonHasilAmbilDariAPI
                })
            })
    }

    componentDidMount() {
        this.ambilDataDariServerAPI()
    }

    handleHapusData = (id) => {
        fetch('http://localhost:3001/mahasiswa/' + id, {method: 'DELETE'})
            .then( res => {
                this.ambilDataDariServerAPI()
            })
    }

    

    handleTambahData = (event) => {
        let formInsertData = {...this.state.insertData};
        let timestamp = new Date().getTime();
        formInsertData['id'] = timestamp;
        formInsertData[event.target.name] = event.target.value;
        this.setState({
            insertData: formInsertData
        });
    }

    handleTombolSimpan = () => {
        fetch('http://localhost:3001/mahasiswa', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state.insertData)
        })
            .then( (Response ) => {
                this.ambilDataDariServerAPI();
            });
    }

    render() {
        return (
            <div className="table-responsive">
            <h2>Daftar Data Mahasiswa</h2>
            <table className="table align-items-center table-flush">
            <thead className="thead-light">
                <tr>
                  <th>Nim</th>
                  <th>Nama</th>
                  <th>Alamat</th>
                  <th>Hp</th>
                  <th>Angkatan</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
                </thead>
                {
                    this.state.dataMahasiswa.map(mahasiswa => {
                        return <Mahasiswa key={mahasiswa.id} nim={mahasiswa.nim} nama={mahasiswa.nama} alamat={mahasiswa.alamat} hp={mahasiswa.hp} angkatan={mahasiswa.angkatan} status={mahasiswa.status} idMahasiswa={mahasiswa.id} hapusData={this.handleHapusData}/>
                    })
                }
            </table>

            <div className="post-artikel">
            <h2>Input Data Mahasiswa</h2> <br></br>
                <div className="form pb-2 border-bottom">
                    <div className="form-group row">
                        <label htmlFor="title" className="col-sm-2 col-form-label">NIM</label>
                        <div className="col-sm-4">
                            <input type="text" className="form-control" id="nim" name="nim" onChange={this.handleTambahData}></input>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="title" className="col-sm-2 col-form-label">Nama</label>
                        <div className="col-sm-4">
                            <input type="text" className="form-control" id="nama" name="nama" onChange={this.handleTambahData}></input>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="title" className="col-sm-2 col-form-label">Alamat</label>
                        <div className="col-sm-4">
                            <input type="text" className="form-control" id="alamat" name="alamat" onChange={this.handleTambahData}></input>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="title" className="col-sm-2 col-form-label">Hp</label>
                        <div className="col-sm-4">
                            <input type="text" className="form-control" id="hp" name="hp" onChange={this.handleTambahData}></input>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="title" className="col-sm-2 col-form-label">Angkatan</label>
                        <div className="col-sm-4">
                            <input type="text" className="form-control" id="angkatan" name="angkatan" onChange={this.handleTambahData}></input>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="title" className="col-sm-2 col-form-label">Status</label>
                        <div className="col-sm-4">
                            <input type="text" className="form-control" id="status" name="status" onChange={this.handleTambahData}></input>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={this.handleTombolSimpan}>Simpan</button>
                </div>
            </div>
            
        </div>
        )
    }
}

export default TableMahasiswa;
