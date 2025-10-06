const tareas = ["Estudiar Git", "Crear repositorio", "Hacer commit"];
const lista = document.getElementById("tareas");

tareas.forEach(t => {
  const li = document.createElement("li");
  li.textContent = t;
  lista.appendChild(li);
});
