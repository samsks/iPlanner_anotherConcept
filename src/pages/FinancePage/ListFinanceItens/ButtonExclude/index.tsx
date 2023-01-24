import { ButtonExcludeButton } from "./style";
import { BiTrashAlt } from "react-icons/bi";
import apiPlanner from "../../../../services/apiPlanner";
import toast, { Toaster } from "react-hot-toast";

interface iButtonExclude {
  financeItemId: number;
  reloadControler: boolean;
  setReloadControler: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ButtonExclude = ({ financeItemId, reloadControler, setReloadControler }: iButtonExclude) => {
  return (
    <ButtonExcludeButton
      onClick={() => {
        try {
          apiPlanner.delete(`/finance/${financeItemId}`);
          reloadControler === true ? setReloadControler(false) : setReloadControler(true);
        } catch (error) {
          toast.error("relogue e tente novamente");
        }
      }}
    >
      <BiTrashAlt className="trashIcon" />
      <Toaster position="top-center" reverseOrder={false} />
    </ButtonExcludeButton>
  );
};
