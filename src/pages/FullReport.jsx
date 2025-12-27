import { useEffect, useState } from 'react'
import api from '../services/api'

export default function FullReport() {
    const [data, setData] = useState([])

    useEffect(() => {
        api.get('/report/kelas-siswa-guru')
            .then(res => setData(res.data))
            .catch(err => console.error(err))
    }, [])

    return (
        <>
            <h2>Data Kelas, Guru & Siswa</h2>

            <table border="1" cellPadding="8">
                <thead>
                    <tr>
                        <th>Kelas</th>
                        <th>Guru</th>
                        <th>Jumlah Siswa</th>
                        <th>Daftar Siswa</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(kelas => (
                        <tr key={kelas.id}>
                            <td>{kelas.name}</td>
                            <td>
                                {kelas.guru.map(g => g.name).join(', ') || '-'}
                            </td>
                            <td>{kelas.siswa.length}</td>
                            <td>
                                {kelas.siswa.map(s => s.name).join(', ') || '-'}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}
