#' scales_fill_benev
#'
#' @param name_palette name among benev palette colors
#' @param n_colors number of used colors
#' @importFrom ggplot2 scale_fill_manual
#' @return aes colors
#' @export
scale_fill_benev <- function(name_palette = "green", n_colors = 4){
  scale_fill_manual(
    values = create_palette_benev(name_palette = name_palette)(n_colors)
  )
}

#' scales_color_benev
#'
#' @param name_palette name among benev palette colors
#' @param n_colors number of used colors
#' @importFrom ggplot2 scale_color_manual
#' @return aes colors
#' @export
scale_color_benev <- function(name_palette = "green", n_colors = 4){
  scale_color_manual(
    values = create_palette_benev(name_palette = name_palette)(n_colors)
  )
}

