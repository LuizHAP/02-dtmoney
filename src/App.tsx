import { GlobalStyle } from "./styles/global";
import { Header } from "./components/Header";
import { Dashboard } from "./components/Dashboard";

import { useState } from "react";

import Modal from 'react-modal'

Modal.setAppElement('#root')

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  function handleButtonNewTransactionModal() {
    setIsNewTransactionModalOpen(!isNewTransactionModalOpen);
  }

  return (
    <div className="app">
      <Header onOpenNewTransactionModal={handleButtonNewTransactionModal} />
      <Dashboard />
      <Modal 
        isOpen={isNewTransactionModalOpen} 
        onRequestClose={handleButtonNewTransactionModal}
      >
        <h2>Cadastrar Transação</h2>
      </Modal>
      <GlobalStyle />
    </div>
  );
}
