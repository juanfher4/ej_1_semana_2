import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Pressable,
  ScrollView,
  Platform,
  Alert,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Picker } from "@react-native-picker/picker";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { MaterialIcons } from "@expo/vector-icons";

export default function App() {
  function mostrarAlerta() {
    Alert.alert(
      "Ventana de Alerta",
      "FAB Pulsado",
      [
        {text:"Cancelar", onPress: () => console.log("Cancelado")},
        {text:"Aceptar", onPress: () => console.log("Aceptado")}
      ]
    )
  }
  return (
    <SafeAreaView style={{ flex:1 }}>
      <View>
        <Image
          source={require("./assets/register_now.png")}
          resizeMode="contain"
          style={styles.foto1}
        />
      </View>
      <ScrollView>
        <View style={styles.contenedorSecundario}>
          <View style={styles.contenedorFormulario}>
            <TextInput
              style={styles.cuadroTexto}
              placeholder="Introduce tu nombre"
              maxLength={100}
            ></TextInput>
            <TextInput
              style={styles.cuadroTexto}
              placeholder="Introduce tus apellidos"
              maxLength={100}
            ></TextInput>
            <TextInput
              style={styles.cuadroTexto}
              placeholder="Introduce tu número de teléfono"
              maxLength={9}
              keyboardType="phone-pad"
            ></TextInput>
            <TextInput
              style={styles.cuadroTexto}
              placeholder="Introduce tu email"
              keyboardType="email-address"
            ></TextInput>
            <TextInput
              style={styles.cuadroTexto}
              placeholder="Introduce tu contraseña"
              maxLength={9}
              secureTextEntry={true}
            ></TextInput>
            <TextInput
              style={styles.cuadroTexto}
              placeholder="Introduce tus observaciones"
              maxLength={100}
              multiline={true}
              numberOfLines={5}
            ></TextInput>
            <View style={styles.contenedorPicker}>
            <Picker style={styles.colorGris}>
              <Picker.Item label="-- Nivel de estudios --" value="ne" />
              <Picker.Item label="Secundaria" value="eso" />
              <Picker.Item label="Bachillerato" value="bh" />
              <Picker.Item label="Ciclo de FP" value="fp" />
              <Picker.Item label="Universidad" value="inu" />
              <Picker.Item label="Sin estudios" value="nada" />
            </Picker>
            </View>
            <Text style={styles.colorGris}>
              Pulsando el siguiente botón, el usuario se hace responsable de hacer
              un uso correcto del portal, sin subir contenidos que supongan un
              incumplimiento de las leyes de protección de datos ni de la
              propiedad intelectual.
            </Text>
            <BouncyCheckbox
              size={16}
              fillColor={"red"}
              unFillColor={"white"}
              text={"He leído y acepto los términos"}
              textStyle={{ textDecorationLine: "none" }}
            ></BouncyCheckbox>
            <Pressable
              style={({ pressed }) =>
                pressed ? styles.estiloBotonPulsado : styles.estiloBoton
              }
              onPress={() => console.log("Botón Pulsado")}
            >
              <Text style={styles.textoBoton}>Registrar</Text>
            </Pressable>
            <Text style={styles.colorGris}>
              Al pulsar el botón sus datos personales serán proporcionados a
              nuestro proveedor de publicidad, que insertará anuncios de su
              interés ddurante el uso de la aplicación. Para dejar de ver
              anuncios, deberá adquirir la versión de pago de la app en la {Platform.OS === "android" ? "Play Store" : "Apple Store" }.
            </Text>
          </View>
          
        </View>
      </ScrollView>
      <Pressable style={({ pressed }) => [ styles.fab, { backgroundColor: pressed ? "#cc7000" : "orange" } ]} onPress={mostrarAlerta}>
        <MaterialIcons name="share" style={styles.textoFab}/>
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  foto1: {
    width: "100%",
    height: 200,
  },
  contenedorSecundario: {
    backgroundColor: "#f5f3f3ff",
    width: "100%",
    padding: 12,
  },
  contenedorFormulario: {
    backgroundColor: "white",
    padding: 10,
    gap: 20,
  },
  cuadroTexto: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderColor: "#e7e5e5ff",
    borderWidth: 1,
    borderRadius: 8,
  },
  contenedorPicker: {
    borderColor: "#e7e5e5ff",
    borderWidth: 1,
    borderRadius: 8,
  },
  colorGris: {
    color: "#8c8c8c",
  },
  estiloBoton: {
    marginTop: 24,
    paddingVertical: 16,
    width: 150,
    backgroundColor: "#e45151ff",
    borderRadius: 25,
  },
  textoBoton: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  estiloBotonPulsado: {
    marginTop: 24,
    paddingVertical: 16,
    width: 150,
    backgroundColor: "#c13b3b",
    borderRadius: 25,
  },
  fab: {
    position: "absolute",
    bottom: 40,
    right: 30,
    borderRadius: "50%",
    width: 56,
    height: 56
  },
  textoFab:{
    color: "white",
    fontSize:24,
    margin: "auto"
  }
});
