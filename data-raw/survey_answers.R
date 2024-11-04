

survey_answers <- readxl::read_excel(
  path = "data-raw/updated_survey_with_4000_rows.xlsx"
)


usethis::use_data(survey_answers, overwrite = TRUE)
checkhelper::use_data_doc("survey_answers")
attachment::att_amend_desc()
