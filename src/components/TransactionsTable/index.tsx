import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Container } from "./style";

interface Transactions {
  id: number;
  title: string;
  type: string;
  category: string;
  value: number;
  createdAt: Date;
}

export function TransactionsTable() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    api.get("transactions").then(({ data }) => setTransactions(data.transactions));
  }, []);

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction: Transactions) => (
            <tr key={transaction.id}>
              <td>{transaction.title}</td>
              <td className={transaction.type}>{transaction.value}</td>
              <td>{transaction.category}</td>
              <td>{transaction.createdAt}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
}
