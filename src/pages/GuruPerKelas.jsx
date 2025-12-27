import { useEffect, useState } from 'react'
import api from '../services/api'

export default function GuruPerKelas() {
    const [data, setData] = useState([])

    useEffect(() => {
        api.get('/report/guru-per-kelas')
            .then(res => setData(res.data))
            .catch(err => console.error(err))
    }, [])

    return (
        <>
            <h2>Guru per Kelas</h2>

            <table border="1" cellPadding="8">
                <thead>
                    <tr>
                        <th>Kelas</th>
                        <th>Guru</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(kelas => (
                        <tr key={kelas.id}>
                            <td>{kelas.name}</td>
                            <td>
                                {kelas.guru.length
                                    ? kelas.guru.map(g => g.name).join(', ')
                                    : '-'}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}
