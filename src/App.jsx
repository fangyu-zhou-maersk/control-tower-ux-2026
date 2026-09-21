import { useMemo, useState } from 'react';
import { McButton } from '@maersk-global/mds-react-wrapper/components-core/mc-button';
import { McCheckbox } from '@maersk-global/mds-react-wrapper/components-core/mc-checkbox';
import { McInput } from '@maersk-global/mds-react-wrapper/components-core/mc-input';
import { McTag } from '@maersk-global/mds-react-wrapper/components-core/mc-tag';
import { shipments } from './data/shipments';

import maerskLogo from './images/Maersk Logo.svg';
import menuIcon from './Icons/bars-horizontal.svg';
import bellIcon from './Icons/bell.svg';
import closeIcon from './Icons/cloes.svg';
import expandIcon from './Icons/expand.svg';
import funnelIcon from './Icons/funnel.svg';
import infoIcon from './Icons/info.svg';
import shrinkIcon from './Icons/shrink.svg';
import magnifyingGlassIcon from './Icons/magnifying-glass.svg';
import questionCircleIcon from './Icons/question-circle.svg';
import arrowsDownUpIcon from './Icons/arrows-down-up.svg';
import trailingDownIcon from './Icons/Trailing icon down.svg';
import trailingIcon from './Icons/Trailing icon.svg';
import previousIcon from './Icons/Previous.svg';
import nextIcon from './Icons/Next.svg';
import userCircleIcon from './Icons/user-circle.svg';

const statusAppearance = {
  Overdue: 'error',
  'Soon Due': 'warning',
  'On Time': 'success',
  Pending: 'neutral-weak',
  'Not Applicable': 'neutral-weakest',
  'Display value': 'neutral-weakest',
};

const metricCards = [
  ['Total Shipments', '180', ['Total active Air shipments'], ''],
  ['Shipments with Exceptions', '180', ['330', 'Total open exceptions'], 'mixed'],
  ['Shipments with Soon Due Exceptions', '180', ['330', 'Total soon due exceptions'], 'warning'],
  ['Shipments with Overdue Exceptions', '180', ['330', 'Total overdue exceptions'], 'error'],
];

const tableHeaders = [
  { label: 'Text', filter: false, sort: true },
  { label: 'Shipment Risk', filter: true, sort: true },
  { label: 'Total Exceptions', filter: false, sort: true },
  { label: 'Export Milestone Overdue', filter: true, sort: true },
  { label: 'Export Milestone Soon Due', filter: true, sort: true },
  { label: 'Import Milestone Overdue', filter: true, sort: true },
  { label: 'Import Milestone Soon Due', filter: true, sort: true },
  { label: 'Date', filter: false, sort: true },
  { label: 'ATC', filter: true, sort: false },
];

const monthNames = {
  Jan: 'January', Feb: 'February', Mar: 'March', Apr: 'April', May: 'May', Jun: 'June',
  Jul: 'July', Aug: 'August', Sep: 'September', Oct: 'October', Nov: 'November', Dec: 'December',
};

function formatShipmentDate(shipment) {
  const [day, month] = shipment.date.split(' ');
  return `${day} ${monthNames[month]} 2026    ${shipment.time}`;
}

function renderAtc(shipmentIndex) {
  const atcStates = [
    ['Overdue', 'red'],
    ['Soon Due', 'yellow'],
    ['Pending', 'neutral'],
    ['Not Applicable', 'neutral'],
    ['Display value', null],
  ];
  const [label, palette] = atcStates[shipmentIndex % atcStates.length];
  return palette ? makeTagCluster([label], palette) : <span className="plain-text">{label}</span>;
}

const tagPalette = {
  red: 'error',
  yellow: 'warning',
  green: 'success',
  neutral: 'neutral-weak',
};

const makeTagCluster = (items, palette = 'neutral', disabled = false) => (
  <div className="tag-cluster">
    {items.map((item, index) => (
      <McTag
        key={`${item}-${index}`}
        className={item === 'Not Applicable' ? 'not-applicable-tag' : ''}
        fit="small"
        label={item}
        appearance={tagPalette[palette] || 'neutral-weak'}
        disabled={disabled}
      />
    ))}
  </div>
);

function RiskBadge({ label }) {
  const appearance = label === 'Risky' ? 'error' : label === 'Alert' ? 'warning' : 'success';
  return <McTag fit="small" label={label} appearance={appearance} />;
}

function StatusBadge({ label, disabled = false }) {
  return <McTag className={label === 'Not Applicable' ? 'not-applicable-tag' : ''} fit="small" label={label} appearance={statusAppearance[label] || 'neutral-weak'} disabled={disabled} />;
}

function ShipmentDrawer({ shipment, onClose }) {
  if (!shipment) return null;

  const details = [
    ['Label', 'MH724932715'],
    ['Controlling customer', 'ROBBOSLG - Robert Bosch'],
    ['Origin Destination', 'ORD - SIN'],
    ['HBL delivery mode', 'Value'],
    ['Service level', 'Value'],
    ['Export owner', 'Value'],
    ['Import owner', 'Value'],
    ['Created on', 'Value'],
  ];

  const milestoneRows = [
    ['On Time', '08 Dec 2023 16:20', '08 Dec 2023 16:20', 'On Time'],
    ['Soon Due', '03 Apr 2026 11:15', '03 Apr 2026 11:15', 'Soon Due'],
    ['Overdue', '18 Sep 2024 08:00', '18 Sep 2024 08:00', 'Overdue'],
    ['Not Applicable', '29 Nov 2025 13:30', '29 Nov 2025 13:30', 'Not Applicable'],
    ['Pending', '14 Feb 2027 10:45', '14 Feb 2027 10:45', 'Pending'],
  ];

  return (
    <>
      <button className="drawer-backdrop" type="button" aria-label="Close shipment details" onClick={onClose} />
      <aside className="drawer shipment-drawer">
      <button className="close-button" type="button" aria-label="Close shipment details" onClick={onClose}>
        <img src={closeIcon} alt="Close" />
      </button>
      <div className="drawer-header">
        <h2>{shipment.id}</h2>
        <RiskBadge label={shipment.status === 'Overdue' ? 'Risky' : 'Normal'} />
      </div>

      <h3>Shipment details</h3>
      <div className="shipment-details-grid">
        {details.map(([label, value]) => (
          <div key={label} className="detail-item">
            <span>{label}</span>
            <strong>{value}</strong>
          </div>
        ))}
      </div>

      <section className="milestone-block">
        <h3>Export Milestones</h3>
        <div className="milestone-table-wrap">
          <table>
          <thead>
            <tr>
              <th>Code</th>
              <th>Milestone</th>
              <th>Actual Date</th>
              <th>Due Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {milestoneRows.map(([code, actual, due, status]) => (
              <tr key={`${code}-${status}-export`}>
                <td>{code}</td>
                <td>{code}</td>
                <td>{actual}</td>
                <td>{due}</td>
                <td><StatusBadge label={status} disabled={status === 'Not Applicable'} /></td>
              </tr>
            ))}
          </tbody>
          </table>
        </div>
      </section>

      <section className="milestone-block milestone-block-import">
        <h3>Import Milestones</h3>
        <div className="milestone-table-wrap">
          <table>
          <thead>
            <tr>
              <th>Code</th>
              <th>Milestone</th>
              <th>Actual Date</th>
              <th>Due Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {milestoneRows.map(([code, actual, due, status]) => (
              <tr key={`${code}-${status}-import`}>
                <td>{code}</td>
                <td>{code}</td>
                <td>{actual}</td>
                <td>{due}</td>
                <td><StatusBadge label={status} disabled={status === 'Not Applicable'} /></td>
              </tr>
            ))}
          </tbody>
          </table>
        </div>
      </section>
      </aside>
    </>
  );
}

function ColumnDrawer({ onClose }) {
  const groups = [
    ['Category 1', ['Column name', 'Column name', 'Column name', 'Column name']],
    ['Category 1', ['Column name', 'Column name', 'Column name', 'Column name']],
  ];

  return (
    <>
      <button className="drawer-backdrop" type="button" aria-label="Close column view" onClick={onClose} />
      <aside className="drawer column-drawer">
      <button className="close-button" type="button" aria-label="Close column view" onClick={onClose}>
        <img src={closeIcon} alt="Close" />
      </button>
      <div className="drawer-title-row">
        <h2>Setup Column View</h2>
      </div>
      <div className="drawer-body">
        {groups.map(([label, names], index) => (
          <div className="column-group" key={`${label}-${index}`}>
            <div className="column-heading">
              <McCheckbox fit="small" checked={false} indeterminate label={label} />
            </div>
            {names.map((name, itemIndex) => (
              <div className="column-row" key={`${name}-${itemIndex}`}>
                <McCheckbox fit="small" checked={itemIndex < 3} label={name} />
              </div>
            ))}
          </div>
        ))}
      </div>
      <McButton fit="small" appearance="neutral" variant="outlined" className="reset-button">Reset to Default</McButton>
      </aside>
    </>
  );
}

export default function App() {
  const [query, setQuery] = useState('');
  const [selected, setSelected] = useState(null);
  const [filterOpen, setFilterOpen] = useState(false);
  const [columnsOpen, setColumnsOpen] = useState(false);
  const [threshold, setThreshold] = useState('24');
  const [unit, setUnit] = useState('Hour(s)');

  const items = useMemo(
    () => shipments.filter((shipment) => shipment.id.toLowerCase().includes(query.toLowerCase())),
    [query],
  );

  return (
    <>
      <header className="topbar">
        <button className="menu-button" type="button" aria-label="Open menu">
          <img src={menuIcon} alt="Menu" />
        </button>
        <div className="brand-mark">
          <img src={maerskLogo} alt="Maersk" />
        </div>
        <span className="brand-text">Air One Platform</span>
        <div className="topbar-actions">
          <img src={magnifyingGlassIcon} alt="Search" />
          <img src={bellIcon} alt="Notifications" />
          <img src={questionCircleIcon} alt="Help" />
          <img src={userCircleIcon} alt="User" />
          <span className="cx-badge">CX</span>
        </div>
      </header>

      <div className="page-shell">
        <div className="main-panel">
          <div className="header-row">
            <div className="title-stack">
              <h1>Control Tower</h1>
              <div className="meta-row">
                <div className="meta-column">
                  <span>Control Tower Rule</span>
                  <div className="meta-inline">
                    <span className="rule-tag">CSOP-V9.0, IOP-V9.0</span>
                    <button type="button" className="inline-link edit-button">Edit</button>
                  </div>
                </div>
              </div>
            </div>

            <McButton fit="small" appearance="neutral" variant="outlined">
              <img src={expandIcon} alt="" />
              Configuration Center
            </McButton>
          </div>

          <nav className="tabs" aria-label="Sections">
            <button type="button" className="active">Air Exceptions</button>
            <button type="button">Air Timeliness</button>
            <button type="button">Sea Exceptions</button>
            <button type="button">Document Exceptions</button>
            <button type="button">Reference Exceptions</button>
          </nav>

          <main className="content-area">
            <div className="section-head">
              <h2>Air Exceptions</h2>
              <p>Shipments with missing or corrected system updates — milestone exceptions, Air freight forwarding</p>
            </div>

            <div className="control-strip">
              <div className="threshold-box">
                <span>Set “Soon Due” Threshold Within</span>
                <span className="info-tooltip">
                  <button type="button" className="info-button" aria-label="Threshold help">
                  <img src={infoIcon} alt="Info" />
                  </button>
                  <span className="tooltip-content">Applies to all metrics below.</span>
                </span>
                <div className="number-box">
                  <input
                    type="text"
                    inputMode="numeric"
                    pattern="[0-9]*"
                    value={threshold}
                    onChange={(event) => setThreshold(event.target.value.replace(/[^0-9]/g, ''))}
                  />
                  <img src={trailingIcon} alt="" className="number-trailing-icon" />
                </div>
                <div className="unit-select-wrap">
                  <select value={unit} onChange={(event) => setUnit(event.target.value)}>
                    <option>Hour(s)</option>
                    <option>Day(s)</option>
                  </select>
                  <img src={trailingDownIcon} alt="" />
                </div>
                <McButton fit="small" appearance="primary" variant="filled">Apply</McButton>
                <span className="apply-filter-divider" aria-hidden="true" />
                <McButton fit="small" appearance="neutral" variant="outlined" click={() => setFilterOpen((open) => !open)}>
                  <img src={filterOpen ? shrinkIcon : expandIcon} alt="" />
                  Filter (0)
                </McButton>
              </div>

              <div className="action-buttons">
                <McButton fit="small" appearance="neutral" variant="outlined">Refresh</McButton>
              </div>
            </div>

            {filterOpen && (
              <section className="filter-panel">
                <div className="filter-panel-top">
                  <strong>Filter</strong>
                </div>

                <div className="filter-block">
                  <h4>Shipment Identifiers</h4>
                  <div className="filter-grid single-row">
                    <McInput fit="small" label="Shipment ID (comma separated)" placeholder="Placeholder" />
                    <McInput fit="small" label="House bill number (comma separated)" placeholder="Placeholder" />
                  </div>
                </div>

                <div className="filter-block">
                  <h4>Parties &amp; Routing</h4>
                  <div className="filter-grid four-col">
                    <McInput fit="small" label="HBL Delivery Mode" placeholder="Placeholder" />
                    <McInput fit="small" label="Controlling Customer Code" placeholder="Placeholder" />
                    <McInput fit="small" label="Origin Country" placeholder="Placeholder" />
                    <McInput fit="small" label="Destination Country" placeholder="Placeholder" />
                    <McInput fit="small" label="Exception Owner Company" placeholder="Placeholder" />
                    <McInput fit="small" label="Exception Owner Branch" placeholder="Placeholder" />
                  </div>
                </div>

                <div className="filter-block">
                  <h4>Dates</h4>
                  <div className="date-grid">
                    {[
                      'Created Date',
                      'ETD - First Leg',
                      'ETA - First Leg',
                      'ATD - First Leg',
                      'ATA - First Leg',
                      'Estimated Pickup',
                      'Actual Pickup',
                      'Estimated Delivery',
                      'Actual Delivery',
                    ].map((label) => (
                      <div className="date-box" key={label}>
                        <label>{label}</label>
                        <div className="date-range">
                          <input aria-label={`${label} from`} placeholder="YYYY-MM-DD" />
                          <span>—</span>
                          <input aria-label={`${label} to`} placeholder="YYYY-MM-DD" />
                        </div>
                        <McCheckbox fit="small" label="Include Shipment with Missing Value" />
                      </div>
                    ))}
                  </div>
                </div>

                <div className="filter-actions">
                  <McButton fit="small" appearance="neutral" variant="outlined">Clear Filters</McButton>
                  <McButton fit="small" appearance="primary" variant="filled">Apply Filters</McButton>
                </div>
              </section>
            )}

            <section className="metrics" aria-label="Summary metrics">
              {metricCards.map(([name, value, caption, status]) => (
                <article className="metric-card" key={name}>
                  <div className="metric-title">
                    <span>{name}</span>
                    {status && <i className={`metric-dot ${status}`} aria-hidden="true" />}
                  </div>
                  <div className="metric-value">
                    {value}
                    <small>Shipments</small>
                  </div>
                  <small className="metric-caption">
                    {caption.length > 1 && <strong>{caption[0]}</strong>}
                    {caption.length > 1 ? ` ${caption[1]}` : caption[0]}
                  </small>
                </article>
              ))}
            </section>

            <section className="queue-area">
              <div className="queue-title-row">
                <h3>Exception Queue <span>9</span></h3>
              </div>

              <div className="queue-toolbar">
                <div className="search-box">
                  <div className="search-input-wrap">
                    <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search Shipment ID / House Bill" />
                    <img src={magnifyingGlassIcon} alt="Search" />
                  </div>
                </div>

                <div className="toolbar-actions">
                  <McButton fit="small" appearance="neutral" variant="outlined" click={() => setColumnsOpen(true)}>
                    Column View
                  </McButton>
                  <McButton fit="small" appearance="primary" variant="filled">Export Excel</McButton>
                </div>
              </div>

              <div className="table-wrap">
                <table>
                  <thead>
                    <tr>
                      {tableHeaders.map((header) => (
                        <th key={header.label}>
                          <span>{header.label}</span>
                          <span className="header-icons">
                            {header.filter && <img src={funnelIcon} alt="Filter" className="filter-icon" />}
                            {header.sort && <img src={arrowsDownUpIcon} alt="Sort" className="sort-icon" />}
                          </span>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {items.map((shipment, index) => (
                      <tr key={shipment.id} onClick={() => setSelected(shipment)}>
                        <td className="id-cell">
                          <a href="#shipment" onClick={(event) => event.stopPropagation()}>{shipment.id}</a>
                        </td>
                        <td className="shipment-risk-cell">
                          <RiskBadge label={shipment.status === 'Overdue' ? 'Risky' : shipment.status === 'Soon Due' ? 'Risky' : 'Normal'} />
                        </td>
                        <td>{index + 1}</td>
                        <td>{makeTagCluster(['ABC', 'ABC', 'ABC'], 'red')}</td>
                        <td>{makeTagCluster(['ABC', 'ABC', 'ABC'], 'yellow')}</td>
                        <td>{makeTagCluster(['ABC', 'ABC', 'ABC'], 'red')}</td>
                        <td>{makeTagCluster(['ABC', 'ABC', 'ABC'], 'yellow')}</td>
                        <td>{formatShipmentDate(shipment)}</td>
                        <td>{renderAtc(index)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="pagination-row">
                <div className="pagination-left">
                  <div className="items-per-page">
                    <span>Items per page:</span>
                    <select defaultValue="10">
                      <option value="10">10</option>
                      <option value="20">20</option>
                    </select>
                  </div>
                  <div className="pagination-info">1–10 of 500 items</div>
                </div>
                <div className="page-nav">
                  <button type="button" aria-label="Previous page"><img src={previousIcon} alt="Previous" /></button>
                  <button type="button">1</button>
                  <button type="button">2</button>
                  <button type="button">3</button>
                  <button type="button">4</button>
                  <button type="button" aria-label="Next page"><img src={nextIcon} alt="Next" /></button>
                </div>
              </div>
            </section>
          </main>
        </div>

        <ShipmentDrawer shipment={selected} onClose={() => setSelected(null)} />
      </div>

      {columnsOpen && <ColumnDrawer onClose={() => setColumnsOpen(false)} />}
    </>
  );
}
