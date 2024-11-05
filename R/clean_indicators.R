clean_indicators <- function(data) {
  data |>
   mutate( AGE = factor( AGE, levels = c( "A1825", "A2634", "A3544", "A4555", "A5675", "A76" ),
    labels = c( "18-25 ans", "26-34 ans", "35-44 ans", "45-55 ans", "56-75 ans", "75 ans et plus" )),
    SEXE = factor(SEXE, levels = c("F", "M", "A"),
                  labels = c("Femme", "Homme", "Autre")),
    SITPRO = factor(SITPRO, levels = c("RETRT", "SSEMP","ETU","FOY","TPSPL","TPSPA","TVIND"),
                    labels= c("Retraité.e","Sans emploi","Etudiant.e","Au foyer","Travailleur.se temps plein", "Travailleur.se temps partiel","Travailleur.se indépendant.e")),
    NIVETUDE = factor(NIVETUDE, levels= c("SSSCO","ELEM","COLL", "LYCE","TECH", "LIC", "MADOC"  ),
                      labels = c("Sans scolarité","Ecole élémentaire","Collège", "Lycée","Formation technique", "Licence", "Master-Doctorat" )),
    REVENUFOYER = factor(REVENUFOYER, levels = c("REV1", "REV2", "REV3", "REV4", "REV5"),
                         labels= c("Moins de 17 999 €", "Entre 18 000 € et 25 999 €", "Entre 26 000 € et 35 999  €", "Entre 36 000 € et 50 999 €", "Plus de 51 000 €")),
    SITCIVILE = factor(SITCIVILE, levels = c("CELIB","DIVO","VEUF","SEPA","MARI"),
                       labels = c("Célibataire","Divorcé.e","Veuf.ve","Séparé.e","Marié.e")),
    TYPEHABITAT = factor(TYPEHABITAT, levels= c("APPAR", "APBAL", "MAISO","MAIJA"),
                         labels= c("Appartement sans jardin ni balcon", "Appartement avec balcon ou jardin", "Maison de ville","Maison individuelle avec jardin"))
    )
 }

