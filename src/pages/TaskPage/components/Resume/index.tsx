import { useContext } from "react";
import { StyledResume } from "./style";
import { Text } from "../../../../styles/typography";
import { iListData, TasksContext } from "../../../../contexts/TasksContext";
import { AiOutlineFileAdd } from "react-icons/ai";
import InputComponent from "../../../../components/InputComponent";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { newListSchema } from "../../../../validation";

const Resume = () => {
  const { tasks, setFiltered, setIsFiltered, lists, setLists, actualFilter, setActualFilter } = useContext(TasksContext);

  const {
    register,
    resetField,
    handleSubmit,
    formState: { errors },
  } = useForm<iListData>({
    resolver: yupResolver(newListSchema),
  });

  const handleSubmitFunction = (data: iListData) => {
    lists.length > 0 ? setLists([...lists, data.list]) : setLists([data.list]);
  };
  return (
    <StyledResume>
      <ul className="default-list">
        <li
          onClick={(e) => {
            setIsFiltered(true);
            setActualFilter("Concluídas");
            setFiltered(tasks.filter((task) => task.isFinished === true));
          }}
        >
          <Text tag="p">Concluídas</Text>
          <Text tag="p">{tasks.filter((task) => task.isFinished === true).length}</Text>
        </li>
        <li
          onClick={(e) => {
            setIsFiltered(true);
            setActualFilter("Favoritas");
            setFiltered(tasks.filter((task) => task.favorite === true));
          }}
        >
          <Text tag="p">Favoritas</Text>
          <Text tag="p">{tasks.filter((task) => task.favorite === true).length}</Text>
        </li>
        <li
          onClick={(e) => {
            setFiltered([]);
            setIsFiltered(false);
            setActualFilter("");
          }}
        >
          <Text tag="p">Todas</Text>
          <Text tag="p">{tasks.length}</Text>
        </li>
      </ul>
      <ul className="user-list">
        {lists &&
          lists.map((list) => {
            return (
              <li
                key={list}
                onClick={(e) => {
                  setIsFiltered(true);
                  setActualFilter(list);
                  setFiltered(tasks.filter((task) => task.list === list));
                }}
                className={list === actualFilter ? "listaDestaque" : ""}
              >
                <Text tag="p">{list}</Text>
              </li>
            );
          })}
      </ul>
      <div className="new-list">
        <div>
          <AiOutlineFileAdd />
        </div>
        <form onSubmit={handleSubmit(handleSubmitFunction)}>
          <InputComponent label="" type="text" placeholder="Nova lista" register={() => register("list")} helperText={errors.list?.message} />
        </form>
      </div>
    </StyledResume>
  );
};

export default Resume;
