import { useUserContext } from "../../GlobalContexts";
import React from "react";
import { WithAuth } from "../../GlobalHOC";

/**
 *
 * @author andr30z
 */
const Dashboard = WithAuth(() => {
  const { user } = useUserContext();
  console.log(user, "TESTE");
  return <>TEST</>;
});

export default Dashboard;
