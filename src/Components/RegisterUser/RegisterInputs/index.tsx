import { PhoneIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { CustomButton } from "../../Helpers";

type Inputs = {
  name: string;
  email: string;
  password: string;
  phone: string;
};

export const RegisterInputs: React.FC<{ paddingYItems?: number | string }> = ({
  paddingYItems,
}) => {
  const {
    handleSubmit,
    register,
    getValues,
    formState: { errors },
  } = useForm<Inputs>();

  const submitRegister = () => {};

  const spanStyle = {
    color: "#d22d2d",
  };

  const validatePassword = getValues("password").length;

  const [show, setShow] = useState(false);
  const hidePassword = () => setShow(!show);

  return (
    <Box d="flex" flexDir={"column"} bg="#fff">
      <form onSubmit={handleSubmit(submitRegister)}>
        <Box py={paddingYItems}>
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
        <Box py={paddingYItems}>
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
        <Box py={paddingYItems}>
          <FormLabel htmlFor="password">Password</FormLabel>
          <InputGroup size="md">
            <Input
              {...register("password", { required: true })}
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
          {validatePassword < 6 && (
            <span style={spanStyle}>
              Password field needs more than 6 characters!
            </span>
          )}
        </Box>
        <Box py={paddingYItems}>
          <FormLabel htmlFor="tel">Phone</FormLabel>

          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              children={<PhoneIcon color={"gray.300"} />}
            />
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

        <CustomButton
          type="submit"
          mt={paddingYItems}
          label="Register"
          width="full"
        />
      </form>
    </Box>
  );
};
