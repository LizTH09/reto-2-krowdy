/* eslint-disable react/prop-types */
import { useState } from "react";
import { Checkbox, FormControlLabel, Button, Container } from "@mui/material";

const UserList = ({ users, onChange }) => {
  const [selectedUsers, setSelectedUsers] = useState([]);

  // Función que maneja el cambio de los checkboxes
  const handleCheckboxChange = (event, user) => {
    if (event.target.checked) {
      // Si el checkbox está marcado, añadimos el usuario
      setSelectedUsers((prev) => [...prev, user]);
    } else {
      // Si el checkbox está desmarcado, eliminamos el usuario
      setSelectedUsers((prev) => prev.filter((u) => u !== user));
    }
  };

  // Llamamos a la función onChange cuando se hace un cambio
  const handleChange = () => {
    onChange(selectedUsers); // Pasamos la lista de usuarios seleccionados al padre
  };

  return (
    <div>
      <h3>Select Users</h3>
      {/* Mapeamos los usuarios y mostramos los checkboxes */}
      {users?.map((user) => (
        <Container key={user.id}>
          <FormControlLabel
            control={
              <Checkbox
                checked={selectedUsers.includes(user)} // Marca el checkbox si el usuario está seleccionado
                onChange={(e) => handleCheckboxChange(e, user)} // Llama a la función handleCheckboxChange al cambiar el checkbox
              />
            }
            label={user.name} // Muestra el nombre del usuario al lado del checkbox
          />
        </Container>
      ))}

      {/* El botón solo estará habilitado si hay usuarios seleccionados */}
      <Button
        variant="contained"
        onClick={handleChange} // Llama a onChange al hacer clic en el botón
        disabled={selectedUsers.length === 0} // Deshabilita el botón si no hay usuarios seleccionados
      >
        Enviar Mensaje
      </Button>
    </div>
  );
};

export default UserList;
