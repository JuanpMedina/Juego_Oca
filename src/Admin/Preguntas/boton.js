import React, { useState } from 'react';
import * as XLSX from 'xlsx';

export function ExcelToJson() {
    const [jsonData, setJsonData] = useState([]);

    function handleFileUpload(e) {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onload = (event) => {
            const data = event.target.result;
            const workbook = XLSX.read(data, { type: 'binary' });
            const sheetName = workbook.SheetNames[0];
            const sheetData = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);
            setJsonData(sheetData);
        };
        reader.readAsBinaryString(file);
    }

    return (
        <div>
            <input type="file" onChange={handleFileUpload} />
            {/* <pre>{JSON.stringify(jsonData, null, 2)}</pre> */}
        </div>
    );
}



export default ExcelToJson;