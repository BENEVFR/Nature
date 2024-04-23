correspondances  <- readxl::read_excel(
  path = "data-raw/2997_reponses_codees_V2.xls",
  sheet = "2997_quotas_RepNat_2532pi"
)

list_de_correspondance <- correspondances[,1:2] |>
  setNames(
    c(
      "code",
      "valeur"
    )
  )  |>
  dplyr::mutate(
    valeur = dplyr::coalesce(valeur, code),
    cut = code == valeur,
    crit = cumsum(cut)
  ) |>
  dplyr::group_split(crit) |>
  purrr::map( ~  slice(.x,-1)) |>
  purrr::map( ~  .x[1:2]) |>
  setNames(
    c(
      "SEXE",
      "AGE",
      "CSP",
      "UDA5"
    )
  )

survey_crossref <- list_de_correspondance[c("SEXE","AGE","CSP","UDA5")]
usethis::use_data(survey_crossref, overwrite = TRUE)
checkhelper::use_data_doc("survey_crossref")
attachment::att_amend_desc()
