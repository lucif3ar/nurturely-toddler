import { Text, Pressable, StyleSheet } from 'react-native';

export default CustomButton = ({
  title,
  onPress,
  backgroundColor,
  textColor,
}) => {
  return (
    <Pressable
      style={[styles.buttonContainer, { backgroundColor: backgroundColor }]}
      onPress={onPress}
    >
      <Text style={[styles.buttonText, { color: textColor }]}>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    flex: 1,
    padding: 4,
    marginHorizontal: 8,
    borderRadius: 12,
    marginVertical: 4,
  },
  buttonText: {
    fontWeight: '500',
    textAlign: 'center',
    fontSize: 12,
  },
});
