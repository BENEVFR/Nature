#' create_palette_benev
#'
#' @param name_palette choice palette type
#' @importFrom grDevices colorRampPalette
#' @return list of palette colors
#' @export
create_palette_benev <- function(name_palette = "primaire") {

  palettes_benev <- list(
    primaire = c("#1C57BC", "#133C83", "#8DABDD"),
    secondaire = c("#62BD60", "#448443", "#B0DEAF"),
    tertiaire = c("#C12C6D", "#AD2762", "#ECBFD3"),
    success = c("#58AA56"),
    danger = c("#dc3545"),
    warning = c("#FFC000"),
    info = c("#1CBCBD"),
    blue= c("#e8eef8","#a4bbe4","#769ad6", "#4978c9","#1C57BC", "#194ea9","#133C83", "#0e2b5e","#081a38"),
    purle= c("#e2d9f3", "#c5b3e6", "#a98eda", "#8c68cd", "#6f42c1", "#59359a", "#432874", "#2c1a4d", "#160d27"),
    pink = c("#f7d6e6", "#efadce", "#e685b5", "#cd568a", "#C12C6D", "#ab296a", "#801f4f","#561435", "#2b0a1a" ),
    red = c("#f8d7da", "#f1aeb5", "#ea868f", "#e35d6a", "#dc3545","#b02a37", "#842029", "#58151c", "#2c0b0e" ),
    orange = c("#FFE5D0", "#fecba1", "#feb272", "#fd9843", "#fd7e14", "#ca6510","#984c0c", "#653208", "#331904" ),
    yellow = c("#fff3cd", "#ffe69c", "#ffda6a", "#ffcd39", "#ffc107", "#cc9a06", "#997404","#664d03", "#664d03" ),
    green = c("#dff1df","#c0e4bf", "#a0d79f", "#81ca7f", "#62BD60", "#4e974c","#3a7139", "#274b26", "#132513" ),
    cyan = c("#e8f8f8", "#baeaeb", "#8dddde", "#60d0d0","#1CBCBD", "#169697", "#107071", "#0b4b4b", "#052525" )
  )

  # Va chercher dans la liste de palettes la palette spécifiée dans le paramètre name_palette (par défaut, la palette "continuous")
  palette <- palettes_benev[[name_palette]]

  # Interpolation des couleurs de la palette
  colorRampPalette(palette)

}
