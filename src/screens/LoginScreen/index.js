import { useState } from "react";
import { View, Image } from "react-native";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import BottomText from "../../components/BottomText";
import CustomButton from "../../components/CustomButton";
import DismissKeyboard from "../../components/DismissKeyboard";
import ValidateInput from "../../components/ValidateInput";
import { styles } from "./styles";
import { loginSchema } from "../../validation/schema";

const logo = require("../../../assets/images/cat.png");

const LoginScreen = () => {
  const [hidePassword, setHidePassword] = useState(true);

  const { control, handleSubmit, reset, watch } = useForm({
    defaultValues: {
      emailAddress: "",
      password: "",
    },
    resolver: yupResolver(loginSchema),
    reValidateMode: "onChange",
  });

  const watchFields = watch(["emailAddress", "password"]);

  const hidePasswordHandler = () => {
    setHidePassword(!hidePassword);
  };

  const loginHandler = (data) => {
    console.log(data);
    reset();
  };

  return (
    <DismissKeyboard>
      <View style={styles.rootContainer}>
        <Image style={styles.image} source={logo} />
        <View style={styles.container}>
          <ValidateInput
            control={control}
            name="emailAddress"
            icon="email"
            placeholder="Email Address"
            style={styles.input}
          />
          <ValidateInput
            control={control}
            name="password"
            icon={hidePassword ? "eye-off" : "eye"}
            onPress={hidePasswordHandler}
            placeholder="Password"
            secureTextEntry={hidePassword}
            style={styles.input}
          />
          <CustomButton
            title="Log in"
            disable={!(watchFields[0] && watchFields[1])}
            onPress={handleSubmit(loginHandler)}
          />
        </View>
        <BottomText />
      </View>
    </DismissKeyboard>
  );
};

export default LoginScreen;
