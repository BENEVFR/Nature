#' clean_indicators
#'
#' @param data answers from survey
#'
#' @importFrom dplyr mutate
#'
#' @return a cleaned data
#' @export
clean_indicators <- function(data) {
  data |>
    mutate(
      AGE = factor(AGE,
        levels = c("A1825", "A2634", "A3544", "A4555", "A5675", "A76"),
        labels = c("18-25 ans", "26-34 ans", "35-44 ans", "45-55 ans", "56-75 ans", "75 ans et plus")
      ),
      SEXE = factor(SEXE,
        levels = c("F", "M", "A"),
        labels = c("Femme", "Homme", "Autre")
      ),
      SITPRO = factor(SITPRO,
        levels = c("RETRT", "SSEMP", "ETU", "FOY", "TPSPL", "TPSPA", "TVIND"),
        labels = c("Retrait\u00e9.e", "Sans emploi", "Etudiant.e", "Au foyer", "Travailleur.se temps plein", "Travailleur.se temps partiel", "Travailleur.se ind\u00e9pendant.e")
      ),
      NIVETUDE = factor(NIVETUDE,
        levels = c("SSSCO", "ELEM", "COLL", "LYCE", "TECH", "LIC", "MADOC"),
        labels = c("Sans scolarit\u00e9", "Ecole \u00e9l\u00e9mentaire", "Coll\u00e8ge", "Lyc\u00e9e", "Formation technique", "Licence", "Master-Doctorat")
      ),
      REVENUFOYER = factor(REVENUFOYER,
        levels = c("REV1", "REV2", "REV3", "REV4", "REV5"),
        labels = c("Moins de 17 999 \u20ac", "Entre 18 000 \u20ac et 25 999 \u20ac", "Entre 26 000 \u20ac et 35 999  \u20ac", "Entre 36 000 \u20ac et 50 999 \u20ac", "Plus de 51 000 \u20ac")
      ),
      SITCIVILE = factor(SITCIVILE,
        levels = c("CELIB", "DIVO", "VEUF", "SEPA", "MARI"),
        labels = c("C\u00e9libataire", "Divorc\u00e9.e", "Veuf.ve", "S\u00e9par\u00e9.e", "Mari\u00e9.e")
      ),
      TYPEHABITAT = factor(TYPEHABITAT,
        levels = c("APPAR", "APBAL", "MAISO", "MAIJA"),
        labels = c("Appartement sans jardin ni balcon", "Appartement avec balcon ou jardin", "Maison de ville", "Maison individuelle avec jardin")
      ),
      NBPERSFOYER = factor(NBPERSFOYER, levels = c("1", "2", "3", "4", "5 et plus")),
      NBENFANT = factor(NBENFANT, levels = c("0", "1", "2", "3", "4 et plus"))
    )
}


