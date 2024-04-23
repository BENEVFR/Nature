

survey_answers <- readxl::read_excel(
  path = "data-raw/2997_reponses_codees_V2.xls"
)


usethis::use_data(survey_answers, overwrite = TRUE)
checkhelper::use_data_doc("survey_answers")
attachment::att_amend_desc()
