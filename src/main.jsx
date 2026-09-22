import { MdsConfig } from '@maersk-global/mds-config'
import '@maersk-global/fonts/maeu/fonts.css'
import '@maersk-global/mds-design-tokens/maersk/light/css/design-tokens-px.css'
import '@maersk-global/mds-foundations/css/foundations.css'

MdsConfig.iconsDynamicImportPath = import.meta.env.DEV ? '/node_modules/' : '/assets/node_modules/'

import '@maersk-global/mds-components-core'
import '@maersk-global/mds-components-community'

import React, { useMemo, useState } from 'react'
import { createRoot } from 'react-dom/client'

const style = document.createElement('style')
style.textContent = `:root{font-family:'Maersk Text',Arial,sans-serif;color:#141414;font-size:14px}*{box-sizing:border-box}body{margin:0}.app{min-width:1100px}.topbar{height:64px;border-bottom:1px solid #ddd;display:flex;align-items:center;padding:0 24px;gap:18px}.hamburger{font-size:19px}.star{background:#42b7db;color:white;font-size:24px;width:26px;height:26px;text-align:center;line-height:26px}.brand{font-size:18px;border-left:1px solid #ddd;padding-left:16px}.top-actions{margin-left:auto;font-size:20px}.top-actions b{font-size:13px;background:#e5f5fa;padding:6px 12px;border-radius:14px;font-weight:400}main{padding:28px 32px}.page-head{display:flex;justify-content:space-between;align-items:center}.page-head h1{display:inline-block;font:28px 'Maersk Headline';margin:5px 20px 20px 0}.rule{display:inline-flex;flex-direction:column;border-left:1px solid #ddd;padding-left:15px}.rule small{color:#666}.rule span{background:#eee;padding:3px 5px;margin-top:-20px;margin-left:160px}.tabs{display:flex;gap:42px;border-bottom:1px solid #ddd;margin:0 -32px;padding:0 20px}.tabs a{padding:14px 0 12px;font-size:16px}.tabs .active{border-bottom:3px solid #42b7db}.controls{display:flex;align-items:center;gap:6px;padding:20px 0 16px}.controls input{height:32px;width:80px;border:1px solid #ccc;border-radius:5px;padding:8px}.controls button,.unit-wrap button,.pagination button{border:0;background:#f2f2f2;border-radius:5px;padding:9px 13px;font:inherit}.controls>mc-button:last-child{margin-left:auto}.hint{border:1px solid #222;border-radius:50%;font-size:10px;padding:0 4px}.metrics{display:grid;grid-template-columns:repeat(4,1fr);gap:16px}.metric{border:1px solid #d2d2d2;border-radius:8px;padding:16px 19px;height:137px}.metric-title{font-size:16px;font-weight:600}.dots{float:right}.dots i,.dots b{display:inline-block;width:10px;height:10px;border-radius:50%;background:#ffcc28;margin-left:4px}.dots b{background:#c90020}.metric-number{font-size:40px;font-weight:300;margin:13px 0}.metric-number small{font-size:16px;color:#777}.queue{margin-top:39px}.queue h2{font:20px 'Maersk Headline'}.queue h2 small{font:12px Arial;background:#eee;border-radius:20px;padding:3px 7px}.queue-tools{display:flex;justify-content:space-between;align-items:center;margin:18px 0 16px}.queue-tools mc-input{width:360px}.queue-tools div{display:flex;gap:8px}.table-wrap{overflow:auto;border:1px solid #d5d5d5;border-radius:8px}table{border-collapse:collapse;width:100%;min-width:1280px}th,td{text-align:left;border-bottom:1px solid #ddd;padding:10px 11px;white-space:nowrap}th{background:#f7f7f7;white-space:normal;min-width:100px}td a{color:#007eb9;text-decoration:underline}.status{display:inline-block;padding:4px 9px;border-radius:14px;font-size:12px;background:#eee}.status-risky,.status-overdue{background:#f8d8df}.status-alert,.status-soon-due{background:#fff0bf}.status-normal,.status-on-time{background:#d9f2d2}.pills i{font-style:normal;font-size:11px;border-radius:14px;padding:4px 9px;margin-right:5px}.pills.pink i{background:#f8d8df}.pills.yellow i{background:#fff0bf}.pagination{display:flex;justify-content:space-between;padding:18px 0}.filter-panel{border:1px solid #ccc;border-radius:8px;background:#fafafa;padding:16px;margin-bottom:22px}.filter-heading{display:flex;justify-content:space-between}.filter-heading div{display:flex;gap:8px}.filter-panel h3{margin:22px 0 12px}.filter-grid{display:grid;gap:12px}.filter-grid.two{grid-template-columns:330px 330px}.filter-grid.four{grid-template-columns:repeat(4,1fr)}label{display:flex;flex-direction:column;gap:6px}.filter-panel hr{border:0;border-top:1px solid #ccc;margin:18px 0}.date-grid{display:grid;grid-template-columns:1fr 1fr;gap:10px}.date-box{background:#f1f1f1;border:1px solid #d2d2d2;border-radius:8px;padding:9px}.date-inputs{display:flex;align-items:center;gap:8px}.date-inputs mc-input{flex:1}.check{flex-direction:row;align-items:center;gap:6px;margin-top:8px}.backdrop{position:fixed;inset:0;background:#0008;z-index:10}.drawer{position:absolute;right:0;top:0;height:100%;width:480px;background:#fff;padding:20px 24px;overflow:auto}.detail-drawer{width:800px}.drawer header{display:flex;justify-content:space-between}.drawer h2{font:20px 'Maersk Headline';margin:0}.close{border:0;background:none;font-size:25px}.column-category{border-bottom:1px solid #ccc;padding:10px 0 15px}.column-content>mc-button{margin-top:calc(100vh - 260px)}.detail-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:20px 25px}.detail-grid small{color:#777}.detail-grid p{margin:5px 0}.milestones{border-top:1px solid #ccc;margin-top:25px;padding-top:18px}.mini-table{border:1px solid #d5d5d5;border-radius:8px;overflow:hidden}.mini-head,.mini-row{display:grid;grid-template-columns:1fr 1.5fr 1.5fr 1.5fr 1fr;padding:8px 11px;gap:10px}.mini-head{background:#f5f5f5}.mini-row{border-top:1px solid #ddd;align-items:center}.select-menu{position:absolute;background:#fff;border:1px solid #ccc;padding:8px;box-shadow:0 2px 5px #aaa}`
document.head.append(style)

const shipments = [
	['S25ADUS074300', 'Risky', 8, '15 Mar 2024', '09:30', 'Overdue'],
	['S25ADUS074300', 'Risky', 6, '22 Jun 2025', '14:45', 'Overdue'],
	['S25ADUS074300', 'Alert', 2, '08 Dec 2023', '16:20', 'Soon Due'],
	['S25ADUS074300', 'Normal', 3, '03 Apr 2026', '11:15', 'Overdue'],
	['S25ADUS074300', 'Normal', 5, '18 Sep 2024', '08:00', 'Soon Due'],
	['S25ADUS074300', 'Risky', 1, '29 Nov 2025', '13:30', 'Display value'],
	['S25ADUS074300', 'Normal', 4, '14 Feb 2027', '10:45', 'Display value'],
	['S25ADUS074300', 'Normal', 2, '07 Aug 2024', '19:15', 'Not Applicable'],
	['S25ADUS074300', 'Alert', 3, '25 Jan 2026', '07:30', 'Not Applicable'],
	['S25ADUS074300', 'Normal', 6, '12 May 2025', '15:00', 'Pending'],
]

const columnNames = ['Text', 'Shipment Risk', 'Total Exceptions', 'Export Milestone Overdue', 'Export Milestone Soon Due', 'Import Milestone Overdue', 'Import Milestone Soon Due', 'Date', 'ATC']
const milestoneRows = ['08 Dec 2023   16:20', '03 Apr 2026   11:15', '18 Sep 2024   08:00', '29 Nov 2025   13:30', '14 Feb 2027   10:45']

function Button({ children, onClick, primary = false, className = '' }) {
	return <mc-button class={className} appearance={primary ? 'primary' : 'neutral'} onClick={onClick}>{children}</mc-button>
}

function Status({ children }) {
	return <span className={`status status-${children.toLowerCase().replaceAll(' ', '-')}`}>{children}</span>
}

function Metric({ title, value = '180', detail, dots }) {
	return <section className="metric">
		<div className="metric-title">{title}{dots && <span className="dots"><i /> <b /></span>}</div>
		<div className="metric-number">{value} <small>Shipments</small></div>
		<div className="metric-detail">{detail}</div>
	</section>
}

function FilterPanel({ onClear, onApply }) {
	const [unitOpen, setUnitOpen] = useState(false)
	return <section className="filter-panel">
		<div className="filter-heading"><strong>Filter</strong><div><Button onClick={onClear}>Clear Filters</Button><Button primary onClick={onApply}>Apply Filters</Button></div></div>
		<h3>Shipment Identifiers</h3>
		<div className="filter-grid two"><label>Shipment ID (comma separated)<mc-input placeholder="Placeholder" /></label><label>House bill number (comma separated)<mc-input placeholder="Placeholder" /></label></div>
		<hr />
		<h3>Parties &amp; Routing</h3>
		<div className="filter-grid four">{['HBL Delivery Mode', 'Controlling Customer Code', 'Origin Country', 'Destination Country', 'Exception Owner Company', 'Exception Owner Branch'].map(label => <label key={label}>{label}<mc-input placeholder="Placeholder" /></label>)}</div>
		<hr />
		<h3>Dates</h3>
		<div className="date-grid">{['Created Date', 'ETD - First Leg', 'ETA - First Leg', 'ATD - First Leg', 'ATA - First Leg', 'Estimated Pickup', 'Actual Pickup', 'Estimated Delivery', 'Actual Delivery'].map((label, index) => <div className="date-box" key={label}><label>{label}<div className="date-inputs"><mc-input placeholder="YYYY-MM-DD" /><span>→</span><mc-input placeholder="YYYY-MM-DD" /></div></label><label className="check"><input type="checkbox" defaultChecked={index === 0} /> Include Shipment with Missing Value</label></div>)}</div>
		<div className="floating-select" onClick={() => setUnitOpen(!unitOpen)}>Hour (s)<span>⌄</span>{unitOpen && <div className="select-menu"><div>Hour (s)</div><div>Day (s)</div></div>}</div>
	</section>
}

function Drawer({ type, onClose, onReset, visibleColumns, setVisibleColumns }) {
	if (!type) return null
	const detail = type === 'detail'
	return <div className="backdrop" onClick={onClose}><aside className={`drawer ${detail ? 'detail-drawer' : ''}`} onClick={event => event.stopPropagation()}>
		<header><h2>{detail ? 'S26AMH100011' : 'Setup Column View'} {detail && <Status>Risky</Status>}</h2><button className="close" onClick={onClose}>×</button></header>
		{detail ? <DetailContent /> : <ColumnContent visibleColumns={visibleColumns} setVisibleColumns={setVisibleColumns} onReset={onReset} />}
	</aside></div>
}

function ColumnContent({ visibleColumns, setVisibleColumns, onReset }) {
	return <div className="column-content">{['Category 1', 'Category 1'].map((category, index) => <div className="column-category" key={`${category}-${index}`}><label className="check strong"><input type="checkbox" checked={visibleColumns.length > 0} onChange={() => {}} /> {category}</label>{['Column name', 'Column name', 'Column name', 'Column name'].map((name, item) => <label className="check" key={`${index}-${item}`}><input type="checkbox" checked={item < 3 || visibleColumns.includes(index * 4 + item)} onChange={() => setVisibleColumns(item < 3 ? visibleColumns : [...visibleColumns, index * 4 + item])} /> {name}</label>)}</div>)}<Button onClick={onReset}>Reset to Default</Button></div>
}

function DetailContent() {
	return <div className="detail-content"><h3>Shipment details</h3><div className="detail-grid">{[['Label', 'MH724932715'], ['Controlling customer', 'ROB BOSGLG – Robert Bosch'], ['Origin Destination', 'ORD → SIN'], ['HBL delivery mode', 'Value'], ['Service level', 'Value'], ['Export owner', 'Value'], ['Import owner', 'Value'], ['Created on', 'Value']].map(([label, value]) => <div key={label}><small>{label}</small><p>{value}</p></div>)}</div><MilestoneTable title="Export Milestones" /><MilestoneTable title="Import Milestones" /></div>
}

function MilestoneTable({ title }) {
	return <section className="milestones"><h3>{title}</h3><div className="mini-table"><div className="mini-head"><b>Code</b><b>Milestone</b><b>Actual Date</b><b>Due Date</b><b>Status</b></div>{milestoneRows.map((date, index) => <div className="mini-row" key={date}><span>Text</span><span>Text</span><span>{date}</span><span>{date}</span><Status>{['On Time', 'Soon Due', 'Overdue', 'Not Applicable', 'Pending'][index]}</Status></div>)}</div></section>
}

function App() {
	const [filterOpen, setFilterOpen] = useState(false)
	const [drawer, setDrawer] = useState(null)
	const [query, setQuery] = useState('')
	const [page, setPage] = useState(1)
	const [unit, setUnit] = useState('Hour (s)')
	const [visibleColumns, setVisibleColumns] = useState([])
	const filtered = useMemo(() => shipments.filter(row => row[0].toLowerCase().includes(query.toLowerCase())), [query])
	return <div className="app">
		<header className="topbar"><span className="hamburger">☰</span><span className="star">✦</span><span className="brand">Air One Platform</span><span className="top-actions">⌕　♧　?　◎　 <b>CX⌄</b></span></header>
		<main>
			<section className="page-head"><div><h1>Control Tower</h1><div className="rule"><small>Control Tower Rule</small><strong>CSOP.V9.0, IOP.V9.0</strong><span>Edit</span></div></div><Button>↗　Configuration Center</Button></section>
			<nav className="tabs"><a className="active">Air Exceptions</a><a>Air Timeliness</a><a>Sea Exceptions</a><a>Document Exceptions</a><a>Reference Exceptions</a></nav>
			<section className="controls"><label>Set “Soon Due” Threshold Within <span className="hint" title="Applies to all metrics below.">i</span></label><input type="number" value="24" readOnly /><div className="unit-wrap"><button onClick={() => setUnit(unit === 'Hour (s)' ? 'Day (s)' : 'Hour (s)')}>{unit}⌄</button></div><Button primary>Apply</Button><Button onClick={() => setFilterOpen(!filterOpen)}>⌁　Filter (0)</Button><Button>Refresh</Button></section>
			{filterOpen && <FilterPanel onClear={() => setQuery('')} onApply={() => setFilterOpen(false)} />}
			<div className="metrics"><Metric title="Total Shipments" detail="Total active Air shipments in scope" /><Metric title="Shipments with Exceptions" detail={<><strong>330</strong> Total open exceptions</>} dots /><Metric title="Shipments with Soon Due Exceptions" detail={<><strong>330</strong> Total soon due exceptions</>} dots /><Metric title="Shipments with Overdue Exceptions" detail={<><strong>330</strong> Total overdue exceptions</>} dots /></div>
			<section className="queue"><h2>Exception Queue <small>9</small></h2><div className="queue-tools"><mc-input placeholder="Search Shipment ID / House Bill" value={query} onInput={event => { setQuery(event.target.value); setPage(1) }} /><div><Button onClick={() => setDrawer('columns')}>Column View</Button><Button primary>Export Excel</Button></div></div>
				<div className="table-wrap"><table><thead><tr>{columnNames.map((column, index) => <th key={column} className={index > 2 ? 'milestone-col' : ''}>{column} <span>⌁ ↕</span></th>)}</tr></thead><tbody>{filtered.map((row, rowIndex) => <tr key={rowIndex} onClick={() => setDrawer('detail')}><td><a>{row[0]}</a></td><td><Status>{row[1]}</Status></td><td>{row[2]}</td>{[0, 1, 2, 3].map(index => <td key={index}><span className={`pills ${index % 2 ? 'yellow' : 'pink'}`}><i>ABC</i><i>ABC</i><i>ABC</i></span></td>)}<td>{row[3]}</td><td>{row[4]}</td><td><Status>{row[5]}</Status></td></tr>)}</tbody></table></div>
				<footer className="pagination"><span>Items per page: <button>10　⌄</button>　{filtered.length ? `1–${filtered.length}` : '0'} of 500 items</span><span><button onClick={() => setPage(Math.max(1, page - 1))}>‹</button>　<b>{page}</b>　2　 3　 4　 <button onClick={() => setPage(page + 1)}>›</button></span></footer>
			</section>
		</main><Drawer type={drawer} onClose={() => setDrawer(null)} onReset={() => setVisibleColumns([])} visibleColumns={visibleColumns} setVisibleColumns={setVisibleColumns} />
	</div>
}

createRoot(document.getElementById('root')).render(<App />)
