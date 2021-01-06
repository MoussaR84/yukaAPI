const ratingProduct = (product, colors) => {
  if (product.nutrition_grade_fr === "a") {
    return colors.green;
  } else if (product.nutrition_grade_fr === "b") {
    return colors.orange;
  } else if (product.nutrition_grade_fr === "c") {
    return colors.red;
  } else if (product.nutrition_grade_fr === "d") {
    return colors.brown;
  } else if (product.nutrition_grade_fr === "e") {
    return colors.black;
  } else {
    return colors.grey;
  }
};

const ratingProductComment = (product) => {
  if (product.nutrition_grade_fr === "a") {
    return "Excellent";
  } else if (product.nutrition_grade_fr === "b") {
    return "Satisfaisant";
  } else if (product.nutrition_grade_fr === "c") {
    return "Bon";
  } else if (product.nutrition_grade_fr === "d") {
    return "Mauvais";
  } else if (product.nutrition_grade_fr === "e") {
    return "Médiocre";
  } else {
    return "pas enregistré";
  }
};

const ratingScoreText = (product) => {
  if (product.nutrition_grade_fr === "a") {
    return "100";
  } else if (product.nutrition_grade_fr === "b") {
    return "80";
  } else if (product.nutrition_grade_fr === "c") {
    return "70";
  } else if (product.nutrition_grade_fr === "d") {
    return "30";
  } else {
    return "10";
    // } else {
    //   ("Données non disponible");
    //   // alert("not registred");
  }
};
export { ratingProduct, ratingProductComment, ratingScoreText };
