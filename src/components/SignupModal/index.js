import { useContext } from "react";
import { Modal, Pressable, SafeAreaView, View, Text } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../util/firebaseConfig";

import { styles } from "./styles";
import CustomButton from "../CustomButton";
import { Ionicons } from "@expo/vector-icons";
import DismissKeyboard from "../DismissKeyboard";
import ValidateInput from "../ValidateInput";
import { signupSchema } from "../../validation/schema";
import { UsersContext } from "../../store/context/users-context";

const SignupModal = ({ onPress, passwordIcon, secureTextEntry, visible }) => {
  const { setUser } = useContext(UsersContext);

  const { control, handleSubmit, reset, watch } = useForm({
    defaultValues: {
      businessName: "",
      phoneNumber: "",
      emailAddress: "",
      password: "",
      passwordConfirm: "",
    },
    resolver: yupResolver(signupSchema),
    reValidateMode: "onChange",
  });

  const watchFields = watch([
    "businessName",
    "phoneNumber",
    "emailAddress",
    "password",
    "passwordConfirm",
  ]);

  const email = watchFields[2];
  const password = watchFields[3];

  const disabled = !watchFields.every(Boolean);

  const signupHandler = async () => {
    try {
      reset();
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      if (userCredential.user) {
        setUser(userCredential.user);
      }
    } catch (error) {
      console.log("signup erros", error.code, error.message);
    }
  };

  return (
    <Modal animationType="slide" visible={visible}>
      <DismissKeyboard>
        <SafeAreaView style={styles.modal}>
          <View style={styles.rootContainer}>
            <KeyboardAwareScrollView
              enableOnAndroid={true}
              extraHeight={100}
              extraScrollHeight={60}
              keyboardOpeningTime={0}
              scrollEnabled={false}
            >
              <View style={styles.modalTitle}>
                <Pressable onPress={onPress}>
                  <Ionicons name="chevron-down" size={25} />
                </Pressable>
                <Text style={styles.title}>Sing Up</Text>
              </View>
              <View style={styles.welcomeTextContainer}>
                <Text style={styles.welcomeText}>Welcome!</Text>
                <Text style={styles.subText}>
                  Enter your account information first
                </Text>
              </View>
              <ValidateInput
                control={control}
                icon="person"
                name="businessName"
                placeholder="Business Name"
              />
              <ValidateInput
                control={control}
                icon="phone-portrait-sharp"
                name="phoneNumber"
                placeholder="Phone number"
              />
              <ValidateInput
                control={control}
                icon="mail"
                name="emailAddress"
                placeholder="Email Address"
              />
              <ValidateInput
                control={control}
                icon={passwordIcon}
                name="password"
                placeholder="Password"
                secureTextEntry={secureTextEntry}
              />
              <ValidateInput
                control={control}
                icon={passwordIcon}
                name="passwordConfirm"
                placeholder="Confirm Password"
                secureTextEntry={secureTextEntry}
              />
            </KeyboardAwareScrollView>
            <View style={styles.buttonContainer}>
              <CustomButton
                disable={disabled}
                onPress={handleSubmit(signupHandler)}
                title="Sign Up"
              />
            </View>
          </View>
        </SafeAreaView>
      </DismissKeyboard>
    </Modal>
  );
};

export default SignupModal;
