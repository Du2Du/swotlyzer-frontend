import React from "react";
import { LayoutCredentials } from "../../Components";
import { WithAuth } from "../../GlobalHOC";

/**
 *This component is used to login users in the system.
 * @author Du2Du
 */
const LoginUser: React.FC = WithAuth(() => {
  return <LayoutCredentials isRegister={false} />;
});

export default LoginUser;
