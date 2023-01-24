import apiPlanner from "../../../../services/apiPlanner";

export interface iButtonExclude {
  finance: number | string;
}

export const ButtonExclude = (finance: iButtonExclude) => {
  const deleteData = async () => {
    try {
      await apiPlanner.delete(`finance/${finance}`);
    } catch (error) {
      console.error(error);
    }
  };
  deleteData();
};
