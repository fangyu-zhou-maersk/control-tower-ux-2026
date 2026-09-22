import { useMemo, useState } from 'react';

const McButton = ({ children, click, ...props }) => <button {...props} onClick={click}>{children}</button>;
const McCheckbox = ({ label, ...props }) => <label className="mc-checkbox"><input type="checkbox" {...props} />{label}</label>;
const McInput = ({ label, input, ...props }) => <label className="mc-input"><span>{label}</span><input {...props} onChange={input} /></label>;
const McTag = ({ label }) => <span className="status-tag">{label}</span>;

const shipments = Array.from({ length: 10 }, (_, index) => ({
	id: 'S25ADUS074300', exceptions: [8, 6, 2, 3, 5, 1, 4, 2, 3, 6][index],
	date: ['15 Mar 2024', '22 Jun 2025', '08 Dec 2023', '03 Apr 2026', '18 Sep 2024', '29 Nov 2025', '14 Feb 2027', '07 Aug 2024', '25 Jan 2026', '12 May 2025'][index],
	time: ['09:30', '14:45', '16:20', '11:15', '08:00', '13:30', '10:45', '19:15', '07:30', '15:00'][index],
	status: ['Overdue', 'Overdue', 'Soon Due', 'Overdue', 'Soon Due', 'Display value', 'Display value', 'Not Applicable', 'Not Applicable', 'Pending'][index],
}));

const Badge = ({ status }) => <McTag className="status-tag" fit="small" label={status} appearance={status === 'Overdue' ? 'error' : status === 'Soon Due' ? 'warning' : status === 'Pending' ? 'neutral-weak' : status === 'Display value' ? 'neutral-weak' : 'success'} />;
const InfoIcon = ({ onMouseEnter, onMouseLeave, onClick }) => <button className="info-icon" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} onFocus={onMouseEnter} onBlur={onMouseLeave} onClick={onClick} aria-label="More information">i</button>;

function Metrics() {
	const cards = [['Total Shipments', '180', '180 Total active Air shipments', ''], ['Shipments with Exceptions', '180', '330 Total open exceptions', 'mixed'], ['Shipments with Soon Due Exceptions', '180', '330 Total soon due exceptions', 'warning'], ['Shipments with Overdue Exceptions', '180', '330 Total overdue exceptions', 'error']];
	return <section className="metrics">{cards.map(([name, value, caption, status]) => <article className="card" key={name}><span>{name}{status && <i className={`metric-status ${status}`} />}</span><strong>{value}</strong><small>{caption}</small></article>)}</section>;
}

function DetailDrawer({ shipment, onClose }) {
	if (!shipment) return null;
	return <aside className="drawer detail-drawer"><button className="close-button" onClick={onClose} aria-label="Close shipment details">×</button><div className="drawer-title"><strong>{shipment.id}</strong><Badge status="Risky" /></div><h2>Shipment details</h2><div className="details">{[['Label', 'MH724932715'], ['Controlling customer', 'ROBBOSGLG – Robert Bosch'], ['Origin Destination', 'ORD → SIN'], ['HBL delivery mode', 'Value'], ['Service level', 'Value'], ['Export owner', 'Value'], ['Import owner', 'Value'], ['Created on', 'Value']].map(([name, value]) => <label key={name}>{name}<b>{value}</b></label>)}</div>{['Export Milestones', 'Import Milestones'].map(title => <section className="milestone-section" key={title}><h3>{title}</h3><table><thead><tr><th>Code</th><th>Milestone</th><th>Actual Date</th><th>Due Date</th><th>Status</th></tr></thead><tbody>{['On Time', 'Soon Due', 'Overdue', 'Not Applicable', 'Pending'].map((status, index) => <tr key={status}><td>Text</td><td>Text</td><td>{index % 2 ? '03 Apr 2026 11:15' : '08 Dec 2023 16:20'}</td><td>{index % 2 ? '03 Apr 2026 11:15' : '08 Dec 2023 16:20'}</td><td><Badge status={status} /></td></tr>)}</tbody></table></section>)}</aside>;
}

function FilterPanel({ onClose }) {
	return <section className="filter-panel"><div className="filter-heading"><strong>Filter</strong><div><McButton fit="small" appearance="neutral" variant="outlined" click={onClose}>Clear Filters</McButton><McButton fit="small" appearance="primary" variant="filled" click={onClose}>Apply Filters</McButton></div></div><h3>Shipment Identifiers</h3><div className="filter-grid two"><label>Shipment ID (comma separated)<input placeholder="Placeholder" /></label><label>House bill number (comma separated)<input placeholder="Placeholder" /></label></div><h3>Parties & Routing</h3><div className="filter-grid four">{['HBL Delivery Mode', 'Controlling Customer Code', 'Origin Country', 'Destination Country', 'Exception Owner Company', 'Exception Owner Branch'].map(name => <label key={name}>{name}<input placeholder="Placeholder" /></label>)}</div><h3>Dates</h3><div className="date-grid">{['Created Date', 'ETD - First Leg', 'ETA - First Leg', 'ATD - First Leg', 'ATA - First Leg', 'Estimated Pickup', 'Actual Pickup', 'Estimated Delivery', 'Actual Delivery'].map(name => <div className="date-card" key={name}><label>{name}</label><div><input placeholder="YYYY-MM-DD" /><span>→</span><input placeholder="YYYY-MM-DD" /></div><McCheckbox fit="small" label="Include Shipment with Missing Value" /></div>)}</div></section>;
}

function ColumnDrawer({ onClose }) {
	return <aside className="drawer column-drawer"><button className="close-button" onClick={onClose} aria-label="Close column view">×</button><h2>Setup Column View</h2>{['Category 1', 'Category 1'].map((category, categoryIndex) => <section className="column-group" key={`${category}-${categoryIndex}`}><h3><span>−</span>{category}</h3>{['Column name', 'Column name', 'Column name', 'Column name'].map((name, index) => <McCheckbox key={`${categoryIndex}-${index}`} fit="small" label={name} checked={index !== 3} />)}</section>)}<McButton fit="small" appearance="neutral" variant="filled" click={onClose}>Reset to Default</McButton></aside>;
}

export default function App() {
	const [query, setQuery] = useState('');
	const [selected, setSelected] = useState();
	const [filterOpen, setFilterOpen] = useState(false);
	const [columnsOpen, setColumnsOpen] = useState(false);
	const [threshold, setThreshold] = useState('24');
	const [unit, setUnit] = useState('Hour(s)');
	const [tipOpen, setTipOpen] = useState(false);
	const [notice, setNotice] = useState('');
	const items = useMemo(() => shipments.filter(shipment => shipment.id.toLowerCase().includes(query.toLowerCase())), [query]);
	const exportData = () => { setNotice('Export prepared — connect this action to the production service.'); setTimeout(() => setNotice(''), 2500); };
	const milestoneStatuses = ['Overdue', 'Soon Due', 'Overdue', 'Soon Due'];
	return <><header><button>☰</button><b><span className="brand-mark">✦</span> Air One Platform</b><span>⌕　♧　?　♙　<span className="profile">CX⌄</span></span></header><div className="page-title"><h1>Control Tower</h1><div><small>Control Tower Rule</small><b>CSOP-V9.0, IOP-V9.0</b><button>Edit</button></div><McButton fit="small" appearance="neutral" variant="filled">↗　Configuration Center</McButton></div><nav><b>Air Exceptions</b><span>Air Timeliness</span><span>Sea Exceptions</span><span>Document Exceptions</span><span>Reference Exceptions</span></nav><main><section className="controls"><span className="threshold">Set “Soon Due” Threshold Within <span className="info-wrap"><InfoIcon onMouseEnter={() => setTipOpen(true)} onMouseLeave={() => setTipOpen(false)} />{tipOpen && <span className="tooltip">Shipments with missing or corrected system updates — milestone exceptions, air freight forwarding</span>}</span><input type="number" min="0" step="1" value={threshold} onChange={event => setThreshold(event.target.value.replace(/[^0-9]/g, ''))} /><select value={unit} onChange={event => setUnit(event.target.value)}><option>Hour(s)</option><option>Day(s)</option></select><McButton fit="small" appearance="primary" variant="filled">Apply</McButton><McButton fit="small" appearance="neutral" variant="outlined" click={() => setFilterOpen(!filterOpen)}>⌁　Filter ({filterOpen ? 1 : 0})</McButton></span><McButton fit="small" appearance="neutral" variant="outlined">Refresh</McButton></section>{filterOpen && <FilterPanel onClose={() => setFilterOpen(false)} />}<Metrics /><section className="queue"><h2>Exception Queue <i>9</i></h2><div className="toolbar"><div className="search"><McInput fit="small" label="Search shipment" value={query} input={event => setQuery(event.target.value)} placeholder="Search Shipment ID / House Bill" /></div><div className="toolbar-spacer" /><McButton fit="small" appearance="neutral" variant="filled" click={() => setColumnsOpen(true)}>Column View</McButton><McButton fit="small" appearance="primary" variant="filled" click={exportData}>Export Excel</McButton></div><table><thead><tr><th>Text　⌁ ↕</th><th>Shipment<br />Risk　⌁ ↕</th><th>Total<br />Exceptions　⌁</th><th>Export<br />Milestone<br />Overdue　⌁</th><th>Export<br />Milestone<br />Soon Due　⌁</th><th>Import<br />Milestone<br />Overdue　⌁</th><th>Import<br />Milestone<br />Soon Due　⌁</th><th>Date　↕</th><th>ATC　⌁</th></tr></thead><tbody>{items.map((shipment, index) => <tr key={`${shipment.id}-${index}`} onClick={() => setSelected(shipment)}><td><a>{shipment.id}</a></td><td><Badge status={index % 3 === 0 ? 'Risky' : index % 3 === 2 ? 'Alert' : 'Normal'} /></td><td>{shipment.exceptions}</td>{milestoneStatuses.map(status => <td key={status}><Badge status={status} /></td>)}<td>{shipment.date}　{shipment.time}</td><td><Badge status={shipment.status} /></td></tr>)}</tbody></table><footer>Items per page　<select defaultValue="10"><option>10</option><option>25</option><option>50</option></select><span>1–10 of 500 items</span><b>‹　 1　 2　 3　 4　›</b></footer></section></main>{selected && <><div className="scrim" onClick={() => setSelected()} /><DetailDrawer shipment={selected} onClose={() => setSelected()} /></>}{columnsOpen && <><div className="scrim" onClick={() => setColumnsOpen(false)} /><ColumnDrawer onClose={() => setColumnsOpen(false)} /></>}<div className={`toast ${notice && 'visible'}`}>{notice}</div></>;
}
