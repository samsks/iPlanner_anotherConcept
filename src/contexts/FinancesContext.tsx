import { createContext, ReactNode, useEffect, useState } from "react";
import apiPlanner from "../services/apiPlanner";

interface iFinancesContext {
  allFinanceItens: tFinanceArray;
  setAllFinanceItens: React.Dispatch<React.SetStateAction<tFinanceArray>>;
  fiteredFinanceItens: iFinanceItem;
  setfilteredFinanceItens: React.Dispatch<any>;
  setYear: React.Dispatch<React.SetStateAction<string>>;
  setMonth: React.Dispatch<React.SetStateAction<string>>;
  year: string;
  month: string;
  reloadControler: boolean;
  setReloadControler: React.Dispatch<React.SetStateAction<boolean>>;
  valueType: tSelectorsType;
  setValueType: React.Dispatch<React.SetStateAction<tSelectorsType>>;
  filteredFinanceItens: iFinanceItem[];
}

interface FinancesContextProps {
  children: ReactNode;
}

export interface iFinanceItem {
  userId: number;
  FitemTitle: string;
  fitemType: "despesa" | "recebimemto";
  fitemValue: number;
  transactionDate: string;
  isAccomplished: boolean;
  id: number;
}

export type tFinanceArray = iFinanceItem[];

export type tSelectorsType = "todos" | "despesa" | "recebimento";

export const FinancesContext = createContext({} as iFinancesContext);

export const FinancesProvider = ({ children }: FinancesContextProps) => {
  const time = new Date();
  const [year, setYear] = useState(time.getFullYear().toString());
  const [month, setMonth] = useState((time.getMonth() + 1).toString());
  const [reloadControler, setReloadControler] = useState(true);
  const [valueType, setValueType] = useState<tSelectorsType>("todos");
  const [allFinanceItens, setAllFinanceItens] = useState<tFinanceArray>([]);
  const [fiteredFinanceItens, setfilteredFinanceItens] = useState<any>(allFinanceItens);

  useEffect(() => {
    const requestFinanceItens = async () => {
      try {
        const { data }: any = await apiPlanner.get(`users/${localStorage.getItem("@PROJECTIPLANNER:USERID")}?_embed=finance`);
        setAllFinanceItens(data.finance);
      } catch (error) {}
    };
    requestFinanceItens();
  }, [reloadControler]);

  const filteredFinanceItens: iFinanceItem[] = allFinanceItens?.filter((finance) => {
    return (
      (year !== "todos" ? finance.transactionDate?.split("/")[2] === year : true) &&
      (month !== "todos" ? finance.transactionDate?.split("/")[1] === month : true) &&
      (valueType !== "todos" ? finance.fitemType === valueType : true)
    );
  });

  return (
    <FinancesContext.Provider
      value={{
        allFinanceItens,
        setAllFinanceItens,
        fiteredFinanceItens,
        setfilteredFinanceItens,
        setMonth,
        setYear,
        month,
        year,
        reloadControler,
        setReloadControler,
        valueType,
        setValueType,
        filteredFinanceItens,
      }}
    >
      {children}
    </FinancesContext.Provider>
  );
};
