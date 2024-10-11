import { ScrollView, View } from "react-native";
import React, { useState } from "react";
import { Input } from "~/components/ui/input";
import { Checkbox } from "~/components/ui/checkbox";
import { Button } from "~/components/ui/button";
import { Image } from "react-native";
import { Text } from "~/components/ui/text";

const Register = () => {
  const [agreeTerm, setAgreeTerm] = useState<boolean>(false);
  const [agreeSubcribe, setAgreeSubcribe] = useState<boolean>(false);

  return (
    <ScrollView>
      <View>
        <Text>Create your account</Text>
        <Text>Vui lòng không để trống các mục được đánh dấu *</Text>

        <View>
          <Text>First Name:</Text>
          <Input textContentType="namePrefix" />
        </View>

        <View>
          <Text>Last Name:</Text>
          <Input textContentType="nameSuffix" />
        </View>

        <View>
          <Text>First Name:</Text>
          <Input textContentType="namePrefix" />
        </View>

        <View>
          <Text>Email:</Text>
          <Input inputMode="email" keyboardType="email-address" textContentType="emailAddress" />
        </View>

        <View>
          <Text>Password:</Text>
          <Input textContentType="password" secureTextEntry={true} />
        </View>

        <View>
          <Text>Confirm password:</Text>
          <Input textContentType="password" secureTextEntry={true} />
        </View>
      </View>

      <View>
        <Checkbox checked={agreeTerm} onCheckedChange={setAgreeTerm} />
        <Text>Agree to our Terms of use and Privacy Policy</Text>
      </View>

      <View>
        <Checkbox checked={agreeSubcribe} onCheckedChange={setAgreeSubcribe} />
        <Text>Subscribe to our monthly newsletter</Text>
      </View>

      <View>
        <Button>
          <Text>Sign up</Text>
        </Button>
        <Text>Forgot your password?</Text>
      </View>

      <View>
        <View></View>
        <Text>Or sign up with</Text>
        <View></View>
      </View>

      <View>
        <Button>
          <Image source={require("@/assets/images/brands/fb-logo.png")} />
          <Text>Facebook</Text>
        </Button>
        <Button>
          <Image source={require("@/assets/images/brands/gg-logo.png")} />
          <Text> Google</Text>
        </Button>
      </View>

      <View>
        <Text>
          Not a member? Get exclusive access to exhibitions and events, free admission every day,
          and much more.
        </Text>
      </View>
    </ScrollView>
  );
};

export default Register;
