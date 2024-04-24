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
      identifiant_repondant = 'Identifiant R\u00e9pondant'
    ) |>
    group_by(identifiant_repondant) |>
    summarise(
      critere_bien_etre = mean(
        BE3PS, BE4SP, BE10PH, BE15PH,
        BE17PH, BE18PS, BE19RS, BE20RS,
        BE26PSR, BE7ENV, BE8ENV, BE22ENV,
        BE1PH, BE2PH, BE14PH, BE28G, BE11ENV,
        BE12ENV, BE13ENV, BE9PH
      ),
      critere_satisfaction = mean(
        BE3PS, BE4SP, BE10PH,
        BE15PH, BE17PH, BE18PS,
        BE19RS, BE20RS, BE26PSR
      ),
      critere_habitat = mean(
        BE7ENV, BE8ENV, BE22ENV
      ),
      critere_sante = mean(
        BE1PH, BE2PH, BE14PH, BE28G
      ),
      critere_vie_quotidienne = mean(
        BE11ENV, BE12ENV, BE13ENV, BE9PH
      ),
      critere_campagne = mean(
        CN1, CN2, CN4, CN11, CN12, CN15, CN17
      ),
      critere_ville = mean(
        CN3, CN5, CN6, CN7, CN9, CN10, CN13
      ),
      critere_jardin = mean(
        CN14, CN8
      ),
      critere_exterieur = mean(
        EXP1, EXP2, EXP3, EXP5
      ),
      critere_interieur = mean(
        EXP4, EXP6
      ),
      critere_active = mean(
        ACT1, ACT2, ACT3
      ),
      critere_passive = mean(
        ACT4, ACT5, ACT6
      )
    )

  return(res_data)
}
