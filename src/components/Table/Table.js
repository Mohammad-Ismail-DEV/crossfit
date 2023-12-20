import React from "react"
import { AgGridReact } from "ag-grid-react" // React Grid Logic
import "ag-grid-community/styles/ag-grid.css" // Core CSS
import "ag-grid-community/styles/ag-theme-quartz.css" // Theme
import "./Table.css"

const Table = ({ rowData, colDefs }) => {
	const gridOptions = {
		autoSizeStrategy: {
			type: "fitCellContents"
		},
		defaultColDef: {
			enableRowGroup: true,
			enablePivot: true,
			enableValue: true,
			filter: true
		},
		domLayout: "autoHeight"
	}
	return (
		<div className="ag-theme-quartz Table">
			<AgGridReact
				rowData={rowData}
				columnDefs={colDefs}
				gridOptions={gridOptions}
			/>
		</div>
	)
}

export default Table
