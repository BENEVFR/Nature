#' calculate_indicators
#'
#' @param data answers from survey
#'
#' @importFrom dplyr group_by summarise
#'
#' @return a tibble
#' @export
calculate_indicators <- function(data) {
  res_data <- data |>
    group_by(`Identifiant Répondant`) |>
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
        # Aimez-vous votre vie ?
        # Estimez-vous que votre vie a du sens ?
        # Acceptez-vous votre apparence physique ?
        # Êtes-vous satisfait(e) de votre sommeil ?
        # Êtes-vous satisfait(e) de votre capacité à effectuer votre activité professionnelle ?
        # Êtes-vous satisfait(e) de vous ?
        # Êtes-vous satisfait(e) de vos relations avec les autres ?
        # Êtes-vous satisfait(e) de votre vie sexuelle ?
        # vez-vous des sentiments négatifs tels que la mélancolie, le désespoir, l'anxiété ou la dépression ?

      ),
      critere_habitat = mean(
        BE7ENV, BE8ENV, BE22ENV
        # Vivez-vous dans un environnement sain ?
        # Êtes-vous gêné par le bruit là où vous vivez ?
        # Êtes-vous satisfait(e) de votre lieu de vie ?
      ),
      critere_sante = mean(
        BE1PH, BE2PH, BE14PH, BE28G
        # La douleur physique vous empêche-t-elle de faire ce dont vous avez envie ?
        # Avez-vous besoin d'un traitement médical quotidiennement ?
        # Comment arrivez-vous à vous déplacer ?
        # Êtes-vous satisfait(e) de votre santé ?
      ),
      critere_vie_quotidienne = mean(
        BE11ENV, BE12ENV, BE13ENV, BE9PH
        # Avez-vous assez d'argent pour satisfaire vos besoins ?
        # Avez-vous accès aux informations nécessaires pour votre vie quotidienne ?
        # Avez-vous souvent l'occasion de pratiquer des loisirs ?
        # Avez-vous assez d'énergie dans votre vie quotidienne ?
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
