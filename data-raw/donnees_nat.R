donnees_nat <- readxl::read_excel(
  path = "data-raw/FICHIERNAT.xls"
)

usethis::use_data(donnees_nat, overwrite = TRUE)
checkhelper::use_data_doc("donnees_nat")
attachment::att_amend_desc()
