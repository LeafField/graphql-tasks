import { jwtDecode } from "jwt-decode";
import Header from "./Header";
import TaskTable from "./TaskTable";
import { Payload } from "../types/payload";
import { useQuery } from "@apollo/client";
import Loading from "./Loading";
import { Stack, Typography } from "@mui/material";
import { graphql } from "../gql";

const GET_TASKS = graphql(`
  query getTasks($userId: Int!) {
    getTasks(userId: $userId) {
      ...getTasksTaskTable
    }
  }
`);

const Main = () => {
  const token = localStorage.getItem("token");
  const decodetToken = jwtDecode<Payload>(token!);
  const userId = decodetToken.sub;

  const { loading, data, error } = useQuery(GET_TASKS, {
    variables: { userId },
  });
  return (
    <>
      <Header />
      <Stack spacing={4} direction={"column"} m={8} alignItems={"center"}>
        {loading && <Loading />}
        {error && <Typography color="red">エラーが発生しました。</Typography>}
        {!loading && !error && data?.getTasks && (
          <TaskTable tasks={data.getTasks} />
        )}
      </Stack>
    </>
  );
};

export default Main;
