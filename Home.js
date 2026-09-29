import { Pressable, StyleSheet, Text, View } from "react-native";

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Carrinho de Compras</Text>

      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate("Carrinho")}
      >
        <Text style={styles.buttonText}>Ir para Carrinho de Compras</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#e8ecff",
    padding: 24,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#000000",
    marginBottom: 20,
    textAlign: "center",
  },
  button: {
    backgroundColor: "#2233b7",
    paddingHorizontal: 26,
    paddingVertical: 14,
    borderRadius: 12,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});