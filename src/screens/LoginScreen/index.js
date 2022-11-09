import { useState } from "react";
import { View, Image } from "react-native";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../util/firebaseConfig";

import BottomText from "../../components/BottomText";
import CustomButton from "../../components/CustomButton";
import DismissKeyboard from "../../components/DismissKeyboard";
import ValidateInput from "../../components/ValidateInput";
import { styles } from "./styles";
import { loginSchema } from "../../validation/schema";
import SignupModal from "../../components/SignupModal";

const logo = require("../../../assets/images/cat.png");

const LoginScreen = () => {
  const [hidePassword, setHidePassword] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);

  const { control, handleSubmit, reset, watch } = useForm({
    defaultValues: {
      emailAddress: "",
      password: "",
    },
    resolver: yupResolver(loginSchema),
    reValidateMode: "onChange",
  });

  const watchFields = watch(["emailAddress", "password"]);
  const email = watchFields[0];
  const password = watchFields[1];

  const disabled = !watchFields.every(Boolean);

  const hidePasswordHandler = () => {
    setHidePassword(!hidePassword);
  };

  const loginHandler = async (data) => {
    try {
      console.log(data);
      reset();
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      if (userCredential.user) {
        console.log("User logged in succesfully");
      }
    } catch (error) {
      console.log("signup erros", error.code, error.message);
    }
  };

  const signupHandler = () => {
    setModalVisible(!modalVisible);
  };

  return (
    <DismissKeyboard>
      <View style={styles.rootContainer}>
        <Image style={styles.image} source={logo} />
        <View style={styles.container}>
          <ValidateInput
            control={control}
            name="emailAddress"
            icon="mail"
            placeholder="Email Address"
          />
          <ValidateInput
            control={control}
            name="password"
            icon={hidePassword ? "eye-off" : "eye"}
            onPress={hidePasswordHandler}
            placeholder="Password"
            secureTextEntry={hidePassword}
          />
          <CustomButton
            title="Log in"
            disable={disabled}
            onPress={handleSubmit(loginHandler)}
          />
        </View>
        <BottomText onPress={signupHandler} />
        <SignupModal
          passwordIcon={hidePassword ? "eye-off" : "eye"}
          secureTextEntry={hidePassword}
          visible={modalVisible}
          onPress={signupHandler}
        />
      </View>
    </DismissKeyboard>
  );
};

export default LoginScreen;
