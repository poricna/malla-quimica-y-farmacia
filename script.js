const semestres = [
  {
    nombre: "Primer Semestre",
    asignaturas: [
      { codigo: "QUIM100", nombre: "Química General I", requisitos: [] },
      { codigo: "BIOL130", nombre: "Biología Celular", requisitos: [] },
      { codigo: "FMMP101", nombre: "Álgebra y Cálculo", requisitos: [] },
      { codigo: "CEGHC11", nombre: "Formación General I", requisitos: [] },
      { codigo: "FARM100", nombre: "Introducción a las Ciencias Farmacéuticas", requisitos: [] },
    ]
  },
  {
    nombre: "Segundo Semestre",
    asignaturas: [
      { codigo: "QUIM200", nombre: "Química General II", requisitos: ["QUIM100"] },
      { codigo: "QUIM210", nombre: "Química Orgánica I", requisitos: ["QUIM100"] },
      { codigo: "MORF014", nombre: "Morfología", requisitos: ["BIOL130"] },
      { codigo: "CFIS107", nombre: "Física", requisitos: ["FMMP101"] },
      { codigo: "ING119", nombre: "Inglés I", requisitos: [] },
    ]
  },
  {
    nombre: "Tercer Semestre",
    asignaturas: [
      { codigo: "QUIM300", nombre: "Fisicoquímica Aplicada", requisitos: ["QUIM200", "FMMP101", "CFIS107"] },
      { codigo: "QUIM310", nombre: "Química Orgánica II", requisitos: ["QUIM210"] },
      { codigo: "BIOL272", nombre: "Fisiología Humana", requisitos: ["MORF014"] },
      { codigo: "QUIM320", nombre: "Química Analítica", requisitos: ["QUIM200"] },
      { codigo: "ING129", nombre: "Inglés II", requisitos: ["ING119"] },
    ]
  }
  // Puedes seguir agregando más semestres aquí...
];

const mallaDiv = document.getElementById("malla");

semestres.forEach((sem) => {
  const semDiv = document.createElement("div");
  semDiv.className = "semestre";

  const title = document.createElement("h2");
  title.textContent = sem.nombre;
  semDiv.appendChild(title);

  sem.asignaturas.forEach((asig) => {
    const asigDiv = document.createElement("div");
    asigDiv.className = "asignatura";
    asigDiv.innerHTML = `<strong>${asig.codigo}</strong>: ${asig.nombre}<br>
      <span class="requisitos">${asig.requisitos.length > 0 ? "Requisitos: " + asig.requisitos.join(", ") : "Sin requisitos"}</span>`;
    semDiv.appendChild(asigDiv);
  });

  mallaDiv.appendChild(semDiv);
});
