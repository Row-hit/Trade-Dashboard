import { Badge, Table } from "@chakra-ui/react";

const TransactionTable = () => {
  return (
    <Table.Root size="sm" color="gray.500">
      <Table.Header>
        <Table.Row>
          <Table.ColumnHeader>ID</Table.ColumnHeader>
          <Table.ColumnHeader>Date & Time</Table.ColumnHeader>
          <Table.ColumnHeader>Type</Table.ColumnHeader>
          <Table.ColumnHeader>Amount</Table.ColumnHeader>
          <Table.ColumnHeader textAlign="end">Status</Table.ColumnHeader>
        </Table.Row>
      </Table.Header>
      <Table.Body fontSize="13px">
        {tableData.map((data) => (
          <Table.Row key={data.id}>
            <Table.Cell>{data.id}</Table.Cell>
            <Table.Cell>
              {data.date}
              <br />
              {data.time}
            </Table.Cell>

            <Table.Cell>
              {data.type.name}
              <br />
              {data.type?.tag}
            </Table.Cell>
            <Table.Cell>{data.amount}</Table.Cell>
            <Table.Cell textAlign="end">
              <Badge bg={statusColor[data.status]}>{data.status}</Badge>
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table.Root>
  );
};

const statusColor = {
  processing: "#F5A50B",
  pending: "#797E82",
  complete: "#059669",
  cancelled: "#Dc2626",
};
const tableData = [
  {
    id: "HD82NA2H",
    date: "2024-06-09",
    time: "07.56",
    type: {
      name: "INR Deposite",
      tag: "E-transfer",
    },
    amount: "+ 81,123",
    status: "pending",
  },
  {
    id: "HD82NA2H",
    date: "2024-06-07",
    time: "04.13",
    type: {
      name: "INR Withdraw",
      tag: "wire-transfer",
    },
    amount: "- 51,123",
    status: "processing",
  },
  {
    id: "HD82NA2H",
    date: "2024-06-04",
    time: "05.36",
    type: {
      name: "Buy",
    },
    amount: "+ 12.48513391 BTC",
    status: "cancelled",
  },
  {
    id: "HD82NA2H",
    date: "2024-06-03",
    time: "02.23",
    type: {
      name: "Sell",
    },
    amount: "- 0.36401628 BTC",
    status: "complete",
  },
  {
    id: "HD82NA2H",
    date: "2024-06-02",
    time: "07.56",
    type: {
      name: "BTC Deposite",
      tag: "E-transfer",
    },
    amount: "+ 4.13946104 BTC",
    status: "complete",
  },
  {
    id: "HD82NA2H",
    date: "2024-06-01",
    time: "07.56",
    type: {
      name: "BTC Widthdraw",
      tag: "E-transfer",
    },
    amount: "- 10.00000000 BTC",
    status: "complete",
  },
];

export default TransactionTable;
