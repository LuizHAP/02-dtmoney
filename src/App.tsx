import { GlobalStyle } from "./styles/global";
import { Header } from "./components/Header";
import { Dashboard } from "./components/Dashboard";

import { useState } from "react";

import Modal from 'react-modal'
import { NewTransactionModal } from "./components/NewTransactionModal";

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
      <NewTransactionModal isOpen={isNewTransactionModalOpen} onRequestClose={handleButtonNewTransactionModal} />
      <GlobalStyle />
    </div>
  );
}
