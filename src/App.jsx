import { useMemo, useState } from 'react';

const rows = [
  {
    id: 'S25ADUS074300',
    risk: 'Risky',
    total: 8,
    exportOverdue: 'ABC',
    exportSoon: 'ABC',
    importOverdue: 'ABC',
    importSoon: 'ABC',
    date: '15 Mar 2024 09:30',
    atc: 'Overdue',
    status: 'Overdue',
  },
  {
    id: 'S25ADUS074301',
    risk: 'Risky',
    total: 6,
    exportOverdue: 'ABC',
    exportSoon: 'ABC',
    importOverdue: 'ABC',
    importSoon: 'ABC',
    date: '22 Jun 2025 14:45',
    atc: 'Overdue',
    status: 'Overdue',
  },
  {
    id: 'S25ADUS074302',
    risk: 'Alert',
    total: 2,
    exportOverdue: 'ABC',
    exportSoon: 'ABC',
    importOverdue: 'ABC',
    importSoon: 'ABC',
    date: '08 Dec 2023 16:20',
    atc: 'Soon Due',
    status: 'Soon Due',
  },
  {
    id: 'S25ADUS074303',
    risk: 'Normal',
    total: 3,
    exportOverdue: 'ABC',
    exportSoon: 'ABC',
    importOverdue: 'ABC',
    importSoon: 'ABC',
    date: '03 Apr 2026 11:15',
    atc: 'Overdue',
    status: 'Overdue',
  },
  {
    id: 'S25ADUS074304',
    risk: 'Normal',
    total: 5,
    exportOverdue: 'ABC',
    exportSoon: 'ABC',
    importOverdue: 'ABC',
    importSoon: 'ABC',
    date: '18 Sep 2024 08:00',
    atc: 'Soon Due',
    status: 'Soon Due',
  },
  {
    id: 'S25ADUS074305',
    risk: 'Risky',
    total: 1,
    exportOverdue: 'ABC',
    exportSoon: 'ABC',
    importOverdue: 'ABC',
    importSoon: 'ABC',
    date: '29 Nov 2025 13:30',
    atc: 'Display value',
    status: 'Pending',
  },
  {
    id: 'S25ADUS074306',
    risk: 'Normal',
    total: 4,
    exportOverdue: 'ABC',
    exportSoon: 'ABC',
    importOverdue: 'ABC',
    importSoon: 'ABC',
    date: '14 Feb 2027 10:45',
    atc: 'Display value',
    status: 'Pending',
  },
  {
    id: 'S25ADUS074307',
    risk: 'Alert',
    total: 2,
    exportOverdue: 'ABC',
    exportSoon: 'ABC',
    importOverdue: 'ABC',
    importSoon: 'ABC',
    date: '07 Aug 2024 19:15',
    atc: 'Not Applicable',
    status: 'Pending',
  },
  {
    id: 'S25ADUS074308',
    risk: 'Alert',
    total: 3,
    exportOverdue: 'ABC',
    exportSoon: 'ABC',
    importOverdue: 'ABC',
    importSoon: 'ABC',
    date: '25 Jan 2026 07:30',
    atc: 'Not Applicable',
    status: 'Pending',
  },
  {
    id: 'S25ADUS074309',
    risk: 'Normal',
    total: 6,
    exportOverdue: 'ABC',
    exportSoon: 'ABC',
    importOverdue: 'ABC',
    importSoon: 'ABC',
    date: '12 May 2025 15:00',
    atc: 'Pending',
    status: 'Pending',
  },
];

const summaryMetrics = [
  { title: 'Total Shipments', value: '180', caption: '180 Total active Air shipments', accent: '', tint: 'neutral' },
  { title: 'Shipments with Exceptions', value: '180', caption: '330 Total open exceptions', accent: 'mixed', tint: 'neutral' },
  { title: 'Shipments with Soon Due Exceptions', value: '180', caption: '330 Total soon due exceptions', accent: 'warning', tint: 'neutral' },
  { title: 'Shipments with Overdue Exceptions', value: '180', caption: '330 Total overdue exceptions', accent: 'error', tint: 'neutral' },
];

const riskTone = {
  Risky: 'error',
  Alert: 'warning',
  Normal: 'success',
};

function StatusTag({ label }) {
  const appearance = label === 'Overdue' ? 'error' : label === 'Soon Due' ? 'warning' : label === 'Pending' ? 'neutral-weak' : 'success';

  return <mc-tag class="status-tag" fit="small" appearance={appearance} label={label} />;
}

function MetricCard({ title, value, caption, accent }) {
  return (
    <article className="metric-card">
      <div className="metric-label-row">
        <span>{title}</span>
        {accent ? <span className={`metric-dot ${accent}`} aria-hidden="true" /> : null}
      </div>
      <div className="metric-value-row">
        <strong>{value}</strong>
      </div>
      <small>{caption}</small>
    </article>
  );
}

export default function App() {
  const [search, setSearch] = useState('');
  const [filterOpen, setFilterOpen] = useState(false);
  const [columnOpen, setColumnOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selectedShipment, setSelectedShipment] = useState(rows[0]);

  const filteredRows = useMemo(() => {
    const query = search.trim().toLowerCase();
    if (!query) return rows;
    return rows.filter((row) => row.id.toLowerCase().includes(query));
  }, [search]);

  const openShipment = (shipment) => {
    setSelectedShipment(shipment);
    setDrawerOpen(true);
  };

  return (
    <>
      <div className="page-shell">
        <header className="topbar">
          <div className="brand-group">
            <span className="brand-mark" aria-hidden="true">✦</span>
            <span>Air One Platform</span>
          </div>
          <div className="header-tools" aria-label="Header actions">
            <button aria-label="Search">⌕</button>
            <button aria-label="Notifications">◌</button>
            <button aria-label="Help">?</button>
            <button aria-label="User menu">Cx</button>
          </div>
        </header>

        <div className="page-header">
          <div className="page-title-lockup">
            <h1>Control Tower</h1>
            <div className="rule-line">
              <span>Control Tower Rule</span>
              <strong>CSOP-V9.0, IOP-V9.0</strong>
              <button className="inline-link">Edit</button>
            </div>
          </div>
          <button className="config-link">Configuration Center</button>
        </div>

        <nav className="tab-bar" aria-label="Exception categories">
          {['Air Exceptions', 'Air Timelines', 'Sea Exceptions', 'Document Exceptions', 'Reference Exceptions'].map((tab, index) => (
            <button key={tab} className={index === 0 ? 'active' : ''} type="button">
              {tab}
            </button>
          ))}
        </nav>

        <section className="threshold-bar">
          <div className="threshold-inline">
            <span>Set "Soon Due" Threshold within</span>
            <mc-select value="24" fit="small" class="threshold-select">
              <mc-option value="24">24</mc-option>
              <mc-option value="48">48</mc-option>
              <mc-option value="72">72</mc-option>
            </mc-select>
            <mc-select value="Hour(s)" fit="small" class="threshold-units">
              <mc-option value="Hour(s)">Hour(s)</mc-option>
              <mc-option value="Day(s)">Day(s)</mc-option>
            </mc-select>
            <mc-button fit="small" appearance="primary" variant="filled" class="inline-button primary">Apply</mc-button>
            <mc-button fit="small" appearance="neutral" variant="outlined" class="inline-button">Refresh</mc-button>
          </div>
          <button type="button" className="filter-trigger" onClick={() => setFilterOpen(true)}>
            Filter (0)
          </button>
        </section>

        <section className="metrics-grid" aria-label="Summary metrics">
          {summaryMetrics.map((item) => (
            <MetricCard key={item.title} {...item} />
          ))}
        </section>

        <section className="queue-panel">
          <div className="queue-header">
            <h2>Shipment Exception Queue</h2>
            <div className="header-actions">
              <div className="search-wrap">
                <mc-input
                  fit="small"
                  class="compact-search"
                  label="Search shipment"
                  placeholder="Search by shipment ID / House Bill"
                  value={search}
                  onInput={(event) => setSearch(event.target.value)}
                />
              </div>
              <mc-button fit="small" appearance="neutral" variant="outlined" onClick={() => setColumnOpen(true)}>
                Column View
              </mc-button>
              <mc-button fit="small" appearance="neutral" variant="outlined">
                Export Excel
              </mc-button>
            </div>
          </div>

          <div className="table-shell">
            <table>
              <thead>
                <tr>
                  <th>Shipment ID</th>
                  <th>Risk</th>
                  <th>Total Exceptions</th>
                  <th>Export Milestone Overdue</th>
                  <th>Export Milestone Soon Due</th>
                  <th>Import Milestone Overdue</th>
                  <th>Import Milestone Soon Due</th>
                  <th>Date</th>
                  <th>ATC</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {filteredRows.map((row) => (
                  <tr key={row.id} onClick={() => openShipment(row)}>
                    <td className="shipment-id">{row.id}</td>
                    <td>
                      <mc-tag fit="small" appearance={riskTone[row.risk] || 'neutral-weak'} label={row.risk} />
                    </td>
                    <td>{row.total}</td>
                    <td>
                      <span className="milestone-chip milestone-overdue">ABC</span>
                    </td>
                    <td>
                      <span className="milestone-chip milestone-soon">ABC</span>
                    </td>
                    <td>
                      <span className="milestone-chip milestone-overdue">ABC</span>
                    </td>
                    <td>
                      <span className="milestone-chip milestone-soon">ABC</span>
                    </td>
                    <td>{row.date}</td>
                    <td className="atc-cell">{row.atc}</td>
                    <td>
                      <StatusTag label={row.status} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="pagination-row">
            <div className="rows-picker">
              <span>Items per page</span>
              <select defaultValue="10">
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="50">50</option>
              </select>
            </div>
            <div className="pager">
              <button type="button" aria-label="Previous page">‹</button>
              <span className="pager-page active">1</span>
              <span className="pager-page">2</span>
              <span className="pager-page">3</span>
              <span className="pager-page">4</span>
              <button type="button" aria-label="Next page">›</button>
            </div>
          </div>
        </section>
      </div>

      <mc-modal open={filterOpen} fit="small" dimension="small" heading="Setup Table Filter" onClose={() => setFilterOpen(false)}>
        <div className="modal-content">
          <h3>Shipment Identifiers &amp; Parties</h3>
          <div className="field-stack">
            {['Shipment ID', 'House bill number', 'HBL delivery mode', 'Customer code', 'Origin country', 'Destination country', 'Created Date', 'ETD – First Leg'].map((label) => (
              <mc-input key={label} fit="small" label={label} placeholder="Placeholder" />
            ))}
          </div>
        </div>
        <mc-button slot="primaryAction" fit="small" appearance="primary" variant="filled" onClick={() => setFilterOpen(false)}>
          Apply Filter
        </mc-button>
        <mc-button slot="secondaryAction" fit="small" appearance="neutral" variant="outlined" onClick={() => setFilterOpen(false)}>
          Reset to Default
        </mc-button>
      </mc-modal>

      <mc-modal open={columnOpen} fit="small" dimension="small" heading="Setup Column View" onClose={() => setColumnOpen(false)}>
        <div className="modal-content compact">
          <h3>Category 1</h3>
          <div className="field-stack checkbox-list">
            {['Shipment ID', 'Total Exceptions', 'Export Milestone Overdue', 'Export Milestone Soon Due', 'Import Milestone Overdue', 'Import Milestone Soon Due', 'Origin', 'Service Level'].map((label) => (
              <mc-checkbox key={label} fit="small" label={label} checked />
            ))}
          </div>
        </div>
        <mc-button slot="primaryAction" fit="small" appearance="primary" variant="filled" onClick={() => setColumnOpen(false)}>
          Apply Column View
        </mc-button>
        <mc-button slot="secondaryAction" fit="small" appearance="neutral" variant="outlined" onClick={() => setColumnOpen(false)}>
          Reset to Default
        </mc-button>
      </mc-modal>

      <mc-drawer open={drawerOpen} position="right" dimension="medium" fit="small" onClose={() => setDrawerOpen(false)}>
        <span slot="heading">{selectedShipment.id} — Shipment details</span>
        <div className="drawer-body">
          <div className="drawer-grid">
            <div className="detail-pair">
              <span>Label</span>
              <strong>MH724932715</strong>
            </div>
            <div className="detail-pair">
              <span>Customer</span>
              <strong>ROBOSOLG – Robert Bosch</strong>
            </div>
            <div className="detail-pair">
              <span>Origin Destination</span>
              <strong>ORD – SIN</strong>
            </div>
            <div className="detail-pair">
              <span>Service level</span>
              <strong>Value</strong>
            </div>
            <div className="detail-pair">
              <span>Export owner</span>
              <strong>Value</strong>
            </div>
            <div className="detail-pair">
              <span>Created on</span>
              <strong>Value</strong>
            </div>
          </div>

          <section className="drawer-section">
            <h3>Export Milestones</h3>
            <table className="mini-table">
              <thead>
                <tr>
                  <th>Code</th>
                  <th>Milestone</th>
                  <th>Date</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {['On Time', 'Soon Due', 'Overdue', 'Pending'].map((status) => (
                  <tr key={status}>
                    <td>Text</td>
                    <td>Text</td>
                    <td>15 Mar 09:30</td>
                    <td><StatusTag label={status} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>

          <section className="drawer-section">
            <h3>Import Milestones</h3>
            <table className="mini-table">
              <thead>
                <tr>
                  <th>Code</th>
                  <th>Milestone</th>
                  <th>Date</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {['On Time', 'Soon Due', 'Overdue', 'Pending'].map((status) => (
                  <tr key={`${status}-import`}>
                    <td>Text</td>
                    <td>Text</td>
                    <td>15 Mar 09:30</td>
                    <td><StatusTag label={status} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        </div>

        <mc-button slot="footer" fit="small" appearance="neutral" variant="outlined" onClick={() => setDrawerOpen(false)}>
          Close
        </mc-button>
      </mc-drawer>
    </>
  );
}
