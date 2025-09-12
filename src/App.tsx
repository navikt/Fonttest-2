import { Table, Switch, Button } from "@navikt/ds-react";
import { useState } from "react";

export default function App() {
	const [dark, setDark] = useState(false);
	const bg = dark ? "#222" : "#fff";
	const color = dark ? "#fff" : "#222";
	return (
		<div style={{ minHeight: "100vh", background: bg, color }}>
			{/* Topplinje */}
			<nav style={{ width: '100%', padding: '24px 24px 0 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', boxSizing: 'border-box', marginBottom: 32 }}>
				<div>
					<a href="#" style={{ marginRight: 24, color: "inherit" }}>Lenke 1</a>
					<a href="#" style={{ marginRight: 24, color: "inherit" }}>Lenke 2</a>
					<a href="#" style={{ color: "inherit" }}>Lenke 3</a>
				</div>
				<Switch
					checked={dark}
					onChange={() => setDark((v) => !v)}
					size="small"
					style={{ marginLeft: 24 }}
					data-color={dark ? "dark" : "light"}
				>
					Tema
				</Switch>
			</nav>
			{/* Innhold under topplinje */}
			<div style={{ display: 'flex', minHeight: 'calc(100vh - 64px)' }}>
				{/* Venstrekolonne */}
						<aside style={{ width: 180, background: dark ? '#333' : '#f3f3f3', padding: 24, display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
							<Button
								variant="primary"
								size="small"
								style={{ color: dark ? '#222' : '#fff' }}
							>
								Venstre knapp
							</Button>
				</aside>
				{/* Hovedinnhold */}
				<div style={{ flex: 1, padding: 24 }}>
						<Table size="small">
						<Table.Header>
							<Table.Row>
								<Table.HeaderCell>Navn</Table.HeaderCell>
								<Table.HeaderCell>Verdi</Table.HeaderCell>
							</Table.Row>
						</Table.Header>
						<Table.Body>
							<Table.Row>
								<Table.DataCell>Rad 1</Table.DataCell>
								<Table.DataCell>Innhold 1</Table.DataCell>
							</Table.Row>
							<Table.Row>
								<Table.DataCell>Rad 2</Table.DataCell>
								<Table.DataCell>Innhold 2</Table.DataCell>
							</Table.Row>
						</Table.Body>
					</Table>
				</div>
			</div>
		</div>
	);
}
