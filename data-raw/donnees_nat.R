library(dplyr)

donnees_nat <- readxl::read_excel(
  path = "data-raw/FICHIERNAT.xls"
)

donnees_nat <- donnees_nat |>
  mutate(
    SEXE = factor(
      SEXE,
      levels = c("F", "H"),
      labels = c("Femme", "Homme")
    ),
    SITCIVILE = factor(
      SITCIVILE,
      levels = c("Célibataire","Divorcé.e","Veuf.ve","Séparé.e","Marié.e"),
      labels = c("Célibataire","Divorcé.e","Veuf.ve","Séparé.e","Marié.e")
    )
  )


usethis::use_data(donnees_nat, overwrite = TRUE)
checkhelper::use_data_doc("donnees_nat")
attachment::att_amend_desc()
