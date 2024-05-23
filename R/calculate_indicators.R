#' calculate_indicators
#'
#' @param data answers from survey
#'
#' @importFrom dplyr group_by summarise rename
#'
#' @return a tibble
#' @export
calculate_indicators <- function(data) {
  res_data <- data |>
    rename(
      identifiant_repondant = "Identifiant R\u00e9pondant"
    ) |>
    group_by(identifiant_repondant) |>
    summarise(
      critere_bien_etre_global = mean(
        BE3PS, BE4SP, BE10PH, BE15PH,
        BE17PH, BE18PS, BE19RS, BE20RS,
        BE26PSR, BE7ENV, BE8ENV, BE22ENV,
        BE1PH, BE2PH, BE14PH, BE28G, BE11ENV,
        BE12ENV, BE13ENV, BE9PH
      ),
      critere_bien_etre_psy = mean(
        BE3PS, BE4SP, BE10PH,
        BE15PH, BE17PH, BE18PS,
        BE19RS, BE20RS, BE26PSR
      ),
      critere_bien_etre_environnement = mean(
        BE7ENV, BE8ENV, BE22ENV
      ),
      critere_bien_etre_physique = mean(
        BE1PH, BE2PH, BE14PH, BE28G
      ),
      critere_bien_etre_ressources = mean(
        BE11ENV, BE12ENV, BE13ENV, BE9PH
      ),
      critere_type_nature_global = mean(
        CN1, CN2, CN11, CN15, CN5, CN6, CN7,
        CN8, CN14, CN16, CN18, CN19
      ),
      critere_activ_global = mean(
        ACT1, ACT2, ACT3, ACT4, ACT5, ACT8,
        ACT9, ACT6, ACT7
      ),
      critere_nature_nondomest = mean(
        CN1, CN2, CN11, CN15
      ),
      critere_nature_domestique = mean(
        CN5, CN6, CN7
      ),
      critere_nature_proximite = mean(
        CN8, CN14, CN16, CN18, CN19
      ),
      critere_exposition_nature_global = mean(
        EXP1, EXP2, EXP3, EXP4, EXP5
      ),
      critere_activ_social_calme = mean(
        ACT1, ACT2, ACT3, ACT4, ACT5, ACT8, ACT9
      ),
      critere_activ_sport = mean(
        ACT6, ACT7
      ),
      critere_caract_percues_global = mean(
        CP1, CP2, CP3, CP4, CP5, CP6, CP7, CP8, CP9, CP10
      )#,
      # critere_biodiv_global = mean(
      #   BIO1, BIO2, BIO3, BIO4, BIO5, BIO6, BIO7
      # )
    )
  return(res_data)
}
