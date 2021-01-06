const textProteine = (data) => {
  if (data >= 20) {
    return "Excellente quantité";
  } else if (data >= 10) {
    return "Quantité moyenne";
  } else if (data < 10) {
    return "Faible quantité";
  } else {
    return "Non renseigné";
  }
};

console.log(textProteine());
