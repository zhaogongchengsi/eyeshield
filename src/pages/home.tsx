import { Table } from "@radix-ui/themes";

export default function Home() {
  return (
    <div className="h-[var(--app-content-height)] p-3">
      <Table.Root variant="surface" style={{ height: `calc(var(--app-content-height) - 100px)` }}>
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell>Full name</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Email</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Group</Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {Array(30)
            .fill(0)
            .map((_, i) => {
              return (
                <Table.Row key={i}>
                  <Table.RowHeaderCell>John Doe {i}</Table.RowHeaderCell>
                  <Table.Cell>john@example.com</Table.Cell>
                  <Table.Cell>Developer</Table.Cell>
                </Table.Row>
              );
            })}
        </Table.Body>
      </Table.Root>
    </div>
  );
}