import { ScrollView, View } from "react-native";
import React, { useState } from "react";
import { Input } from "~/components/ui/input";
import { Checkbox } from "~/components/ui/checkbox";
import { Button } from "~/components/ui/button";
import { Image } from "react-native";
import { Text } from "~/components/ui/text";
import { Link } from "expo-router";

const Register = () => {
  const [agreeTerm, setAgreeTerm] = useState<boolean>(false);
  const [agreeSubcribe, setAgreeSubcribe] = useState<boolean>(false);

  return (
    <ScrollView className="p-4">
      <View className="flex flex-col gap-4">
        <View className="flex flex-col gap-1">
          <Text fontStyle="josefin-bold" className="w-full text-center text-4xl">
            Create your account
          </Text>
          <Text className="text-center text-red-500">
            Vui lòng không để trống các mục được đánh dấu *
          </Text>
        </View>

        <View className="flex flex-col gap-2">
          <View className="w-full flex flex-row justify-between gap-2">
            <View className="w-[49%] flex flex-col gap-2">
              <Text className="text-gray-600">First Name:</Text>
              <Input
                textContentType="namePrefix"
                placeholder="Enter first name..."
                className="placeholder:text-sm"
              />
            </View>

            <View className="w-[49%] flex flex-col gap-2">
              <Text className="text-gray-600">Last Name:</Text>
              <Input
                textContentType="nameSuffix"
                placeholder="Enter last name..."
                className="placeholder:text-sm"
              />
            </View>
          </View>

          <View className="flex flex-col gap-2">
            <Text className="text-gray-600">Email:</Text>
            <Input
              inputMode="email"
              keyboardType="email-address"
              textContentType="emailAddress"
              placeholder="Enter email address..."
              className="placeholder:text-sm"
            />
          </View>

          <View className="flex flex-col gap-2">
            <Text className="text-gray-600">Password:</Text>
            <Input
              textContentType="password"
              secureTextEntry={true}
              placeholder="Enter password..."
              className="placeholder:text-sm"
            />
          </View>

          <View className="flex flex-col gap-2">
            <Text className="text-gray-600">Confirm password:</Text>
            <Input
              textContentType="password"
              secureTextEntry={true}
              placeholder="Enter confirm password..."
              className="placeholder:text-sm"
            />
          </View>
        </View>

        <View className="flex flex-row gap-2">
          <Checkbox checked={agreeTerm} onCheckedChange={setAgreeTerm} />
          <Text className="text-gray-600">
            Agree to our{" "}
            <Link href="/term-of-use" className="underline">
              Terms of use
            </Link>{" "}
            and{" "}
            <Link href="/privacy-policy" className="underline">
              Privacy Policy
            </Link>{" "}
          </Text>
        </View>

        <View className="flex flex-row gap-2">
          <Checkbox checked={agreeSubcribe} onCheckedChange={setAgreeSubcribe} />
          <Text className="text-gray-600">Subscribe to our monthly newsletter</Text>
        </View>

        <View className="w-full flex flex-col gap-2">
          <Button variant="rounded-pri1" size="2xl">
            <Text fontStyle="josefin-bold">Sign up</Text>
          </Button>
          <Text className="text-center underline">Forgot your password?</Text>
        </View>

        <View className="flex flex-row items-center">
          <View className="w-1/4 h-[1px] bg-gray-600"></View>
          <Text className="w-1/2 text-xl text-center">Or sign up with</Text>
          <View className="w-1/4 h-[1px] bg-gray-600"></View>
        </View>

        <View className="w-full flex flex-row gap-2">
          <Button variant="rounded-border" size="xl" className="w-[49%] flex flex-row gap-2">
            <Image source={require("@/assets/images/brands/fb-logo.png")} />
            <Text className="text-gray-600">Facebook</Text>
          </Button>
          <Button variant="rounded-border" size="xl" className="w-[49%] flex flex-row gap-2">
            <Image source={require("@/assets/images/brands/gg-logo.png")} />
            <Text className="text-gray-600"> Google</Text>
          </Button>
        </View>

        <View className="pb-10">
          <Text className="text-gray-600 text-center">
            Not a member? Get exclusive access to exhibitions and events, free admission every day,
            and much more.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default Register;
