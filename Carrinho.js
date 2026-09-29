import { useState } from "react";
import { TextInput, Pressable, StyleSheet, Text, View } from "react-native";

export default function Carrinho({ navigation }) {
  const [produto, setProduto] = useState([]);
  const [texto, setTexto] = useState("");

  function AddnewProd() {
    if (!texto.trim()) return;

    const NewProd = {
      id: Date.now(),
      name: texto,
    };

    setProduto([...produto, NewProd]);
    setTexto("");
  }

  function deleteProd(id) {
    const novaLista = produto.filter((item) => item.id !== id);
    setProduto(novaLista);
  }

  function DeletarAll() {
    setProduto([]);
  }

  const contador = produto.length;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Carrinho</Text>
      </View>

      <View style={styles.Cont_two}>
        <View style={styles.areaInput}>
          <TextInput
            style={styles.input}
            value={texto}
            onChangeText={setTexto}
            placeholder="Digite um produto"
          />

          <View style={styles.areaButtons}>
            <Pressable style={styles.ButtonAdd} onPress={AddnewProd}>
              <Text>Adicionar Produto</Text>
            </Pressable>

            <Pressable style={styles.ButtonDeleteAll} onPress={DeletarAll}>
              <Text>Deletar todos os Produtos</Text>
            </Pressable>
          </View>

          <Text style={styles.contadorName}>Produtos: {contador}</Text>
        </View>

        {produto.map((item) => (
          <View style={styles.block} key={item.id}>
            <Text style={styles.nameProd}>{item.name}</Text>

            <Pressable
              onPress={() => deleteProd(item.id)}
              style={styles.ButtonExcluir}
            >
              <Text>Excluir</Text>
            </Pressable>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e8ecff",
  },
  header: {
    height: 80,
    backgroundColor: "#053bff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#ffffff",
  },
  Cont_two: {
    flex: 1,
    alignItems: "center",
    padding: 20,
  },
  areaInput: {
    width: "100%",
    alignItems: "center",
  },
  input: {
    width: 320,
    height: 45,
    borderWidth: 1,
    borderColor: "#999999",
    borderRadius: 8,
    paddingHorizontal: 15,
    backgroundColor: "#ffffff",
    marginBottom: 10,
  },
  areaButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: 320,
    marginBottom: 10,
  },
  contadorName: {
    fontSize: 20,
    backgroundColor: "white",
    padding: 10,
    marginTop: 10,
    width: "40%",
    borderRadius: 20,
    textAlign: "center",
  },
  block: {
    width: 350,
    height: 60,
    backgroundColor: "#f5f6f7",
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 30,
    elevation: 5,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  nameProd: {
    marginLeft: 15,
    color: "#000000",
    fontSize: 22,
  },
  ButtonExcluir: {
    padding: 8,
    backgroundColor: "#ff0000",
    borderRadius: 10,
    marginRight: 10,
  },
  ButtonAdd: {
    padding: 8,
    backgroundColor: "#aca7e6",
    borderRadius: 10,
    width: 130,
    alignItems: "center",
  },
  ButtonDeleteAll: {
    padding: 8,
    backgroundColor: "#f04d4d",
    borderRadius: 10,
    width: 170,
    alignItems: "center",
  },
});