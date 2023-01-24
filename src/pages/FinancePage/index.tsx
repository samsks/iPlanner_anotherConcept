import { useContext, useState } from "react";
import { FinancesContext } from "../../contexts/FinancesContext";
import { ListFinanceItens } from "./ListFinanceItens";
import { Selectors } from "./Selectors";
import { CountsSection } from "./style";
import { ButtonAddFinance } from "./ButtonAddFinance";
import { ModalAddFinances } from "./ModalAddFinances";
import { Sumary } from "./Sumary";
import { TimeSelect } from "./TimeSelect";

export const Finances = () => {
  const [showModal, setShowModal] = useState(false);
  const { reloadControler, setReloadControler, filteredFinanceItens } = useContext(FinancesContext);

  return (
    <>
      {showModal && <ModalAddFinances showModal={showModal} setShowModal={setShowModal} />}
      <CountsSection>
        <div className="selectZone">
          <TimeSelect />
          <Sumary />
        </div>
        <div className="viewFinaceItensZone">
          <div className="viewFinaceItensZone__addSelectors">
            <ButtonAddFinance showModal={showModal} setShowModal={setShowModal} />
            <div className="selectors">
              <Selectors />
            </div>
          </div>
          <ListFinanceItens filteredFinanceItens={filteredFinanceItens} reloadControler={reloadControler} setReloadControler={setReloadControler} />
        </div>
      </CountsSection>
    </>
  );
};
