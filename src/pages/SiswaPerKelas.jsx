import { useEffect, useState } from 'react';
import api from '../services/api';

export default function SiswaPerKelas() {
    const [data, setData] = useState([]);

    useEffect(() => {
        api.get('/report/siswa-per-kelas')
            .then(res => setData(res.data))
            .catch(err => console.error(err));
    }, []);

    return (
        <div>
            <h2>Data Siswa Per Kelas</h2>
            <table border="1" cellPadding="8">
                <thead>
                    <tr>
                        <th>Kelas</th>
                        <th>Daftar Siswa</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(kelas => (
                        <tr key={kelas.id}>
                            <td>{kelas.name}</td>
                            <td>
                                {kelas.siswa.length
                                    ? kelas.siswa.map(s => s.name).join(', ')
                                    : '-'}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}