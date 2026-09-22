import { useMemo, useState } from 'react';
import { McButton } from '@maersk-global/mds-react-wrapper/components-core/mc-button';
import { McCheckbox } from '@maersk-global/mds-react-wrapper/components-core/mc-checkbox';
import { McInput } from '@maersk-global/mds-react-wrapper/components-core/mc-input';
import { McTag } from '@maersk-global/mds-react-wrapper/components-core/mc-tag';
import { McDrawer } from '@maersk-global/mds-react-wrapper/components-core/mc-drawer';
import { McModal } from '@maersk-global/mds-react-wrapper/components-core/mc-modal';
import { shipments } from './data/shipments';

const Badge = ({ status }) => <McTag className="status-tag" fit="small" label={status} appearance={status === 'Overdue' ? 'error' : status === 'Soon Due' ? 'warning' : status === 'Pending' ? 'neutral-weak' : 'success'} />;
const FilterChecks = ({ title, options }) => <div className="control-group"><strong>{title}</strong>{options.map(option => <McCheckbox key={option} fit="small" label={option} checked />)}</div>;

function Metrics() {
	const cards = [['Total Shipments', '180', '180 Total active Air shipments', ''], ['Shipments with Exceptions', '180', '330 Total open exceptions', 'mixed'], ['Shipments with Soon Due Exceptions', '180', '330 Total soon due exceptions', 'warning'], ['Shipments with Overdue Exceptions', '180', '330 Total overdue exceptions', 'error']];
	return <section className="metrics">{cards.map(([name, value, caption, status]) => <article className="card" key={name}><span>{name}{status && <i className={`metric-status ${status}`} />}</span><strong>{value}</strong><small>{caption}</small></article>)}</section>;
}

function Drawer({ shipment, onClose }) {
	if (!shipment) return null;
	return <McDrawer open position="right" dimension="medium" fit="small" closing={onClose}><span slot="heading">{shipment.id} — Shipment details</span><div className="details">{[['Label', 'MH724932715'], ['Customer', 'ROBOSOLG – Robert Bosch'], ['Origin Destination', 'ORD – SIN'], ['Service level', 'Value'], ['Export owner', 'Value'], ['Created on', 'Value']].map(([name, value]) => <label key={name}>{name}<b>{value}</b></label>)}</div>{['Export Milestones', 'Import Milestones'].map(title => <section key={title}><h3>{title}</h3><table><thead><tr><th>Code</th><th>Milestone</th><th>Date</th><th>Status</th></tr></thead><tbody>{['On Time', 'Soon Due', 'Overdue', 'Pending'].map(status => <tr key={status}><td>Text</td><td>Text</td><td>15 Mar 09:30</td><td><Badge status={status} /></td></tr>)}</tbody></table></section>)}<McButton slot="footer" fit="small" appearance="neutral" variant="outlined" dialogaction="close" click={onClose}>Close</McButton></McDrawer>;
}

function Modal({ type, onClose }) {
	const fields = type === 'filter' ? ['Shipment ID', 'House bill number', 'HBL delivery mode', 'Customer code', 'Origin country', 'Destination country', 'Created Date', 'ETD – First Leg'] : ['Shipment ID', 'Total Exceptions', 'Export Milestone Overdue', 'Export Milestone Soon Due', 'Import Milestone Overdue', 'Import Milestone Soon Due', 'Origin', 'Service Level'];
	return <McModal open fit="small" dimension="small" padding="none" heading={type === 'filter' ? 'Setup Table Filter' : 'Setup Column View'} closing={onClose}><h3>{type === 'filter' ? 'Shipment Identifiers & Parties' : 'Category 1'}</h3><div className="fields">{fields.map(name => type === 'filter' ? <McInput key={name} fit="small" label={name} placeholder="Placeholder" /> : <McCheckbox key={name} fit="small" label={name} checked />)}</div><McButton slot="primaryAction" fit="small" appearance="primary" variant="filled" dialogaction="ok" click={onClose}>{type === 'filter' ? 'Apply Filter' : 'Apply Column View'}</McButton><McButton slot="secondaryAction" fit="small" appearance="neutral" variant="outlined" dialogaction="cancel" click={onClose}>Reset to Default</McButton></McModal>;
}

export default function App() {
	const [query, setQuery] = useState('');
	const [selected, setSelected] = useState();
	const [modal, setModal] = useState();
	const [notice, setNotice] = useState('');
	const items = useMemo(() => shipments.filter(shipment => shipment.id.toLowerCase().includes(query.toLowerCase())), [query]);
	const exportData = () => { setNotice('Export prepared — connect this action to the production service.'); setTimeout(() => setNotice(''), 2500); };
	const milestoneStatuses = ['Overdue', 'Soon Due', 'Overdue', 'Soon Due'];
	return <><header><button>☰</button><b>✦　Air One Platform</b><span>⌕　♧　CX⌄</span></header><div className="context">← Back to Customer Overview　　CN　 <b>Customer Name⌄</b>　 Controlling Customer CODE: NA　 Control Tower Rule: CSOP-V9.0, IOP-V9.0</div><nav><b>Air exceptions</b><span>Shipment exceptions</span><span>Document exceptions</span><span>Reference exceptions</span></nav><main><h1>Air exceptions　<i>i</i></h1><p>Monitor and resolve shipments with exceptions.</p><section className="controls"><FilterChecks title="Exception Type" options={['Export', 'Import']} /><FilterChecks title="Exception Status" options={['Normal', 'Soon Due', 'Overdue']} /><span className="threshold">Set “Soon Due” Threshold within <input defaultValue="24" /> Hour <McButton fit="small" appearance="primary" variant="filled">Apply</McButton><McButton fit="small" appearance="neutral" variant="outlined">Refresh</McButton></span></section><Metrics /><section className="queue"><h2>Exception Queue <i>i</i></h2><div className="toolbar"><McButton fit="small" appearance="secondary" variant="filled" click={() => setModal('filter')}>Table Filter (0)</McButton><div className="search"><McInput fit="small" label="Search shipment" value={query} input={event => setQuery(event.target.value)} placeholder="Search Shipment ID / House Bill" /></div><div className="toolbar-spacer" /><McButton fit="small" appearance="secondary" variant="filled">Default View</McButton><McButton fit="small" appearance="secondary" variant="filled" click={() => setModal('columns')}>Column View</McButton><McButton fit="small" appearance="primary" variant="filled" click={exportData}>Export Excel</McButton></div><table><thead><tr><th>Shipment ID</th><th>Total<br />Exceptions</th><th>Export<br />Milestone Overdue</th><th>Export<br />Milestone Soon Due</th><th>Import<br />Milestone Overdue</th><th>Import<br />Milestone Soon Due</th><th>Date</th><th>ATC</th><th>Status</th></tr></thead><tbody>{items.map(shipment => <tr key={shipment.id} onClick={() => setSelected(shipment)}><td><a>{shipment.id}</a></td><td>{shipment.exceptions}</td>{milestoneStatuses.map(status => <td key={status}><Badge status={status} /></td>)}<td>{shipment.date}</td><td>{shipment.time}</td><td><Badge status={shipment.status} /></td></tr>)}</tbody></table><footer>Items per page　10 <span>1–{items.length} of 500 items</span><b>‹　1　2　3　4　›</b></footer></section></main><Drawer shipment={selected} onClose={() => setSelected()} />{modal && <Modal type={modal} onClose={() => setModal()} />}<div className={`toast ${notice && 'visible'}`}>{notice}</div></>;
}
