import { PhoneIcon } from "@chakra-ui/icons";
import {
  Box,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Spinner,
} from "@chakra-ui/react";
import Router from "next/router";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Button } from "../../../Components";
import { ApiUrls } from "../../../ApiRoutes";
import { Backend } from "../../../Services/Api";
import { useUserContext } from "../../../GlobalContexts";
import { showError } from "../../../Utils";
import { RoutesName } from "../../../RoutesName";

interface RegisterInputsProps {
  /**
   * This parameter stores the number that will be used in the paddingY of the items of this component.
   */
  marginYItems?: number | string;
  isRegister: boolean;
}

type Inputs = {
  name: string;
  email: string;
  password: string;
  phone: string;
};
/**
 * This component renders the inputs and button to register the user.
 *
 * @author Du2Du
 */
export const RegisterInputs = ({
  marginYItems,
  isRegister = true,
}: RegisterInputsProps) => {
  const spanStyle = {
    color: "#d22d2d",
  };

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<Inputs>();
  const { getUser } = useUserContext();

  const loginName = isRegister ? "Register" : "Login";
  const [show, setShow] = useState(false);
  const [isFetching, setIsFetching] = useState(false);
  const hidePassword = () => setShow(!show);

  const submitRegister = (dataInputs: Inputs) => {
    const apiRoute = isRegister ? ApiUrls.REGISTER_USER : ApiUrls.LOGIN_USER;
    setIsFetching(true);
    Backend.post(apiRoute, dataInputs)
      .then(() => {
        if (isRegister) {
          toast.success("Successful Registration");
          Router.push(RoutesName.LOGIN);
        } else {
          toast.success("Successful Login");
          getUser();
        }
      })
      .catch(showError)
      .finally(() => {
        setIsFetching(false);
      });
  };

  return (
    <Box display="flex" flexDir={"column"} bg="#fff">
      <form onSubmit={handleSubmit(submitRegister)}>
        {isRegister && (
          <Box py={marginYItems}>
            <FormLabel htmlFor="name">Name</FormLabel>
            <Input
              type="text"
              {...register("name", { required: true })}
              placeholder="Name"
              size="lg"
            />
            {errors.name && (
              <span style={spanStyle}>Name field is required!</span>
            )}
          </Box>
        )}
        <Box py={marginYItems}>
          <FormLabel htmlFor="email">E-mail</FormLabel>
          <Input
            {...register("email", { required: true })}
            type="email"
            placeholder="E-mail"
            size="lg"
          />
          {errors.email && (
            <span style={spanStyle}>E-mail field is required!</span>
          )}
        </Box>
        <Box py={marginYItems}>
          <FormLabel htmlFor="password">Password</FormLabel>
          <InputGroup size="md">
            <Input
              {...register("password", { required: true, minLength: 8 })}
              pr="4.5rem"
              type={show ? "text" : "password"}
              placeholder="Password"
              size="lg"
            />
            <InputRightElement
              h="full"
              mr="2"
              alignItems="center"
              width="4.5rem"
            >
              <Button
                h="1.75rem"
                width="full"
                size="xs"
                onClick={hidePassword}
                textColor={"#34aee7"}
              >
                {show ? "Hide" : "Show"}
              </Button>
            </InputRightElement>
          </InputGroup>
          {errors.password && (
            <span style={spanStyle}>
              Password field needs more than 8 characters!
            </span>
          )}
        </Box>
        {isRegister && (
          <Box py={marginYItems}>
            <FormLabel htmlFor="tel">Phone</FormLabel>

            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <PhoneIcon color={"gray.300"} />
              </InputLeftElement>
              <Input
                type="tel"
                {...register("phone", { required: true })}
                placeholder="Phone"
              />
            </InputGroup>
            {errors.phone && (
              <span style={spanStyle}>Phone field is required!</span>
            )}
          </Box>
        )}

        <Button
          py={!isFetching ? 5 : 7}
          type="submit"
          mt={marginYItems}
          width="full"
        >
          {!isFetching ? (
            <>{loginName}</>
          ) : (
            <Spinner
              thickness="4px"
              speed="0.65s"
              emptyColor="gray.200"
              color="blue.500"
              size="xl"
            />
          )}
        </Button>
      </form>
    </Box>
  );
};
