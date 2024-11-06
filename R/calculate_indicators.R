#' calculate_indicators
#'
#' @param data answers from survey
#'
#' @importFrom dplyr group_by ungroup mutate row_number rowwise select starts_with across
#'
#' @return a tibble
#' @export
calculate_indicators <- function(data) {


  result <- data |>
    mutate(
      identifiant_repondant = row_number()
    ) |>
    rowwise() |>
    mutate(
      critere_bien_etre_global = mean(
        c(BE3PS, BE4SP, BE10PH, BE15PH,
        BE17PH, BE18PS, BE19RS, BE20RS,
        BE26PSR, BE7ENV, BE8ENV, BE22ENV,
        BE1PH, BE2PH, BE14PH, BE28G, BE11ENV,
        BE12ENV, BE13ENV, BE9PH),
        na.rm = TRUE
      ),
      critere_bien_etre_psy = mean(
        c(BE3PS, BE4SP, BE10PH,
        BE15PH, BE17PH, BE18PS,
        BE19RS, BE20RS, BE26PSR),
        na.rm = TRUE
      ),
      critere_bien_etre_environnement = mean(
        c(BE7ENV, BE8ENV, BE22ENV),
        na.rm = TRUE
      ),
      critere_bien_etre_physique = mean(
        c(BE1PH, BE2PH, BE14PH, BE28G),
        na.rm = TRUE
      ),
      critere_bien_etre_ressources = mean(
        c(BE11ENV, BE12ENV, BE13ENV, BE9PH),
        na.rm = TRUE
      ),
      critere_type_nature_global = mean(
        c(CN1, CN2, CN11, CN15, CN5, CN6, CN7,
        CN8, CN14, CN16, CN18, CN19),
        na.rm = TRUE
      ),
      critere_activ_global = mean(
        c(ACT1, ACT2, ACT3, ACT4, ACT5, ACT8,
        ACT9, ACT6, ACT7),
        na.rm = TRUE
      ),
      critere_nature_nondomest = mean(
        c(CN1, CN2, CN11, CN15),
        na.rm = TRUE
      ),
      critere_nature_domestique = mean(
        c(CN5, CN6, CN7),
        na.rm = TRUE
      ),
      critere_nature_proximite = mean(
        c(CN8, CN14, CN16, CN18, CN19),
        na.rm = TRUE
      ),
      critere_exposition_nature_global = mean(
        c(EXP1, EXP2, EXP3, EXP4, EXP5),
        na.rm = TRUE
      ),
      critere_activ_social_calme = mean(
        c(ACT1, ACT2, ACT3, ACT4, ACT5, ACT8, ACT9),
        na.rm = TRUE
      ),
      critere_activ_sport = mean(
        c(ACT6, ACT7),
        na.rm = TRUE
      ),
      critere_caract_percues_global = mean(
        c(CP1, CP2, CP3, CP4, CP5, CP6, CP7, CP8, CP9, CP10),
        na.rm = TRUE
      ),
       critere_biodiv_global = mean(
         c(BIO1, BIO2, BIO3, BIO4, BIO5, BIO6, BIO7),
         na.rm = TRUE
       )
    ) |>
    ungroup()

  Sc_max_B_E <- 5 # max(result$critere_bien_etre_global)
  Sc_max_Nature <- 5 # max(result$critere_type_nature_global)

  result <- result |>
    rowwise() |>
    mutate(
      critere_ratio_bien_etre_nature = ((Sc_max_B_E - critere_bien_etre_global) * (Sc_max_Nature - critere_type_nature_global)) / 16,
      across(
        starts_with("critere"),
        ~ round(.x, digits = 3)
      )
    ) |>
    ungroup() |>
    select(
      identifiant_repondant,
      Localisation,
      AGE,
      SEXE,
      TYPEHABITAT,
      REVENUFOYER,
      SITPRO,
      NIVETUDE,
      SITCIVILE,
      NBPERSFOYER,
      NBENFANT,
      AUCUN,
      starts_with("critere")
    )

  return(result)
}
