import React from "react";
import { StyleSheet, View } from "react-native";
import { Text, HStack } from "native-base";

import { MaterialIcons } from "@expo/vector-icons";

const TextWithIcon = (props) => {
	return (
		<View>
			<HStack alignItems="center" space={4} justifyContent="space-between">
				<HStack alignItems="center">
					<MaterialIcons name={props.icon} size={20} />
					<Text
						color="coolGray.600"
						_dark={{
							color: "warmGray.200",
						}}
						ml="2"
						fontWeight="400"
					>
						{props.data}
					</Text>
				</HStack>
			</HStack>
		</View>
	);
};

export default TextWithIcon;

const styles = StyleSheet.create({});
