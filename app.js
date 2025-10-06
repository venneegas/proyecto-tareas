const tareas = ["Estudiar Git", "Crear repositorio", "Hacer commit"];
const lista = document.getElementById("tareas");

tareas.forEach(t => {
  const li = document.createElement("li");
  li.textContent = t;
  lista.appendChild(li);
});

const input = document.getElementById("nuevaTarea");
const boton = document.getElementById("btnAgregar");

boton.addEventListener("click", () => {
  const texto = input.value.trim();
  if (texto) {
    const li = document.createElement("li");
    li.textContent = texto;
    lista.appendChild(li);
    input.value = "";
  }
});
