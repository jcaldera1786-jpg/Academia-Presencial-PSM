const DATA_QUIMICA = [
  { 
    smiles: "CC(=O)O", 
    nombres: ["acido acetico", "acido etanoico"], 
    familia: "Ácidos Carboxílicos",
    explicacion: "Estructura de 2 carbonos. El C1 tiene el doble enlace al oxígeno (carbonilo) y el enlace sencillo al OH."
  },
  { 
    smiles: "CC(O)C(=O)O", 
    nombres: ["acido lactico", "acido 2-hidroxipropanoico"], 
    familia: "Polifuncionales",
    explicacion: "Observa el C1 (ácido) y el C2 con el sustituyente hidroxilo. El ácido manda en la numeración."
  },
  { 
    smiles: "NC(C)C(=O)O", // Alanina corregida
    nombres: ["alanina", "acido 2-aminopropanoico"], 
    familia: "Aminoácidos",
    explicacion: "El nitrógeno del grupo amino está en el C2. El C1 es el carboxilo con su geometría trigonal plana."
  },
  { 
    smiles: "CC(=O)Cl", 
    nombres: ["cloruro de acetilo", "cloruro de etanoilo"], 
    familia: "Haluros de acilo",
    explicacion: "Derivado donde el -OH se cambia por -Cl. El doble enlace C=O debe ser claramente visible."
  },
  { 
    smiles: "CC(=O)OC(=O)C", 
    nombres: ["anhidrido acetico", "anhidrido etanoico"], 
    familia: "Anhídridos",
    explicacion: "Dos grupos acilo unidos por un oxígeno central. Verás dos carbonilos simétricos."
  },
  { 
    smiles: "CC(=O)OC(C)C", 
    nombres: ["acetato de isopropilo", "etanoato de isopropilo"], 
    familia: "Ésteres",
    explicacion: "El grupo carboxilato se une a un grupo isopropilo por el oxígeno sencillo."
  },
  { 
    smiles: "CC(=O)NC(C)C", 
    nombres: ["n-isopropilacetamida", "n-isopropiletanamida"], 
    familia: "Amidas",
    explicacion: "Amida sustituida en el nitrógeno. El carbonilo está unido directamente al N."
  },
  { 
    smiles: "CC1(C)OC1", 
    nombres: ["2,2-dimetiloxirano", "oxido de isobutileno"], 
    familia: "Epóxidos",
    explicacion: "Anillo de 3 miembros con un oxígeno. Los dos metilos están en el mismo carbono."
  },
  { 
    smiles: "O=Cc1ccccc1O", 
    nombres: ["salicilaldehido", "2-hidroxibenzaldehido"], 
    familia: "Aldehídos aromáticos",
    explicacion: "El grupo formilo (-CHO) y el hidroxilo están en carbonos vecinos (posición orto)."
  },
  { 
    smiles: "CC(=O)CC(=O)O", 
    nombres: ["acido acetoacetico", "acido 3-oxobutanoico"], 
    familia: "Cetoácidos",
    explicacion: "Observa la diferencia entre el carbonilo de la cetona (C3) y el del ácido (C1)."
  },
// const DATA_QUIMICA = [
  {
    smiles: "CC(Cl)CC(Br)CC(I)CCCC",
    nombres: ["2-cloro-4-bromo-6-yododecano", "4-bromo-2-cloro-6-yododecano"],
    familia: "Haluros de alquilo",
    explicacion: "Cadena de 10 carbonos (decano). Los halógenos se nombran en orden alfabético: bromo, cloro, yodo."
  },
  {
    smiles: "CC=C(C)C(O)CC(C)CCC",
    nombres: ["4-metilnon-2-en-5-ol", "4-metil-2-nonen-5-ol"],
    familia: "Alquenoles",
    explicacion: "Cadena de 9 carbonos con un doble enlace en C2 y un hidroxilo en C5. El OH tiene prioridad sobre el doble enlace."
  },
  {
    smiles: "CC#CC(N)CC(c1ccccc1)CC",
    nombres: ["6-feniloct-2-in-4-amina", "6-fenil-2-octin-4-amina"],
    familia: "Aminas / Alquinos",
    explicacion: "Cadena de 8 carbonos con un triple enlace en C2, un grupo amino en C4 y un anillo fenilo en C6."
  },
  {
    smiles: "COCC(C)CC(C)(C)CC(C)C",
    nombres: ["1-metoxi-2,4,4,6-tetrametiloctano"],
    familia: "Éteres (Alcoxi)",
    explicacion: "Un éter donde el grupo metoxi está en el extremo de una cadena ramificada de 8 carbonos."
  },
  {
    smiles: "CC(C)CC(O)C(Cl)C(Br)C=C",
    nombres: ["4-bromo-3-cloro-7-metiloct-1-en-5-ol"],
    familia: "Polifuncionales",
    explicacion: "Cadena de 8 carbonos. Prioridad: OH > Alqueno > Halógenos. Numeración inicia desde el extremo del doble enlace para dar localizadores bajos."
  },
  {
    smiles: "Nc1ccccc1CC(C)CCCC",
    nombres: ["2-amino-1-fenilheptano", "1-heptil-2-aminobenceno"],
    familia: "Aminas aromáticas / Alquilos",
    explicacion: "El grupo amino está en el anillo bencénico (anilina sustituida) o como sustituyente en cadena lateral."
  },
  {
    smiles: "CC(C)C#CC(C)C(OC)CCC",
    nombres: ["6-metoxi-2,5-dimetilnon-3-ino"],
    familia: "Éteres / Alquinos",
    explicacion: "Triple enlace en C3 y grupo metoxi en C6. La cadena principal tiene 9 carbonos."
  },
  {
    smiles: "CC(O)C(C)C(C)C(C)C(C)C(C)C",
    nombres: ["3,4,5,6,7,8,9-heptametildecan-2-ol"],
    familia: "Alcoholes ramificados",
    explicacion: "Un ejemplo extremo de ramificación metílica en una cadena de 10 carbonos con el grupo funcional alcohol."
  }
];