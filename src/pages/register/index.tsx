import React from "react";
import { LayoutCredentials } from "../../Components";
import { WithAuth } from "../../GlobalHOC";

/**
 *This component is used to register users in the system.
 * @author Du2Du
 */
const RegisterUser: React.FC = WithAuth(() => {
  return <LayoutCredentials isRegister />;
});

export default RegisterUser;
