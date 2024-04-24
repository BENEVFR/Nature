survey_questions <- readxl::read_excel(
  path = "data-raw/Tableau correspondence.xlsx"
) |>
  setNames(
    c(
      "code",
      "question"
    )
  ) |>
  tidyr::drop_na(question)

usethis::use_data(survey_questions, overwrite = TRUE)
checkhelper::use_data_doc("survey_questions")
attachment::att_amend_desc()
